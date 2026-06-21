import { Container } from '../ui/Container'
import { Eyebrow } from '../ui/Atoms'
import { Button } from '../ui/Button'
import { studio } from '../../data/content'

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="bg-radial-light pointer-events-none absolute inset-0 z-0" />
      <div className="bg-noise pointer-events-none absolute inset-0 z-0" style={{ opacity: 0.05 }} />

      <Container className="relative z-10 py-28 md:py-40 lg:py-52">
        <div className="flex items-center gap-4">
          <Eyebrow light>Begin</Eyebrow>
          <span className="h-px flex-1 bg-white/20" />
        </div>

        <h2
          className="mt-8 font-display font-medium leading-[0.9] tracking-tighter"
          style={{ fontSize: 'clamp(3rem, 11vw, 10rem)' }}
        >
          <span className="block">Tell us</span>
          <span className="block italic">what you intend</span>
          <span className="block">to build.</span>
        </h2>

        <p className="mt-10 max-w-xl font-serif text-lg leading-relaxed text-white/70 md:text-xl">
          We take on a small number of commissions each year. If you have a site, a
          brief, or only an instinct, write to us. Conversations cost nothing and
          obligate nothing.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-6">
          <Button to="/contact" variant="invert" arrow>
            Start a project
          </Button>
          <a
            href={`mailto:${studio.email}`}
            className="font-display text-2xl italic underline-offset-[6px] decoration-1 hover:underline focus-outline-light md:text-3xl"
          >
            {studio.email}
          </a>
        </div>
      </Container>
    </section>
  )
}
