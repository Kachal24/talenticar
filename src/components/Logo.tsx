import { Link } from 'react-router-dom';

/** Wordmark rebuilt in CSS: dot + slanted stem, italic lowercase lockup. */
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      className={`logo${light ? ' logo--light' : ''}`}
      to="/"
      aria-label="Talentica Resource home"
    >
      <span className="lm" aria-hidden="true" />
      <span className="lw">
        <em>talentica</em>
        <em>resource</em>
      </span>
    </Link>
  );
}
