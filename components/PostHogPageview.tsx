"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import posthog from "posthog-js";

export function PostHogPageview() {
  const pathname = usePathname();
  const fired = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname || fired.current === pathname) return;
    fired.current = pathname;
    const url =
      window.location.origin + pathname + (window.location.search ?? "");
    posthog.capture("$pageview", { $current_url: url });
  }, [pathname]);

  return null;
}
