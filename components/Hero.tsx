"use client";

import posthog from "posthog-js";
import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";

const TICKER_WORDS = [
  "Claude",
  "ChatGPT",
  "Custom GPTs",
  "Multi agent orchestration",
  "Ops automation",
  "Token economics",
  "SharePoint integration",
  "Team training",
  "Prompt engineering",
  "Master prompter",
];

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <Reveal>
            <div className="status">
              <span className="dot" />
              Currently booking, Seattle &middot; PST
            </div>
            <h1>
              Practical AI
              <br />
              for the businesses
              <br />
              that <em>actually run</em>
              <br />
              the world.
            </h1>
            <p className="lede">
              I help small businesses use AI without rebuilding their stack.
              Strategy workshops, custom GPTs, ops automation, and training that
              sticks. One call gets you concrete next steps.
            </p>
            <div className="hero-cta">
              <a
                href="#book"
                className="btn btn-accent"
                onClick={() =>
                  posthog.capture("hero_cta_clicked", { cta: "book" })
                }
              >
                Book a $500 consultation <span className="arrow">&rarr;</span>
              </a>
              <a
                href="#work"
                className="btn btn-ghost"
                onClick={() =>
                  posthog.capture("hero_cta_clicked", { cta: "see_work" })
                }
              >
                See recent work
              </a>
            </div>
          </Reveal>

          <Reveal delay={200} className="hero-aside">
            <div className="hero-card">
              <div className="label">Recent engagement</div>
              <div className="num serif">
                3<em>d</em>
              </div>
              <div className="desc">
                Onsite with a 30 person energy company in Australia. Trained the
                whole team, shipped 10 system prompts and a master prompter.
              </div>
            </div>
            <div className="hero-card">
              <div className="label">First time fee</div>
              <div className="num serif">
                $<CountUp to={500} />
              </div>
              <div className="desc">
                Flat, one time, 30 minute working session. Longer engagements
                available after.
              </div>
            </div>
          </Reveal>
        </div>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[...TICKER_WORDS, ...TICKER_WORDS].map((w, i) => (
              <span key={i}>{w}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
