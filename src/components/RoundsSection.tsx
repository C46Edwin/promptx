import type { ReactNode } from 'react'
import RegistrationButton from './RegistrationButton'

type Round = {
  id: string
  number: string
  title: string
  minutes: string
  points: string
  difficulty: string
  description: string
  tags: string[]
  extra: ReactNode
  accent: string
}

const Tag = ({ children }: { children: ReactNode }) => (
  <span className="border border-crimson/40 bg-crimson/10 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-ember">
    {children}
  </span>
)

const ROUNDS: Round[] = [
  {
    id: 'r1',
    number: 'ROUND 01',
    title: 'PROMPT ROULETTE',
    minutes: '25 MINUTES',
    points: '100 POINTS',
    difficulty: 'WARM-UP',
    description: 'Three prompt attempts. One random challenge. Make AI deliver the unexpected.',
    tags: ['CREATIVITY', 'PRECISION', 'PROMPT QUALITY'],
    accent: 'from-crimson/20',
    extra: (
      <div className="border-l-2 border-crimson bg-black/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-mute">EXAMPLE CHALLENGE</p>
        <p className="mt-1 font-bebas text-3xl uppercase tracking-wide text-ink">SELL WATER TO FISH.</p>
      </div>
    ),
  },
  {
    id: 'r2',
    number: 'ROUND 02',
    title: 'REVERSE PROMPT SHOWDOWN',
    minutes: '30 MINUTES',
    points: '200 POINTS',
    difficulty: 'LEVEL UP',
    description: 'Recreate a target AI output by reverse-engineering the prompt behind it. Every detail counts.',
    tags: ['OBSERVATION', 'DETAIL', 'PROMPT ENGINEERING'],
    accent: 'from-ember/20',
    extra: (
      <ul className="space-y-2">
        {['LEVEL 1: EASY', 'LEVEL 2: WEIRD', 'LEVEL 3: NIGHTMARE'].map((lvl, i) => (
          <li key={lvl} className="flex items-center gap-3 font-orbitron text-xs font-bold tracking-widest text-ink">
            <span className="flex gap-1" aria-hidden="true">
              {[0, 1, 2].map((n) => (
                <span key={n} className={`h-3 w-2 ${n <= i ? 'bg-crimson shadow-neon' : 'bg-crimson/20'}`} />
              ))}
            </span>
            {lvl}
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: 'r3',
    number: 'ROUND 03',
    title: 'THE AI BOSS FIGHT',
    minutes: '50 MINUTES',
    points: '400 POINTS',
    difficulty: 'FINAL BOSS',
    description:
      'Choose a mission. Solve a real-world problem with AI. Refine your prompt, verify the result, and pitch your solution.',
    tags: [],
    accent: 'from-crimson/35',
    extra: (
      <div className="space-y-4">
        <ul className="space-y-2">
          {['MISSION A: SAVE THE TECH FEST', 'MISSION B: FIX CAMPUS LIFE', 'MISSION C: ABSURDLY USEFUL'].map((m) => (
            <li key={m} className="border border-crimson/40 px-3 py-2 font-orbitron text-[11px] font-bold tracking-widest text-ink">
              {m}
            </li>
          ))}
        </ul>
        <div className="border border-ember bg-crimson/15 p-4 shadow-neon">
          <p className="flex items-center gap-2 font-orbitron text-sm font-black uppercase tracking-[0.2em] text-ember">
            <span className="indicator" />
            FINAL TWIST UNLOCKED
          </p>
          <p className="mt-1 text-base text-mute">Expect a surprise constraint. Adapt your solution before time runs out.</p>
        </div>
      </div>
    ),
  },
]

export default function RoundsSection() {
  return (
    <section
      id="rounds"
      aria-labelledby="rounds-title"
      className="relative overflow-hidden bg-void py-24 md:py-36"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,23,68,0.2),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-[1600px] px-5 md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-mute">SECTOR 03 // MISSION BRIEFINGS</p>
        <h2
          id="rounds-title"
          className="mt-4 font-bebas uppercase leading-[0.85] text-ink"
          style={{ fontSize: 'clamp(3.5rem, 11vw, 9rem)' }}
        >
          THE THREE <span className="title-fill">ROUNDS</span>
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {ROUNDS.map((r) => (
            <article
              key={r.id}
              className="group relative flex flex-col bg-crimson/40 p-px transition duration-300 clip-cut hover:-translate-y-1 hover:bg-ember"
            >
              <div className={`clip-cut flex h-full flex-col bg-gradient-to-b ${r.accent} to-panel p-6 sm:p-8`} style={{ backgroundColor: '#100608' }}>
                <div className="flex items-start justify-between gap-4">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-ember">{r.number}</p>
                  <p className="border border-crimson/60 px-2 py-1 font-orbitron text-[10px] font-bold uppercase tracking-widest text-ink">
                    {r.difficulty}
                  </p>
                </div>

                <h3 className="mt-4 font-orbitron text-2xl font-black uppercase leading-tight text-ink sm:text-3xl">
                  {r.title}
                </h3>

                <dl className="mt-5 grid grid-cols-2 gap-px bg-crimson/30">
                  <div className="bg-void/80 p-3">
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-mute">TIME</dt>
                    <dd className="font-orbitron text-sm font-bold text-ink">{r.minutes}</dd>
                  </div>
                  <div className="bg-void/80 p-3">
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-mute">SCORE</dt>
                    <dd className="font-orbitron text-sm font-bold text-ember">{r.points}</dd>
                  </div>
                </dl>

                <p className="mt-5 text-lg leading-snug text-mute">{r.description}</p>

                <div className="mt-5">{r.extra}</div>

                {r.tags.length > 0 && (
                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {r.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center font-orbitron text-sm font-bold uppercase tracking-[0.2em] text-ink sm:text-lg">
          100 + 200 + 400 = <span className="text-ember glow-text">700 BASE POINTS</span>
        </p>

        <div className="mt-16 flex flex-col items-center gap-6 text-center">
          <p className="font-bebas text-4xl uppercase tracking-wide text-ink sm:text-6xl">READY TO CHALLENGE THE AI?</p>
          <RegistrationButton label="REGISTER YOUR TEAM →" className="flex w-full flex-col items-center sm:w-auto" />
        </div>
      </div>
    </section>
  )
}
