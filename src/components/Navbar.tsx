import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { EVENT, NAV_LINKS } from '../config/event'
import AssetLogo from './AssetLogo'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="cyber-glass fixed inset-x-0 top-0 z-50 border-x-0 border-t-0">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-3 md:px-10"
      >
        <a href="#home" className="flex items-center gap-3" aria-label={`${EVENT.name} home`}>
          <AssetLogo
            src={EVENT.assets.vidyaLogo}
            alt="Vidya Academy of Science and Technology logo"
            fallback="VAST"
          />
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-ink md:text-xs">
            {EVENT.name}
          </span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-orbitron text-xs font-medium uppercase tracking-[0.22em] text-mute transition hover:text-ember hover:[text-shadow:0_0_14px_rgba(255,23,68,0.9)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <AssetLogo src={EVENT.assets.vidyidhLogo} alt="Vidyidh '26 official logo" fallback="VIDYIDH '26" />
          <button
            type="button"
            className="border border-crimson/50 p-2 text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul id="mobile-menu" className="border-t border-crimson/30 bg-void/95 px-4 py-2 lg:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-orbitron text-sm uppercase tracking-[0.2em] text-ink hover:text-ember"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
