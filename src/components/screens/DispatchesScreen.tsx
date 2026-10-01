import React, { useState } from 'react';
import { Article } from '../../types';
import { ARTICLES_DATA } from '../../data/archioData';

interface DispatchesScreenProps {
  onOpenArticle: (article: Article) => void;
  onInitiateInquiry: () => void;
}

export const DispatchesScreen: React.FC<DispatchesScreenProps> = ({
  onOpenArticle,
  onInitiateInquiry,
}) => {
  const [selectedTag, setSelectedTag] = useState<string>('ALL');
  const [subscribedEmail, setSubscribedEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const allTags = ['ALL', 'STUDIO MANIFESTO', 'CIVIC CRITIQUE', 'CONCRETE', 'PRACTICE'];

  const filteredArticles = ARTICLES_DATA.filter((art) => {
    if (selectedTag === 'ALL') return true;
    return art.tags.includes(selectedTag);
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscribedEmail.trim()) {
      setIsSubscribed(true);
    }
  };

  return (
    <div className="w-full bg-[#FAFAFA] text-[#0A0A0A] flex flex-col min-h-screen">
      {/* Screen Header */}
      <div className="bg-[#0A0A0A] text-white p-6 border-b-2 border-[#0A0A0A]">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2.5 h-2.5 bg-[#EF4444]"></span>
          <span className="micro-label text-[#EF4444]">DISPATCHES // CRITIQUE</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-heading uppercase tracking-tight text-white mb-2">
          ARCHITECTURAL NEWS &amp;<br />
          <span className="text-[#EF4444]">FOUNDATION</span> REPORTS
        </h1>
        <p className="text-xs text-neutral-400 font-mono max-w-md">
          Critical monographs, material forensics, and theoretical treatises authored by ARCHIO partners and guest theorists.
        </p>

        {/* Tag Filters */}
        <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-[#262626]">
          {allTags.map((tag) => {
            const isActive = selectedTag === tag;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 text-[10px] font-mono font-bold tracking-wider uppercase transition-colors border cursor-pointer ${
                  isActive
                    ? 'bg-[#EF4444] text-white border-[#EF4444]'
                    : 'bg-[#181818] text-neutral-400 border-neutral-700 hover:text-white'
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* Articles Feed */}
      <div className="p-4 sm:p-6 space-y-8 flex-1">
        {filteredArticles.map((article) => (
          <article
            key={article.id}
            className="border-2 border-[#0A0A0A] bg-white group hover:border-[#EF4444] transition-colors"
          >
            {/* Visual Frame */}
            <div
              className="h-56 sm:h-72 w-full overflow-hidden bg-neutral-900 border-b-2 border-[#0A0A0A] relative cursor-pointer"
              onClick={() => onOpenArticle(article)}
            >
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4">
                <span className="micro-label bg-[#EF4444] text-white px-2 py-0.5 text-[9px]">
                  {article.category}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6">
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="text-neutral-500">{article.date}</span>
                <span className="text-[#EF4444] font-bold">{article.readTime}</span>
              </div>

              <h2 className="text-lg sm:text-xl font-heading text-[#0A0A0A] mb-3 leading-snug uppercase group-hover:text-[#EF4444] transition-colors">
                {article.title}
              </h2>

              <p className="text-xs text-neutral-700 leading-relaxed mb-4 font-normal">
                {article.summary}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-[#E5E5E5]">
                <span className="text-xs font-mono text-neutral-500">
                  BY {article.author}
                </span>

                <button
                  type="button"
                  onClick={() => onOpenArticle(article)}
                  className="inline-flex items-center gap-1.5 micro-label text-[#0A0A0A] group-hover:text-[#EF4444] font-bold transition-colors cursor-pointer"
                >
                  <span>READ FULL MONOGRAPH</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </article>
        ))}

        {/* Subscribe Monograph Box */}
        <div className="border-2 border-[#0A0A0A] bg-[#0A0A0A] text-white p-6 blueprint-dot-grid">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-[#EF4444]"></span>
            <span className="micro-label text-white">DISPATCH DISPATCH SERVICE</span>
          </div>
          <h3 className="text-xl font-heading uppercase text-white mb-2">
            RECEIVE PHYSICAL PRINTED MONOGRAPHS
          </h3>
          <p className="text-xs text-neutral-400 font-mono mb-4">
            We publish quarterly physical printed monographs on heavy stock newsprint. Sent to practicing structural engineers and institutions.
          </p>

          {isSubscribed ? (
            <div className="p-3 bg-white text-[#0A0A0A] border-2 border-[#EF4444] font-mono text-xs font-bold">
              ✓ DISPATCH DISPATCH QUEUED FOR: {subscribedEmail}. WELCOME TO THE CIRCULATION ARCHIVE.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                placeholder="YOUR INSTITUTIONAL OR STUDIO EMAIL..."
                value={subscribedEmail}
                onChange={(e) => setSubscribedEmail(e.target.value)}
                className="flex-1 bg-white text-[#0A0A0A] px-4 py-3 text-xs font-mono border-2 border-white focus:outline-none focus:border-[#EF4444]"
              />
              <button
                type="submit"
                className="bg-[#EF4444] text-white px-6 py-3 font-mono font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-[#0A0A0A] transition-colors border-2 border-[#EF4444] cursor-pointer"
              >
                JOIN ARCHIVE →
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
