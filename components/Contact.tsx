"use client";

import { useActionState } from "react";
import { Reveal } from "./Reveal";
import { SITE } from "@/lib/site";
import {
  initialContactState,
  submitContact,
  type ContactState,
} from "@/lib/actions/contact";

export function Contact() {
  const [state, formAction, isPending] = useActionState<ContactState, FormData>(
    submitContact,
    initialContactState,
  );

  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact-grid">
          <Reveal className="contact-info">
            <div className="eyebrow">Contact</div>
            <h2 className="serif" style={{ marginTop: 16 }}>
              Not ready to book? Send a note.
            </h2>
            <p className="lede" style={{ marginTop: 18 }}>
              For quick questions, partnership ideas, or longer engagement
              conversations. I read every message myself and reply within two
              business days.
            </p>
            <ul>
              <li>
                <span className="k">Email</span>
                <span className="v">
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </span>
              </li>
              <li>
                <span className="k">Based in</span>
                <span className="v">{SITE.location}</span>
              </li>
              <li>
                <span className="k">Available</span>
                <span className="v">{SITE.availability}</span>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <form className="contact-form" action={formAction}>
              <input
                type="text"
                name="hp"
                tabIndex={-1}
                autoComplete="off"
                className="honeypot"
                aria-hidden="true"
              />
              <div className="form-row">
                <label htmlFor="c-name">Your name</label>
                <input
                  id="c-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Jane Doe"
                  disabled={isPending || state.status === "ok"}
                />
              </div>
              <div className="form-row">
                <label htmlFor="c-email">Email</label>
                <input
                  id="c-email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@yourcompany.com"
                  disabled={isPending || state.status === "ok"}
                />
              </div>
              <div className="form-row">
                <label htmlFor="c-msg">What are you hoping to solve?</label>
                <textarea
                  id="c-msg"
                  name="message"
                  required
                  placeholder="A sentence or two is enough. I'll follow up with the right questions."
                  disabled={isPending || state.status === "ok"}
                />
              </div>
              <div className="form-actions">
                <button
                  type="submit"
                  className="btn btn-accent"
                  disabled={isPending || state.status === "ok"}
                >
                  {isPending ? "Sending" : "Send"}{" "}
                  <span className="arrow">&rarr;</span>
                </button>
              </div>
              {state.status === "ok" && (
                <div className="sent" role="status">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 12.5l5 5L20 6.5" />
                  </svg>
                  <span>Got it. I&apos;ll reply within 2 business days.</span>
                </div>
              )}
              {state.status === "error" && (
                <div className="error" role="alert">
                  {state.message}
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
