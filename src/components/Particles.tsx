import { useMemo } from 'react'

type Props = { count?: number }

/** Deterministic pseudo-random so particles don't jump between renders. */
function seeded(i: number, salt: number) {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453
  return x - Math.floor(x)
}

export default function Particles({ count = 36 }: Props) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: `${seeded(i, 1) * 100}%`,
        top: `${seeded(i, 2) * 100}%`,
        size: 1 + seeded(i, 3) * 3,
        delay: `${seeded(i, 4) * 8}s`,
        duration: `${7 + seeded(i, 5) * 9}s`,
      })),
    [count],
  )

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d, i) => (
        <span
          key={i}
          className={`absolute rounded-full bg-ember ${i > 18 ? 'hidden md:block' : ''}`}
          style={{
            left: d.left,
            top: d.top,
            width: d.size,
            height: d.size,
            boxShadow: '0 0 8px rgba(255,23,68,0.9)',
            animation: `float ${d.duration} ease-in-out ${d.delay} infinite`,
          }}
        />
      ))}
    </div>
  )
}
