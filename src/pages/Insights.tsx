import { useState } from 'react';
import type { FormEvent } from 'react';
import PostCard from '../components/PostCard';
import { Eyebrow, PageHero } from '../components/Bits';
import { POSTS } from '../data/posts';

export default function Insights() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const subscribe = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setEmail('');
  };

  return (
    <>
      <PageHero
        slim
        eyebrow="Insights"
        titleWidth="16ch"
        title={
          <>
            Field notes, not <span className="it">thought leadership</span>.
          </>
        }
        lead="Short pieces on hiring, automation and software delivery, written by the people who do the work here. Practical enough to disagree with."
      />

      <section className="sec--tight">
        <div className="wrap">
          <div className="grid g3">
            {POSTS.map((p, i) => (
              <PostCard post={p} delay={i} key={p.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="sec--tight mist">
        <div className="wrap newsletter">
          <Eyebrow center>Newsletter</Eyebrow>
          <h2>One email a month</h2>
          <p style={{ margin: '1rem 0 1.6rem' }}>
            A summary of what we published, plus one thing we got wrong and fixed. No sequences,
            unsubscribe in a click.
          </p>
          <form className="f2" onSubmit={subscribe}>
            <input
              type="email"
              required
              placeholder="you@company.com"
              aria-label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn btn--pri" type="submit">
              Subscribe
            </button>
          </form>
          {sent && (
            <div className="ok mt-1" role="status">
              Thanks &mdash; you are on the list. The next issue goes out at the start of the
              month.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
