import { CtaBand, InfoCard, PageHero, SectionHead } from '../components/Bits';
import { COMPLIANCE, INDUSTRY_DETAIL } from '../data/site';

export default function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        titleWidth="18ch"
        title={
          <>
            Sector context is <span className="it">half the delivery</span>.
          </>
        }
        lead="The same automation is a two-week build in one industry and a two-month build in another, because of what has to be logged, approved and proven. Here is what we already know about the sectors we serve."
      />

      <section className="sec--tight">
        <div className="wrap grid g2">
          {INDUSTRY_DETAIL.map((c, i) => (
            <InfoCard card={c} delay={i} key={c.title} />
          ))}
        </div>
      </section>

      <section className="sec mist">
        <div className="wrap">
          <SectionHead
            eyebrow="Compliance posture"
            title="How we handle your data and access"
            lead="Security questions come up in the first call, so here are the answers up front."
          />
          <div className="grid g3">
            {COMPLIANCE.map((c, i) => (
              <InfoCard card={c} delay={i} key={c.title} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Working in a sector not listed here?"
        body="Tell us the process and the systems involved. Domain naming differs, but reconciliation, verification and document handling look similar everywhere."
        actions={[{ to: '/contact', label: 'Describe your process', primary: true }]}
      />
    </>
  );
}
