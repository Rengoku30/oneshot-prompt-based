import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { nav, studio } from '../../data/content'
import { cn } from '../../lib/cn'
import { Button } from '../ui/Button'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // close mobile menu on navigation
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-black focus:px-5 focus:py-3 focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest focus:text-white"
      >
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/15 bg-white/90 backdrop-blur-[2px]">
        <div className="mx-auto flex h-16 items-center justify-between px-6 md:h-20 md:px-8 lg:px-12">
          {/* wordmark */}
          <Link
            to="/"
            className="group flex items-baseline gap-2 focus-outline"
            aria-label={`${studio.name} — home`}
          >
            <span className="font-display text-2xl font-bold leading-none tracking-tight md:text-3xl">
              {studio.name}
            </span>
            <span className="hidden font-display text-lg italic text-black/40 sm:inline md:text-xl">
              architects
            </span>
          </Link>

          {/* desktop nav */}
          <nav className="hidden items-center gap-10 md:flex">
            {nav.map((item, i) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="group relative focus-outline py-2"
              >
                {({ isActive }) => (
                  <span
                    className={cn(
                      'font-mono text-[0.72rem] uppercase tracking-[0.2em] transition-colors duration-100',
                      isActive ? 'text-black' : 'text-black/55 group-hover:text-black'
                    )}
                  >
                    <span className="mr-1 text-black/30">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {item.label}
                    <span
                      className={cn(
                        'absolute -bottom-0.5 left-0 h-px w-full origin-left bg-black transition-transform duration-100',
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      )}
                    />
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button to="/contact" variant="secondary" className="hidden lg:inline-flex">
              Enquire
            </Button>
            {/* mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="focus-outline -mr-2 inline-flex h-11 w-11 items-center justify-center border border-black md:hidden"
            >
              {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* mobile fullscreen menu — inverted */}
      <div
        className={cn(
          'fixed inset-0 z-[60] bg-black text-white transition-opacity duration-100 md:hidden',
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        )}
      >
        <div className="bg-noise pointer-events-none absolute inset-0" style={{ opacity: 0.06 }} />
        <div className="relative flex h-full flex-col px-6 pt-24 pb-10">
          <nav className="flex flex-1 flex-col justify-center gap-1">
            {nav.map((item, i) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="group flex items-baseline gap-4 border-b border-white/15 py-5 focus-outline-light"
              >
                <span className="font-mono text-xs text-white/40">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-display text-5xl font-medium tracking-tight transition-transform duration-100 group-hover:translate-x-2">
                  {item.label}
                </span>
              </NavLink>
            ))}
          </nav>
          <div className="flex flex-col gap-4 pt-8">
            <p className="font-mono text-xs uppercase tracking-widest text-white/50">
              {studio.email}
            </p>
            <p className="font-mono text-xs uppercase tracking-widest text-white/50">
              {studio.locations.join(' / ')}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
