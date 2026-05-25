"use server";

import { z } from "zod";
import { Resend } from "resend";
import { env } from "@/lib/env";

const schema = z.object({
  email: z.string().email("Please enter a valid email."),
  hp: z.string().max(0, "Spam check failed."),
});

export type SubscribeState =
  | { status: "idle" }
  | { status: "ok" }
  | { status: "error"; message: string };

export async function subscribeNewsletter(
  _prev: SubscribeState,
  formData: FormData,
): Promise<SubscribeState> {
  const parsed = schema.safeParse({
    email: formData.get("email"),
    hp: formData.get("hp") ?? "",
  });
  if (!parsed.success) {
    const first = parsed.error.issues[0]?.message ?? "Invalid submission.";
    return { status: "error", message: first };
  }

  if (!env.RESEND_API_KEY || !env.RESEND_AUDIENCE_ID) {
    return {
      status: "error",
      message: "Subscription service is not configured yet.",
    };
  }

  try {
    const resend = new Resend(env.RESEND_API_KEY);
    const result = await resend.contacts.create({
      audienceId: env.RESEND_AUDIENCE_ID,
      email: parsed.data.email,
      unsubscribed: false,
    });
    if (result.error) {
      return {
        status: "error",
        message: "Could not subscribe. Please try again.",
      };
    }
    return { status: "ok" };
  } catch {
    return {
      status: "error",
      message: "Could not subscribe. Please try again.",
    };
  }
}
