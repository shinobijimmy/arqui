import React from 'react';
import { Article } from '../../types';

interface MonographModalProps {
  article: Article | null;
  onClose: () => void;
  onInquire: () => void;
}

export const MonographModal: React.FC<MonographModalProps> = ({
  article,
  onClose,
  onInquire,
}) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-xs cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#FAFAFA] text-[#0A0A0A] border-2 border-[#0A0A0A] z-10 max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Top Bar */}
        <div className="bg-[#0A0A0A] text-white p-4 flex items-center justify-between border-b-2 border-[#0A0A0A]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#EF4444]"></span>
            <span className="micro-label text-white">DISPATCH ARCHIVE // {article.dispatchNumber}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 border-2 border-white text-white font-mono font-bold flex items-center justify-center hover:bg-[#EF4444] hover:border-[#EF4444] transition-colors cursor-pointer"
            aria-label="Close monograph modal"
          >
            ✕
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Header Metadata */}
          <div className="border-b-2 border-[#0A0A0A] pb-4">
            <div className="flex items-center justify-between text-xs font-mono mb-2">
              <span className="text-[#EF4444] font-bold">{article.category}</span>
              <span className="text-neutral-500">{article.date} · {article.readTime}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-heading text-[#0A0A0A] uppercase tracking-tight leading-tight mb-3">
              {article.title}
            </h1>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-600">
              <span className="text-[#0A0A0A] font-bold">AUTHOR:</span>
              <span>{article.author}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="border-2 border-[#0A0A0A] bg-black">
            <img 
              src={article.imageUrl} 
              alt={article.title}
              className="w-full h-56 sm:h-72 object-cover grayscale contrast-110"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Lead Summary */}
          <div className="border-l-4 border-[#EF4444] pl-4 py-2 bg-white">
            <p className="text-sm font-semibold text-[#0A0A0A] leading-relaxed">
              {article.summary}
            </p>
          </div>

          {/* Monograph Body Text */}
          <div className="space-y-4 text-xs sm:text-sm text-neutral-800 leading-relaxed font-body">
            {article.fullText.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-neutral-300 flex items-center gap-2">
            <span className="micro-label text-neutral-400">TAGS:</span>
            {article.tags.map((tag, idx) => (
              <span key={idx} className="font-mono text-[10px] text-[#EF4444] font-bold">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#E5E5E5] border-t-2 border-[#0A0A0A] flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border-2 border-[#0A0A0A] text-[#0A0A0A] font-mono text-xs font-bold uppercase hover:bg-[#0A0A0A] hover:text-white transition-colors cursor-pointer"
          >
            ← BACK TO MONOGRAPHS
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onInquire();
            }}
            className="px-4 py-2 bg-[#EF4444] text-white font-mono text-xs font-bold uppercase hover:bg-[#0A0A0A] transition-colors border-2 border-[#EF4444] cursor-pointer"
          >
            SUBMIT INQUIRY →
          </button>
        </div>
      </div>
    </div>
  );
};
