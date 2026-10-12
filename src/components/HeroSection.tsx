import { useState, type CSSProperties } from 'react';
import { Calendar, Clock, MapPin, Timer, Users } from 'lucide-react';
import { eventConfig } from '../config/event';
import { asset } from '../lib/utils';
import { Particles, Ribbons } from './BackgroundFX';
import { CtaLink, RegisterButton } from './Cta';

const info = [
  { icon: Calendar, label: 'Date', value: eventConfig.date },
  { icon: Clock, label: 'Time', value: eventConfig.time },
  { icon: MapPin, label: 'Venue', value: eventConfig.venue },
  { icon: Users, label: 'Team size', value: eventConfig.teamSize },
  { icon: Timer, label: 'Duration', value: eventConfig.duration },
];

const hd = (s: number) => ({ '--hd': `${s}s` }) as CSSProperties;

export function HeroSection() {
  const [posterOk, setPosterOk] = useState(true);

  return (
    <section id="home" aria-labelledby="hero-title" className="relative isolate flex min-h-screen flex-col overflow-hidden pt-24">
      {/* Background composition */}
      <div className="hero-bg absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,#2a0610_0%,#050303_60%)]" />
        <div className="grid-lines" />
        <Ribbons />
        <Particles />
      </div>
      <div className="hero-light absolute inset-0 -z-10" aria-hidden="true">
        <div className="halo -right-[20%] -top-[5%] h-[90vw] max-h-[56rem] w-[90vw] max-w-[56rem]" />
        <div className="planet -right-[18%] top-[2%] h-[78vw] max-h-[44rem] w-[78vw] max-w-[44rem] opacity-90" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink to-transparent" />
      </div>
      {posterOk && (
        <img
          src={asset(eventConfig.poster)}
          alt=""
          aria-hidden="true"
          onError={() => setPosterOk(false)}
          className="pointer-events-none absolute right-0 top-0 -z-10 h-full w-full object-cover object-right opacity-25 mix-blend-screen [mask-image:radial-gradient(ellipse_60%_70%_at_75%_40%,#000_20%,transparent_75%)]"
        />
      )}

      <div className="mx-auto flex w-full max-w-arena flex-1 flex-col justify-center px-4 pb-10 sm:px-8">
        <div className="hero-in flex flex-wrap items-center gap-x-6 gap-y-2" style={hd(0.8)}>
          <p className="font-tech text-xs uppercase tracking-[0.4em] text-glow sm:text-sm">
            {eventConfig.festival} presents
          </p>
          <span className="font-tech text-[0.6rem] uppercase tracking-[0.3em] text-muted">AI protocol // active</span>
        </div>

        <h1 id="hero-title" className="hero-title relative mt-2">
          <span className="sr-only">{eventConfig.name}. {eventConfig.subtitle}.</span>
          <span
            aria-hidden="true"
            className="metal-text block font-display text-[clamp(4.5rem,27vw,24rem)] leading-[0.82] tracking-[0.01em]"
          >
            PROMPTX
          </span>
        </h1>

        <p className="hero-in mt-3 font-tech text-sm font-bold uppercase tracking-[0.3em] text-metal sm:text-lg" style={hd(1)}>
          2026 <span className="text-crimson-bright">//</span> {eventConfig.subtitle}
        </p>

        <div className="hero-in mt-8 max-w-3xl" style={hd(1.1)}>
          <p className="font-display text-4xl uppercase leading-[0.95] tracking-wide text-paper sm:text-6xl">
            Master the prompt.
            <br />
            <span className="crimson-text">Outsmart the AI.</span>
          </p>
          <p className="mt-4 font-tech text-[0.7rem] uppercase tracking-[0.25em] text-glow sm:text-xs">
            Turn your ideas into extraordinary results.
          </p>
          <p className="mt-4 max-w-xl text-lg text-muted sm:text-xl">
            “Draw your challenge. Engineer your prompt. Make AI deliver the unexpected.”
          </p>
        </div>

        <div className="hero-in mt-8 flex flex-col gap-4 sm:flex-row sm:items-start" style={hd(1.35)}>
          <CtaLink href="#challenge">Enter the arena</CtaLink>
          <RegisterButton variant="ghost" />
        </div>

        <div className="hero-in relative mt-10 border border-crimson/35 bg-ink/60 backdrop-blur-sm" style={hd(1.5)}>
          <span className="crosshair -left-[7px] -top-[7px]" aria-hidden="true" />
          <span className="crosshair -right-[7px] -top-[7px]" aria-hidden="true" />
          <span className="crosshair -bottom-[7px] -left-[7px]" aria-hidden="true" />
          <span className="crosshair -bottom-[7px] -right-[7px]" aria-hidden="true" />
          <dl className="grid grid-cols-2 divide-crimson/25 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x">
            {info.map(({ icon: Icon, label, value }, i) => (
              <div
                key={label}
                className={`flex items-start gap-3 border-crimson/20 p-4 ${i < info.length - 1 ? 'border-b lg:border-b-0' : ''} ${
                  i === info.length - 1 ? 'col-span-2 sm:col-span-1' : ''
                }`}
              >
                <Icon size={18} className="mt-1 shrink-0 text-crimson-bright" aria-hidden="true" />
                <div>
                  <dt className="font-tech text-[0.58rem] uppercase tracking-[0.25em] text-muted">{label}</dt>
                  <dd className="mt-1 font-body text-lg font-semibold uppercase leading-tight text-paper">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
          <div className="flex flex-wrap gap-x-8 gap-y-1 border-t border-crimson/25 px-4 py-2 font-tech text-[0.58rem] uppercase tracking-[0.25em] text-glow">
            <span>AI protocol // active</span>
            <span>System status // online</span>
            <span>Access level // open</span>
          </div>
        </div>
      </div>
    </section>
  );
}
