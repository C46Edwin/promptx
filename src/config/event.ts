/**
 * Single source of truth for every event-specific value on the site.
 * Edit here and the whole website updates.
 */

/**
 * ⚠️ ACTION REQUIRED: paste the OFFICIAL registration URL between the quotes.
 * Until this is filled in, the registration buttons show a "setup needed" notice
 * instead of linking anywhere. Do not guess or invent this URL.
 */
const REGISTRATION_URL = ''

export const EVENT = {
  name: 'PROMPTX 2026',
  shortName: 'PROMPTX',
  year: '2026',
  title: 'The Ultimate AI Showdown',
  date: '14 October 2026',
  time: '11:00 AM',
  venue: 'AIML Lab, South Block',
  institution: 'Vidya Academy of Science and Technology',
  format: 'Team Competition',
  teamSize: '2 participants',
  duration: '2.5 hours',
  registrationUrl: REGISTRATION_URL,
  assets: {
    vidyaLogo: '/assets/vidya-logo.png',
    vidyidhLogo: '/assets/vidyidh-logo.png',
    registrationQr: '/assets/promptx-registration-qr.png',
    heroVideo: '/assets/promptx-hero.mp4',
    finalVideo: '/assets/promptx-final.mp4',
  },
} as const

export const isRegistrationConfigured = EVENT.registrationUrl.trim().length > 0

export const NAV_LINKS = [
  { label: 'HOME', href: '#home' },
  { label: 'THE ARENA', href: '#arena' },
  { label: 'ROUNDS', href: '#rounds' },
  { label: 'REGISTER', href: '#register' },
] as const
