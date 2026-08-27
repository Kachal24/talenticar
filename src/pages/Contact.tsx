import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Icon, { Arrow } from '../components/Icons';
import { PageHero } from '../components/Bits';
import { SERVICE_OPTIONS, TIMELINE_OPTIONS } from '../data/site';

interface Enquiry {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  timeline: string;
  message: string;
}

const EMPTY: Enquiry = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  timeline: TIMELINE_OPTIONS[0],
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState<Enquiry>(EMPTY);
  const [sent, setSent] = useState(false);

  const set = <K extends keyof Enquiry>(key: K, value: Enquiry[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setSent(false);
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    // Wire this up to your form handler, CRM or mailbox.
    setSent(true);
    setForm(EMPTY);
  };

  return (
    <>
      <PageHero
        slim
        eyebrow="Contact"
        titleWidth="15ch"
        title={
          <>
            Tell us what is <span className="it">actually slowing you down</span>.
          </>
        }
        lead="Two lines is enough to start. You will get a written reply with an approach, an indicative effort and the questions we would need answered, usually within one working day."
      />

      <section className="sec--tight">
        <div className="wrap grid contact-grid">
          <Reveal className="card card--wide">
            <h3 style={{ marginBottom: '1.4rem' }}>Send an enquiry</h3>
            <form className="form" onSubmit={submit}>
              <div className="f2">
                <div>
                  <label htmlFor="c-name">Full name</label>
                  <input
                    id="c-name"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => set('name', e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="c-company">Company</label>
                  <input
                    id="c-company"
                    required
                    placeholder="Company name"
                    value={form.company}
                    onChange={(e) => set('company', e.target.value)}
                  />
                </div>
              </div>

              <div className="f2">
                <div>
                  <label htmlFor="c-email">Work email</label>
                  <input
                    id="c-email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={(e) => set('email', e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="c-phone">Phone</label>
                  <input
                    id="c-phone"
                    type="tel"
                    placeholder="+91"
                    value={form.phone}
                    onChange={(e) => set('phone', e.target.value)}
                  />
                </div>
              </div>

              <div className="f2">
                <div>
                  <label htmlFor="c-service">What do you need?</label>
                  <select
                    id="c-service"
                    required
                    value={form.service}
                    onChange={(e) => set('service', e.target.value)}
                  >
                    <option value="">Select a service</option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="c-when">Timeline</label>
                  <select
                    id="c-when"
                    value={form.timeline}
                    onChange={(e) => set('timeline', e.target.value)}
                  >
                    {TIMELINE_OPTIONS.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="c-msg">What is the problem?</label>
                <textarea
                  id="c-msg"
                  required
                  placeholder="Describe the process, the team involved and what a good outcome looks like."
                  value={form.message}
                  onChange={(e) => set('message', e.target.value)}
                />
              </div>

              <button className="btn btn--pri" type="submit">
                Send enquiry <Arrow />
              </button>

              {sent && (
                <div className="ok" role="status">
                  Thanks &mdash; your enquiry has been captured. Connect this form to your inbox
                  or CRM to receive submissions.
                </div>
              )}
              <p className="note">
                This demo form does not send email yet. Point it at your form handler, CRM or
                mailbox before launch.
              </p>
            </form>
          </Reveal>

          <Reveal>
            <div className="info-card">
              <h3>Reach us directly</h3>
              <div className="info-row">
                <span className="ico">
                  <Icon name="pin" size={18} />
                </span>
                <span>
                  <b>Office</b>
                  <span>
                    Pune, Maharashtra, India
                    <br />
                    Serving clients across India, the UK and North America
                  </span>
                </span>
              </div>
              <div className="info-row">
                <span className="ico">
                  <Icon name="mail" size={18} />
                </span>
                <span>
                  <b>Email</b>
                  <span>
                    hello@talenticaresource.com
                    <br />
                    careers@talenticaresource.com
                  </span>
                </span>
              </div>
              <div className="info-row">
                <span className="ico">
                  <Icon name="phone" size={18} />
                </span>
                <span>
                  <b>Phone</b>
                  <span>
                    +91 00000 00000
                    <br />
                    Monday to Friday, 9:30&ndash;18:30 IST
                  </span>
                </span>
              </div>
              <div className="info-row">
                <span className="ico">
                  <Icon name="clock" size={18} />
                </span>
                <span>
                  <b>Response time</b>
                  <span>
                    Enquiries answered within one working day. Scoping calls booked within
                    three.
                  </span>
                </span>
              </div>
            </div>

            <div className="card" style={{ marginTop: '1.2rem' }}>
              <h3 style={{ fontSize: '1.05rem', marginBottom: '.6rem' }}>Hiring instead?</h3>
              <p style={{ fontSize: '.92rem' }}>
                Send your CV to careers@talenticaresource.com with the role name in the subject
                line, or browse current openings.
              </p>
              <Link to="/careers" className="link-a" style={{ marginTop: '.9rem' }}>
                View open roles <Arrow />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
