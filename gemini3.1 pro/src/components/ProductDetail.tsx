import React from 'react';
import { ArrowRight, FileText, Award, Maximize } from 'lucide-react';

interface ProductDetailProps {
  onViewSpecs: (spec: string) => void;
  imageUrl: string;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ onViewSpecs, imageUrl }) => {
  return (
    <section id="monograph" className="relative w-full bg-white py-24 md:py-32 lg:py-40 border-b-4 border-black overflow-hidden">
      {/* Secondary Pattern: Grid */}
      <div className="texture-editorial-grid"></div>

      <div className="relative z-10 max-w-[72rem] mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="border-b-2 border-black pb-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#525252] mb-2">ARCHIVAL EXPOSÉ</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-black">
              The Brutalist Folio
            </h2>
          </div>
          <div className="font-mono text-sm tracking-widest text-black uppercase flex items-center gap-4">
            <span>INDEX NO. 018-B</span>
            <span className="w-2 h-2 bg-black inline-block"></span>
          </div>
        </div>

        {/* 12-Column Grid for Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Content Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Boxed Drop Cap Requirement */}
            <div className="text-lg md:text-xl font-normal leading-relaxed text-black">
              <span className="float-left font-display font-bold text-5xl md:text-6xl text-black border-4 border-black p-3 mr-4 mb-2 select-none leading-none bg-white">
                M
              </span>
              anifesting as a physical testament to uncompromising structural honesty, the Brutalist Folio isolates the intersection of raw cast concrete and reflective monolithic glass. Every page operates as a study in spatial tension, where dense black ink bounds expansive voids of archival white paper.
            </div>

            <p className="text-base md:text-lg leading-relaxed text-black pt-2">
              Our curatorial process rejects ornament in favor of strict geometry. The binding utilizes exposed Smyth-sewn black linen threads, guaranteeing a perfectly flat 180-degree presentation across all spreads. The ink formulation relies on high-density carbon pigment, achieving an unblemished matte light absorption coefficient.
            </p>

            {/* Sub-specification table */}
            <div className="border-t border-black pt-8 space-y-4 font-mono text-xs tracking-widest uppercase">
              <div className="flex justify-between items-center py-2 border-b border-[#E5E5E5]">
                <span className="text-[#525252]">Dimensions</span>
                <span className="font-bold text-black">320MM × 420MM // OVERSIZED</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-[#E5E5E5]">
                <span className="text-[#525252]">Paper Stock</span>
                <span className="font-bold text-black">250GSM ARCHIVAL MATTE UNCOATED</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-[#E5E5E5]">
                <span className="text-[#525252]">Production Weight</span>
                <span className="font-bold text-black">4.8 KG // ENCASED IN SLIPCASE</span>
              </div>
            </div>

            {/* Interactive Specs Actions */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => onViewSpecs('Folio Complete Materiality & Structural Overview')}
                className="w-full bg-white text-black px-6 py-4 font-mono text-xs uppercase tracking-widest font-medium border-2 border-black hover:bg-black hover:text-white focus-ring-primary transition-none flex items-center justify-between group"
              >
                <span className="flex items-center gap-2">
                  <FileText size={16} strokeWidth={1.5} className="text-current" />
                  <span>Structural Spec</span>
                </span>
                <ArrowRight size={16} strokeWidth={1.5} className="text-current" />
              </button>

              <button
                onClick={() => onViewSpecs('Exhibition History & Permanent Museum Collection Credentials')}
                className="w-full bg-white text-black px-6 py-4 font-mono text-xs uppercase tracking-widest font-medium border-2 border-black hover:bg-black hover:text-white focus-ring-primary transition-none flex items-center justify-between group"
              >
                <span className="flex items-center gap-2">
                  <Award size={16} strokeWidth={1.5} className="text-current" />
                  <span>Credentials</span>
                </span>
                <ArrowRight size={16} strokeWidth={1.5} className="text-current" />
              </button>
            </div>
          </div>

          {/* Right Image Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="border-4 border-black p-4 bg-white relative group">
              {/* Image Frame */}
              <div className="relative overflow-hidden border border-black aspect-[3/4]">
                <img 
                  src={imageUrl} 
                  alt="Brutalist Folio Architectural View" 
                  className="w-full h-full object-cover grayscale transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-100 flex items-center justify-center pointer-events-none">
                  <div className="bg-black text-white p-3 font-mono text-xs uppercase tracking-widest flex items-center gap-2">
                    <Maximize size={16} strokeWidth={1.5} />
                    <span>MAGNIFY SCALE</span>
                  </div>
                </div>
              </div>
              
              {/* Caption */}
              <div className="mt-4 pt-4 border-t border-black flex items-center justify-between font-mono text-xs uppercase tracking-widest text-black">
                <span>PLATE XIV // REFLECTION</span>
                <span className="text-[#525252]">KINGSTON FACADE</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
