import { Reveal } from "./Reveal";
import { ENERVEST } from "@/lib/case-studies";

export function CaseStudy() {
  const cs = ENERVEST;
  return (
    <section id="work">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <div className="eyebrow">Recent engagement</div>
            <h2 className="serif" style={{ marginTop: 16 }}>
              Enervest, onsite for three days.
            </h2>
          </div>
          <p className="lede">{cs.lede}</p>
        </Reveal>

        <Reveal delay={120}>
          <div className="case">
            <div className="case-left">
              <div className="client-mark">{cs.clientMark}</div>
              <h3 className="serif">
                {cs.heading} <em>{cs.emPart}</em>
                {cs.headingSuffix}
              </h3>
              <p className="where">{cs.where}</p>

              <div className="case-stats">
                {cs.stats.map((s, i) => (
                  <div key={i}>
                    <div className="stat serif">
                      {s.value}
                      {s.emPart && <em>{s.emPart}</em>}
                    </div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="case-right">
              <h4>What I delivered</h4>
              <ul className="deliverables">
                {cs.deliverables.map((d) => (
                  <li key={d.n}>
                    <span className="num">{d.n}</span>
                    <span>{d.text}</span>
                  </li>
                ))}
              </ul>
              <h4>Outcome</h4>
              <p>{cs.outcome}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
