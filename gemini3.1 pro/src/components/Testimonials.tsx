import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialsProps {
  onInspectPatron: (patronName: string) => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onInspectPatron }) => {
  const testimonials = [
    {
      quote: "Austere has elevated our museum catalogues into standalone works of art. The rejection of ornament in favor of raw typographic hierarchy commands absolute respect.",
      author: "Helena Rostova",
      title: "DIRECTOR OF CURATION, BASEL KUNSTHALLE",
      city: "BASEL, SWITZERLAND",
    },
    {
      quote: "A masterclass in editorial discipline. In a digital landscape polluted by synthetic gradients and friendly curves, this uncompromised monochrome architecture is a revelation.",
      author: "Julian Vance-Wright",
      title: "MANAGING EDITOR, BEACON ARCHITECTURAL REVIEW",
      city: "LONDON, UK",
    }
  ];

  return (
    <section className="relative w-full bg-[#F5F5F5] py-24 md:py-32 lg:py-40 border-b-4 border-black overflow-hidden">
      {/* Background texture */}
      <div className="texture-horizontal-lines"></div>

      <div className="relative z-10 max-w-[72rem] mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="border-b-2 border-black pb-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#525252] mb-2">PATRON VERIFICATION</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-black">
              Institutional Testimony
            </h2>
          </div>
          <div className="font-mono text-xs tracking-widest text-black uppercase">
            <span>UNBIASED CRITIQUE</span>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {testimonials.map((test, idx) => (
            <div
              key={idx}
              onClick={() => onInspectPatron(`${test.author} — ${test.title}`)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onInspectPatron(`${test.author} — ${test.title}`);
                }
              }}
              role="button"
              aria-label={`Inspect patron credentials for ${test.author}`}
              className="group bg-white border-2 border-black p-10 relative flex flex-col justify-between cursor-pointer focus-ring-primary"
            >
              {/* Giant Oversized Quotation Mark */}
              <div className="absolute top-6 right-6 text-black/5 group-hover:opacity-20 transition-opacity duration-100 select-none pointer-events-none">
                <Quote size={120} strokeWidth={1} className="text-black" />
              </div>

              <div className="relative z-10 mb-12">
                <div className="font-mono text-xs uppercase tracking-widest text-[#525252] mb-8">
                  // CRITIQUE NO. 0{idx + 1}
                </div>
                
                {/* Large Italic Serif Pull Quote */}
                <blockquote className="font-display italic text-2xl md:text-3xl lg:text-4xl leading-tight text-black">
                  "{test.quote}"
                </blockquote>
              </div>

              {/* Bottom Border Thickens on Hover */}
              <div className="relative z-10 pt-6 border-t border-black transition-all duration-100 group-hover:border-t-[3px]">
                <div className="font-display font-bold text-xl text-black mb-1">
                  {test.author}
                </div>
                <div className="font-mono text-xs uppercase tracking-widest text-[#525252] mb-1">
                  {test.title}
                </div>
                <div className="font-mono text-xs uppercase tracking-widest text-black font-semibold">
                  {test.city}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
