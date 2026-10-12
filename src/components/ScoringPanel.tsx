import { scoring, totalPoints } from '../data/challengeCards';
import { Panel } from './Panel';
import { Reveal } from './Reveal';

export function ScoringPanel() {
  return (
    <Reveal>
      <Panel innerClassName="p-6 sm:p-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-tech text-[0.65rem] uppercase tracking-[0.35em] text-crimson-bright">Scoring system</p>
            <h3 className="mt-2 font-display text-5xl uppercase leading-none text-metal sm:text-6xl">How you’re judged</h3>
          </div>
          <p className="font-tech text-[0.6rem] uppercase tracking-[0.25em] text-muted">Bars show each criterion’s share of the maximum</p>
        </div>

        <ul className="mt-8 space-y-6">
          {scoring.map((s) => (
            <li key={s.label}>
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-tech text-xs uppercase tracking-[0.2em] text-paper sm:text-sm">{s.label}</span>
                <span className="whitespace-nowrap font-display text-3xl text-crimson-bright">
                  {s.points} <span className="font-tech text-[0.6rem] tracking-[0.2em] text-muted">PTS MAX</span>
                </span>
              </div>
              <div className="mt-2 flex">
                <div className="score-seg" style={{ width: `${(s.points / 30) * 100}%`, maxWidth: '100%' }} role="presentation">
                  <i />
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex items-baseline justify-between border-t border-crimson/40 pt-5">
          <span className="font-tech text-sm uppercase tracking-[0.3em] text-paper">Total</span>
          <span className="metal-soft font-display text-6xl leading-none sm:text-7xl">
            {totalPoints} <span className="font-tech text-xs tracking-[0.25em] text-glow">POINTS</span>
          </span>
        </div>
      </Panel>
    </Reveal>
  );
}
