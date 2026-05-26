"use client";

import { useActionState, useEffect, useRef } from "react";
import posthog from "posthog-js";
import { Reveal } from "./Reveal";
import {
  subscribeNewsletter,
  type SubscribeState,
} from "@/lib/actions/subscribe";

const initialSubscribeState: SubscribeState = { status: "idle" };

export function Newsletter() {
  const [state, formAction, isPending] = useActionState<
    SubscribeState,
    FormData
  >(subscribeNewsletter, initialSubscribeState);
  const subscribed = useRef(false);

  useEffect(() => {
    if (state.status === "ok" && !subscribed.current) {
      subscribed.current = true;
      posthog.capture("newsletter_subscribed");
    }
  }, [state.status]);

  return (
    <section id="newsletter">
      <div className="wrap">
        <Reveal className="newsletter">
          <div className="eyebrow">Newsletter</div>
          <h2 className="serif">New tools, new tactics, no spam.</h2>
          <p className="lede">
            Short updates when I add new agents, skills, or workflows to my
            consulting toolkit. Roughly monthly. Unsubscribe anytime.
          </p>

          {state.status === "ok" ? (
            <p className="nl-sent">On the list. I&apos;ll keep it short.</p>
          ) : (
            <form action={formAction}>
              <input
                type="text"
                name="hp"
                tabIndex={-1}
                autoComplete="off"
                className="honeypot"
                aria-hidden="true"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="you@yourcompany.com"
                aria-label="Email address"
                disabled={isPending}
              />
              <button
                type="submit"
                className="btn btn-accent"
                disabled={isPending}
              >
                {isPending ? "Subscribing" : "Subscribe"}{" "}
                <span className="arrow">&rarr;</span>
              </button>
            </form>
          )}

          {state.status === "error" && (
            <p
              className="nl-sent"
              style={{ color: "rgba(220,90,70,.9)" }}
              role="alert"
            >
              {state.message}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
