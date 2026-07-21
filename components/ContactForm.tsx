"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { inquirySchema, type InquiryFormData, gradeLevels, subjects } from "@/lib/schema";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
  });

  const onSubmit = async (data: InquiryFormData) => {
    setStatus("submitting");
    setServerError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (result.success) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
        setServerError(result.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setServerError("Network error. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-8 text-center">
        <h3 className="text-xl font-semibold text-emerald-800">Thank you for reaching out!</h3>
        <p className="mt-2 text-emerald-700">I've received your message and will get back to you within 24 hours.</p>
        <button onClick={() => setStatus("idle")} className="mt-4 text-sm font-medium text-emerald-800 underline underline-offset-2">
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div style={{ position: "absolute", left: "-9999px", top: "-9999px" }} aria-hidden="true">
        <label htmlFor="hp_field">Leave this field empty</label>
       
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Parent / Guardian Name" error={errors.parentName?.message}>
          <input {...register("parentName")} type="text" placeholder="Jane Smith" className={inputClass(!!errors.parentName)} />
        </Field>

        <Field label="Phone Number" error={errors.phone?.message}>
          <input {...register("phone")} type="tel" placeholder="+91 98765 43210" className={inputClass(!!errors.phone)} />
        </Field>
      </div>

      <Field label="Email Address" error={errors.email?.message}>
        <input {...register("email")} type="email" placeholder="jane@example.com" className={inputClass(!!errors.email)} />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Child's Grade Level" error={errors.gradeLevel?.message}>
          <select {...register("gradeLevel")} className={inputClass(!!errors.gradeLevel)} defaultValue="">
            <option value="" disabled>Select grade level</option>
            {gradeLevels.map((g) => <option key={g} value={g}>{g}</option>)}
          </select>
        </Field>

        <Field label="Subject Needed" error={errors.subject?.message}>
          <select {...register("subject")} className={inputClass(!!errors.subject)} defaultValue="">
            <option value="" disabled>Select subject</option>
            {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </Field>
      </div>

      <Field label="Tell me about your child's needs" error={errors.message?.message}>
        <textarea {...register("message")} rows={4} placeholder="E.g. struggling with algebra, needs exam prep..." className={inputClass(!!errors.message)} />
      </Field>

      {serverError && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">{serverError}</p>
      )}

      <button type="submit" disabled={status === "submitting"} className="w-full rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:opacity-60 disabled:cursor-not-allowed">
        {status === "submitting" ? "Sending..." : "Send Inquiry"}
      </button>

      <p className="text-xs text-center text-gray-500">Your information is kept private and used only to respond to your inquiry.</p>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-gray-700">{label}</label>
      {children}
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-lg border px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent ${hasError ? "border-red-400" : "border-gray-300"}`;
}