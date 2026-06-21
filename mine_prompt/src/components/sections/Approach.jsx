import { Sun, Layers, Minus, Mountain } from 'lucide-react'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { Eyebrow } from '../ui/Atoms'
import { approach } from '../../data/content'

const icons = { Sun, Layers, Minus, Mountain }

export function Approach() {
  return (
    <Section id="approach" texture="lines" className="bg-white">
      <Container className="py-24 md:py-32 lg:py-40">
        <div className="grid grid-cols-1 gap-10 border-b border-black pb-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Eyebrow>The discipline</Eyebrow>
            <h2 className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
              Four convictions,
              <br />
              <span className="italic">held without exception.</span>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="font-serif text-lg leading-relaxed text-black/70 md:text-xl">
              We do not have a house style. We have a house discipline — a small set
              of beliefs we apply to every commission, regardless of size, budget, or
              fashion. These four are the spine of every building we have made.
            </p>
          </div>
        </div>

        <div className="mt-px grid grid-cols-1 border-l border-t border-black sm:grid-cols-2 lg:grid-cols-4">
          {approach.map((item) => {
            const Icon = icons[item.icon]
            return (
              <article
                key={item.no}
                className="group relative flex min-h-[19rem] flex-col border-b border-r border-black bg-white p-8 transition-colors duration-100 hover:bg-black hover:text-white"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-[0.2em] text-black/40 group-hover:text-white/50">
                    {item.no}
                  </span>
                  {Icon && (
                    <Icon
                      size={22}
                      strokeWidth={1.25}
                      className="text-black transition-colors duration-100 group-hover:text-white"
                    />
                  )}
                </div>

                <h3 className="mt-10 font-display text-3xl font-medium tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-4 font-serif text-base leading-relaxed text-black/70 transition-colors duration-100 group-hover:text-white/75">
                  {item.text}
                </p>

                <span className="mt-auto pt-8">
                  <span className="block h-px w-8 bg-black transition-all duration-100 group-hover:w-full group-hover:bg-white" />
                </span>
              </article>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
