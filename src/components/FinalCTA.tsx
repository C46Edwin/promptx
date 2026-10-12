import { eventConfig } from '../config/event';
import { Particles, Ribbons } from './BackgroundFX';
import { RegistrationPanel } from './RegistrationPanel';
import { Reveal } from './Reveal';

export function FinalCTA() {
  return (
    <section id="register" aria-labelledby="register-title" className="relative isolate overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,#2a0610_0%,#050303_65%)]" />
        <div className="grid-lines" />
        <Ribbons />
        <div className="planet -bottom-[35%] left-1/2 h-[90vw] max-h-[52rem] w-[90vw] max-w-[52rem] -translate-x-1/2 opacity-40" />
        <Particles />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />
      </div>

      <div className="mx-auto max-w-arena px-4 sm:px-8">
        <div className="text-center">
          <Reveal>
            <h2 id="register-title" className="font-display text-[clamp(2.6rem,8vw,6.5rem)] uppercase leading-[0.92] text-paper">
              The prompt is your <span className="crimson-text">weapon.</span>
              <br />
              The output is your playground.
              <br />
              <span className="metal-soft">The arena is yours.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 font-tech text-xs uppercase tracking-[0.3em] text-glow sm:text-sm">
              One team. Three cards. Endless possibilities.
            </p>
          </Reveal>
          <Reveal delay={250}>
            <p
              aria-hidden="true"
              className="metal-text mt-10 font-display text-[clamp(4rem,22vw,18rem)] leading-[0.85] tracking-[0.01em]"
            >
              PROMPTX
            </p>
            <p className="font-tech text-xs uppercase tracking-[0.4em] text-muted">{eventConfig.name}</p>
          </Reveal>
        </div>

        <div className="mt-16">
          <RegistrationPanel />
        </div>
      </div>
    </section>
  );
}
