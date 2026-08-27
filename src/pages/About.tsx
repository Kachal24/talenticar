import Reveal from '../components/Reveal';
import Img from '../components/Img';
import { CtaBand, Eyebrow, InfoCard, PageHero, SectionHead, Steps } from '../components/Bits';
import { IMG } from '../data/images';
import { COMMITMENTS, FIRST_30_DAYS, PRACTICE_GROUPS } from '../data/site';

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        titleWidth="16ch"
        title={
          <>
            A firm built by <span className="it">practitioners</span>, not by a sales floor.
          </>
        }
        lead="Talentica Resource started with a simple observation: companies were hiring one vendor to find people and another to build systems, then spending months translating between them. We do both, so the recruitment brief and the technical roadmap are written by teams that talk to each other daily."
      />

      <section className="sec--tight">
        <div className="wrap grid g2 split-2">
          <Reveal className="row-media" style={{ aspectRatio: '16/12' }}>
            <Img src={IMG.aboutTeam} alt="Talentica Resource delivery team working together" />
          </Reveal>
          <Reveal>
            <Eyebrow>Our position</Eyebrow>
            <h2>Two capabilities, one accountability</h2>
            <p style={{ margin: '1rem 0' }}>
              Our teams sit in three groups &mdash; People, Technology and Business Support
              &mdash; under one delivery lead per client. That structure means a hiring manager
              and an automation engineer can be in the same room within a day, which is where
              most of the useful decisions get made.
            </p>
            <p>
              We are deliberately mid-sized. Big enough to staff a squad and cover leave, small
              enough that the person who scoped your work is still the person you call in month
              nine.
            </p>
            <div className="tags" style={{ marginTop: '1.4rem' }}>
              <span className="tag">Founded on delivery experience</span>
              <span className="tag">Pune, India</span>
              <span className="tag">Onsite, hybrid &amp; remote</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sec mist">
        <div className="wrap">
          <SectionHead
            eyebrow="What we hold ourselves to"
            title="Four commitments we will put in the contract"
          />
          <div className="grid g4">
            {COMMITMENTS.map((c, i) => (
              <InfoCard card={c} delay={i} key={c.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionHead
            eyebrow="Structure"
            title="Three practice groups"
            lead="Each group has its own leadership and hiring standards, and each is measured on client outcomes rather than utilisation."
          />
          <div className="grid g3">
            {PRACTICE_GROUPS.map((c, i) => (
              <InfoCard card={c} delay={i} key={c.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="sec navy on-dark">
        <div className="wrap">
          <SectionHead eyebrow="Working with us" title="What the first thirty days look like" />
          <Steps steps={FIRST_30_DAYS} />
        </div>
      </section>

      <CtaBand
        title="Want to see the delivery pack?"
        body="We can share a redacted blueprint, a runbook sample and a monthly outcome report so you know exactly what you would receive."
        actions={[{ to: '/contact', label: 'Request the samples', primary: true }]}
      />
    </>
  );
}
