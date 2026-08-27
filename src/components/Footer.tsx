import { Link } from 'react-router-dom';
import Logo from './Logo';
import Icon from './Icons';

const SERVICES = [
  'HR & staffing',
  'Web development',
  'Automation & RPA',
  'Custom software',
  'Data & cloud',
  'Managed IT support',
];

const COMPANY: [string, string][] = [
  ['/about', 'About us'],
  ['/industries', 'Industries'],
  ['/insights', 'Insights'],
  ['/careers', 'Careers'],
  ['/contact', 'Contact'],
];

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="f-grid">
          <div className="f-brand">
            <Logo light />
            <p>
              An HR and technology partner for companies that would rather buy an outcome
              than manage three vendors.
            </p>
            <div className="socials">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Icon name="linkedin" size={17} />
              </a>
              <a href="mailto:hello@talenticaresource.com" aria-label="Email">
                <Icon name="mail" size={17} />
              </a>
              <a href="tel:+910000000000" aria-label="Phone">
                <Icon name="phone" size={17} />
              </a>
            </div>
          </div>

          <div className="f-col">
            <h4>Services</h4>
            {SERVICES.map((s) => (
              <Link key={s} to="/services">
                {s}
              </Link>
            ))}
          </div>

          <div className="f-col">
            <h4>Company</h4>
            {COMPANY.map(([to, label]) => (
              <Link key={to} to={to}>
                {label}
              </Link>
            ))}
          </div>

          <div className="f-col">
            <h4>Get in touch</h4>
            <a href="mailto:hello@talenticaresource.com">hello@talenticaresource.com</a>
            <a href="mailto:careers@talenticaresource.com">careers@talenticaresource.com</a>
            <Link to="/contact">Pune, Maharashtra, India</Link>
          </div>
        </div>

        <div className="f-bot">
          <span>&copy; {new Date().getFullYear()} Talentica Resource. All rights reserved.</span>
          <nav>
            <Link to="/contact">Privacy policy</Link>
            <Link to="/contact">Terms of use</Link>
            <Link to="/contact">Sitemap</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
