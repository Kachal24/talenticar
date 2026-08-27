import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Jump to the top on navigation — hash links keep the browser's own behaviour. */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}
