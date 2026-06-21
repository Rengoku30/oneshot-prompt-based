import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { studio } from '../data/content'

export function NotFound() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="bg-grid pointer-events-none absolute inset-0 z-0" />
      <Container className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
        <span
          className="stroke-text select-none font-display font-black leading-none tracking-tighter"
          style={{ fontSize: 'clamp(8rem, 30vw, 22rem)' }}
        >
          404
        </span>
        <p className="mt-6 max-w-md font-serif text-lg leading-relaxed text-black/70">
          This page does not exist — or it was, in the spirit of the studio, removed
          until only the necessary remained.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button to="/" variant="primary" arrow>
            Return home
          </Button>
          <Button to="/work" variant="ghost">
            See the work
          </Button>
        </div>
        <p className="mt-12 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-black/40">
          {studio.name} — Architects
        </p>
      </Container>
    </section>
  )
}
