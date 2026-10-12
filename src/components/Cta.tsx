import { useState, type ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { eventConfig } from '../config/event';
import { isRegistrationConfigured } from '../lib/utils';

export function CtaLink({
  href,
  children,
  variant = 'primary',
}: {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'ghost';
}) {
  return (
    <span className="btn-glow w-full sm:w-auto">
      <a className={`btn ${variant === 'primary' ? 'btn-primary' : 'btn-ghost'}`} href={href}>
        {children}
        <ArrowRight size={16} aria-hidden="true" />
      </a>
    </span>
  );
}

/**
 * Opens the configured registration URL in a new tab. If the URL has not been
 * configured yet, it never opens a placeholder: it explains the state instead.
 */
export function RegisterButton({ variant = 'primary', label = 'Register your team' }: { variant?: 'primary' | 'ghost'; label?: string }) {
  const [note, setNote] = useState(false);
  const cls = `btn ${variant === 'primary' ? 'btn-primary' : 'btn-ghost'}`;

  if (isRegistrationConfigured()) {
    return (
      <span className="btn-glow w-full sm:w-auto">
        <a className={cls} href={eventConfig.registrationUrl} target="_blank" rel="noopener noreferrer">
          {label}
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </span>
    );
  }

  return (
    <span className="flex w-full flex-col gap-2 sm:w-auto">
      <span className="btn-glow w-full sm:w-auto">
        <button type="button" className={cls} aria-disabled="true" onClick={() => setNote(true)}>
          {label}
          <ArrowRight size={16} aria-hidden="true" />
        </button>
      </span>
      <span role="status" className="min-h-[1.25rem] font-tech text-[0.62rem] uppercase tracking-[0.18em] text-glow">
        {note ? 'Registration details are being configured.' : ''}
      </span>
    </span>
  );
}
