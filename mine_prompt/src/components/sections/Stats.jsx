import { Container } from '../ui/Container'
import { Eyebrow } from '../ui/Atoms'
import { stats } from '../../data/content'

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* vertical-line texture on dark bg */}
      <div className="bg-lines-light pointer-events-none absolute inset-0 z-0" />
      <div className="bg-noise pointer-events-none absolute inset-0 z-0" style={{ opacity: 0.06 }} />
      <Container className="relative z-10 py-20 md:py-28">
        <div className="flex flex-col justify-between gap-6 border-b border-white/15 pb-8 md:flex-row md:items-end">
          <h2 className="max-w-xl font-display text-3xl font-medium leading-tight tracking-tight md:text-4xl">
            The practice, measured.
          </h2>
          <Eyebrow light>By the figures — {new Date().getFullYear()}</Eyebrow>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-y-12 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={
                'group relative px-2 md:px-6 ' +
                (i !== 0 ? 'md:border-l md:border-white/15' : '')
              }
            >
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="flex items-start font-display font-medium leading-none tracking-tighter">
                  <span className="text-6xl md:text-7xl lg:text-8xl">{s.value}</span>
                  {s.suffix && (
                    <span className="mt-1 text-3xl md:text-4xl">{s.suffix}</span>
                  )}
                </span>
                <span className="mt-4 block font-mono text-[0.68rem] uppercase tracking-[0.18em] text-white/55">
                  {s.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
