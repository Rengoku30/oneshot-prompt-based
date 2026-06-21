import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation, onOpenPrivacy }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-white pt-20 pb-16 border-t-4 border-black overflow-hidden">
      {/* Background Texture */}
      <div className="texture-noise"></div>

      <div className="relative z-10 max-w-[72rem] mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b-2 border-black">
          
          {/* Col 1: Brand & Oath */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3 text-2xl font-bold font-display tracking-tight text-black select-none">
              <span className="w-3 h-3 bg-black inline-block"></span>
              <span>AUSTERE</span>
            </div>
            <p className="font-serif text-base leading-relaxed text-[#525252]">
              Uncompromised architectural monographs and fine typography curations. A total rejection of synthetic ornamentation in favor of pure 90-degree geometric restraint.
            </p>
            <div className="font-mono text-xs uppercase tracking-widest text-black font-bold">
              © MMXXVI AUSTERE ARCHIVE // ALL RIGHTS RESERVED
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4 font-mono text-xs uppercase tracking-widest">
            <div className="text-[#525252] font-bold pb-2 border-b border-[#E5E5E5]">
              // STRUCTURAL INDEX
            </div>
            <ul className="space-y-3">
              <li><a href="#monograph" className="text-black hover:underline focus-link">01. Monograph Folio</a></li>
              <li><a href="#curation" className="text-black hover:underline focus-link">02. Pure Reduction</a></li>
              <li><a href="#exhibition" className="text-black hover:underline focus-link">03. Curated Exhibitions</a></li>
              <li><a href="#pricing" className="text-black hover:underline focus-link">04. Acquisition Tiers</a></li>
              <li><a href="#contact" className="text-black hover:underline focus-link">05. Inquiry Dispatch</a></li>
            </ul>
          </div>

          {/* Col 3: Curatorial Resources */}
          <div className="lg:col-span-3 space-y-4 font-mono text-xs uppercase tracking-widest">
            <div className="text-[#525252] font-bold pb-2 border-b border-[#E5E5E5]">
              // MANIFEST DOCUMENTS
            </div>
            <ul className="space-y-3">
              <li>
                <button onClick={onOpenConsultation} className="text-black hover:underline focus-link bg-transparent border-none text-left p-0 cursor-pointer">
                  Physical Press Specs
                </button>
              </li>
              <li>
                <button onClick={onOpenConsultation} className="text-black hover:underline focus-link bg-transparent border-none text-left p-0 cursor-pointer">
                  Carbon Ink Absorptions
                </button>
              </li>
              <li>
                <button onClick={onOpenPrivacy} className="text-black hover:underline focus-link bg-transparent border-none text-left p-0 cursor-pointer">
                  Archival Governance
                </button>
              </li>
              <li>
                <button onClick={onOpenPrivacy} className="text-black hover:underline focus-link bg-transparent border-none text-left p-0 cursor-pointer">
                  Institutional Licensing
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Back to Top */}
          <div className="lg:col-span-2 flex flex-col items-start lg:items-end justify-between">
            <div className="text-[#525252] font-mono text-xs uppercase tracking-widest font-bold pb-2 border-b border-[#E5E5E5] w-full lg:text-right">
              // TELEMETRY
            </div>
            <button
              onClick={scrollToTop}
              className="mt-4 lg:mt-0 w-full bg-white text-black p-4 border-2 border-black hover:bg-black hover:text-white focus-ring-primary transition-none flex items-center justify-center gap-2 group font-mono text-xs uppercase tracking-widest font-bold"
              aria-label="Scroll back to top of page"
            >
              <span>ASCEND</span>
              <ArrowUp size={16} strokeWidth={2} className="text-current" />
            </button>
          </div>

        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-widest text-[#525252]">
          <span>HOSTED ON SECURE VERIFIED NODES // ACCREDITED FOR 21:1 ACCESSIBILITY</span>
          <span>TYPOGRAPHY: PLAYFAIR DISPLAY // SOURCE SERIF 4 // JETBRAINS MONO</span>
        </div>
      </div>
    </footer>
  );
};
