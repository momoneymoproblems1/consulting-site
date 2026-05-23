import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="about-grid">
          <Reveal>
            <div className="headshot">
              <div className="headshot-tag">[ replace with headshot ]</div>
            </div>
          </Reveal>
          <Reveal delay={120} className="about-copy">
            <div className="eyebrow">About</div>
            <h2 className="serif">
              Practical AI, built around how your team already works.
            </h2>
            <p>
              I&apos;m Andrew Gooding. I help small businesses get real value out
              of AI without rebuilding their stack or hiring a team of engineers.
            </p>
            <p>
              Four years working with AI systems, with a computer science
              background and a stack of projects spanning custom GPTs,
              multi-agent workflows, and ops automation. I focus on what is
              actually useful for your business this quarter, not next year.
            </p>
            <ul className="about-bullets">
              <li>4+ years building with AI systems</li>
              <li>Multi-agent orchestration and frameworks</li>
              <li>Background in computer science</li>
              <li>Based in Seattle, working across timezones</li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
