import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section id="testimonials">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <div className="eyebrow">What clients say</div>
            <h2 className="serif" style={{ marginTop: 16 }}>
              Words from the people who hired me.
            </h2>
          </div>
          <p className="lede">
            Cards below are reserved for real client quotes. Replace before
            launch.
          </p>
        </Reveal>

        <Reveal delay={100} className="testimonials">
          <div className="testimonial placeholder">
            <span className="qmark">&ldquo;</span>
            <blockquote>
              [ Awaiting attributed quote from Enervest. Drop a 1 to 3 sentence
              quote here describing the impact of the 3 day engagement. ]
            </blockquote>
            <div className="attr">
              <div className="attr-name">Enervest</div>
              <div className="attr-role">30 person energy company, Australia</div>
            </div>
          </div>

          <div className="testimonial placeholder">
            <span className="qmark">&ldquo;</span>
            <blockquote>
              [ Open slot for a second client quote. Short and specific is best,
              ideally with a measurable outcome. ]
            </blockquote>
            <div className="attr">
              <div className="attr-name">[ Client name ]</div>
              <div className="attr-role">[ Role, company ]</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
