import { useRef, useState } from 'react';
import type { Faq } from '../data/site';

/** Single-open accordion; the panel animates via max-height like the original. */
export default function Accordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const panels = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div className="acc">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div className={`acc-i${isOpen ? ' open' : ''}`} key={item.q}>
            <button
              className="acc-q"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              {item.q} <span className="pm">+</span>
            </button>
            <div
              className="acc-a"
              ref={(el) => {
                panels.current[i] = el;
              }}
              style={{
                maxHeight: isOpen ? `${panels.current[i]?.scrollHeight ?? 400}px` : 0,
              }}
            >
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
