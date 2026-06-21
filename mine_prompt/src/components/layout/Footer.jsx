import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '../ui/Container'
import { Rule } from '../ui/Atoms'
import { nav, studio, socials, press } from '../../data/content'

export function Footer() {
  return (
    <footer className="relative border-t-8 border-black bg-white">
      {/* press strip */}
      <Container className="border-b border-black/10 py-8">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-black/40">
            As featured in
          </span>
          {press.map((p) => (
            <span
              key={p}
              className="font-display text-base italic text-black/70"
            >
              {p}
            </span>
          ))}
        </div>
      </Container>

      <Container className="py-16 md:py-24">
        <div className="grid grid-cols-2 gap-y-12 md:grid-cols-12 md:gap-8">
          {/* wordmark + statement */}
          <div className="col-span-2 md:col-span-5">
            <Link to="/" className="focus-outline inline-block">
              <span className="font-display text-5xl font-bold leading-none tracking-tight md:text-6xl">
                {studio.name}
              </span>
            </Link>
            <p className="mt-6 max-w-sm font-serif text-lg leading-relaxed text-black/70">
              {studio.statement}
            </p>
          </div>

          {/* navigation */}
          <div className="md:col-span-2 md:col-start-7">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-black/40">
              Index
            </p>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="group inline-flex items-center gap-1 font-serif text-lg text-black focus-outline"
                  >
                    {item.label}
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.5}
                      className="opacity-0 transition-opacity duration-100 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* studio */}
          <div className="md:col-span-2">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-black/40">
              Studio
            </p>
            <div className="mt-5 space-y-4 font-serif text-base text-black/70">
              <address className="not-italic leading-relaxed">
                {studio.address.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </address>
              <address className="not-italic leading-relaxed">
                {studio.addressNY.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </address>
            </div>
          </div>

          {/* contact */}
          <div className="md:col-span-3">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-black/40">
              Contact
            </p>
            <div className="mt-5 space-y-3 font-serif text-base text-black/70">
              <a
                href={`mailto:${studio.email}`}
                className="block underline-offset-4 hover:underline focus-outline"
              >
                {studio.email}
              </a>
              <a
                href={`tel:${studio.phone.replace(/\s/g, '')}`}
                className="block underline-offset-4 hover:underline focus-outline"
              >
                {studio.phone}
              </a>
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.to}
                    className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-black/55 underline-offset-4 hover:text-black hover:underline focus-outline"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Rule weight="thin" className="my-10" />

        {/* oversized wordmark graphic */}
        <div
          aria-hidden="true"
          className="select-none text-center"
        >
          <span className="stroke-text font-display text-[22vw] font-black leading-none tracking-tighter md:text-[16vw]">
            MERIDIAN
          </span>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-black/10 pt-6 md:flex-row md:items-center">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-black/45">
            © {new Date().getFullYear()} {studio.full}. Est. {studio.established}.
          </p>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-black/45">
            Architecture as Discipline
          </p>
        </div>
      </Container>
    </footer>
  )
}
