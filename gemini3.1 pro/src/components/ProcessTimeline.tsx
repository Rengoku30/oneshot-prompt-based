import React from 'react';
import { ArrowRight, Compass, Layers, ShieldCheck } from 'lucide-react';

interface ProcessTimelineProps {
  onSelectStep: (stepName: string) => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onSelectStep }) => {
  const steps = [
    {
      number: 'PHASE 01',
      title: 'Rigorous Elimination',
      desc: 'Every superfluous component, decorative drop shadow, and synthetic gradient is isolated and purged. We reduce the visual language to its absolute skeletal foundation.',
      icon: Compass,
      sublabel: 'STRICT PURGE METHODOLOGY',
    },
    {
      number: 'PHASE 02',
      title: 'Typographic Elevation',
      desc: 'Classical serif typography is deployed at monumental scale. Words cease to function merely as vessels of information; they transform into dominant architectural graphics.',
      icon: Layers,
      sublabel: 'HERO SCALE HIERARCHY',
    },
    {
      number: 'PHASE 03',
      title: 'Monolithic Lockup',
      desc: 'Structural containers are locked into precise 90-degree geometric grids. Color inversion is calculated to force absolute clarity across all tactile viewports.',
      icon: ShieldCheck,
      sublabel: 'PRECISE 90-DEGREE ALIGNMENT',
    },
  ];

  return (
    <section id="curation" className="relative w-full bg-white py-24 md:py-32 lg:py-40 border-b-4 border-black overflow-hidden">
      {/* Diagonal Lines Texture */}
      <div className="texture-diagonal-lines"></div>

      <div className="relative z-10 max-w-[72rem] mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Title */}
        <div className="border-b-2 border-black pb-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#525252] mb-2">OPERATIONAL METHODOLOGY</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-black">
              Process of Pure Reduction
            </h2>
          </div>
          <div className="font-mono text-xs tracking-widest text-black uppercase">
            <span>THREE-TIERED DISCIPLINE</span>
          </div>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={idx}
                onClick={() => onSelectStep(`${step.number} — ${step.title}`)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectStep(`${step.number} — ${step.title}`);
                  }
                }}
                role="button"
                aria-label={`Learn more about ${step.number}: ${step.title}`}
                className="group bg-white border-2 border-black p-8 flex flex-col justify-between transition-colors duration-100 hover:bg-black hover:text-white focus-ring-primary cursor-pointer"
              >
                <div>
                  {/* Card Top */}
                  <div className="flex justify-between items-center pb-6 border-b border-black group-hover:border-white transition-none mb-8">
                    <span className="font-mono text-sm font-bold uppercase tracking-widest text-black group-hover:text-white transition-none">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 border border-black group-hover:border-white rounded-none flex items-center justify-center bg-white group-hover:bg-black transition-none">
                      <IconComponent size={20} strokeWidth={1.5} className="text-black group-hover:text-white transition-none" />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-display font-bold text-3xl tracking-tight mb-4 text-black group-hover:text-white transition-none">
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed text-[#525252] group-hover:text-[#E5E5E5] transition-none mb-8">
                    {step.desc}
                  </p>
                </div>

                <div>
                  <div className="pt-6 border-t border-[#E5E5E5] group-hover:border-white/30 transition-none flex items-center justify-between font-mono text-xs uppercase tracking-widest">
                    <span className="text-black group-hover:text-white transition-none">{step.sublabel}</span>
                    <ArrowRight size={18} strokeWidth={1.5} className="text-black group-hover:text-white transition-none" />
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
