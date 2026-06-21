import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

interface BlogGalleryProps {
  onSelectArticle: (articleTitle: string) => void;
  images: string[];
}

export const BlogGallery: React.FC<BlogGalleryProps> = ({ onSelectArticle, images }) => {
  const articles = [
    {
      title: 'Monolithic Reflection: Glass & Mass',
      category: 'ARCHITECTURAL ESSAY',
      date: 'OCTOBER 2026',
      excerpt: 'Analyzing the visual tension of reflective architectural facades against dense, light-absorbing concrete skeletons in urban Kingston.',
      image: images[1] || 'https://images.pexels.com/photos/20578678/pexels-photo-20578678.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    },
    {
      title: 'The Brutalist Interior: Voids as Structure',
      category: 'EXHIBITION MONOGRAPH',
      date: 'NOVEMBER 2026',
      excerpt: 'An exploration of empty volumetric space within museum galleries. Whitespace is active; it dictates the psychological weight of the artifacts.',
      image: images[2] || 'https://images.pexels.com/photos/31592973/pexels-photo-31592973.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    },
    {
      title: 'Bauhaus Continuity in Modernist Framing',
      category: 'TYPOGRAPHIC STUDY',
      date: 'DECEMBER 2026',
      excerpt: 'How strict 90-degree geometric precision in book binding and structural web containers preserves the foundational legacy of early modernism.',
      image: images[3] || 'https://images.pexels.com/photos/7482712/pexels-photo-7482712.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    },
  ];

  return (
    <section id="exhibition" className="relative w-full bg-white py-24 md:py-32 lg:py-40 border-b-4 border-black overflow-hidden">
      {/* Background Texture */}
      <div className="texture-noise"></div>

      <div className="relative z-10 max-w-[72rem] mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="border-b-2 border-black pb-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#525252] mb-2">CURATED EXHIBITION</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-black">
              Archival Publications
            </h2>
          </div>
          <div className="font-mono text-xs tracking-widest text-black uppercase flex items-center gap-2">
            <BookOpen size={16} strokeWidth={1.5} className="text-black" />
            <span>3 FEATURED MONOGRAPHS</span>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
          {articles.map((article, idx) => (
            <article
              key={idx}
              onClick={() => onSelectArticle(article.title)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectArticle(article.title);
                }
              }}
              role="button"
              aria-label={`Read article: ${article.title}`}
              className="group cursor-pointer flex flex-col justify-between focus-ring-primary"
            >
              <div>
                {/* Image Box with Required Border Thicken & Grayscale Effect */}
                <div className="border-2 border-black transition-all duration-100 group-hover:border-[4px] p-2 mb-6 bg-white">
                  <div className="relative overflow-hidden aspect-[16/11]">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover grayscale transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </div>
                </div>

                {/* Meta */}
                <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-[#525252] mb-3">
                  <span>{article.category}</span>
                  <span>{article.date}</span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-2xl tracking-tight text-black group-hover:underline mb-4">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-base leading-relaxed text-[#525252] mb-6">
                  {article.excerpt}
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-black flex items-center justify-between font-mono text-xs uppercase tracking-widest text-black font-bold">
                <span>Access Full Publication</span>
                <ArrowRight size={16} strokeWidth={1.5} className="text-black group-hover:translate-x-1 transition-transform duration-100" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
