import { eventConfig } from '../config/event';

export function Footer() {
  return (
    <footer className="relative border-t border-crimson/40 bg-ink py-10">
      <div className="mx-auto flex max-w-arena flex-col items-center gap-3 px-4 text-center sm:px-8">
        <p className="font-display text-4xl tracking-[0.1em] text-metal">{eventConfig.name}</p>
        <p className="font-tech text-[0.62rem] uppercase tracking-[0.3em] text-paper">{eventConfig.institution}</p>
        <p className="font-tech text-[0.62rem] uppercase tracking-[0.3em] text-glow">{eventConfig.festival}</p>
        <p className="mt-2 font-tech text-[0.58rem] uppercase tracking-[0.35em] text-muted">Ideas. People. Prompts.</p>
      </div>
    </footer>
  );
}
