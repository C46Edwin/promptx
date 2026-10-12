import type { CSSProperties } from 'react';

const particles = Array.from({ length: 16 }, (_, i) => ({
  left: (i * 37 + 11) % 100,
  top: 20 + ((i * 53) % 70),
  size: 2 + (i % 3),
  delay: -((i * 1.7) % 12),
  dur: 9 + (i % 5) * 2.5,
}));

export function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={
            {
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              '--delay': `${p.delay}s`,
              '--dur': `${p.dur}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}

export function Ribbons({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="rib1" x1="0" x2="1">
          <stop offset="0" stopColor="#ff1744" stopOpacity="0" />
          <stop offset="0.5" stopColor="#ff294f" stopOpacity="0.85" />
          <stop offset="1" stopColor="#ffdde2" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="rib2" x1="1" x2="0">
          <stop offset="0" stopColor="#ff5368" stopOpacity="0" />
          <stop offset="0.5" stopColor="#ff1744" stopOpacity="0.6" />
          <stop offset="1" stopColor="#ff5368" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g className="ribbon">
        <path d="M-100 560 C 200 380, 400 760, 700 560 S 1100 360, 1300 520" fill="none" stroke="url(#rib1)" strokeWidth="3" />
        <path d="M-100 600 C 220 430, 420 790, 720 600 S 1100 410, 1300 570" fill="none" stroke="url(#rib1)" strokeWidth="1.2" />
        <path d="M-100 640 C 240 480, 440 820, 740 640 S 1100 460, 1300 620" fill="none" stroke="url(#rib1)" strokeWidth="0.8" />
      </g>
      <g className="ribbon">
        <path d="M-100 220 C 250 60, 480 380, 760 200 S 1120 40, 1300 200" fill="none" stroke="url(#rib2)" strokeWidth="2.4" />
        <path d="M-100 260 C 270 110, 500 420, 780 240 S 1120 90, 1300 250" fill="none" stroke="url(#rib2)" strokeWidth="0.9" />
      </g>
    </svg>
  );
}
