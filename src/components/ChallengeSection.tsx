import { AlertTriangle } from 'lucide-react';
import { stages, twistExamples } from '../data/challengeCards';
import { Particles } from './BackgroundFX';
import { RegisterButton } from './Cta';
import { Panel } from './Panel';
import { RandomChallenge } from './RandomChallenge';
import { Reveal } from './Reveal';
import { ScoringPanel } from './ScoringPanel';
import { SectionLabel } from './SectionLabel';

function Stages() {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stages.map((s, i) => (
        <li key={s.n}>
          <Reveal delay={i * 120} className="h-full">
            <Panel className="h-full" innerClassName="p-5" cut={12}>
              <p className="font-display text-5xl leading-none text-crimson-bright/90">{s.n}</p>
              <p className="mt-1 font-tech text-[0.6rem] uppercase tracking-[0.3em] text-glow">Stage {s.n}</p>
              <h4 className="mt-3 font-display text-3xl uppercase leading-none text-metal">{s.title}</h4>
              <p className="mt-2 text-base text-muted">{s.body}</p>
            </Panel>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

function Twist() {
  return (
    <Reveal>
      <div className="relative overflow-hidden p-[1px]" style={{ clipPath: 'polygon(20px 0,100% 0,100% calc(100% - 20px),calc(100% - 20px) 100%,0 100%,0 20px)' }}>
        <div className="twist-border" aria-hidden="true" />
        <div className="relative bg-gradient-to-br from-[#1d070b] to-ink p-6 sm:p-10" style={{ clipPath: 'polygon(19.5px 0,100% 0,100% calc(100% - 19.5px),calc(100% - 19.5px) 100%,0 100%,0 19.5px)' }}>
          <div className="scan-bar" aria-hidden="true" />
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="flex items-center gap-2 font-tech text-[0.65rem] uppercase tracking-[0.3em] text-glow">
                <AlertTriangle size={14} className="text-crimson-bright" aria-hidden="true" />
                <span className="status-dot" aria-hidden="true" /> Alert // mid-round
              </p>
              <h3 className="glitch mt-3 font-display text-5xl uppercase leading-[0.95] text-paper sm:text-7xl">Final twist unlocked</h3>
              <p className="mt-4 max-w-xl text-lg text-muted sm:text-xl">
                “Halfway through the challenge, every team receives one additional restriction. Adapt your prompt without
                abandoning your original mission.”
              </p>
            </div>
            <div>
              <p className="font-tech text-[0.6rem] uppercase tracking-[0.3em] text-crimson-bright">Example twists</p>
              <ul className="mt-3 space-y-2">
                {twistExamples.map((t) => (
                  <li key={t} className="flex gap-3 border-l-2 border-crimson/60 bg-ink/50 px-4 py-2 text-lg text-paper">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function ChallengeSection() {
  return (
    <section id="challenge" aria-labelledby="challenge-title" className="relative isolate overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_10%,#1c060b_0%,#050303_60%)]" />
        <div className="grid-lines opacity-50" />
        <Particles />
      </div>

      <div className="mx-auto max-w-arena space-y-20 px-4 sm:space-y-28 sm:px-8">
        <div>
          <Reveal>
            <SectionLabel>02 // The challenge</SectionLabel>
          </Reveal>
          <Reveal delay={100}>
            <h2 id="challenge-title" className="mt-6 font-display text-[clamp(3rem,9vw,7.5rem)] uppercase leading-[0.9] text-paper">
              Three cards.
              <br />
              One prompt.
              <br />
              <span className="metal-soft">Zero predictability.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-3xl text-xl text-muted">
              “Every team draws three cards. Every card changes the challenge. Your job is to turn an absurd combination of
              instructions into an extraordinary AI-generated creation.”
            </p>
          </Reveal>
        </div>

        <RandomChallenge />

        <div>
          <Reveal>
            <h3 className="mb-6 font-display text-4xl uppercase text-metal sm:text-5xl">How the competition works</h3>
          </Reveal>
          <Stages />
        </div>

        <ScoringPanel />
        <Twist />

        <Reveal>
          <div className="flex flex-col items-center gap-6 text-center">
            <p className="font-display text-4xl uppercase leading-none tracking-wide text-paper sm:text-6xl">
              Ready to test your <span className="crimson-text">prompting skills?</span>
            </p>
            <RegisterButton />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
