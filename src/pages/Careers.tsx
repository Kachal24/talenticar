import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Img from '../components/Img';
import { Arrow } from '../components/Icons';
import { Eyebrow, InfoCard, SectionHead, Steps } from '../components/Bits';
import { IMG } from '../data/images';
import { HIRING_STEPS, JOBS, PERKS } from '../data/site';

export default function Careers() {
  const scrollToRoles = () =>
    document.getElementById('open-roles')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <div className="hero hero--page">
        <div className="wrap hero-grid">
          <div>
            <Eyebrow>Careers</Eyebrow>
            <h1>
              Work where the <span className="it">brief is clear</span>.
            </h1>
            <p className="lead" style={{ marginTop: '1.3rem' }}>
              We hire people who ask why a process exists before automating it, and who write
              things down. In exchange you get real project variety, a named mentor for the
              first six months, and certification support that we actually pay for.
            </p>
            <div className="hero-cta" style={{ marginTop: '2rem' }}>
              <button className="btn btn--pri" onClick={scrollToRoles}>
                See open roles <Arrow />
              </button>
              <Link to="/contact" className="btn btn--ghost">
                Send a general application
              </Link>
            </div>
          </div>
          <div className="hero-art">
            <div className="shot shot--main">
              <Img src={IMG.careersTeam} alt="Team collaborating around laptops in an office" eager />
            </div>
          </div>
        </div>
      </div>

      <section className="sec--tight">
        <div className="wrap">
          <SectionHead eyebrow="Why people stay" title="What we offer beyond the salary" />
          <div className="grid g4">
            {PERKS.map((c, i) => (
              <InfoCard card={c} delay={i} key={c.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="sec mist" id="open-roles">
        <div className="wrap">
          <SectionHead
            eyebrow="Open roles"
            title="Currently hiring"
            lead="Do not meet every line? Apply anyway and tell us which parts you would need to learn."
          />
          <Reveal className="job-list">
            {JOBS.map((job) => (
              <div className="job" key={job.title}>
                <div>
                  <h3>{job.title}</h3>
                  <p>{job.blurb}</p>
                </div>
                <span className="m">{job.location}</span>
                <span className="m">{job.experience}</span>
                <Link
                  to="/contact"
                  className="btn btn--ghost"
                  aria-label={`Apply for ${job.title}`}
                >
                  Apply
                </Link>
              </div>
            ))}
          </Reveal>
          <p className="note mt-1">
            Sample vacancies for layout &mdash; replace with your live openings.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionHead eyebrow="Hiring process" title="Four steps, two weeks, no ghosting" />
          <Steps steps={HIRING_STEPS} />
        </div>
      </section>
    </>
  );
}
