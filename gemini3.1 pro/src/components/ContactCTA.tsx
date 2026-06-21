import React, { useState } from 'react';
import { ArrowRight, Send } from 'lucide-react';

interface ContactCTAProps {
  onSubmitInquiry: (formData: { name: string; email: string; message: string; interest: string }) => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ onSubmitInquiry }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    interest: 'Curatorial Base Acquisition',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitInquiry(formData);
  };

  return (
    <section id="contact" className="relative w-full bg-[#F5F5F5] py-24 md:py-32 lg:py-40 border-b-4 border-black overflow-hidden">
      {/* Radial Gradient Texture */}
      <div className="texture-cta-radial"></div>
      <div className="texture-horizontal-lines"></div>

      <div className="relative z-10 max-w-[72rem] mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Description Column */}
          <div className="lg:col-span-6 space-y-8">
            <div className="font-mono text-xs uppercase tracking-widest text-[#525252]">
              // FORMAL INQUIRY DISPATCH
            </div>
            
            <h2 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight text-black leading-none">
              Initiate Discourse
            </h2>

            <p className="text-lg md:text-xl font-normal leading-relaxed text-black max-w-xl">
              We welcome dialogue with private architectural purists, permanent museum collections, and corporate fine art curators. Submit your formal dispatch below.
            </p>

            <div className="pt-8 border-t border-black space-y-6 font-mono text-xs tracking-widest uppercase">
              <div>
                <div className="text-[#525252] mb-1">Foundry Quarters</div>
                <div className="text-base font-bold text-black">74 SOHO SQUARE // LONDON, UK</div>
              </div>
              <div>
                <div className="text-[#525252] mb-1">Direct Curatorial Cable</div>
                <div className="text-base font-bold text-black">ARCHIVE@AUSTERE-MONOGRAPH.ORG</div>
              </div>
              <div>
                <div className="text-[#525252] mb-1">Encrypted Relay</div>
                <div className="text-base font-bold text-black">PGP FINGERPRINT // E89B 04D2</div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-6 bg-white border-2 border-black p-8 md:p-12">
            <div className="flex items-center justify-between pb-6 border-b border-black mb-8 font-mono text-xs uppercase tracking-widest text-black font-bold">
              <span>MANIFEST DELEGATION FORM</span>
              <Send size={18} strokeWidth={1.5} className="text-black" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Interest Select */}
              <div>
                <label htmlFor="interest" className="block font-mono text-xs uppercase tracking-widest text-black font-bold mb-2">
                  Procurement Subject
                </label>
                <select
                  id="interest"
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full bg-white text-black font-mono text-xs uppercase tracking-widest py-3 border-b-2 border-black focus-input rounded-none cursor-pointer"
                >
                  <option value="Curatorial Base Acquisition">Curatorial Base Acquisition ($95/mo)</option>
                  <option value="Monograph Collector Tier">Monograph Collector Tier ($240/mo)</option>
                  <option value="Institutional Patron License">Institutional Patron License ($550/mo)</option>
                  <option value="Private Architectural Commission">Private Architectural Commission</option>
                  <option value="Gallery Exhibition Partnership">Gallery Exhibition Partnership</option>
                </select>
              </div>

              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block font-mono text-xs uppercase tracking-widest text-black font-bold mb-2">
                  Patron Identity
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="e.g. Julian Vance-Wright"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white text-black font-serif text-base py-3 border-b-2 border-black focus-input rounded-none placeholder:text-[#525252] placeholder:italic"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block font-mono text-xs uppercase tracking-widest text-black font-bold mb-2">
                  Communication Cable (Email)
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="e.g. j.vance@beacon-review.co.uk"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white text-black font-serif text-base py-3 border-b-2 border-black focus-input rounded-none placeholder:text-[#525252] placeholder:italic"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block font-mono text-xs uppercase tracking-widest text-black font-bold mb-2">
                  Curatorial Intent & Monograph Requirements
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Detail your architectural framing requirements, permanent exhibition dates, or custom press-run materiality..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white text-black font-serif text-base py-3 border-b-2 border-black focus-input rounded-none placeholder:text-[#525252] placeholder:italic resize-y"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black text-white px-8 py-5 font-mono text-sm uppercase tracking-widest font-bold border-2 border-black hover:bg-white hover:text-black focus-ring-primary transition-none flex items-center justify-between group"
              >
                <span>Transmit Official Dispatch</span>
                <ArrowRight size={20} strokeWidth={1.5} className="text-current" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
