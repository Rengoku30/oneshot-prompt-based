import React, { useEffect } from 'react';
import { X, CheckCircle, FileText, ArrowRight, BookOpen } from 'lucide-react';

interface ModalData {
  type: 'spec' | 'stat' | 'step' | 'feature' | 'article' | 'patron' | 'tier' | 'inquiry' | 'generic';
  title: string;
  payload?: any;
}

interface InteractiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalData: ModalData | null;
}

export const InteractiveModal: React.FC<InteractiveModalProps> = ({ isOpen, onClose, modalData }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !modalData) return null;

  const renderModalContent = () => {
    switch (modalData.type) {
      case 'inquiry':
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-black">
              <CheckCircle size={28} strokeWidth={1.5} className="text-black" />
              <span className="font-mono text-sm uppercase tracking-widest font-bold">DISPATCH SUCCESSFUL</span>
            </div>
            <p className="font-serif text-lg leading-relaxed text-black">
              Thank you, <strong className="font-bold">{modalData.payload?.name || 'Patron'}</strong>. Your official curatorial inquiry concerning <strong className="font-bold">{modalData.payload?.interest}</strong> has been transmitted via secure relay to our London quarters.
            </p>
            <div className="p-6 border-2 border-black bg-[#F5F5F5] font-mono text-xs tracking-wider space-y-3 uppercase">
              <div className="pb-2 border-b border-[#E5E5E5] text-[#525252]">Transmission Log Payload:</div>
              <div>Patron Cable: {modalData.payload?.email}</div>
              <div className="truncate">Manifest Statement: {modalData.payload?.message}</div>
              <div>Security Fingerprint: SHA256 // 49F8B2...</div>
            </div>
            <p className="text-sm font-serif text-[#525252] italic">
              Our master typographers and curatorial directors review all dispatches within 24 hours. A hardcopy acknowledgment will follow.
            </p>
          </div>
        );

      case 'tier':
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-black">
              <BookOpen size={28} strokeWidth={1.5} className="text-black" />
              <span className="font-mono text-sm uppercase tracking-widest font-bold">ACQUISITION ALLOCATION</span>
            </div>
            <p className="font-serif text-lg leading-relaxed text-black">
              You have initiated procurement for the <strong className="font-bold">{modalData.title}</strong> at the verified rate of <strong className="font-bold">{modalData.payload?.price}</strong>.
            </p>
            <div className="p-6 border-2 border-black bg-white font-mono text-xs tracking-wider space-y-4 uppercase">
              <div className="pb-2 border-b border-black font-bold text-black">// INSTITUTIONAL AGREEMENT SUMMARY</div>
              <div className="flex justify-between items-center py-1 border-b border-[#E5E5E5]">
                <span className="text-[#525252]">Access Rights</span>
                <span>Immediate Digital + Qtrly Print</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-[#E5E5E5]">
                <span className="text-[#525252]">Ink Formulation</span>
                <span>Matte Carbon High-Density</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-[#E5E5E5]">
                <span className="text-[#525252]">Exclusivity</span>
                <span>Registered Serial Allocation</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-full bg-black text-white px-8 py-4 font-mono text-sm uppercase tracking-widest font-bold border-2 border-black hover:bg-white hover:text-black focus-ring-primary transition-none flex items-center justify-center gap-2 group"
            >
              <span>Confirm & Lock Allocation</span>
              <ArrowRight size={18} strokeWidth={1.5} className="text-current" />
            </button>
          </div>
        );

      default:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-black">
              <FileText size={28} strokeWidth={1.5} className="text-black" />
              <span className="font-mono text-sm uppercase tracking-widest font-bold">ARCHIVAL CREDENTIAL VERIFICATION</span>
            </div>
            <p className="font-serif text-lg leading-relaxed text-black">
              Inspection record for: <strong className="font-bold font-display text-xl block mt-2">{modalData.title}</strong>
            </p>
            <div className="p-6 border-2 border-black bg-white font-mono text-xs tracking-wider space-y-4 uppercase">
              <div className="pb-2 border-b border-black font-bold text-black">// FULL STRUCTURAL OVERVIEW</div>
              <p className="font-serif text-sm normal-case leading-relaxed text-[#525252]">
                This structural manifest adheres to the strict tenets of Minimalist Monochrome architecture. Designed with 0px border radius, pure black (#000000) borders, and classical serif display lockups. All synthetic gradients and decorative drop shadows have been verified as fully eradicated.
              </p>
              <div className="pt-2 border-t border-[#E5E5E5] flex justify-between text-[11px] text-[#525252]">
                <span>INSPECTED BY: JULIAN VANCE-WRIGHT</span>
                <span>STATUS: PRISTINE // VERIFIED</span>
              </div>
            </div>
            <div className="pt-4 border-t border-black flex justify-end">
              <button
                onClick={onClose}
                className="bg-black text-white px-8 py-4 font-mono text-xs uppercase tracking-widest font-bold border-2 border-black hover:bg-white hover:text-black focus-ring-primary transition-none"
              >
                Acknowledge & Close
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/80 backdrop-blur-xs animate-none">
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative w-full max-w-2xl bg-white border-[4px] border-black p-8 md:p-12 overflow-y-auto max-h-[90vh] shadow-none animate-none"
      >
        {/* Background Noise */}
        <div className="texture-noise"></div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-white text-black border-2 border-black hover:bg-black hover:text-white focus-ring-primary transition-none z-20"
          aria-label="Close modal"
        >
          <X size={24} strokeWidth={1.5} />
        </button>

        {/* Top Meta tag */}
        <div className="font-mono text-xs uppercase tracking-widest text-[#525252] mb-6 pb-4 border-b border-black">
          // ARCHIVAL DOSSIER // VOL. 04 // REF NO. {Math.floor(Math.random() * 89999 + 10000)}
        </div>

        {/* Dynamic content */}
        <div className="relative z-10">
          <h2 id="modal-title" className="font-display font-bold text-3xl md:text-4xl tracking-tight text-black mb-6">
            {modalData.type === 'inquiry' ? 'Official Relay Transmission' : modalData.title}
          </h2>
          {renderModalContent()}
        </div>
      </div>
    </div>
  );
};
