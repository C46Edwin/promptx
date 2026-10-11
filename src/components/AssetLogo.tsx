import { useState } from 'react'

type Props = {
  src: string
  alt: string
  fallback: string
  className?: string
}

/** Shows the official logo if the file exists, otherwise a clean text placeholder. Never fabricates a logo. */
export default function AssetLogo({ src, alt, fallback, className = '' }: Props) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <span
        className={`inline-flex items-center border border-dashed border-crimson/50 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-mute ${className}`}
        title="Logo file not supplied yet"
      >
        {fallback}
      </span>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={`h-9 w-auto object-contain md:h-11 ${className}`}
    />
  )
}
