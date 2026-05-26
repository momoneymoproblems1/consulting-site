"use client";

import { useEffect } from "react";
import posthog from "posthog-js";
import { PostHogProvider as Provider } from "posthog-js/react";

let initialized = false;

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (initialized) return;
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;
    if (!key || !host) return;
    posthog.init(key, {
      api_host: host,
      persistence: "memory",
      capture_pageview: false,
      capture_pageleave: false,
      defaults: "2026-01-30",
    });
    initialized = true;
  }, []);

  return <Provider client={posthog}>{children}</Provider>;
}
