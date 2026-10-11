import { CalendarDays, Clock, MapPin, Swords, Timer, Users } from 'lucide-react'
import type { ReactNode } from 'react'
import { EVENT } from '../config/event'
import BackgroundVideo from './BackgroundVideo'
import Particles from './Particles'
import QrPanel from './QrPanel'
import RegistrationButton from './RegistrationButton'

const INFO: { icon: ReactNode; label: string; value: string }[] = [
  { icon: <CalendarDays size={16} />, label: 'DATE', value: EVENT.date },
  { icon: <Clock size={16} />, label: 'TIME', value: EVENT.time },
  { icon: <MapPin size={16} />, label: 'VENUE', value: EVENT.venue },
  { icon: <Swords size={16} />, label: 'FORMAT', value: EVENT.format },
  { icon: <Timer size={16} />, label: 'DURATION', value: EVENT.duration },
  { icon: <Users size={16} />, label: 'TEAM SIZE', value: EVENT.teamSize },
]

export default function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="scan-sweep relative min-h-screen overflow-hidden bg-void pb-20 pt-28 md:pt-32"
    >
      {/* Atmosphere: video (optional) + CSS fallback that always renders */}
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(255,23,68,0.28),transparent_55%),radial-gradient(ellipse_at_10%_90%,rgba(255,23,68,0.16),transparent_50%),linear-gradient(180deg,#100608,#050303_70%)]" />
      <div aria-hidden="true" className="grid-bg absolute inset-0" />
      <BackgroundVideo src={EVENT.assets.heroVideo} className="opacity-45 mix-blend-screen" />

      {/* Red planet + rings, echoing the poster's central sphere */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-[22vw] top-[14%] sm:-right-[8vw] md:top-[8%]">
        <div className="relative">
          <div className="planet h-[78vw] w-[78vw] rounded-full sm:h-[52vw] sm:w-[52vw] lg:h-[40vw] lg:w-[40vw] max-h-[720px] max-w-[720px] opacity-70 md:opacity-90" />
          <div className="animate-spin-slow absolute left-1/2 top-1/2 h-[135%] w-[135%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-crimson/40 [transform:translate(-50%,-50%)_rotateX(72deg)]" />
          <div className="absolute left-1/2 top-1/2 h-[170%] w-[170%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-crimson/20 [transform:translate(-50%,-50%)_rotateX(72deg)]" />
        </div>
      </div>

      {/* Floating geometry */}
      <div aria-hidden="true" className="animate-drift pointer-events-none absolute left-[6%] top-[38%] hidden h-24 w-24 rotate-12 border border-crimson/30 md:block" />
      <div aria-hidden="true" className="animate-drift pointer-events-none absolute bottom-[12%] left-[44%] hidden h-14 w-14 rotate-45 border border-ember/30 md:block [animation-delay:-6s]" />
      <Particles />
      <div aria-hidden="true" className="scanlines pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 md:px-10">
        {/* Status labels */}
        <div className="mb-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.25em] text-mute md:text-xs">
          <span className="flex items-center gap-2"><span className="indicator" />AI PROTOCOL // ACTIVE</span>
          <span>SYSTEM STATUS: ONLINE</span>
          <span>ACCESS LEVEL: OPEN</span>
        </div>

        <h1 id="hero-title" className="sr-only">{EVENT.name}: {EVENT.title}</h1>
        <div
          aria-hidden="true"
          data-text="PROMPTX"
          className="glitch font-bebas uppercase leading-[0.8] tracking-[0.01em]"
          style={{ fontSize: 'clamp(5rem, 27vw, 19rem)' }}
        >
          <span className="title-fill">PROMPTX</span>
        </div>

        <p className="mt-4 font-orbitron text-sm font-bold uppercase tracking-[0.2em] text-ink sm:text-xl md:text-2xl">
          {EVENT.year} | THE ULTIMATE AI SHOWDOWN
        </p>

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="font-bebas text-4xl uppercase leading-none tracking-wide text-ember glow-text sm:text-6xl">
              MASTER THE PROMPT. OUTSMART THE AI.
            </p>
            <p className="mt-4 max-w-xl font-rajdhani text-lg font-semibold uppercase tracking-[0.12em] text-mute sm:text-xl">
              THREE ROUNDS. ONE ARENA. UNLEASH YOUR AI INSTINCT.
            </p>

            <RegistrationButton label="[ ENTER THE ARENA → ]" size="xl" className="mt-9" />

            <div className="mt-8 flex flex-col items-start gap-3">
              <p className="font-orbitron text-xs font-bold uppercase tracking-[0.28em] text-ink">
                SCAN THE SIGNAL TO REGISTER
              </p>
              <QrPanel />
            </div>
          </div>

          <aside aria-label="Event information" className="cyber-glass hud-frame p-5 sm:p-7">
            <div className="mb-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-mute">
              <span>EVENT DATA</span>
              <span className="flex items-center gap-2"><span className="indicator" />LIVE</span>
            </div>
            <dl className="divide-y divide-crimson/20">
              {INFO.map((item) => (
                <div key={item.label} className="flex items-center gap-3 py-3 sm:gap-4">
                  <span className="text-crimson">{item.icon}</span>
                  <dt className="w-24 shrink-0 font-mono text-[11px] uppercase tracking-[0.2em] text-mute sm:w-28">
                    {item.label}
                  </dt>
                  <dd className="font-orbitron text-sm font-bold uppercase tracking-wider text-ink sm:text-base">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  )
}
