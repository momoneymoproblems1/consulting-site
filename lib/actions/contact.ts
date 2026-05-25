"use server";

import { z } from "zod";
import { Resend } from "resend";
import { env } from "@/lib/env";

const schema = z.object({
  name: z
    .string()
    .min(1, "Name is required.")
    .max(120)
    .regex(/^[^\r\n]+$/, "Name contains invalid characters."),
  email: z.string().email("Please enter a valid email."),
  message: z
    .string()
    .min(10, "A sentence or two helps me reply better.")
    .max(5000),
  hp: z.string().max(0, "Spam check failed."),
});

export type ContactState =
  | { status: "idle" }
  | { status: "ok" }
  | { status: "error"; message: string };

const DEFAULT_TO = "drewgood27@gmail.com";
const DEFAULT_FROM = "Andrew Gooding <onboarding@resend.dev>";

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const parsed = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    hp: formData.get("hp") ?? "",
  });
  if (!parsed.success) {
    const first = parsed.error.issues[0]?.message ?? "Invalid submission.";
    return { status: "error", message: first };
  }

  if (!env.RESEND_API_KEY) {
    return {
      status: "error",
      message: "Contact service is not configured yet.",
    };
  }

  const { name, email, message } = parsed.data;
  const to = env.CONTACT_TO_EMAIL ?? DEFAULT_TO;

  try {
    const resend = new Resend(env.RESEND_API_KEY);
    const result = await resend.emails.send({
      from: DEFAULT_FROM,
      to,
      replyTo: email,
      subject: `New contact form message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
    if (result.error) {
      return {
        status: "error",
        message: "Could not send. Please try again or email directly.",
      };
    }
    return { status: "ok" };
  } catch {
    return {
      status: "error",
      message: "Could not send. Please try again or email directly.",
    };
  }
}
