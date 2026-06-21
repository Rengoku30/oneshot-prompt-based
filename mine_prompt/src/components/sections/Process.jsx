import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { Eyebrow } from '../ui/Atoms'
import { process } from '../../data/content'

export function Process() {
  return (
    <Section texture="diagonal" className="bg-muted">
      <Container className="py-24 md:py-32 lg:py-40">
        <div className="grid grid-cols-1 gap-10 border-b border-black pb-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Eyebrow>Process</Eyebrow>
            <h2 className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
              Four movements,
              <br />
              <span className="italic">played slowly.</span>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="font-serif text-lg leading-relaxed text-black/70 md:text-xl">
              Architecture is not a sprint to a render. It is a sequence of patient,
              distinct phases — each given the time it demands. We do not skip steps,
              and we do not rush the slow ones.
            </p>
          </div>
        </div>

        <ol className="mt-px grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <li
              key={p.no}
              className={
                'group border-black bg-muted pt-8 transition-colors duration-100 ' +
                (i !== 0 ? 'lg:border-l' : '') +
                ' border-t-2 hover:bg-black hover:text-white'
              }
            >
              <div className="px-6 pb-10">
                <div className="flex items-center justify-between">
                  <span className="font-display text-5xl font-medium leading-none tracking-tight md:text-6xl">
                    {p.no}
                  </span>
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-black/45 group-hover:text-white/55">
                    {p.weeks}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-2xl font-medium tracking-tight">
                  {p.phase}
                </h3>
                <p className="mt-4 font-serif text-base leading-relaxed text-black/70 transition-colors duration-100 group-hover:text-white/75">
                  {p.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
