"use client";

import { Reveal } from "./Reveal";
import { OngoingPartnership } from "./OngoingPartnership";
import { TIERS, type TierId } from "@/lib/tiers";

function pickTier(id: TierId) {
  window.dispatchEvent(new CustomEvent("book-tier", { detail: id }));
}

export function Pricing() {
  return (
    <section id="pricing">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <div className="eyebrow">Pricing</div>
            <h2 className="serif" style={{ marginTop: 16 }}>
              One time sessions that lead to ongoing partnership.
            </h2>
          </div>
          <p className="lede">
            Pick the depth of the first conversation. Most clients move into a
            monthly partnership after the first session. We talk about that on
            the call, no pressure to commit.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="pricing-grid">
            {TIERS.map((t) => (
              <div
                key={t.id}
                className="tier"
                data-featured={t.featured ? "1" : "0"}
              >
                <div className="duration">{t.duration}</div>
                <div className="price">
                  {t.label}
                  <small>flat, one time</small>
                </div>
                <ul>
                  {t.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="tier-cta"
                  onClick={() => pickTier(t.id)}
                >
                  <span>Book this</span>
                  <span className="arrow">&rarr;</span>
                </button>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <OngoingPartnership />
        </Reveal>
      </div>
    </section>
  );
}
