import { useState } from 'react'
import { EVENT } from '../config/event'

type Props = {
  className?: string
  size?: 'md' | 'lg'
}

/** Framed official registration QR. Uses the supplied image only; never draws a fake code. */
export default function QrPanel({ className = '', size = 'md' }: Props) {
  const [failed, setFailed] = useState(false)
  const dim = size === 'lg' ? 'h-52 w-52 sm:h-60 sm:w-60' : 'h-44 w-44 sm:h-48 sm:w-48'

  return (
    <div className={`cyber-glass hud-frame inline-block p-3 ${className}`}>
      {failed ? (
        <div
          className={`${dim} flex flex-col items-center justify-center gap-2 border border-dashed border-crimson/60 p-4 text-center`}
        >
          <span className="font-orbitron text-xs font-bold uppercase tracking-widest text-ember">QR not supplied</span>
          <span className="font-mono text-[10px] uppercase leading-relaxed tracking-wider text-mute">
            Add the official file at public{EVENT.assets.registrationQr}
          </span>
        </div>
      ) : (
        <img
          src={EVENT.assets.registrationQr}
          alt={`Official registration QR code for ${EVENT.name}`}
          onError={() => setFailed(true)}
          className={`${dim} bg-white object-contain p-2`}
          style={{ imageRendering: 'pixelated' }}
        />
      )}
    </div>
  )
}
