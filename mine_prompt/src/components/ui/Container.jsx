import { cn } from '../../lib/cn'

export function Container({ className, children, size = 'default', ...rest }) {
  const max =
    size === 'wide'
      ? 'max-w-8xl'
      : size === 'narrow'
        ? 'max-w-4xl'
        : size === 'prose'
          ? 'max-w-3xl'
          : 'max-w-6xl'
  return (
    <div className={cn('mx-auto w-full px-6 md:px-8 lg:px-12', max, className)} {...rest}>
      {children}
    </div>
  )
}
