import { Link, Navigate, useParams } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Img from '../components/Img';
import Icon, { Arrow } from '../components/Icons';
import { CtaBand, Eyebrow } from '../components/Bits';
import { resolveService } from '../data/menu';
import { IMG } from '../data/images';

/** A stable photo per offering, so the same page always looks the same. */
const PHOTOS = [
  IMG.serviceHr,
  IMG.hiringPanel,
  IMG.aboutTeam,
  IMG.serviceSupport,
  IMG.careersTeam,
  IMG.serviceWeb,
  IMG.serviceAutomation,
  IMG.serviceSoftware,
  IMG.serviceData,
  IMG.processMetrics,
];
const photoFor = (slug: string) =>
  PHOTOS[[...slug].reduce((n, ch) => n + ch.charCodeAt(0), 0) % PHOTOS.length];

export default function ServiceDetail() {
  const { slug } = useParams();
  const found = resolveService(slug);

  if (!found) return <Navigate to="/services" replace />;

  const { item, menu, parent, siblings } = found;

  return (
    <>
      <div className="hero hero--page">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/services">Services</Link>
            <span aria-hidden="true">/</span>
            <span>{menu.label}</span>
            {parent && (
              <>
                <span aria-hidden="true">/</span>
                <Link to={`/services/${parent.slug}`}>{parent.label}</Link>
              </>
            )}
            <span aria-hidden="true">/</span>
            <span className="here">{item.label}</span>
          </nav>

          <div className="hero-grid" style={{ marginTop: '1.6rem' }}>
            <div>
              <Eyebrow>{parent ? parent.label : menu.label}</Eyebrow>
              <h1>{item.label}</h1>
              <p className="lead" style={{ marginTop: '1.2rem' }}>
                {item.intro}
              </p>
              <div className="hero-cta" style={{ marginTop: '2rem', marginBottom: 0 }}>
                <Link to="/contact" className="btn btn--pri">
                  Talk to us about this <Arrow />
                </Link>
                <Link to="/services" className="btn btn--ghost">
                  All services
                </Link>
              </div>
            </div>
            <div className="hero-art">
              <div className="shot shot--main">
                <Img src={photoFor(item.slug)} alt="" eager />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="sec--tight">
        <div className="wrap grid g2 split-2">
          <Reveal>
            <Eyebrow>What it includes</Eyebrow>
            <h2>{item.blurb}</h2>
            <ul className="checks">
              {item.points.map((p) => (
                <li key={p}>
                  <Icon name="check" size={16} />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="card card--wide">
            <span className="kick">How we engage</span>
            <h3>Scoped before it is priced</h3>
            <p style={{ margin: '.7rem 0 1.1rem' }}>
              Every engagement starts with discovery, and the quote follows the blueprint rather
              than preceding it. You see the scope, the assumptions and the definition of done in
              writing before any work is committed.
            </p>
            <ul>
              <li>Discovery session with the people who do the work</li>
              <li>Written scope, effort and assumptions</li>
              <li>Named owner and an agreed reporting cadence</li>
              <li>Documentation and handover as a deliverable</li>
            </ul>
            <Link to="/contact" className="link-a" style={{ marginTop: '1.2rem' }}>
              Request a scoping call <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>

      {siblings.length > 0 && (
        <section className="sec--tight mist">
          <div className="wrap">
            <Reveal className="sec-head">
              <Eyebrow>{parent ? parent.label : menu.label}</Eyebrow>
              <h2>Related services</h2>
            </Reveal>
            <div className="grid g3">
              {siblings.map((s, i) => (
                <Reveal as="article" className="card" delay={i} key={s.slug}>
                  <h3>{s.label}</h3>
                  <p>{s.blurb}</p>
                  <Link to={`/services/${s.slug}`} className="link-a" style={{ marginTop: '1rem' }}>
                    Read more <Arrow />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        title={`Need ${item.label.toLowerCase()}?`}
        body="Describe the requirement in two lines. You will get a written response with an approach, an indicative effort and the questions we would need answered — usually within one working day."
        actions={[
          { to: '/contact', label: 'Start a conversation', primary: true },
          { to: '/services', label: 'See all services' },
        ]}
      />
    </>
  );
}
