import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onOpenConsultation }) => {
  return (
    <section id="main-content" className="relative w-full bg-white pt-16 pb-24 md:pt-24 md:pb-32 lg:pt-32 lg:pb-40 border-b-4 border-black overflow-hidden">
      {/* Background textures */}
      <div className="texture-horizontal-lines"></div>
      <div className="texture-noise"></div>

      <div className="relative z-10 max-w-[72rem] mx-auto px-6 md:px-8 lg:px-12">
        {/* Upper Metadata / Serial Tag */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 font-mono text-xs uppercase tracking-widest text-[#525252]">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-black inline-block"></span>
            <span>MMXXVI // VOLUME 04</span>
          </span>
          <span>CURATORIAL ARCHIVE & MONOGRAPH</span>
          <span>EDITION OF 500</span>
        </div>

        {/* Oversized Hero Typography */}
        <div className="mb-12">
          <h1 className="font-display font-bold text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] lg:leading-[0.85] tracking-tighter text-black select-none uppercase">
            AUSTERE
          </h1>
          <h2 className="font-display italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight text-black mt-4 md:mt-6 max-w-4xl">
            The uncompromised discipline of strict reduction. Where restraint manifests as absolute authority.
          </h2>
        </div>

        {/* Hero Decorative Elements: Thick rule with small bordered square for visual punctuation */}
        <div className="flex items-center w-full my-12">
          <div className="flex-1 h-1 bg-black"></div>
          <div className="w-4 h-4 bg-black border-2 border-white ring-2 ring-black ml-2"></div>
        </div>

        {/* Two-Column Lead Paragraph and Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-4">
          <div className="lg:col-span-7 space-y-6 text-lg md:text-xl font-normal leading-relaxed text-black">
            <p>
              Minimalist Monochrome strips architecture, fine typography, and physical object curation down to its most fundamental elements: true black, pure white, and pristine geometry.
            </p>
            <p className="text-sm font-mono tracking-wider text-[#525252] uppercase">
              No accent colors. No false depth. No compromise. Every structural line stands on its own merit.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4">
            {/* Primary Button */}
            <button
              onClick={onOpenConsultation}
              className="w-full bg-black text-white px-8 py-4 font-mono text-sm uppercase tracking-widest font-medium border-2 border-black hover:bg-white hover:text-black focus-ring-primary transition-none flex items-center justify-between group"
            >
              <span>Explore The Archive</span>
              <ArrowRight size={20} strokeWidth={1.5} className="text-current" />
            </button>

            {/* Secondary Outline Button */}
            <button
              onClick={onExplore}
              className="w-full bg-transparent text-black px-8 py-4 font-mono text-sm uppercase tracking-widest font-medium border-2 border-black hover:bg-black hover:text-white focus-ring-primary transition-none flex items-center justify-between group"
            >
              <span>Examine Manifesto</span>
              <ArrowDown size={20} strokeWidth={1.5} className="text-current" />
            </button>
          </div>
        </div>

        {/* Sub-bar / Architectural Highlights */}
        <div className="mt-20 pt-8 border-t border-black grid grid-cols-2 md:grid-cols-4 gap-8 font-mono text-xs tracking-widest text-black uppercase">
          <div>
            <div className="text-[#525252] mb-1">Ratio</div>
            <div className="text-base font-bold">21:1 CONTRAST</div>
          </div>
          <div>
            <div className="text-[#525252] mb-1">Geometry</div>
            <div className="text-base font-bold">0PX RADIUS</div>
          </div>
          <div>
            <div className="text-[#525252] mb-1">Typography</div>
            <div className="text-base font-bold">PLAYFAIR & SERIF</div>
          </div>
          <div>
            <div className="text-[#525252] mb-1">Tactility</div>
            <div className="text-base font-bold">SUBTLE NOISE</div>
          </div>
        </div>
      </div>
    </section>
  );
};
