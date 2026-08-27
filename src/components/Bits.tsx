import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import Reveal from './Reveal';
import Counter from './Counter';
import Img from './Img';
import Icon, { Arrow } from './Icons';
import type { DetailRow, SimpleCard, Stat, Step, Testimonial } from '../data/site';

/* ---------- eyebrow ---------- */
export const Eyebrow = ({ children, center = false }: { children: ReactNode; center?: boolean }) => (
  <div className={`eyebrow${center ? ' eyebrow--center' : ''}`}>{children}</div>
);

/* ---------- section heading block ---------- */
export function SectionHead({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
}) {
  return (
    <Reveal className="sec-head">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </Reveal>
  );
}

/* ---------- page hero (inner pages) ---------- */
export function PageHero({
  eyebrow,
  title,
  lead,
  slim = false,
  titleWidth,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  slim?: boolean;
  titleWidth?: string;
}) {
  return (
    <div className={`hero ${slim ? 'hero--slim' : 'hero--page'}`}>
      <div className="wrap">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 style={titleWidth ? { maxWidth: titleWidth } : undefined}>{title}</h1>
        <p className="lead">{lead}</p>
      </div>
    </div>
  );
}

/* ---------- plain content card ---------- */
export function InfoCard({
  card,
  delay = 0,
  dark = false,
}: {
  card: SimpleCard;
  delay?: number;
  dark?: boolean;
}) {
  return (
    <Reveal as="article" className={`card${dark ? ' card--dark' : ''}`} delay={delay}>
      {card.kick && <span className="kick">{card.kick}</span>}
      <h3>{card.title}</h3>
      {card.body && <p>{card.body}</p>}
      {card.points && (
        <ul>
          {card.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      )}
    </Reveal>
  );
}

/* ---------- alternating image / text row ---------- */
export function MediaRow({ row, flip, delay = 0 }: { row: DetailRow; flip: boolean; delay?: number }) {
  return (
    <Reveal className={`row${flip ? ' flip' : ''}`} delay={delay}>
      <div className="row-media">
        <Img src={row.img} alt={row.alt} />
      </div>
      <div>
        {row.eyebrow && <Eyebrow>{row.eyebrow}</Eyebrow>}
        <h2>{row.title}</h2>
        <p>{row.body}</p>
        <div className="tags">
          {row.tags.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>
        {row.receive && (
          <p className="receive">
            <strong>You receive:</strong> {row.receive}
          </p>
        )}
        {row.link && (
          <Link to={row.link.to} className="link-a">
            {row.link.label} <Arrow />
          </Link>
        )}
      </div>
    </Reveal>
  );
}

/* ---------- numbered process strip ---------- */
export const Steps = ({ steps }: { steps: Step[] }) => (
  <Reveal className="steps">
    {steps.map((s, i) => (
      <div className={`step${i === 0 ? ' act' : ''}`} key={s.title}>
        <h3>{s.title}</h3>
        <p>{s.body}</p>
      </div>
    ))}
  </Reveal>
);

/* ---------- animated stat strip ---------- */
export const Stats = ({ stats }: { stats: Stat[] }) => (
  <div className="stats">
    {stats.map((s) => (
      <div className="stat" key={s.label}>
        <b>
          <Counter to={s.value} suffix="+" />
        </b>
        <span>{s.label}</span>
      </div>
    ))}
  </div>
);

/* ---------- testimonial ---------- */
export const Quote = ({ t, delay = 0 }: { t: Testimonial; delay?: number }) => (
  <Reveal as="blockquote" className="quote" delay={delay}>
    <p>{t.quote}</p>
    <footer>
      <span className="av">{t.initials}</span>
      <span>
        <b>{t.name}</b>
        <span>{t.org}</span>
      </span>
    </footer>
  </Reveal>
);

/* ---------- closing call-to-action band ---------- */
export function CtaBand({
  title,
  body,
  actions,
}: {
  title: string;
  body: string;
  actions: { to: string; label: string; primary?: boolean }[];
}) {
  return (
    <section className="sec--tight">
      <div className="wrap">
        <Reveal className="cta-band">
          <div>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
          <div className="acts">
            {actions.map((a) => (
              <Link key={a.label} to={a.to} className={`btn ${a.primary ? 'btn--pri' : 'btn--ghost'}`}>
                {a.label} {a.primary && <Arrow />}
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- small check badge used in the home hero ---------- */
export const BadgeFloat = ({ value, label }: { value: number; label: string }) => (
  <div className="badge-float">
    <span className="dotmark" aria-hidden="true">
      <Icon name="check" size={18} />
    </span>
    <span>
      <b>
        <Counter to={value} suffix="" />
      </b>
      <span>{label}</span>
    </span>
  </div>
);
