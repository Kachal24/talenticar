import { useEffect, useRef, useState } from 'react';

interface Props {
  to: number;
  /** Appended once the count finishes. Pass "" for a bare number. */
  suffix?: string;
  duration?: number;
}

/** Eases from 0 to `to` the first time it scrolls into view. */
export default function Counter({ to, suffix = '+', duration = 1100 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      setValue(to);
      setDone(true);
      return;
    }

    let frame = 0;
    let start: number | null = null;
    const run = (ts: number) => {
      if (start === null) start = ts;
      const pr = Math.min((ts - start) / duration, 1);
      setValue(Math.floor(to * (1 - Math.pow(1 - pr, 3))));
      if (pr < 1) frame = requestAnimationFrame(run);
      else {
        setValue(to);
        setDone(true);
      }
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          frame = requestAnimationFrame(run);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to, duration]);

  return (
    <span ref={ref}>
      {value}
      {done ? suffix : ''}
    </span>
  );
}
