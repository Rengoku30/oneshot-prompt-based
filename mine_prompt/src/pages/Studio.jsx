import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { Eyebrow } from '../components/ui/Atoms'
import { FinalCTA } from '../components/sections/FinalCTA'
import { studio, awards, team } from '../data/content'

const initials = (name) =>
  name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')

export function Studio() {
  return (
    <>
      <PageHeader
        eyebrow={`The Studio — Est. ${studio.established}`}
        title={
          <>
            A practice
            <br />
            <span className="italic">of restraint.</span>
          </>
        }
        intro={studio.statement}
        meta={[
          { label: 'Founded', value: studio.established },
          { label: 'Studios', value: studio.locations.join(' — ') },
          { label: 'Team', value: '18 architects' },
          { label: 'Built in', value: '14 countries' },
        ]}
      />

      {/* story */}
      <Section texture="grid" className="bg-white">
        <Container className="py-24 md:py-32 lg:py-40">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <div className="group relative block border-2 border-black transition-all duration-100 hover:border-[4px]">
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src="/images/work-reading.jpg"
                    alt="Interior of a long, daylit library reading room."
                    loading="lazy"
                    className="h-full w-full object-cover grayscale transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <Eyebrow>Origin</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
                Twenty-five years of saying no.
              </h2>

              <p className="mt-8 font-serif text-lg leading-relaxed text-black/80">
                <span className="float-left mr-3 mt-2 inline-flex h-14 w-14 items-center justify-center border-2 border-black font-display text-2xl font-bold leading-none md:h-16 md:w-16 md:text-3xl">
                  M
                </span>
                eridian began in 1998 as a single room above a Copenhagen bookshop,
                with one draughtsman, one pencil, and a stubborn refusal to build
                anything the founder would not want to live in. That room is gone. The
                refusal is not.
              </p>
              <p className="mt-6 font-serif text-lg leading-relaxed text-black/80">
                Today we are eighteen, split between Copenhagen and New York, working
                on a deliberately small number of commissions at any time. We have
                grown only as slowly as our discipline would allow — and we have turned
                down more work than we have accepted.
              </p>

              <div className="mt-10">
                <Link
                  to="/journal"
                  className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] focus-outline"
                >
                  Read the journal
                  <ArrowRight
                    size={15}
                    strokeWidth={1.5}
                    className="transition-transform duration-100 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* awards */}
      <div className="border-t-4 border-black bg-white" />
      <Section texture="lines" className="bg-muted">
        <Container className="py-24 md:py-32 lg:py-40">
          <div className="flex items-end justify-between gap-6 border-b border-black pb-8">
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-5xl">
              Recognition
            </h2>
            <Eyebrow>Selected — 2016/2024</Eyebrow>
          </div>

          <ul className="mt-2">
            {awards.map((a) => (
              <li
                key={a.year + a.name}
                className="group flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-black/15 py-5"
              >
                <span className="w-14 shrink-0 font-mono text-sm text-black/55">
                  {a.year}
                </span>
                <span className="font-display text-xl font-medium tracking-tight md:text-2xl">
                  {a.name}
                </span>
                <span className="mx-2 hidden flex-1 border-b border-dotted border-black/35 self-center md:block" />
                <span className="font-serif italic text-black/70">{a.project}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* team */}
      <div className="border-t-4 border-black bg-white" />
      <Section texture="grid" className="bg-white">
        <Container className="py-24 md:py-32 lg:py-40">
          <div className="flex items-end justify-between gap-6 border-b border-black pb-8">
            <div>
              <Eyebrow>People</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
                The hands behind the drawings.
              </h2>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-px border border-black bg-black sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <article
                key={m.name}
                className="group flex flex-col bg-white p-8 transition-colors duration-100 hover:bg-black hover:text-white md:p-10"
              >
                <span className="font-display text-6xl font-bold leading-none tracking-tighter md:text-7xl">
                  {initials(m.name)}
                </span>
                <h3 className="mt-8 font-display text-2xl font-medium tracking-tight">
                  {m.name}
                </h3>
                <p className="mt-1 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-black/55 transition-colors duration-100 group-hover:text-white/60">
                  {m.role}
                </p>
                <p className="mt-5 font-serif text-base leading-relaxed text-black/70 transition-colors duration-100 group-hover:text-white/75">
                  {m.note}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  )
}
