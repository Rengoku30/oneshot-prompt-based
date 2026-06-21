import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Monograph', href: '#monograph' },
    { label: 'Curation', href: '#curation' },
    { label: 'Exhibition', href: '#exhibition' },
    { label: 'Acquisition', href: '#pricing' },
    { label: 'Inquiry', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-black">
      {/* Accessibility Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="max-w-[72rem] mx-auto px-6 md:px-8 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Title */}
        <a 
          href="#" 
          className="group flex items-center gap-3 py-2 text-2xl font-bold font-display tracking-tight text-black focus-ring-primary"
          aria-label="Austere Home"
        >
          <span className="w-3 h-3 bg-black inline-block border border-black group-hover:bg-white transition-none"></span>
          <span>AUSTERE</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium font-mono uppercase tracking-widest py-2 border-b-2 border-transparent hover:border-black focus-link transition-none"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <button
            onClick={onOpenConsultation}
            className="bg-black text-white px-6 py-3 font-mono text-xs uppercase tracking-widest font-medium border-2 border-black hover:bg-white hover:text-black focus-ring-primary transition-none flex items-center gap-2"
          >
            <span>Catalogue</span>
            <ArrowRight size={16} strokeWidth={1.5} className="text-current" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-black focus-ring-primary border border-transparent hover:border-black transition-none"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b-4 border-black px-6 py-8 space-y-6">
          <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-display tracking-tight py-2 border-b border-black flex items-center justify-between hover:bg-black hover:text-white px-2 transition-none focus-ring-primary"
              >
                <span>{item.label}</span>
                <ArrowRight size={18} strokeWidth={1.5} className="text-current" />
              </a>
            ))}
          </nav>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultation();
            }}
            className="w-full bg-black text-white px-8 py-4 font-mono text-sm uppercase tracking-widest font-medium border-2 border-black hover:bg-white hover:text-black focus-ring-primary transition-none flex items-center justify-center gap-2"
          >
            <span>Access Catalogue</span>
            <ArrowRight size={18} strokeWidth={1.5} className="text-current" />
          </button>
        </div>
      )}
    </header>
  );
};
