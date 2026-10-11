import { useEffect, useRef, useState } from 'react'

type Props = {
  src: string
  /** Wait until the section is near the viewport before loading the file. */
  lazy?: boolean
  className?: string
}

/** Decorative looping video. Renders nothing if the file is missing or fails, so the CSS backdrop shows through. */
export default function BackgroundVideo({ src, lazy = false, className = '' }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(!lazy)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    if (!lazy || !wrapRef.current) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { rootMargin: '300px' },
    )
    io.observe(wrapRef.current)
    return () => io.disconnect()
  }, [lazy])

  const reduceMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <div ref={wrapRef} aria-hidden="true" className={`pointer-events-none absolute inset-0 ${className}`}>
      {visible && !failed && !reduceMotion && (
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload={lazy ? 'metadata' : 'auto'}
          onError={() => setFailed(true)}
        >
          <source src={src} type="video/mp4" onError={() => setFailed(true)} />
        </video>
      )}
    </div>
  )
}
