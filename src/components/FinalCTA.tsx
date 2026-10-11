import { EVENT } from '../config/event'
import BackgroundVideo from './BackgroundVideo'
import Particles from './Particles'
import QrPanel from './QrPanel'
import RegistrationButton from './RegistrationButton'

export default function FinalCTA() {
  return (
    <section
      id="register"
      aria-labelledby="final-title"
      className="scan-sweep relative overflow-hidden bg-void pt-24 md:pt-36"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(255,23,68,0.32),transparent_60%),radial-gradient(ellipse_at_50%_100%,rgba(255,23,68,0.2),transparent_55%)]" />
      <BackgroundVideo src={EVENT.assets.finalVideo} lazy className="opacity-40 mix-blend-screen" />
      {/* Energy trails */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-crimson to-transparent opacity-70" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-[34%] h-px bg-gradient-to-r from-transparent via-ember to-transparent opacity-30" />
      <Particles count={30} />
      <div aria-hidden="true" className="scanlines pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 md:px-10">
        <p aria-hidden="true" className="title-fill glow-text text-center font-bebas leading-[0.8] opacity-25" style={{ fontSize: 'clamp(5rem, 26vw, 18rem)' }}>
          PROMPTX
        </p>

        <h2 id="final-title" className="-mt-[8vw] text-center font-bebas uppercase leading-[0.9] text-ink md:-mt-[5vw]" style={{ fontSize: 'clamp(2.6rem, 8.5vw, 7.5rem)' }}>
          THE PROMPT IS YOUR WEAPON.
          <span className="block text-ember glow-text">THE OUTPUT IS YOUR PLAYGROUND.</span>
          <span className="title-fill block">THE ARENA IS YOURS.</span>
        </h2>
        <p className="mt-6 text-center font-orbitron text-xs font-bold uppercase tracking-[0.2em] text-mute sm:text-base">
          ONE TEAM. THREE ROUNDS. ENDLESS POSSIBILITIES.
        </p>

        <div className="cyber-glass hud-frame mx-auto mt-14 grid max-w-5xl items-center gap-10 p-6 sm:p-10 md:grid-cols-[1fr_auto]">
          <div className="text-center md:text-left">
            <p className="font-orbitron text-3xl font-black uppercase text-ink sm:text-5xl">{EVENT.name}</p>
            <p className="mt-3 font-orbitron text-sm font-bold uppercase tracking-[0.15em] text-ember sm:text-lg">
              {EVENT.date.toUpperCase()} | {EVENT.time}
            </p>
            <p className="mt-1 font-rajdhani text-xl font-semibold uppercase tracking-[0.12em] text-mute">
              {EVENT.venue}
            </p>
            <RegistrationButton label="REGISTER NOW →" size="xl" className="mt-8" />
          </div>
          <div className="flex flex-col items-center gap-3">
            <QrPanel size="lg" />
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-mute">SCAN TO REGISTER</p>
          </div>
        </div>
      </div>

      <footer className="relative z-10 mt-20 border-t border-crimson/30 px-5 py-8 text-center">
        <p className="font-orbitron text-[11px] font-bold uppercase tracking-[0.2em] text-ink sm:text-xs">
          {EVENT.name} | {EVENT.institution.toUpperCase()}
        </p>
        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.35em] text-mute">IDEAS. PEOPLE. PROMPTS.</p>
      </footer>
    </section>
  )
}
