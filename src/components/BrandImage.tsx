import { useState } from 'react';
import { asset } from '../lib/utils';

interface BrandImageProps {
  src: string;
  alt: string;
  fallback: string;
  className?: string;
}

/** Shows an official logo if the file exists; otherwise a clean text placeholder. */
export function BrandImage({ src, alt, fallback, className = '' }: BrandImageProps) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <span className="font-tech text-[0.62rem] font-bold uppercase leading-tight tracking-[0.2em] text-metal">
        {fallback}
      </span>
    );
  }
  return <img src={asset(src)} alt={alt} className={className} onError={() => setFailed(true)} />;
}
