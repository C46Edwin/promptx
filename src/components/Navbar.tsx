import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { eventConfig } from '../config/event';
import { BrandImage } from './BrandImage';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#arena', label: 'The Arena' },
  { href: '#challenge', label: 'Challenge' },
  { href: '#register', label: 'Register' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-crimson/35 bg-ink/75 backdrop-blur-md transition-all duration-300 ${
        compact ? 'py-0' : 'py-1.5'
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-14 max-w-arena items-center justify-between gap-4 px-4 sm:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label={`${eventConfig.name} — home`}>
          <span className="flex h-9 min-w-9 items-center">
            <BrandImage
              src={eventConfig.vidyaLogo}
              alt="Vidya Academy of Science and Technology logo"
              fallback="VIDYA ACADEMY"
              className="h-9 w-auto object-contain"
            />
          </span>
          <span className="hidden h-6 w-px bg-crimson/50 sm:block" aria-hidden="true" />
          <span className="font-display text-2xl leading-none tracking-[0.08em] text-metal">{eventConfig.name}</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-link uppercase">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-3 md:flex">
            <BrandImage
              src={eventConfig.vyvidhLogo}
              alt={`${eventConfig.festival} logo`}
              fallback={eventConfig.festival}
              className="h-8 w-auto object-contain"
            />
            <span className="flex items-center gap-2 font-tech text-[0.58rem] uppercase tracking-[0.2em] text-glow">
              <span className="status-dot" aria-hidden="true" />
              System online
            </span>
          </div>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center border border-crimson/50 text-metal lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`border-t border-crimson/30 bg-ink/95 lg:hidden ${open ? 'block' : 'hidden'}`}
      >
        <ul className="mx-auto flex max-w-arena flex-col px-4 py-3 sm:px-8">
          {links.map((l, i) => (
            <li key={l.href} className="border-b border-crimson/15 last:border-0">
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center gap-4 font-tech text-sm uppercase tracking-[0.2em] text-paper hover:text-crimson-bright"
              >
                <span className="text-crimson-bright">0{i + 1}</span>
                {l.label}
              </a>
            </li>
          ))}
          <li className="flex items-center gap-2 pt-3 font-tech text-[0.6rem] uppercase tracking-[0.2em] text-glow">
            <span className="status-dot" aria-hidden="true" />
            System online // {eventConfig.festival}
          </li>
        </ul>
      </div>
    </header>
  );
}
