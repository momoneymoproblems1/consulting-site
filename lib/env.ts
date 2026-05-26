import { z } from "zod";

// Cal handle only, not a URL or path. Caught a real paste-failure where the env
// var was set to "AndrewGooding/30-minutes" (full URL) — see Consulting/HANDOFF.md.
const calUsername = z
  .string()
  .regex(
    /^[a-zA-Z0-9_-]+$/,
    'NEXT_PUBLIC_CAL_USERNAME must be just the Cal handle (e.g. "andrewgooding"), not a URL or path',
  )
  .optional();

const envSchema = z.object({
  RESEND_API_KEY: z.string().min(1).optional(),
  RESEND_AUDIENCE_ID: z.string().min(1).optional(),
  CONTACT_TO_EMAIL: z.string().email().optional(),
  NEXT_PUBLIC_CAL_USERNAME: calUsername,
  NEXT_PUBLIC_POSTHOG_KEY: z
    .string()
    .regex(/^phc_/, 'NEXT_PUBLIC_POSTHOG_KEY must start with "phc_"')
    .optional(),
  NEXT_PUBLIC_POSTHOG_HOST: z.string().url().optional(),
});

export const env = envSchema.parse({
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  RESEND_AUDIENCE_ID: process.env.RESEND_AUDIENCE_ID,
  CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL,
  NEXT_PUBLIC_CAL_USERNAME: process.env.NEXT_PUBLIC_CAL_USERNAME,
  NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
  NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
});

export type Env = typeof env;
