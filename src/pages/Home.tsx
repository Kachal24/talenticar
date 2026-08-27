import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Img from '../components/Img';
import Icon, { Arrow } from '../components/Icons';
import Accordion from '../components/Accordion';
import PostCard from '../components/PostCard';
import {
  BadgeFloat,
  CtaBand,
  Eyebrow,
  InfoCard,
  MediaRow,
  Quote,
  SectionHead,
  Stats,
  Steps,
} from '../components/Bits';
import { IMG } from '../data/images';
import { POSTS } from '../data/posts';
import {
  CREDENTIALS,
  DELIVERY_STEPS,
  ENGAGEMENT_MODELS,
  FAQS,
  HERO_PILLS,
  INDUSTRY_BRIEF,
  PROBLEM_ROWS,
  SERVICE_CARDS,
  STATS,
  TESTIMONIALS,
} from '../data/site';

export default function Home() {
  return (
    <>
      {/* ---------- hero ---------- */}
      <div className="hero">
        <div className="wrap hero-grid">
          <div>
            <Eyebrow>People. Technology. Progress.</Eyebrow>
            <h1>
              The people who <span className="it">run</span> your business, and the software
              that <span className="it">runs with them</span>.
            </h1>
            <p className="lead">
              Talentica Resource is a single partner for two things most companies buy
              separately: the talent that keeps operations moving, and the technology that
              makes those operations faster. Recruitment, web, custom software and process
              automation, delivered by one accountable team.
            </p>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn--pri">
                Start a conversation <Arrow />
              </Link>
              <Link to="/services" className="btn btn--ghost">
                Explore services
              </Link>
            </div>
            <div className="hero-pills">
              {HERO_PILLS.map((p) => (
                <span className="pill" key={p}>
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-art">
            <div className="shot shot--main">
              <Img
                src={IMG.heroMeeting}
                alt="Two colleagues reviewing a delivery plan in a meeting room"
                eager
              />
            </div>
            <div className="shot shot--sm">
              <Img src={IMG.heroDashboard} alt="Operations dashboard showing process metrics" />
            </div>
            <BadgeFloat value={14} label="days average time to shortlist" />
          </div>
        </div>
      </div>

      {/* ---------- credentials strip ---------- */}
      <div className="sec--tight credstrip">
        <div className="wrap">
          <p className="caps">Capabilities our clients rely on</p>
          <div className="grid g4">
            {CREDENTIALS.map((c) => (
              <span className="pill" key={c}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- services ---------- */}
      <section className="sec">
        <div className="wrap">
          <SectionHead
            eyebrow="Services"
            title="Six services, one delivery standard"
            lead="Every engagement starts with the same question: what is the outcome you are buying? We scope to that outcome, name the owner, and report against it weekly. No handoffs between vendors, no gaps between hiring and building."
          />
          <div className="grid g3">
            {SERVICE_CARDS.map((s, i) => (
              <Reveal as="article" className="card" delay={i} key={s.title}>
                <div className="ico" aria-hidden="true">
                  <Icon name={s.icon} />
                </div>
                <span className="kick">{s.kick}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <ul>
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- problems we solve ---------- */}
      <section className="sec mist">
        <div className="wrap">
          <SectionHead
            eyebrow="How it looks in practice"
            title="Three problems we are asked to solve most often"
          />
          {PROBLEM_ROWS.map((row, i) => (
            <MediaRow key={row.title} row={row} flip={i % 2 === 1} />
          ))}
        </div>
      </section>

      {/* ---------- delivery method ---------- */}
      <section className="sec navy on-dark">
        <div className="wrap">
          <SectionHead
            eyebrow="Delivery method"
            title="Five stages, and you know where we are in all of them"
            lead="The same sequence runs whether we are placing four engineers or shipping an automation. Each stage has an exit note you sign off before the next one starts."
          />
          <Steps steps={DELIVERY_STEPS} />
          <div style={{ marginTop: 'clamp(36px,4vw,54px)' }}>
            <Stats stats={STATS} />
            <p className="note" style={{ marginTop: '.9rem', color: '#8FA6C4' }}>
              Figures are indicative placeholders &mdash; replace with your verified numbers
              before the site goes live.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- engagement models ---------- */}
      <section className="sec">
        <div className="wrap">
          <SectionHead
            eyebrow="Engagement models"
            title="Buy the arrangement that matches the risk"
            lead="A three-month integration and an eighteen-month product build should not be bought the same way. Pick the model that fits, and change it at any renewal point."
          />
          <div className="grid g4">
            {ENGAGEMENT_MODELS.map((c, i) => (
              <InfoCard card={c} delay={i} key={c.title} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- industries ---------- */}
      <section className="sec mist">
        <div className="wrap">
          <SectionHead
            eyebrow="Industries"
            title="Sectors where we already know the vocabulary"
            lead="Domain knowledge saves weeks. These are the environments where our teams already understand the regulations, the systems and the reporting the client will be asked for."
          />
          <div className="grid g3">
            {INDUSTRY_BRIEF.map((c, i) => (
              <InfoCard card={c} delay={i} key={c.title} />
            ))}
          </div>
          <div className="mt-2">
            <Link to="/industries" className="link-a">
              See what we deliver in each sector <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- testimonials ---------- */}
      <section className="sec">
        <div className="wrap">
          <SectionHead
            eyebrow="Client feedback"
            title="What clients say when the engagement ends"
          />
          <div className="grid g3">
            {TESTIMONIALS.map((t, i) => (
              <Quote t={t} delay={i} key={t.initials} />
            ))}
          </div>
          <p className="note mt-1">
            Sample testimonials shown for layout &mdash; swap in approved client quotes before
            launch.
          </p>
        </div>
      </section>

      {/* ---------- insights preview ---------- */}
      <section className="sec mist">
        <div className="wrap">
          <Reveal className="sec-head sec-head--split">
            <div>
              <Eyebrow>Insights</Eyebrow>
              <h2>Notes from our delivery teams</h2>
              <p className="lead">
                Written by the people doing the work &mdash; recruiters, developers and
                automation engineers &mdash; not by a marketing agency.
              </p>
            </div>
            <Link to="/insights" className="btn btn--ghost">
              All articles <Arrow />
            </Link>
          </Reveal>
          <div className="grid g3">
            {POSTS.slice(0, 3).map((p, i) => (
              <PostCard post={p} delay={i} key={p.slug} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="sec">
        <div className="wrap grid g2" style={{ alignItems: 'start' }}>
          <Reveal>
            <Eyebrow>Common questions</Eyebrow>
            <h2>Before you send the first email</h2>
            <p className="lead" style={{ marginTop: '1rem' }}>
              If your question is not here, ask it directly. We answer scoping questions
              without putting you through a sales sequence first.
            </p>
            <Link to="/contact" className="btn btn--pri" style={{ marginTop: '1.6rem' }}>
              Ask a question <Arrow />
            </Link>
          </Reveal>
          <Reveal>
            <Accordion items={FAQS} />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Tell us the problem, not the solution."
        body="Send a two-line description of what is slowing you down. You will get a written response with an approach, an indicative effort and the questions we would need answered — usually within one working day."
        actions={[
          { to: '/contact', label: 'Book a scoping call', primary: true },
          { to: '/services', label: 'See services' },
        ]}
      />
    </>
  );
}
