import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface PricingProps {
  onSelectTier: (tierName: string, price: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectTier }) => {
  const [annual, setAnnual] = useState(true);

  const tiers = [
    {
      name: 'Curatorial Base',
      desc: 'Essential access to the digital monograph library and quarterly release schedules.',
      monthlyPrice: '$95',
      annualPrice: '$75',
      period: 'PER MONTH / BILLED ANNUALLY',
      features: [
        'Digital Monograph Access',
        'Quarterly Archival Digests',
        'Standard 90-Degree Layouts',
        '250GSM Reprint Requests (At Cost)',
        'Private Discord Curators Guild',
      ],
      highlighted: false,
    },
    {
      name: 'Monograph Collector',
      desc: 'The definitive tier for institutional archivists and fine typography purists.',
      monthlyPrice: '$240',
      annualPrice: '$190',
      period: 'PER MONTH / BILLED ANNUALLY',
      features: [
        'All Base Features Included',
        'Physical Oversized Linen Folios (Shipped Qtrly)',
        '180-Degree Smyth-Sewn Binding',
        'Guaranteed 21:1 Contrast Carbon Inks',
        'VIP Gallery Preview Invitation',
        'Priority Archival Support (1hr Response)',
      ],
      highlighted: true, // Elevated Pricing Tier
    },
    {
      name: 'Institutional Patron',
      desc: 'Custom licensing and dedicated physical press runs for museums and galleries.',
      monthlyPrice: '$550',
      annualPrice: '$450',
      period: 'PER MONTH / BILLED ANNUALLY',
      features: [
        'Unrestricted Global Institutional Licensing',
        'Bespoke Foil-Stamped Slipcase Additions',
        'Dedicated Editorial Typography Consultant',
        'Co-Branded Museum Exhibition Catalogs',
        'Direct Access to Foundry Master Typographers',
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="relative w-full bg-white py-24 md:py-32 lg:py-40 border-b-4 border-black overflow-hidden">
      {/* Background Texture */}
      <div className="texture-noise"></div>

      <div className="relative z-10 max-w-[72rem] mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="border-b-2 border-black pb-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#525252] mb-2">ACQUISITION TIERS</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-black">
              Physical & Digital Procurement
            </h2>
          </div>

          {/* Billing Frequency Toggle */}
          <div className="flex items-center gap-4 bg-white border-2 border-black p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-widest font-bold transition-none ${!annual ? 'bg-black text-white' : 'bg-white text-black hover:bg-[#F5F5F5]'}`}
            >
              MONTHLY DISBURSEMENT
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-widest font-bold transition-none ${annual ? 'bg-black text-white' : 'bg-white text-black hover:bg-[#F5F5F5]'}`}
            >
              ANNUAL // SAVE 20%
            </button>
          </div>
        </div>

        {/* Pricing Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8 items-stretch py-8">
          {tiers.map((tier, idx) => {
            const price = annual ? tier.annualPrice : tier.monthlyPrice;
            return (
              <div
                key={idx}
                className={`group bg-white border-2 border-black p-8 transition-colors duration-100 hover:bg-black hover:text-white flex flex-col justify-between focus-ring-primary ${
                  tier.highlighted ? 'lg:-my-6 lg:p-10 border-[4px]' : ''
                }`}
              >
                <div>
                  {/* Tier Top Header */}
                  <div className="flex justify-between items-start pb-6 border-b border-black group-hover:border-white transition-none mb-8">
                    <div>
                      {tier.highlighted && (
                        <span className="inline-block bg-black text-white group-hover:bg-white group-hover:text-black px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest mb-4 transition-none">
                          // ELEVATED TIER
                        </span>
                      )}
                      <h3 className="font-display font-bold text-2xl lg:text-3xl tracking-tight text-black group-hover:text-white transition-none">
                        {tier.name}
                      </h3>
                    </div>
                    <span className="font-mono text-xs uppercase tracking-widest text-[#525252] group-hover:text-[#E5E5E5] transition-none">
                      [ TIER 0{idx + 1} ]
                    </span>
                  </div>

                  {/* Desc */}
                  <p className="text-base leading-relaxed text-[#525252] group-hover:text-[#E5E5E5] transition-none mb-8">
                    {tier.desc}
                  </p>

                  {/* Price */}
                  <div className="mb-8 pb-8 border-b border-[#E5E5E5] group-hover:border-white/30 transition-none">
                    <span className="font-display font-bold text-6xl md:text-7xl tracking-tighter text-black group-hover:text-white transition-none">
                      {price}
                    </span>
                    <span className="block font-mono text-xs uppercase tracking-widest text-[#525252] group-hover:text-[#E5E5E5] transition-none mt-2">
                      {annual ? 'PER MONTH / BILLED ANNUALLY' : 'PER MONTH / BILLED MONTHLY'}
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4 mb-10 font-mono text-xs tracking-wide">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-black group-hover:text-white transition-none">
                        <Check size={16} strokeWidth={2} className="text-black group-hover:text-white shrink-0 mt-0.5 transition-none" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Instant Transition Button */}
                <button
                  onClick={() => onSelectTier(tier.name, price)}
                  className="w-full bg-black text-white group-hover:bg-white group-hover:text-black px-6 py-4 font-mono text-xs uppercase tracking-widest font-bold border-2 border-black group-hover:border-white transition-none flex items-center justify-between"
                >
                  <span>Secure Procurement</span>
                  <ArrowRight size={16} strokeWidth={1.5} className="text-current" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
