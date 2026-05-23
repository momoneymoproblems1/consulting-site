import { Reveal } from "./Reveal";
import { SERVICES } from "@/lib/services";

export function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <div className="eyebrow">What I do</div>
            <h2 className="serif" style={{ marginTop: 16 }}>
              Six ways to use the next hour of AI well.
            </h2>
          </div>
          <p className="lede">
            Most engagements blend two or three of these. The first call is
            where we figure out which.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="services-grid">
            {SERVICES.map((s) => (
              <div key={s.n} className="service">
                <div className="service-num">{s.n}</div>
                <h3 className="serif">{s.title}</h3>
                <p>{s.desc}</p>
                <span className="service-line" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
