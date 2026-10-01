import React from 'react';
import { SPECIFICATIONS_DATA } from '../../data/archioData';

interface SpecificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInquire: () => void;
}

export const SpecificationsModal: React.FC<SpecificationsModalProps> = ({
  isOpen,
  onClose,
  onInquire,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

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
        <div className="bg-[#EF4444] text-white p-4 flex items-center justify-between border-b-2 border-[#0A0A0A]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#0A0A0A]"></span>
            <span className="micro-label text-white">TECHNICAL DOSSIER // SPECIFICATIONS</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 border-2 border-white text-white font-mono font-bold flex items-center justify-center hover:bg-[#0A0A0A] hover:border-[#0A0A0A] transition-colors cursor-pointer"
            aria-label="Close specifications"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Header Description */}
          <div>
            <span className="micro-label text-[#EF4444] block mb-1">FOUNDATION BENCHMARK</span>
            <h2 className="text-2xl font-heading uppercase text-[#0A0A0A] tracking-tight">
              STRUCTURAL AUTONOMY &amp; LOGISTICS MATRIX
            </h2>
            <p className="text-xs text-neutral-600 mt-2 font-mono leading-relaxed">
              Specification Standard: <strong className="text-[#0A0A0A]">{SPECIFICATIONS_DATA.standard}</strong>
            </p>
          </div>

          {/* Core Performance Tiers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
            <div className="border-2 border-[#0A0A0A] p-3 bg-white">
              <span className="text-[#EF4444] block font-bold text-[9px] uppercase">SEISMIC CODE</span>
              <p className="font-semibold text-[#0A0A0A] mt-1">{SPECIFICATIONS_DATA.seismicStandard}</p>
            </div>
            <div className="border-2 border-[#0A0A0A] p-3 bg-white">
              <span className="text-[#EF4444] block font-bold text-[9px] uppercase">FIRE INTEGRITY</span>
              <p className="font-semibold text-[#0A0A0A] mt-1">{SPECIFICATIONS_DATA.fireResistance}</p>
            </div>
            <div className="border-2 border-[#0A0A0A] p-3 bg-white">
              <span className="text-[#EF4444] block font-bold text-[9px] uppercase">EMBODIED CARBON CAP</span>
              <p className="font-semibold text-[#0A0A0A] mt-1">{SPECIFICATIONS_DATA.embodiedCarbonCap}</p>
            </div>
            <div className="border-2 border-[#0A0A0A] p-3 bg-white">
              <span className="text-[#EF4444] block font-bold text-[9px] uppercase">ACOUSTIC RATING</span>
              <p className="font-semibold text-[#0A0A0A] mt-1">{SPECIFICATIONS_DATA.acoustics}</p>
            </div>
          </div>

          {/* Component Tolerances Matrix */}
          <div className="border-2 border-[#0A0A0A] bg-white overflow-x-auto">
            <div className="bg-[#0A0A0A] text-white px-4 py-2 flex items-center justify-between">
              <span className="micro-label text-white">COMPONENT SPECIFICATION MATRIX</span>
              <span className="micro-label text-[#EF4444]">DIN 18202</span>
            </div>
            <table className="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr className="border-b-2 border-[#0A0A0A] bg-[#F5F5F5] text-[10px] text-neutral-600 uppercase">
                  <th className="p-2.5">Component</th>
                  <th className="p-2.5">Material Standard</th>
                  <th className="p-2.5">Tolerance</th>
                  <th className="p-2.5">Tensioning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E5E5]">
                {SPECIFICATIONS_DATA.matrices.map((row, idx) => (
                  <tr key={idx} className="hover:bg-neutral-50">
                    <td className="p-2.5 font-bold text-[#0A0A0A]">{row.component}</td>
                    <td className="p-2.5 text-neutral-700">{row.material}</td>
                    <td className="p-2.5 text-[#EF4444] font-bold">{row.tolerance}</td>
                    <td className="p-2.5 text-neutral-600">{row.reinforcement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Schematic Blueprint Silhouette Wireframe */}
          <div className="border-2 border-[#0A0A0A] p-4 bg-[#0A0A0A] text-white blueprint-dot-grid">
            <div className="flex items-center justify-between mb-3 text-[10px] font-mono">
              <span className="text-neutral-400">DATUM ELEVATION SECTION</span>
              <span className="text-[#EF4444]">SCALE 1:200</span>
            </div>
            <svg className="w-full h-20 stroke-white fill-none" preserveAspectRatio="none" viewBox="0 0 400 80">
              <path d="M0 80 V50 H30 V30 H70 V80 H90 V15 H140 V80 H170 V45 H210 V25 H260 V10 H290 V80 H320 V40 H350 V20 H380 V80 H400" strokeWidth="1.5" />
              <line x1="0" y1="30" x2="400" y2="30" stroke="#EF4444" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="0" y1="55" x2="400" y2="55" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.5" />
              <circle cx="140" cy="15" r="3" fill="#EF4444" />
              <circle cx="260" cy="10" r="3" fill="#EF4444" />
            </svg>
            <div className="flex justify-between text-[9px] font-mono text-neutral-400 mt-2">
              <span>FOUNDATION LEVEL ±0.00</span>
              <span className="text-[#EF4444]">PRIMARY SHEAR NODE +32.40m</span>
              <span>CROWN +48.00m</span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#E5E5E5] border-t-2 border-[#0A0A0A] flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={handlePrint}
            className="px-4 py-2 border-2 border-[#0A0A0A] text-[#0A0A0A] font-mono text-xs font-bold uppercase hover:bg-[#0A0A0A] hover:text-white transition-colors cursor-pointer"
          >
            PRINT SPECIFICATION (PDF) ⎙
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onInquire();
            }}
            className="px-4 py-2 bg-[#EF4444] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#0A0A0A] transition-colors border-2 border-[#EF4444] cursor-pointer"
          >
            REQUEST PROJECT LOGISTICS →
          </button>
        </div>
      </div>
    </div>
  );
};
