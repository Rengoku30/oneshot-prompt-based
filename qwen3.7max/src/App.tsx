import { Menu, X } from "lucide-react";
import { useState } from "react";
import Editorial from "./sections/Editorial";
import Showcase from "./sections/Showcase";
import Commerce from "./sections/Commerce";
import Support from "./sections/Support";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-white text-black">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-black bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8 lg:px-12">
          <a href="#main" className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center border-2 border-black">
              <div className="h-2 w-2 bg-black" />
            </div>
            <span className="font-display text-xl font-bold tracking-tight">
              ATELIER NOIR
            </span>
          </a>

          <div className="hidden items-center gap-12 lg:flex">
            <a
              href="#work"
              className="smallcaps text-black hover:underline"
            >
              Work
            </a>
            <a
              href="#studio"
              className="smallcaps text-black hover:underline"
            >
              Studio
            </a>
            <a
              href="#journal"
              className="smallcaps text-black hover:underline"
            >
              Journal
            </a>
            <a
              href="#contact"
              className="smallcaps text-black hover:underline"
            >
              Contact
            </a>
          </div>

          <div className="hidden items-center gap-6 lg:flex">
            <a
              href="#contact"
              className="btn group relative inline-flex items-center gap-3 bg-black px-8 py-4 font-display text-sm font-medium uppercase tracking-widest text-white transition-colors duration-100 hover:bg-white hover:text-black hover:border hover:border-black focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-3"
            >
              Commission
              <span className="transition-transform duration-100 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="border-t border-black bg-white lg:hidden">
            <div className="flex flex-col px-6 py-6">
              <a
                href="#work"
                className="border-b border-black py-4 font-display text-lg"
                onClick={() => setMenuOpen(false)}
              >
                Work
              </a>
              <a
                href="#studio"
                className="border-b border-black py-4 font-display text-lg"
                onClick={() => setMenuOpen(false)}
              >
                Studio
              </a>
              <a
                href="#journal"
                className="border-b border-black py-4 font-display text-lg"
                onClick={() => setMenuOpen(false)}
              >
                Journal
              </a>
              <a
                href="#contact"
                className="border-b border-black py-4 font-display text-lg"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="#contact"
                className="mt-6 bg-black py-4 text-center font-display text-sm font-medium uppercase tracking-widest text-white"
                onClick={() => setMenuOpen(false)}
              >
                Commission →
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main id="main" className="relative">
        <section className="relative min-h-screen border-b-[8px] border-black pt-24">
          {/* Grid texture */}
          <div className="pointer-events-none absolute inset-0 texture-grid opacity-30" />

          <div className="relative mx-auto max-w-7xl px-6 pb-24 md:px-8 lg:px-12">
            {/* Editorial metadata */}
            <div className="flex items-start justify-between pt-16 pb-12">
              <div className="space-y-3">
                <p className="smallcaps text-black">Vol. XXVI — No. 03</p>
                <p className="smallcaps text-muted-foreground">
                  Architecture & Design
                </p>
              </div>
              <div className="hidden text-right md:block">
                <p className="smallcaps text-black">Est. MMXII</p>
                <p className="smallcaps text-muted-foreground">
                  Zürich — New York
                </p>
              </div>
            </div>

            {/* Main headline */}
            <div className="relative pb-16">
              <h1 className="font-display text-6xl font-black leading-none tracking-tighter md:text-8xl lg:text-9xl">
                NOIR.
              </h1>

              {/* Decorative thick rule + square */}
              <div className="mt-8 flex items-center gap-4">
                <div className="rule-thick flex-1" />
                <div className="h-8 w-8 border-4 border-black" />
              </div>

              <p className="mt-12 max-w-2xl font-display text-2xl font-normal leading-tight italic md:text-3xl">
                An architecture and design studio practicing austere, editorial,
                and timeless work. We believe restraint is the ultimate form of
                expression.
              </p>
            </div>

            {/* Two-column intro */}
            <div className="grid gap-12 border-t-2 border-black pt-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                  Reduction to Essence
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Every design decision must stand on its own merit. There are no
                  accent colors to hide behind, no gradients to soften edges, no
                  shadows to create false depth. This is design as discipline.
                </p>
              </div>
              <div className="flex flex-col justify-end">
                <div className="space-y-4">
                  <div className="flex items-baseline justify-between border-b border-black pb-3">
                    <span className="font-display text-xl">Projects</span>
                    <span className="font-mono text-sm">147</span>
                  </div>
                  <div className="flex items-baseline justify-between border-b border-black pb-3">
                    <span className="font-display text-xl">Awards</span>
                    <span className="font-mono text-sm">38</span>
                  </div>
                  <div className="flex items-baseline justify-between border-b border-black pb-3">
                    <span className="font-display text-xl">Years</span>
                    <span className="font-mono text-sm">14</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA row */}
            <div className="mt-16 flex flex-col gap-6 border-t-2 border-black pt-12 md:flex-row md:items-center md:justify-between">
              <a
                href="#work"
                className="btn group inline-flex items-center gap-3 border-2 border-black bg-white px-8 py-4 font-display text-sm font-medium uppercase tracking-widest text-black transition-colors duration-100 hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-3"
              >
                View Selected Work
                <span className="transition-transform duration-100 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#studio"
                className="btn inline-flex items-center gap-3 font-display text-sm font-medium uppercase tracking-widest text-black underline hover:text-muted-foreground focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-3"
              >
                About the Studio
              </a>
            </div>
          </div>

          {/* Ticker bar */}
          <div className="overflow-hidden border-t-2 border-black bg-black text-white">
            <div className="flex animate-ticker whitespace-nowrap py-4">
              <div className="flex shrink-0 items-center gap-12 px-6 font-mono text-sm uppercase tracking-widest">
                <span>◆ Architecture</span>
                <span>◆ Interiors</span>
                <span>◆ Curation</span>
                <span>◆ Consultation</span>
                <span>◆ Editorial Design</span>
                <span>◆ Brand Identity</span>
                <span>◆ Architecture</span>
                <span>◆ Interiors</span>
                <span>◆ Curation</span>
                <span>◆ Consultation</span>
                <span>◆ Editorial Design</span>
                <span>◆ Brand Identity</span>
              </div>
            </div>
          </div>
        </section>

        <Editorial />
        <Showcase />
        <Commerce />
        <Support />

        {/* Footer */}
        <footer className="border-t-[8px] border-black bg-white">
          <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 lg:px-12">
            <div className="grid gap-16 lg:grid-cols-3">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center border-2 border-black">
                    <div className="h-2 w-2 bg-black" />
                  </div>
                  <span className="font-display text-xl font-bold tracking-tight">
                    ATELIER NOIR
                  </span>
                </div>
                <p className="mt-6 max-w-xs text-base leading-relaxed text-muted-foreground">
                  An architecture and design studio practicing austere,
                  editorial, and timeless work.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="smallcaps mb-4 text-black">Studio</p>
                  <div className="space-y-3">
                    <a href="#work" className="block text-base hover:underline">
                      Work
                    </a>
                    <a href="#studio" className="block text-base hover:underline">
                      About
                    </a>
                    <a href="#journal" className="block text-base hover:underline">
                      Journal
                    </a>
                    <a href="#contact" className="block text-base hover:underline">
                      Contact
                    </a>
                  </div>
                </div>
                <div>
                  <p className="smallcaps mb-4 text-black">Services</p>
                  <div className="space-y-3">
                    <a href="#" className="block text-base hover:underline">
                      Architecture
                    </a>
                    <a href="#" className="block text-base hover:underline">
                      Interiors
                    </a>
                    <a href="#" className="block text-base hover:underline">
                      Curation
                    </a>
                    <a href="#" className="block text-base hover:underline">
                      Consultation
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <p className="smallcaps mb-4 text-black">Contact</p>
                <div className="space-y-3 text-base">
                  <p>Bahnhofstrasse 42</p>
                  <p>8001 Zürich, Switzerland</p>
                  <p className="pt-4">studio@ateliernoir.ch</p>
                  <p>+41 44 123 45 67</p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex flex-col gap-6 border-t-2 border-black pt-8 md:flex-row md:items-center md:justify-between">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                © MMXXVI Atelier Noir. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="font-mono text-xs uppercase tracking-widest hover:underline">
                  Privacy
                </a>
                <a href="#" className="font-mono text-xs uppercase tracking-widest hover:underline">
                  Terms
                </a>
                <a href="#" className="font-mono text-xs uppercase tracking-widest hover:underline">
                  Imprint
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
