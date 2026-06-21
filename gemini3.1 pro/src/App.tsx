import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductDetail } from './components/ProductDetail';
import { Stats } from './components/Stats';
import { ProcessTimeline } from './components/ProcessTimeline';
import { Features } from './components/Features';
import { BlogGallery } from './components/BlogGallery';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { InteractiveModal } from './components/InteractiveModal';

// High-fidelity architectural stock imagery fetched from Pexels
const stockImages = [
  'https://images.pexels.com/photos/30506523/pexels-photo-30506523.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/20578678/pexels-photo-20578678.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/31592973/pexels-photo-31592973.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/7482712/pexels-photo-7482712.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/36992804/pexels-photo-36992804.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  'https://images.pexels.com/photos/31735052/pexels-photo-31735052.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
];

type ModalType = 'spec' | 'stat' | 'step' | 'feature' | 'article' | 'patron' | 'tier' | 'inquiry' | 'generic';

interface ModalState {
  isOpen: boolean;
  data: {
    type: ModalType;
    title: string;
    payload?: any;
  } | null;
}

export const App: React.FC = () => {
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    data: null,
  });

  const handleOpenModal = (type: ModalType, title: string, payload?: any) => {
    setModalState({
      isOpen: true,
      data: { type, title, payload },
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-white text-black font-body selection:bg-black selection:text-white">
      {/* Navigation Header */}
      <Header 
        onOpenConsultation={() => handleOpenModal('generic', 'Complete Catalogue & Physical Monograph Access')} 
      />

      {/* Hero Section */}
      <Hero 
        onExplore={() => {
          const el = document.getElementById('monograph');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenConsultation={() => handleOpenModal('generic', 'Complete Catalogue & Physical Monograph Access')} 
      />

      {/* Product Detail Section (Featuring Boxed Drop Cap) */}
      <ProductDetail 
        imageUrl={stockImages[0]}
        onViewSpecs={(spec) => handleOpenModal('spec', spec)}
      />

      {/* Inverted Stats Section */}
      <Stats 
        onInteract={(statTitle) => handleOpenModal('stat', statTitle)}
      />

      {/* Process Timeline Section (Featuring Diagonal Lines Texture) */}
      <ProcessTimeline 
        onSelectStep={(stepName) => handleOpenModal('step', stepName)}
      />

      {/* Features Section (Featuring Hover Inversions) */}
      <Features 
        onFeatureSelect={(featureTitle) => handleOpenModal('feature', featureTitle)}
      />

      {/* Blog Gallery Section (Featuring Thicken Borders & Grayscale Hover) */}
      <BlogGallery 
        images={stockImages}
        onSelectArticle={(articleTitle) => handleOpenModal('article', articleTitle)}
      />

      {/* Testimonials Section (Featuring Pull Quotes & Oversized Quotation Marks) */}
      <Testimonials 
        onInspectPatron={(patronName) => handleOpenModal('patron', patronName)}
      />

      {/* Pricing Section (Featuring Elevated Tier & Annual Toggle) */}
      <Pricing 
        onSelectTier={(tierName, price) => handleOpenModal('tier', tierName, { price })}
      />

      {/* Contact CTA Section (Featuring Radial Gradient Texture & Bottom-only border inputs) */}
      <ContactCTA 
        onSubmitInquiry={(formData) => handleOpenModal('inquiry', 'Official Relay Transmission', formData)}
      />

      {/* Footer Section */}
      <Footer 
        onOpenConsultation={() => handleOpenModal('generic', 'Curatorial Consultation & Press Specs')}
        onOpenPrivacy={() => handleOpenModal('generic', 'Archival Governance & Institutional Licensing')}
      />

      {/* Master Interactive Modal */}
      <InteractiveModal 
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        modalData={modalState.data}
      />
    </div>
  );
};

export default App;
