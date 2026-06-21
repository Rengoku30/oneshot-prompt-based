import { cn } from '../../lib/cn'

// Mono uppercase label / eyebrow
export function Eyebrow({ children, className, light = false, as: Tag = 'span' }) {
  return (
    <Tag
      className={cn(
        'font-mono text-[0.7rem] uppercase tracking-[0.22em]',
        light ? 'text-white/70' : 'text-black/60',
        className
      )}
    >
      {children}
    </Tag>
  )
}

// Horizontal rule with controllable weight
export function Rule({ weight = 'thin', className, light = false }) {
  const w =
    {
      hairline: 'border-t border-[#E5E5E5]',
      thin: 'border-t border-black',
      medium: 'border-t-2 border-black',
      thick: 'border-t-4 border-black',
      ultra: 'border-t-8 border-black',
    }[weight] || 'border-t border-black'
  return (
    <hr
      className={cn(
        w,
        light && 'border-white',
        weight === 'hairline' && light && 'border-white/20',
        className
      )}
    />
  )
}

// Small bordered square used as visual punctuation
export function Square({ className, size = 12, filled = false }) {
  return (
    <span
      aria-hidden="true"
      style={{ width: size, height: size }}
      className={cn(
        'inline-block shrink-0 border border-black',
        filled && 'bg-black',
        className
      )}
    />
  )
}
