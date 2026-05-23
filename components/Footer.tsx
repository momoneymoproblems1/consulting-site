import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="eyebrow">{SITE.name}</div>
            <div className="serif">
              AI integrations for <em>small businesses</em>.
            </div>
          </div>
          <div>
            <h5>Site</h5>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#work">Case study</a>
            <a href="#pricing">Pricing</a>
          </div>
          <div>
            <h5>Book</h5>
            <a href="#book">$500 / 30 min</a>
            <a href="#book">$1,500 / 60 min</a>
            <a href="#book">$3,000 / 120 min</a>
            <a href="#book">$5,000 / full day</a>
          </div>
          <div>
            <h5>Reach me</h5>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <a href="#contact">Contact form</a>
            <a
              href={SITE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="foot-wordmark" aria-hidden="true">
        Gooding
      </div>
      <div className="foot-bottom">
        <span>
          © {new Date().getFullYear()} {SITE.name}. {SITE.location}.
        </span>
        <span>v0.1 / Built with Claude</span>
      </div>
    </footer>
  );
}
