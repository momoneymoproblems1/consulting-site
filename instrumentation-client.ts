import posthog from "posthog-js";
import { env } from "@/lib/env";

if (env.NEXT_PUBLIC_POSTHOG_KEY && env.NEXT_PUBLIC_POSTHOG_HOST) {
  posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: env.NEXT_PUBLIC_POSTHOG_HOST,
    persistence: "memory",
    capture_pageview: false,
    capture_pageleave: false,
    defaults: "2026-01-30",
  });
}
