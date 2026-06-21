import React from 'react';
import { ArrowRight, Square, Sliders, Eye, FileText, CheckCircle, Disc } from 'lucide-react';

interface FeaturesProps {
  onFeatureSelect: (featureTitle: string) => void;
}

export const Features: React.FC<FeaturesProps> = ({ onFeatureSelect }) => {
  const featuresList = [
    { title: 'Pure Black & White', desc: 'True black (#000000) and true white (#FFFFFF). Gray is reserved exclusively for secondary text and structural borders. Uncompromising clarity.', icon: Square },
    { title: 'Serif Typography Hero', desc: 'Embracing classical serif typefaces. Playfair Display and Source Serif add editorial weight, high contrast, and timeless authority.', icon: FileText },
    { title: 'Oversized Type Scale', desc: 'Headlines dominate the viewport. Using 9xl and custom larger scales where words become monumental graphic elements.', icon: Eye },
    { title: 'Line-Based Visual System', desc: 'No filled shapes, synthetic glows, or drop shadows. This architecture relies strictly on hairlines, thick rules, and borders.', icon: Sliders },
    { title: 'Sharp Geometric Precision', desc: 'Zero border radius everywhere. Perfect 90-degree corners. Precise alignments inspired by Bauhaus and editorial print masters.', icon: CheckCircle },
    { title: 'Inversion for Emphasis', desc: 'Deploying high-impact color inversion (black background with white text) to highlight critical interactive elements instantly.', icon: Disc },
  ];

  return (
    <section className="relative w-full bg-white py-24 md:py-32 lg:py-40 border-b-4 border-black overflow-hidden">
      {/* Background texture */}
      <div className="texture-horizontal-lines"></div>

      <div className="relative z-10 max-w-[72rem] mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Title */}
        <div className="border-b-2 border-black pb-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#525252] mb-2">MANIFESTO TENETS</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-black">
              The Six Canons of Restraint
            </h2>
          </div>
          <div className="font-mono text-xs tracking-widest text-black uppercase">
            <span>UNCOMPROMISED STANDARDS</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feat, idx) => {
            const IconComponent = feat.icon;
            return (
              <div
                key={idx}
                onClick={() => onFeatureSelect(`Canon 0${idx + 1}: ${feat.title}`)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onFeatureSelect(`Canon 0${idx + 1}: ${feat.title}`);
                  }
                }}
                role="button"
                aria-label={`Inquire about ${feat.title}`}
                className="group bg-white border-2 border-black p-8 transition-colors duration-100 hover:bg-black hover:text-white focus-ring-primary cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-6 border-b border-black group-hover:border-white transition-none mb-6">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#525252] group-hover:text-[#E5E5E5] transition-none">
                      // CANON 0{idx + 1}
                    </span>
                    <IconComponent size={24} strokeWidth={1.5} className="text-black group-hover:text-white transition-none" />
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-display font-bold text-2xl tracking-tight mb-4 text-black group-hover:text-white transition-none">
                    {feat.title}
                  </h3>
                  <p className="text-base leading-relaxed text-[#525252] group-hover:text-[#E5E5E5] transition-none mb-8">
                    {feat.desc}
                  </p>
                </div>

                <div>
                  <div className="pt-6 border-t border-[#E5E5E5] group-hover:border-white/30 transition-none flex items-center justify-between font-mono text-xs uppercase tracking-widest">
                    <span className="text-black group-hover:text-white transition-none">Examine Canon</span>
                    <ArrowRight size={16} strokeWidth={1.5} className="text-black group-hover:text-white transition-none" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
