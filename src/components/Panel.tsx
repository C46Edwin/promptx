import { useRef, type CSSProperties, type MouseEvent, type ReactNode } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface PanelProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  tilt?: boolean;
  lift?: boolean;
  cut?: number;
}

/** Angular, clip-path framed panel with crimson edge lighting. */
export function Panel({ children, className = '', innerClassName = '', tilt = false, lift = false, cut = 16 }: PanelProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!tilt || reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.setProperty('--ry', `${(x * 7).toFixed(2)}deg`);
    ref.current.style.setProperty('--rx', `${(-y * 7).toFixed(2)}deg`);
  };
  const onLeave = () => {
    ref.current?.style.setProperty('--rx', '0deg');
    ref.current?.style.setProperty('--ry', '0deg');
  };

  return (
    <div
      ref={ref}
      className={`panel-wrap ${lift ? 'panel-lift' : ''} ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="frame" style={{ '--cut': `${cut}px` } as CSSProperties}>
        <div className={`frame-in ${innerClassName}`}>{children}</div>
      </div>
    </div>
  );
}
