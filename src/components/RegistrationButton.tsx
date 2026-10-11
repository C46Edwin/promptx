import { EVENT, isRegistrationConfigured } from '../config/event'

type Props = {
  label: string
  size?: 'lg' | 'xl'
  className?: string
  /** Show the "link not supplied" notice under the button when the URL is missing. */
  showSetupNote?: boolean
}

/** The one registration link used everywhere. Opens the official URL from src/config/event.ts in a new tab. */
export default function RegistrationButton({ label, size = 'lg', className = '', showSetupNote = true }: Props) {
  const sizing =
    size === 'xl'
      ? 'px-8 py-6 text-lg sm:text-2xl md:px-14'
      : 'px-6 py-5 text-base sm:text-lg md:px-10'

  return (
    <div className={className}>
      <a
        href={isRegistrationConfigured ? EVENT.registrationUrl : undefined}
        target="_blank"
        rel="noopener noreferrer"
        aria-disabled={!isRegistrationConfigured}
        role={isRegistrationConfigured ? undefined : 'link'}
        tabIndex={0}
        className={`btn-arena w-full sm:w-auto ${sizing}`}
      >
        {label}
      </a>
      {!isRegistrationConfigured && showSetupNote && (
        <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-ember">
          Setup needed: add the official registration URL in src/config/event.ts
        </p>
      )}
    </div>
  )
}
