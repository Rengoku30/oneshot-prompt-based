import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { cn } from '../../lib/cn'

const base =
  'group/btn inline-flex items-center justify-center gap-2.5 font-mono uppercase tracking-[0.18em] text-[0.7rem] font-medium select-none focus-outline transition-colors duration-100 leading-none'

const variants = {
  // black fills, inverts on hover — transparent border keeps layout stable
  primary:
    'border-2 border-black bg-black text-white px-8 py-4 hover:bg-white hover:text-black',
  // outline fills black on hover
  secondary:
    'border-2 border-black bg-transparent text-black px-8 py-4 hover:bg-black hover:text-white',
  // text link — underline appears on hover
  ghost:
    'bg-transparent text-black px-0 py-2 underline-offset-[6px] decoration-1 hover:underline',
  // for dark/inverted sections
  invert:
    'border-2 border-white bg-white text-black px-8 py-4 hover:bg-transparent hover:text-white',
  invertGhost:
    'bg-transparent text-white px-0 py-2 underline-offset-[6px] decoration-1 hover:underline',
}

export function Button({
  variant = 'primary',
  to,
  href,
  arrow = false,
  children,
  className,
  ...rest
}) {
  const cls = cn(base, variants[variant] || variants.primary, className)
  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          size={15}
          strokeWidth={1.5}
          className="transition-transform duration-100 group-hover/btn:translate-x-1"
        />
      )}
    </>
  )
  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {inner}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {inner}
      </a>
    )
  }
  return (
    <button className={cls} {...rest}>
      {inner}
    </button>
  )
}
