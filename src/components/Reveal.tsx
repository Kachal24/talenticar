import { createElement, useEffect, useRef, useState } from 'react';
import type { CSSProperties, ElementType, ReactNode } from 'react';

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Adds `.in` once the element scrolls into view, unlocking the .rv transition. */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(() => prefersReduced());

  useEffect(() => {
    if (shown) return;
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown]);

  return { ref, shown };
}

interface Props {
  as?: ElementType;
  /** Position within its grid — staggers the transition by up to 210ms. */
  delay?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  /** Anything else (id, role, tabIndex, handlers) lands on the rendered element. */
  [key: string]: unknown;
}

export default function Reveal({
  as = 'div',
  delay = 0,
  className = '',
  style,
  children,
  ...rest
}: Props) {
  const { ref, shown } = useReveal<HTMLElement>();
  return createElement(
    as,
    {
      ref,
      className: `rv ${shown ? 'in ' : ''}${className}`.trim(),
      style: { transitionDelay: `${Math.min(delay % 4, 3) * 70}ms`, ...style },
      ...rest,
    },
    children,
  );
}
