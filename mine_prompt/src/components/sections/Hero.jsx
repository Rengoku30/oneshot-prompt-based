import { Link } from 'react-router-dom'
import { Container } from '../ui/Container'
import { Eyebrow, Rule, Square } from '../ui/Atoms'
import { Button } from '../ui/Button'
import { studio } from '../../data/content'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="bg-lines pointer-events-none absolute inset-0 z-0" />
      <Container className="relative z-10 flex min-h-[calc(100vh-5rem)] flex-col justify-between pt-10 pb-10 md:pt-16">
        {/* top metadata row */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/10 pb-5">
          <Eyebrow>Est. {studio.established}</Eyebrow>
          <Eyebrow className="hidden sm:inline">
            {studio.locations.join(' / ')}
          </Eyebrow>
          <Eyebrow>Selected work — 1998 / 2024</Eyebrow>
        </div>

        {/* headline + image */}
        <div className="grid flex-1 grid-cols-1 items-center gap-10 py-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <h1
              className="font-display font-medium leading-[0.88] tracking-tighter text-black"
              style={{ fontSize: 'clamp(3.25rem, 13vw, 11.5rem)' }}
            >
              <span className="block">Architecture</span>
              <span className="block italic font-normal">as discipline.</span>
            </h1>

            <div className="mt-10 flex items-center gap-4">
              <span className="h-[3px] w-16 bg-black md:w-24" />
              <Square size={12} />
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-black/50">
                {studio.tagline}
              </span>
            </div>

            <p className="mt-8 max-w-xl font-serif text-lg leading-relaxed text-black/75 md:text-xl">
              {studio.statement}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button to="/work" variant="primary" arrow>
                Selected work
              </Button>
              <Button to="/studio" variant="ghost">
                The studio
              </Button>
            </div>
          </div>

          {/* tall image frame */}
          <div className="lg:col-span-4">
            <Link
              to="/work"
              className="group relative block border-2 border-black transition-all duration-100 focus-outline hover:border-[4px]"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="/images/hero.jpg"
                  alt="A towering minimalist concrete facade in stark black and white."
                  loading="eager"
                  className="h-full w-full object-cover grayscale transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <div className="absolute left-0 top-0 bg-black px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-white">
                House on the Cliff — 2023
              </div>
            </Link>
          </div>
        </div>

        {/* bottom rule + scroll cue */}
        <div className="flex items-center justify-between gap-4 border-t border-black/10 pt-5">
          <Rule weight="thin" className="flex-1" />
          <a
            href="#manifesto"
            className="group inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-black/50 focus-outline hover:text-black"
          >
            Scroll
            <ArrowDown
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-100 group-hover:translate-y-1"
            />
          </a>
          <Rule weight="thin" className="hidden flex-1 sm:block" />
        </div>
      </Container>
    </section>
  )
}
