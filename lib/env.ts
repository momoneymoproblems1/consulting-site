import { z } from "zod";

const envSchema = z.object({
  RESEND_API_KEY: z.string().min(1).optional(),
  RESEND_AUDIENCE_ID: z.string().min(1).optional(),
  CONTACT_TO_EMAIL: z.string().email().optional(),
  NEXT_PUBLIC_CAL_USERNAME: z.string().optional(),
});

export const env = envSchema.parse({
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  RESEND_AUDIENCE_ID: process.env.RESEND_AUDIENCE_ID,
  CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL,
  NEXT_PUBLIC_CAL_USERNAME: process.env.NEXT_PUBLIC_CAL_USERNAME,
});

export type Env = typeof env;
