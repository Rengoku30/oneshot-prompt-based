import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface StatsProps {
  onInteract: (title: string) => void;
}

export const Stats: React.FC<StatsProps> = ({ onInteract }) => {
  const statsList = [
    { value: '21:1', label: 'Absolute Contrast Ratio', desc: 'Surpassing WCAG AAA strict standards through uncompromised true black (#000000) and pure white (#FFFFFF).' },
    { value: '0PX', label: 'Total Corner Radius', desc: 'Rigorous architectural precision. Zero curvature applied across all structural components and containers.' },
    { value: '500', label: 'Archival Monographs', desc: 'Strictly limited physical press runs. Bound in black linen with dense carbon-pigment ink formulations.' },
    { value: '100%', label: 'Monochrome Palette', desc: 'Complete rejection of accent colors and synthetic gradients. Restraint as the ultimate form of expression.' },
  ];

  return (
    <section className="relative w-full bg-black text-white py-24 md:py-32 lg:py-40 border-b-4 border-black overflow-hidden">
      {/* Subtle vertical line texture for Inverted Stats */}
      <div className="texture-stats-vertical"></div>

      <div className="relative z-10 max-w-[72rem] mx-auto px-6 md:px-8 lg:px-12">
        {/* Top bar */}
        <div className="border-b border-white/30 pb-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#E5E5E5] mb-2">EMPIRICAL METRICS</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-white">
              The Architecture of Restraint
            </h2>
          </div>
          <div className="font-mono text-xs tracking-widest text-[#E5E5E5] uppercase">
            <span>UNCOMPROMISING GOVERNANCE</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {statsList.map((stat, idx) => (
            <div 
              key={idx}
              className="group border-2 border-white p-8 bg-black relative flex flex-col justify-between transition-colors duration-100 hover:bg-white hover:text-black cursor-pointer focus-ring-inverted"
              onClick={() => onInteract(`Empirical Metric Verification: ${stat.label} (${stat.value})`)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onInteract(`Empirical Metric Verification: ${stat.label} (${stat.value})`);
                }
              }}
              role="button"
              aria-label={`Inspect metric ${stat.label}`}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-white/70 group-hover:text-[#525252]">
                    [ DATA METRIC 0{idx + 1} ]
                  </span>
                  <ArrowUpRight size={24} strokeWidth={1.5} className="text-white group-hover:text-black transition-none" />
                </div>

                <div className="font-display font-bold text-6xl md:text-7xl lg:text-8xl tracking-tighter text-white group-hover:text-black transition-none mb-6">
                  {stat.value}
                </div>

                <h3 className="font-display font-bold text-2xl tracking-tight mb-3 text-white group-hover:text-black transition-none">
                  {stat.label}
                </h3>
              </div>

              <p className="font-serif text-base leading-relaxed text-[#E5E5E5] group-hover:text-black pt-6 border-t border-white/30 group-hover:border-black transition-none">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
