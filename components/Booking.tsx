"use client";

import { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Reveal } from "./Reveal";
import { INTAKE_QUESTIONS } from "@/lib/intake";
import { TIERS, tierById, type TierId } from "@/lib/tiers";

const CAL_USERNAME = process.env.NEXT_PUBLIC_CAL_USERNAME ?? "andrewgooding";

const CAL_SLUG_BY_TIER: Record<TierId, string> = {
  "30": "30-min",
  "60": "60-min",
  "120": "120-min",
  day: "full-day",
};

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12.5l5 5L20 6.5" />
    </svg>
  );
}

export function Booking() {
  const [tierId, setTierId] = useState<TierId>("30");
  const tier = tierById(tierId);
  const calLink = `${CAL_USERNAME}/${CAL_SLUG_BY_TIER[tierId]}`;

  useEffect(() => {
    const onPick = (e: Event) => {
      const detail = (e as CustomEvent<TierId>).detail;
      if (TIERS.some((t) => t.id === detail)) {
        setTierId(detail);
        setTimeout(() => {
          document
            .getElementById("book")
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    };
    window.addEventListener("book-tier", onPick);
    return () => window.removeEventListener("book-tier", onPick);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const timer = setTimeout(async () => {
      if (cancelled) return;
      const cal = await getCalApi();
      if (cancelled) return;
      const dark = {
        "cal-bg": "#141416",
        "cal-bg-emphasis": "#0c0c0d",
        "cal-text-emphasis": "#f1ede1",
        "cal-text": "#f1ede1",
        "cal-text-muted": "rgba(241,237,225,0.5)",
        "cal-brand": "#7ad7ff",
      };
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: { dark, light: dark },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    }, 500);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  return (
    <section id="book">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <div className="eyebrow">Booking</div>
            <h2 className="serif" style={{ marginTop: 16 }}>
              Reserve a working session.
            </h2>
          </div>
          <p className="lede">
            Pick a session length, then a time. You will get a calendar invite
            and the intake form within five minutes of booking.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="booking">
            <div className="book-side">
              <div className="status">
                <span className="dot" />
                Currently booking, next 6 weeks
              </div>
              <h3 className="serif" style={{ marginTop: 18 }}>
                Every session ends with concrete steps.
              </h3>

              <p
                className="mono"
                style={{
                  marginTop: 16,
                  fontSize: 11,
                  color: "var(--muted)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Selected: {tier.label} / {tier.duration}
              </p>

              <ul className="perks">
                <li>
                  <CheckIcon />
                  <span>Video call via Google Meet or Zoom, your pick.</span>
                </li>
                <li>
                  <CheckIcon />
                  <span>Recording and written summary delivered same day.</span>
                </li>
                <li>
                  <CheckIcon />
                  <span>
                    Reschedule free up to 24 hours before the session.
                  </span>
                </li>
                <li>
                  <CheckIcon />
                  <span>
                    Full refund if you finish the call unsatisfied. No questions
                    asked.
                  </span>
                </li>
              </ul>

              <div className="intake-preview">
                <div className="eyebrow">Before your session</div>
                <h4 className="serif">
                  Five questions I will ask when you book.
                </h4>
                <ol>
                  {INTAKE_QUESTIONS.map((q) => (
                    <li key={q.n}>{q.label}</li>
                  ))}
                </ol>
                <p className="intake-note">
                  Three minutes to fill out. It means we skip the small talk and
                  get straight to your business on the call.
                </p>
              </div>
            </div>

            <div className="book-card">
              <div className="cal-embed" key={calLink}>
                <Cal
                  calLink={calLink}
                  style={{
                    width: "100%",
                    height: "100%",
                    minHeight: "580px",
                    overflow: "hidden",
                  }}
                  config={{ layout: "month_view", theme: "dark" }}
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
