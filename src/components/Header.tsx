import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { Arrow } from './Icons';
import { NAV } from '../data/site';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile drawer whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`site${open ? ' open' : ''}`}>
      <div className="wrap bar">
        <Logo />
        <nav className="main">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                isActive || (item.to === '/insights' && pathname.startsWith('/insights/'))
                  ? 'on'
                  : ''
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/contact" className="btn btn--pri">
          Talk to us <Arrow />
        </Link>
        <button
          className={`burger${open ? ' x' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </div>
    </header>
  );
}
