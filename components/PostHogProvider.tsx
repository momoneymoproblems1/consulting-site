"use client";

import posthog from "posthog-js";
import { PostHogProvider as Provider } from "posthog-js/react";

// Init at module-evaluation time, not in useEffect. Commit 243eb41 moved init
// into useEffect to fix instrumentation-client.ts never executing. But that
// path itself races with hydration: PostHogProvider's chunk loads async, and
// if React commits before this module's factory function gets imported, that
// boundary stays SSR-static and the effect never fires. Production probe
// confirmed: chunk evaluated (posthog-js's own __PosthogExtensions__ and
// friends landed on window during module eval), but window.posthog stayed
// undefined and zero POSTs went to the ingestion host. Module-level side
// effects sidestep React entirely — they run during import, which we know
// works because posthog-js's own module-level setup already does.
if (typeof window !== "undefined") {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;
  if (key && host && !posthog.__loaded) {
    posthog.init(key, {
      api_host: host,
      persistence: "memory",
      capture_pageview: false,
      capture_pageleave: false,
      defaults: "2026-01-30",
    });
  }
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  return <Provider client={posthog}>{children}</Provider>;
}
