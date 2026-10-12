import { useRef } from 'react';
import { eventConfig } from '../config/event';
import { totalPoints } from '../data/challengeCards';
import { useParallax } from '../hooks/useParallax';
import { Particles } from './BackgroundFX';
import { Panel } from './Panel';
import { Reveal } from './Reveal';
import { SectionLabel } from './SectionLabel';

const stats = [
  { value: '03', label: 'Random cards' },
  { value: eventConfig.roundDuration.toUpperCase(), label: 'Challenge duration' },
  { value: String(totalPoints), label: 'Maximum points' },
];

function ArenaVisual() {
  const cards = [
    { x: 20, y: 30, n: '01', t: 'MISSION' },
    { x: 150, y: 170, n: '02', t: 'VIBE' },
    { x: 80, y: 310, n: '03', t: 'CHAOS' },
  ];
  return (
    <svg viewBox="0 0 400 480" className="mx-auto h-auto w-full max-w-md" role="img" aria-label="Three connected holographic cards orbited by rotating rings">
      <defs>
        <linearGradient id="cardFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2a0710" />
          <stop offset="1" stopColor="#0a0405" />
        </linearGradient>
        <radialGradient id="orb" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ff294f" stopOpacity="0.5" />
          <stop offset="1" stopColor="#ff1744" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="240" r="190" fill="url(#orb)" />
      <circle className="ring-spin" cx="200" cy="240" r="175" fill="none" stroke="#ff1744" strokeOpacity="0.55" strokeWidth="1" strokeDasharray="2 10 40 10" />
      <circle className="ring-spin rev" cx="200" cy="240" r="140" fill="none" stroke="#ffdde2" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="60 14 4 14" />
      <circle className="ring-spin" cx="200" cy="240" r="105" fill="none" stroke="#ff294f" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="8 20" />
      <path className="dash-flow" d="M120 90 L 230 170 M 230 230 L 160 310 M 120 90 C 20 190, 20 260, 80 340" fill="none" stroke="#ff294f" strokeWidth="1.2" />
      {cards.map((c) => (
        <g key={c.n} transform={`translate(${c.x} ${c.y})`}>
          <polygon points="14,0 190,0 190,96 176,110 0,110 0,14" fill="url(#cardFill)" stroke="#ff1744" strokeOpacity="0.85" strokeWidth="1.2" />
          <polygon points="14,0 60,0 0,14" fill="#ff1744" fillOpacity="0.7" />
          <text x="18" y="38" fontFamily="Orbitron, sans-serif" fontSize="11" letterSpacing="3" fill="#ff5368">
            CARD {c.n}
          </text>
          <text x="18" y="80" fontFamily="'Bebas Neue', Impact, sans-serif" fontSize="44" letterSpacing="2" fill="#ffdde2">
            {c.t}
          </text>
          <line x1="18" y1="94" x2="150" y2="94" stroke="#ff1744" strokeOpacity="0.5" />
        </g>
      ))}
      <g fill="#ff294f">
        <circle cx="120" cy="90" r="3" />
        <circle cx="230" cy="170" r="3" />
        <circle cx="230" cy="230" r="3" />
        <circle cx="160" cy="310" r="3" />
      </g>
    </svg>
  );
}

export function ArenaSection() {
  const visualRef = useRef<HTMLDivElement>(null);
  useParallax(visualRef, 0.07);

  return (
    <section id="arena" aria-labelledby="arena-title" className="relative isolate overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_50%,#1c060b_0%,#050303_65%)]" />
        <div className="grid-lines opacity-60" />
        <Particles />
      </div>

      <div className="mx-auto grid max-w-arena gap-14 px-4 sm:px-8 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <Reveal>
            <SectionLabel>01 // Enter the arena</SectionLabel>
          </Reveal>
          <Reveal delay={100}>
            <h2 id="arena-title" className="mt-6 font-display text-[clamp(3.2rem,9.5vw,8rem)] uppercase leading-[0.88]">
              <span className="block text-paper">This is not a classroom.</span>
              <span className="metal-soft mt-3 block">This is the arena.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-xl text-paper sm:text-2xl">
              “Three random instructions. One unexpected challenge. Your team’s creativity, precision, and prompting
              skills determine what happens next.”
            </p>
            <p className="mt-5 max-w-2xl text-lg text-muted">
              Prompt Roulette is a single-round AI prompting game where teams combine randomly selected instructions,
              experiment with AI, refine their prompts, and produce one final creation under a strict time limit.
            </p>
          </Reveal>

          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((s, i) => (
              <li key={s.label}>
                <Reveal delay={150 * i}>
                  <Panel innerClassName="p-5" cut={12}>
                    <p className="metal-soft font-display text-5xl leading-none sm:text-6xl">{s.value}</p>
                    <p className="mt-2 font-tech text-[0.62rem] uppercase tracking-[0.25em] text-glow">{s.label}</p>
                  </Panel>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal delay={200}>
            <p className="mt-12 border-l-2 border-crimson pl-5 font-display text-3xl uppercase leading-[1.05] tracking-wide text-paper sm:text-5xl">
              Think fast.
              <br />
              Prompt smarter.
              <br />
              <span className="crimson-text">Outsmart the ordinary.</span>
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-5 lg:pt-16">
          <div ref={visualRef} style={{ transform: 'translateY(var(--py, 0px))' }}>
            <Reveal delay={200}>
              <ArenaVisual />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
