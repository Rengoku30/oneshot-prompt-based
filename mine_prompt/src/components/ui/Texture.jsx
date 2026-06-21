import { cn } from '../../lib/cn'

const map = {
  lines: 'bg-lines',
  grid: 'bg-grid',
  diagonal: 'bg-diagonal',
  'lines-light': 'bg-lines-light',
  'diagonal-light': 'bg-diagonal-light',
  radial: 'bg-radial-light',
  noise: 'bg-noise',
}

export function Texture({ variant = 'lines', className }) {
  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 z-0', map[variant], className)}
      style={variant === 'noise' ? { opacity: 0.05 } : undefined}
    />
  )
}
