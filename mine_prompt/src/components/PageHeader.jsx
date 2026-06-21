import { Container } from './ui/Container'
import { Eyebrow } from './ui/Atoms'

export function PageHeader({ eyebrow, title, intro, meta }) {
  return (
    <section className="relative overflow-hidden border-b border-black bg-white">
      <div className="bg-lines pointer-events-none absolute inset-0 z-0" />
      <Container className="relative z-10 pb-14 pt-14 md:pb-20 md:pt-24">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1
          className="mt-8 font-display font-medium leading-[0.92] tracking-tighter text-black"
          style={{ fontSize: 'clamp(2.75rem, 9vw, 7rem)' }}
        >
          {title}
        </h1>
        {intro && (
          <p className="mt-8 max-w-2xl font-serif text-lg leading-relaxed text-black/75 md:text-xl">
            {intro}
          </p>
        )}
        {meta && (
          <dl className="mt-12 flex flex-wrap gap-x-12 gap-y-6 border-t border-black/15 pt-8">
            {meta.map((m) => (
              <div key={m.label}>
                <dt className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-black/45">
                  {m.label}
                </dt>
                <dd className="mt-2 font-display text-xl font-medium tracking-tight">
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </Container>
    </section>
  )
}
