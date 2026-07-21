import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { inquirySchema } from "@/lib/schema";
import { checkRateLimit } from "@/lib/rateLimit";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("STEP 1 - RECEIVED BODY:", body);

    const parsed = inquirySchema.safeParse(body);
    console.log("STEP 2 - VALIDATION SUCCESS:", parsed.success);

    if (!parsed.success) {
      console.log("STEP 2b - VALIDATION ERRORS:", parsed.error.issues);
      return NextResponse.json(
        { success: false, error: "Please check the form for errors." },
        { status: 400 }
      );
    }

    const data = parsed.data;
    console.log("STEP 3 - HONEYPOT VALUE:", JSON.stringify(data.website));

    if (data.website) {
      console.log("STEP 3b - HONEYPOT TRIGGERED, SKIPPING EMAIL");
      return NextResponse.json({ success: true });
    }

    const ip = req.headers.get("x-forwarded-for") ?? "unknown";
    const allowed = checkRateLimit(ip);
    console.log("STEP 4 - RATE LIMIT ALLOWED:", allowed);

    if (!allowed) {
      return NextResponse.json(
        { success: false, error: "Too many submissions. Please try again in a few minutes." },
        { status: 429 }
      );
    }

    console.log("STEP 5 - ATTEMPTING TO SEND EMAIL VIA RESEND");
    console.log("STEP 5b - API KEY EXISTS:", !!process.env.RESEND_API_KEY);
    console.log("STEP 5c - NOTIFICATION EMAIL:", process.env.NOTIFICATION_EMAIL);

    const emailResult = await resend.emails.send({
      from: "Mahesh Tutoring <onboarding@resend.dev>",
      to: process.env.NOTIFICATION_EMAIL!,
      replyTo: data.email,
      subject: `New Inquiry: ${data.parentName} (${data.gradeLevel})`,
      html: `
        <h2>New Tutoring Inquiry</h2>
        <p><strong>Parent Name:</strong> ${data.parentName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Grade Level:</strong> ${data.gradeLevel}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    });

    console.log("STEP 6 - RESEND RESPONSE:", JSON.stringify(emailResult));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("STEP ERROR - Inquiry submission failed:", err);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}