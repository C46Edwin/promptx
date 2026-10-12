import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { eventConfig } from '../config/event';
import { asset, copyText, isRegistrationConfigured } from '../lib/utils';
import { RegisterButton } from './Cta';
import { Panel } from './Panel';
import { Reveal } from './Reveal';

function QrFrame() {
  const [failed, setFailed] = useState(false);
  return (
    <div className="mx-auto w-full max-w-[22rem]">
      <div className="relative aspect-square w-full overflow-hidden p-[3px]">
        {/* Light sweep lives only in the 3px border ring; it never overlaps the code. */}
        <div className="qr-sweep" aria-hidden="true" />
        <div className="relative flex h-full w-full items-center justify-center bg-white p-5 sm:p-6">
          {failed ? (
            <div
              className="flex h-full w-full flex-col items-center justify-center gap-2 border-2 border-dashed border-ink/40 p-4 text-center"
              role="img"
              aria-label="Official registration QR code placeholder — not a working code"
            >
              <p className="font-tech text-xs font-bold uppercase leading-snug tracking-[0.15em] text-ink">
                Official registration QR goes here
              </p>
              <p className="font-tech text-[0.55rem] uppercase tracking-[0.2em] text-ink/60">Placeholder — not scannable</p>
            </div>
          ) : (
            <img
              src={asset(eventConfig.registrationQr)}
              alt={`Official QR code to register for ${eventConfig.name}`}
              className="h-full w-full object-contain"
              onError={() => setFailed(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export function RegistrationPanel() {
  const [copied, setCopied] = useState<'idle' | 'ok' | 'fail' | 'unconfigured'>('idle');

  const copyLink = async () => {
    if (!isRegistrationConfigured()) {
      setCopied('unconfigured');
    } else {
      setCopied((await copyText(eventConfig.registrationUrl)) ? 'ok' : 'fail');
    }
    window.setTimeout(() => setCopied('idle'), 3000);
  };

  return (
    <Reveal>
      <Panel cut={22} innerClassName="p-0">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col p-8 sm:p-12 lg:border-r lg:border-crimson/30">
            <p className="font-tech text-[0.65rem] uppercase tracking-[0.35em] text-crimson-bright">Online registration</p>
            <h3 className="metal-soft mt-4 font-display text-6xl uppercase leading-none sm:text-7xl">{eventConfig.name}</h3>
            <p className="mt-2 font-tech text-sm uppercase tracking-[0.3em] text-glow">{eventConfig.festival}</p>

            <div className="mt-8 space-y-1 font-display text-3xl uppercase leading-tight tracking-wide text-paper sm:text-4xl">
              <p>
                {eventConfig.date}
                <br />
                {eventConfig.time}
              </p>
              <p className="pt-2">{eventConfig.venue}</p>
            </div>
            <p className="mt-6 font-tech text-xs uppercase tracking-[0.25em] text-muted">Team size: {eventConfig.teamSize}</p>

            <div className="mt-10 flex flex-col gap-4">
              <RegisterButton />
              <span className="btn-glow w-full sm:w-auto">
                <button type="button" className="btn btn-ghost" onClick={copyLink}>
                  {copied === 'ok' ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
                  Copy registration link
                </button>
              </span>
              <p role="status" className="min-h-[1.25rem] font-tech text-[0.65rem] uppercase tracking-[0.2em] text-glow">
                {copied === 'ok' && 'Registration link copied.'}
                {copied === 'fail' && 'Copy failed — please copy the link manually.'}
                {copied === 'unconfigured' && 'Registration details are being configured.'}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center border-t border-crimson/30 p-8 text-center sm:p-12 lg:border-t-0">
            <p className="font-tech text-[0.65rem] uppercase tracking-[0.35em] text-crimson-bright">Scan to register</p>
            <h3 className="mt-4 font-display text-6xl uppercase leading-none text-paper sm:text-7xl">Scan the signal.</h3>
            <p className="mt-3 max-w-sm font-tech text-[0.68rem] uppercase leading-relaxed tracking-[0.2em] text-muted">
              Open your camera. Scan the code. Enter the arena.
            </p>
            <div className="mt-8 w-full">
              <QrFrame />
            </div>
            <p className="mt-6 font-tech text-[0.6rem] uppercase tracking-[0.3em] text-glow">Registration protocol // ready</p>
          </div>
        </div>
      </Panel>
    </Reveal>
  );
}
