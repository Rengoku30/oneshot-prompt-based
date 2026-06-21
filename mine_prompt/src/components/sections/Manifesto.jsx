import { Container } from '../ui/Container'
import { Eyebrow } from '../ui/Atoms'

export function Manifesto() {
  return (
    <section id="manifesto" className="relative scroll-mt-24 bg-white">
      <div className="bg-grid pointer-events-none absolute inset-0 z-0" />
      <Container size="narrow" className="relative z-10 py-24 md:py-36 lg:py-44">
        <div className="flex items-center gap-4">
          <Eyebrow>Manifesto — 001</Eyebrow>
          <span className="h-px flex-1 bg-black/15" />
        </div>

        <p className="mt-10 font-display text-2xl font-medium leading-[1.35] tracking-tight text-black md:text-4xl lg:text-[2.75rem]">
          <span className="float-left mr-3 mt-2 inline-flex h-16 w-16 items-center justify-center border-2 border-black font-display text-3xl font-bold leading-none md:h-20 md:w-20 md:text-4xl">
            W
          </span>
          e believe a building should say less and mean more. We work in a single
          palette — concrete, stone, timber, and light — and we have spent
          twenty-five years learning how little of it we actually need.{' '}
          <span className="italic">Restraint is not a style we apply.</span> It is the
          standard against which every decision is measured, and usually found wanting.
        </p>

        <div className="mt-12 flex items-center gap-4">
          <span className="h-[3px] w-12 bg-black" />
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-black/50">
            Ida Meridian, Founding Partner
          </span>
        </div>
      </Container>
    </section>
  )
}
