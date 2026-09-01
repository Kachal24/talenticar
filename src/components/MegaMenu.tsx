import { useEffect, useId, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import type { MegaMenuDef } from '../data/menu';

interface Props {
  menu: MegaMenuDef;
  /** Only one menu is open at a time; the header owns that state. */
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  onNavigate: () => void;
}

const Caret = () => (
  <svg className="caret" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default function MegaMenu({ menu, open, onOpen, onClose, onNavigate }: Props) {
  const id = useId();
  const wrap = useRef<HTMLDivElement>(null);
  // Hover opens on desktop only; on touch the trigger click does the work.
  const [hoverable, setHoverable] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (min-width: 861px)');
    const sync = () => setHoverable(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  // Escape closes; focus leaving the menu closes.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        wrap.current?.querySelector('button')?.focus();
      }
    };
    const onFocus = (e: FocusEvent) => {
      if (!wrap.current?.contains(e.target as Node)) onClose();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('focusin', onFocus);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('focusin', onFocus);
    };
  }, [open, onClose]);

  const leave = () => {
    if (hoverable) onClose();
  };

  return (
    <div
      className={`has-mega${open ? ' open' : ''}`}
      ref={wrap}
      onMouseEnter={() => hoverable && onOpen()}
      onMouseLeave={leave}
    >
      <button
        type="button"
        className="mega-trigger"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => (open ? onClose() : onOpen())}
      >
        {menu.label} <Caret />
      </button>

      <div className={`mega mega--${menu.layout}`} id={id} hidden={!open}>
        <div className="mega-inner">
          {menu.items.map((item) => (
            <div className="mega-col" key={item.slug}>
              <Link className="mega-head" to={`/services/${item.slug}`} onClick={onNavigate}>
                {item.label}
                <span>{item.blurb}</span>
              </Link>
              {item.children && (
                <div className="mega-sub">
                  {item.children.map((child) => (
                    <Link key={child.slug} to={`/services/${child.slug}`} onClick={onNavigate}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
