import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { Eyebrow } from '../ui/Atoms'
import { testimonials } from '../../data/content'

export function Testimonials() {
  return (
    <Section texture="lines" className="bg-white">
      <Container className="py-24 md:py-32 lg:py-40">
        <div className="flex items-end justify-between gap-6 border-b border-black pb-8">
          <div>
            <Eyebrow>In their words</Eyebrow>
            <h2 className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
              What clients
              <br />
              <span className="italic">say, years later.</span>
            </h2>
          </div>
          <span className="hidden font-display text-[7rem] leading-none text-black/10 md:block">
            &rdquo;
          </span>
        </div>

        <div className="grid grid-cols-1 gap-px bg-black md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="group relative flex flex-col justify-between bg-white p-8 md:p-10 transition-colors duration-100"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-6 top-4 font-display text-8xl leading-none text-black/5 transition-opacity duration-100 group-hover:text-black/10"
              >
                &rdquo;
              </span>

              <blockquote className="relative font-display text-xl italic leading-snug text-black md:text-2xl">
                {t.quote}
              </blockquote>

              <figcaption className="mt-10 border-t border-black/15 pt-5 transition-all duration-100 group-hover:border-t-[3px] group-hover:border-black">
                <p className="font-display text-lg font-medium tracking-tight">
                  {t.name}
                </p>
                <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-black/55">
                  {t.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  )
}
