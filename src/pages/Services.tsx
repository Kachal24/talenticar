import { CtaBand, InfoCard, MediaRow, PageHero, SectionHead } from '../components/Bits';
import { SERVICE_ROWS, TECH_STACK } from '../data/site';

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        titleWidth="18ch"
        title={
          <>
            Everything below is delivered by <span className="it">our own team</span>.
          </>
        }
        lead="No subcontracting chains, no CVs forwarded from a partner network. Below is what each service includes, what you receive at the end, and how it is usually priced."
      />

      <section className="sec--tight">
        <div className="wrap">
          {SERVICE_ROWS.map((row, i) => (
            <MediaRow key={row.title} row={row} flip={i % 2 === 1} />
          ))}
        </div>
      </section>

      <section className="sec navy on-dark">
        <div className="wrap">
          <SectionHead
            eyebrow="Technology"
            title="What we build with"
            lead="We stay close to a deliberate stack rather than claiming everything. If your requirement sits outside it, we will say so and recommend someone who does it well."
          />
          <div className="grid g4">
            {TECH_STACK.map((c, i) => (
              <InfoCard card={c} delay={i} dark key={c.title} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Not sure which service you need?"
        body="Describe the problem in your own words. We will tell you which of these applies, which does not, and roughly what it takes."
        actions={[{ to: '/contact', label: 'Get a written approach', primary: true }]}
      />
    </>
  );
}
