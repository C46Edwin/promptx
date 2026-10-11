import { EVENT } from '../config/event'

const STATS = [
  { value: '03', label: 'ROUNDS' },
  { value: '02.5 HRS', label: 'TOTAL DURATION' },
  { value: '700', label: 'MAXIMUM BASE POINTS' },
]

export default function AboutSection() {
  return (
    <section
      id="arena"
      aria-labelledby="arena-title"
      className="relative overflow-hidden border-y border-crimson/20 bg-panel py-24 md:py-36"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(255,23,68,0.18),transparent_55%)]" />
      <div aria-hidden="true" className="grid-bg absolute inset-0" />

      {/* Rotating crosshair */}
      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className="animate-spin-slow pointer-events-none absolute -right-24 top-10 h-72 w-72 text-crimson/30 md:right-10 md:h-[26rem] md:w-[26rem]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <circle cx="100" cy="100" r="80" />
        <circle cx="100" cy="100" r="50" strokeDasharray="4 6" />
        <path d="M100 0v40M100 160v40M0 100h40M160 100h40" />
        <circle cx="100" cy="100" r="3" fill="currentColor" />
      </svg>

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-mute">
          SECTOR 02 // {EVENT.shortName} ARENA
        </p>
        <h2
          id="arena-title"
          className="mt-4 font-bebas uppercase leading-[0.85] text-ink"
          style={{ fontSize: 'clamp(3.5rem, 11vw, 9rem)' }}
        >
          THIS IS NOT A CLASSROOM.
          <span className="title-fill glow-text block">THIS IS THE ARENA.</span>
        </h2>

        <p className="mt-8 max-w-2xl font-rajdhani text-xl font-medium leading-snug text-mute md:text-2xl">
          Think fast. Prompt smarter. Outsmart the ordinary. Put your creativity, precision, and problem-solving
          skills to the test in an AI showdown where every prompt counts.
        </p>

        <ul className="mt-14 grid gap-5 sm:grid-cols-3">
          {STATS.map((s) => (
            <li key={s.label} className="cyber-glass hud-frame p-6">
              <p className="font-orbitron text-4xl font-black text-ink glow-text sm:text-5xl">{s.value}</p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.25em] text-mute">{s.label}</p>
            </li>
          ))}
        </ul>
        <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-mute/80">
          700 is the sum of the three round scores. It is not a guaranteed final score.
        </p>

        <div className="mt-12 border-y border-crimson/50 bg-crimson/10 px-4 py-5 text-center">
          <p className="font-orbitron text-sm font-bold uppercase tracking-[0.18em] text-ember sm:text-lg md:text-xl">
            LIMITED ATTEMPTS. RISING DIFFICULTY. ONE FINAL BOSS FIGHT.
          </p>
        </div>
      </div>
    </section>
  )
}
