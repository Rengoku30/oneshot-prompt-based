import { Texture } from './Texture'
import { cn } from '../../lib/cn'

export function Section({ id, texture, className, children, ...rest }) {
  return (
    <section id={id} className={cn('relative', className)} {...rest}>
      {texture && <Texture variant={texture} />}
      <div className="relative z-10">{children}</div>
    </section>
  )
}
