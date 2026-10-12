import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { Check, Copy, Crosshair, Layers, RefreshCw, Shuffle, Zap } from 'lucide-react';
import { categories, type CardCategory, type CardCategoryId } from '../data/challengeCards';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { copyText, randomInt } from '../lib/utils';
import { Panel } from './Panel';
import { Reveal } from './Reveal';

type Picks = Record<CardCategoryId, string>;
type Phase = 'idle' | 'spinning' | 'done';

const icons: Record<CardCategoryId, ReactNode> = {
  mission: <Crosshair size={22} aria-hidden="true" />,
  vibe: <Layers size={22} aria-hidden="true" />,
  chaos: <Zap size={22} aria-hidden="true" />,
};

const SPIN_MS = [900, 1250, 1600];

function drawPicks(previous: Picks | null): Picks {
  let next: Picks;
  let guard = 0;
  do {
    next = {
      mission: categories[0].deck[randomInt(categories[0].deck.length)],
      vibe: categories[1].deck[randomInt(categories[1].deck.length)],
      chaos: categories[2].deck[randomInt(categories[2].deck.length)],
    };
    guard++;
  } while (
    previous &&
    guard < 10 &&
    next.mission === previous.mission &&
    next.vibe === previous.vibe &&
    next.chaos === previous.chaos
  );
  return next;
}

function CardPanel({
  cat,
  text,
  state,
  round,
}: {
  cat: CardCategory;
  text: string;
  state: 'idle' | 'spinning' | 'locked';
  round: number;
}) {
  return (
    <Panel tilt lift className="h-full" innerClassName="flex min-h-[26rem] flex-col p-6 sm:p-7">
      <span className="crosshair right-4 top-4" aria-hidden="true" />
      <div className="flex items-center justify-between font-tech text-[0.62rem] uppercase tracking-[0.3em] text-glow">
        <span>Card {cat.index}</span>
        <span className="text-crimson-bright">{icons[cat.id]}</span>
      </div>
      <h3 className="mt-6 font-display text-5xl uppercase leading-none text-metal sm:text-6xl">{cat.title}</h3>
      <p className="mt-2 font-tech text-[0.7rem] uppercase tracking-[0.22em] text-crimson-bright">{cat.label}</p>
      <p className="mt-4 text-lg text-muted">{cat.description}</p>

      <div className="mt-auto pt-6">
        <div className="mb-2 flex items-center justify-between font-tech text-[0.55rem] uppercase tracking-[0.3em] text-muted">
          <span>Drawn instruction</span>
          <span>{cat.deck.length} in deck</span>
        </div>
        <div
          className={`flex min-h-[7.5rem] items-center border border-crimson/40 bg-ink/70 p-4 ${
            state === 'locked' ? 'shadow-[inset_0_0_30px_rgba(255,23,68,0.25)]' : ''
          }`}
        >
          {state === 'idle' ? (
            <span className="font-tech text-xs uppercase tracking-[0.3em] text-muted">Awaiting draw…</span>
          ) : (
            <p
              key={state === 'locked' ? `locked-${round}` : 'spin'}
              className={`font-display text-3xl uppercase leading-[1.05] tracking-wide sm:text-4xl ${
                state === 'spinning' ? 'spin-flicker text-glow' : 'card-pop text-paper'
              }`}
            >
              {text}
            </p>
          )}
        </div>
      </div>
    </Panel>
  );
}

export function RandomChallenge() {
  const reduced = useReducedMotion();
  const [phase, setPhase] = useState<Phase>('idle');
  const [picks, setPicks] = useState<Picks | null>(null);
  const [display, setDisplay] = useState<Picks>({ mission: '', vibe: '', chaos: '' });
  const [locked, setLocked] = useState<[boolean, boolean, boolean]>([false, false, false]);
  const [round, setRound] = useState(0);
  const [copied, setCopied] = useState<'idle' | 'ok' | 'fail'>('idle');
  const timers = useRef<number[]>([]);
  const interval = useRef<number | null>(null);
  const lockedRef = useRef<[boolean, boolean, boolean]>([false, false, false]);

  const clearTimers = useCallback(() => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
    if (interval.current) window.clearInterval(interval.current);
    interval.current = null;
  }, []);

  useEffect(() => clearTimers, [clearTimers]);

  const spin = () => {
    if (phase === 'spinning') return;
    clearTimers();
    setCopied('idle');
    const final = drawPicks(picks); // the real random selection happens immediately
    setRound((r) => r + 1);

    if (reduced) {
      setPicks(final);
      setDisplay(final);
      setLocked([true, true, true]);
      setPhase('done');
      return;
    }

    setPicks(null);
    setLocked([false, false, false]);
    setPhase('spinning');

    const shuffle = () =>
      setDisplay((d) => ({
        mission: lockedRef.current[0] ? d.mission : categories[0].deck[randomInt(categories[0].deck.length)],
        vibe: lockedRef.current[1] ? d.vibe : categories[1].deck[randomInt(categories[1].deck.length)],
        chaos: lockedRef.current[2] ? d.chaos : categories[2].deck[randomInt(categories[2].deck.length)],
      }));
    lockedRef.current = [false, false, false];
    shuffle();
    interval.current = window.setInterval(shuffle, 90);

    const ids: CardCategoryId[] = ['mission', 'vibe', 'chaos'];
    SPIN_MS.forEach((ms, i) => {
      timers.current.push(
        window.setTimeout(() => {
          lockedRef.current[i] = true;
          setDisplay((d) => ({ ...d, [ids[i]]: final[ids[i]] }));
          setLocked((l) => l.map((v, j) => (j === i ? true : v)) as [boolean, boolean, boolean]);
          if (i === SPIN_MS.length - 1) {
            if (interval.current) window.clearInterval(interval.current);
            interval.current = null;
            setPicks(final);
            setPhase('done');
          }
        }, ms),
      );
    });
  };

  const summary = picks
    ? `PROMPTX 2026 // PROMPT ROULETTE\nMISSION: ${picks.mission.toUpperCase()}\nVIBE: ${picks.vibe.toUpperCase()}\nCHAOS: ${picks.chaos.toUpperCase()}`
    : '';

  const copy = async () => {
    if (!picks) return;
    const ok = await copyText(summary);
    setCopied(ok ? 'ok' : 'fail');
    window.setTimeout(() => setCopied('idle'), 2500);
  };

  const cardState = (i: number): 'idle' | 'spinning' | 'locked' =>
    phase === 'idle' ? 'idle' : locked[i] ? 'locked' : 'spinning';

  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-3">
        {categories.map((cat, i) => (
          <Reveal key={cat.id} delay={i * 140} className="h-full">
            <CardPanel cat={cat} text={display[cat.id]} state={cardState(i)} round={round} />
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center gap-5">
        <div className="flex w-full flex-col items-stretch justify-center gap-4 sm:w-auto sm:flex-row">
          <span className="btn-glow">
            <button type="button" className="btn btn-primary" onClick={spin} disabled={phase === 'spinning'} aria-busy={phase === 'spinning'}>
              {phase === 'spinning' ? (
                <>
                  <RefreshCw size={16} className="animate-spin" aria-hidden="true" /> Spinning…
                </>
              ) : phase === 'done' ? (
                <>
                  <RefreshCw size={16} aria-hidden="true" /> Draw again
                </>
              ) : (
                <>
                  <Shuffle size={16} aria-hidden="true" /> Spin the roulette
                </>
              )}
            </button>
          </span>
          {phase === 'done' && (
            <span className="btn-glow">
              <button type="button" className="btn btn-ghost" onClick={copy}>
                {copied === 'ok' ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
                Copy challenge
              </button>
            </span>
          )}
        </div>
        <p role="status" className="min-h-[1.25rem] font-tech text-[0.65rem] uppercase tracking-[0.2em] text-glow">
          {copied === 'ok' && 'Challenge copied to clipboard.'}
          {copied === 'fail' && 'Copy failed — select the text and copy it manually.'}
        </p>
      </div>

      {phase === 'done' && picks && (
        <div key={round} className="card-pop mx-auto mt-4 max-w-4xl" aria-live="polite">
          <Panel innerClassName="p-6 sm:p-9">
            <dl className="space-y-5">
              {categories.map((cat) => (
                <div key={cat.id} className="grid gap-1 sm:grid-cols-[8rem_1fr] sm:gap-6">
                  <dt className="pt-1 font-tech text-xs uppercase tracking-[0.3em] text-crimson-bright">{cat.title.replace('The ', '')}</dt>
                  <dd className="font-display text-3xl uppercase leading-tight tracking-wide text-paper sm:text-4xl">{picks[cat.id]}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 border-t border-crimson/30 pt-6 text-center">
              <p className="metal-soft font-display text-4xl uppercase leading-none sm:text-6xl">Your challenge is locked.</p>
              <p className="crimson-text mt-2 font-display text-3xl uppercase tracking-wide sm:text-4xl">Now make the AI obey.</p>
            </div>
          </Panel>
        </div>
      )}

      <p className="mx-auto mt-8 max-w-2xl text-center font-tech text-[0.6rem] uppercase leading-relaxed tracking-[0.2em] text-muted">
        Demo generator for visitors — not an official competition submission system.
      </p>
    </div>
  );
}
