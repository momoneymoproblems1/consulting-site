import posthog from "posthog-js";

// Module-level PostHog init. Imported for side effect by Booking.tsx, which
// React MUST hydrate (it has state, useEffect, and the Cal iframe wrapper
// in the DOM). Routing init through Booking's guaranteed-hydrated chunk
// avoids the bug where PostHogProvider's pass-through wrapper was skipped
// by React's selective hydration — since nothing in our tree called
// usePostHog(), React never bothered to instantiate that provider, so its
// module factory never ran and init never fired.
if (typeof window !== "undefined") {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;
  if (key && host && !posthog.__loaded) {
    posthog.init(key, {
      api_host: host,
      persistence: "memory",
      capture_pageview: true,
      capture_pageleave: false,
      defaults: "2026-01-30",
    });
  }
}
