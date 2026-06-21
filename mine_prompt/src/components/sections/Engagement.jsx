import { Check } from 'lucide-react'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { Eyebrow } from '../ui/Atoms'
import { Button } from '../ui/Button'
import { engagement } from '../../data/content'
import { cn } from '../../lib/cn'

export function Engagement() {
  return (
    <Section texture="grid" className="bg-white">
      <Container className="py-24 md:py-32 lg:py-40">
        <div className="grid grid-cols-1 gap-10 border-b border-black pb-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Eyebrow>Engagement</Eyebrow>
            <h2 className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
              Three ways
              <br />
              <span className="italic">to begin.</span>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="font-serif text-lg leading-relaxed text-black/70 md:text-xl">
              Every relationship starts with conversation. These are the forms that
              conversation can take — from a single foundational study to a lifetime
              of counsel. Fees are discussed plainly, after we understand the work.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 lg:gap-8">
          {engagement.map((tier) => (
            <article
              key={tier.name}
              className={cn(
                'relative flex flex-col border-2 p-8 transition-colors duration-100 md:p-10',
                tier.elevated
                  ? 'border-black bg-black text-white md:-mt-6 md:mb-[-1.5rem] lg:-mt-10'
                  : 'border-black bg-white text-black hover:bg-black hover:text-white'
              )}
            >
              {tier.elevated && (
                <span className="absolute right-0 top-0 bg-white px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-black">
                  The practice
                </span>
              )}

              <h3
                className={cn(
                  'font-display text-3xl font-medium tracking-tight',
                  tier.elevated ? 'text-white' : 'text-black'
                )}
              >
                {tier.name}
              </h3>
              <p
                className={cn(
                  'mt-3 font-serif text-base leading-relaxed',
                  tier.elevated ? 'text-white/70' : 'text-black/70'
                )}
              >
                {tier.summary}
              </p>

              <div
                className={cn(
                  'mt-8 border-t pt-6',
                  tier.elevated ? 'border-white/20' : 'border-black/15'
                )}
              >
                <span className="font-display text-4xl font-medium tracking-tight">
                  {tier.price}
                </span>
                <span className="ml-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] opacity-60">
                  {tier.cadence}
                </span>
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 font-serif text-base"
                  >
                    <Check
                      size={16}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0"
                    />
                    <span className={tier.elevated ? 'text-white/85' : 'text-black/80'}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Button
                  to="/contact"
                  variant={tier.elevated ? 'invert' : 'secondary'}
                  arrow
                  className="w-full"
                >
                  Enquire
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
