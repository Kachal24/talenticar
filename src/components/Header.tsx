import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo';
import MegaMenu from './MegaMenu';
import { Arrow } from './Icons';
import { MEGA_MENUS, SIMPLE_NAV } from '../data/menu';

export default function Header() {
  const [drawer, setDrawer] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const { pathname } = useLocation();

  // Close everything whenever the route changes.
  useEffect(() => {
    setDrawer(false);
    setOpenMenu(null);
  }, [pathname]);

  // Click outside the header dismisses an open mega-menu.
  useEffect(() => {
    if (!openMenu) return;
    const onDown = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('header.site')) setOpenMenu(null);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [openMenu]);

  const closeAll = () => {
    setOpenMenu(null);
    setDrawer(false);
  };

  return (
    <header className={`site${drawer ? ' open' : ''}`}>
      <div className="wrap bar">
        <Logo />

        <nav className="main">
          {MEGA_MENUS.map((menu) => (
            <MegaMenu
              key={menu.label}
              menu={menu}
              open={openMenu === menu.label}
              onOpen={() => setOpenMenu(menu.label)}
              onClose={() => setOpenMenu(null)}
              onNavigate={closeAll}
            />
          ))}
          {SIMPLE_NAV.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? 'on' : '')}>
              {item.label}
            </NavLink>
          ))}
          {/* Contact sits in the actions group on desktop; repeated here for the drawer. */}
          <NavLink to="/contact" className={({ isActive }) => `in-drawer${isActive ? ' on' : ''}`}>
            Contact
          </NavLink>
        </nav>

        <div className="bar-actions">
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'on' : '')}>
            Contact
          </NavLink>
          <Link to="/contact" className="btn btn--pri">
            Talk to us <Arrow />
          </Link>
        </div>

        <button
          className={`burger${drawer ? ' x' : ''}`}
          aria-label={drawer ? 'Close menu' : 'Open menu'}
          aria-expanded={drawer}
          onClick={() => {
            setDrawer((v) => !v);
            setOpenMenu(null);
          }}
        >
          <span />
        </button>
      </div>
    </header>
  );
}
