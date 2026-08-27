import { useState } from 'react';

interface Props {
  src: string;
  alt: string;
  eager?: boolean;
}

/**
 * Drops itself out of the DOM if the photo fails to load, which lets the
 * navy→blue gradient on the parent stand in as the placeholder. Mirrors the
 * onerror="this.remove()" behaviour of the original static page.
 */
export default function Img({ src, alt, eager = false }: Props) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
