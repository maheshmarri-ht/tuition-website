import { z } from "zod";

export const inquirySchema = z.object({
  parentName: z.string().min(2, "Please enter your full name").max(100),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(15)
    .regex(/^[\d\s+()-]+$/, "Phone number contains invalid characters"),
  gradeLevel: z.string().min(1, "Please select a grade level"),
  subject: z.string().min(1, "Please select a subject"),
  message: z
    .string()
    .min(10, "Please tell us a little about your needs")
    .max(1000),
  website: z.string().max(0, "Spam detected").optional(),
});

export type InquiryFormData = z.infer<typeof inquirySchema>;

export const gradeLevels = [
  "Elementary (K-5)",
  "Middle School (6-8)",
  "High School (9-10)",
  "High School (11-12)",
] as const;

export const subjects = [
  "Mathematics",
  "Science",
  "Social Studies",
  "English",
  "Telugu",
  "Hindi",
  "IIT Foundation",
] as const;