import React, { useState } from 'react';
import { SPECIFICATIONS_DATA } from '../../data/archioData';

interface SpecificationsScreenProps {
  onInitiateInquiry: () => void;
}

export const SpecificationsScreen: React.FC<SpecificationsScreenProps> = ({
  onInitiateInquiry,
}) => {
  const [selectedStandard, setSelectedStandard] = useState<'EUROCODE' | 'IBC' | 'JAPAN_BSL'>('EUROCODE');

  const standardsComparison = {
    EUROCODE: {
      code: "EN 1998-1:2004",
      driftLimit: "0.5% - 0.75%",
      concreteSafetyFactor: "γc = 1.5",
      steelSafetyFactor: "γs = 1.15",
      notes: "Strict post-tensioned elongation limits under lateral wind load."
    },
    IBC: {
      code: "IBC 2024 / ASCE 7-22",
      driftLimit: "1.0% allowable",
      concreteSafetyFactor: "φ = 0.65 - 0.90",
      steelSafetyFactor: "φ = 0.90",
      notes: "High ductility demand for seismic design categories D through F."
    },
    JAPAN_BSL: {
      code: "Building Standard Law of Japan (BSL)",
      driftLimit: "1/200 rad (0.5%)",
      concreteSafetyFactor: "Special shear capacity",
      steelSafetyFactor: "Extreme cyclic toughness",
      notes: "Mandatory base isolation or tuned mass dampers for tall civic spans."
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full bg-[#FAFAFA] text-[#0A0A0A] flex flex-col min-h-screen">
      {/* Screen Header */}
      <div className="bg-[#0A0A0A] text-white p-6 border-b-2 border-[#0A0A0A]">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2.5 h-2.5 bg-[#EF4444]"></span>
          <span className="micro-label text-[#EF4444]">ENGINEERING DOSSIER // 2026</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-heading uppercase tracking-tight text-white mb-2">
          BLUEPRINT &amp; <span className="text-[#EF4444]">SPECIFICATION</span> MATRIX
        </h1>
        <p className="text-xs text-neutral-400 font-mono max-w-md">
          Standardized architectural structural codes, fire resistance criteria, and seismic tolerance benchmarks across all ARCHIO commissions.
        </p>
      </div>

      <div className="p-4 sm:p-6 space-y-6 flex-1">
        {/* Core Benchmark Overview Card */}
        <div className="border-2 border-[#0A0A0A] bg-white p-6 space-y-4">
          <div className="flex items-center justify-between border-b-2 border-[#0A0A0A] pb-3">
            <span className="micro-label text-neutral-500">CANONICAL STANDARD</span>
            <span className="micro-label bg-[#0A0A0A] text-white px-2 py-0.5">
              {SPECIFICATIONS_DATA.standard}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 font-mono text-xs">
            <div className="border-2 border-[#0A0A0A] p-3 bg-[#F5F5F5]">
              <span className="micro-label text-[#EF4444] block">SEISMIC CLASS</span>
              <p className="font-bold text-[#0A0A0A] mt-1">{SPECIFICATIONS_DATA.seismicStandard}</p>
            </div>
            <div className="border-2 border-[#0A0A0A] p-3 bg-[#F5F5F5]">
              <span className="micro-label text-[#EF4444] block">FIRE RATING</span>
              <p className="font-bold text-[#0A0A0A] mt-1">{SPECIFICATIONS_DATA.fireResistance}</p>
            </div>
            <div className="border-2 border-[#0A0A0A] p-3 bg-[#F5F5F5]">
              <span className="micro-label text-[#EF4444] block">EMBODIED CO₂e</span>
              <p className="font-bold text-[#0A0A0A] mt-1">{SPECIFICATIONS_DATA.embodiedCarbonCap}</p>
            </div>
          </div>
        </div>

        {/* Global Structural Standards Comparer */}
        <div className="border-2 border-[#0A0A0A] bg-white p-6 space-y-4">
          <div className="flex items-center justify-between border-b-2 border-[#0A0A0A] pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#EF4444]"></span>
              <span className="micro-label text-[#0A0A0A]">JURISDICTIONAL CODE ALIGNMENT</span>
            </div>
          </div>

          <div className="flex gap-2">
            {(['EUROCODE', 'IBC', 'JAPAN_BSL'] as const).map((std) => (
              <button
                key={std}
                type="button"
                onClick={() => setSelectedStandard(std)}
                className={`flex-1 py-2 text-xs font-mono font-bold uppercase border-2 transition-colors cursor-pointer ${
                  selectedStandard === std
                    ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]'
                    : 'bg-white text-neutral-600 border-neutral-300 hover:border-[#0A0A0A]'
                }`}
              >
                {std}
              </button>
            ))}
          </div>

          <div className="border-2 border-[#0A0A0A] p-4 bg-[#F5F5F5] font-mono text-xs space-y-2">
            <div className="flex justify-between border-b border-neutral-300 pb-2">
              <span className="text-neutral-500">Regulatory Code:</span>
              <span className="font-bold text-[#0A0A0A]">{standardsComparison[selectedStandard].code}</span>
            </div>
            <div className="flex justify-between border-b border-neutral-300 pb-2">
              <span className="text-neutral-500">Allowable Interstory Drift:</span>
              <span className="font-bold text-[#EF4444]">{standardsComparison[selectedStandard].driftLimit}</span>
            </div>
            <div className="flex justify-between border-b border-neutral-300 pb-2">
              <span className="text-neutral-500">Material Reduction Factor:</span>
              <span className="font-bold text-[#0A0A0A]">{standardsComparison[selectedStandard].concreteSafetyFactor}</span>
            </div>
            <p className="text-[11px] text-neutral-600 pt-1">
              <strong>Studio Note:</strong> {standardsComparison[selectedStandard].notes}
            </p>
          </div>
        </div>

        {/* Detailed Component Tolerances Matrix */}
        <div className="border-2 border-[#0A0A0A] bg-white overflow-x-auto">
          <div className="bg-[#0A0A0A] text-white px-4 py-3 flex items-center justify-between">
            <span className="micro-label text-white">COMPONENT LEVEL TOLERANCES</span>
            <span className="micro-label text-[#EF4444]">DIN 18202 / CL-7</span>
          </div>
          <table className="w-full text-left text-xs font-mono border-collapse">
            <thead>
              <tr className="border-b-2 border-[#0A0A0A] bg-[#F5F5F5] text-[10px] text-neutral-600 uppercase">
                <th className="p-3">Component Element</th>
                <th className="p-3">Material Standard</th>
                <th className="p-3">Millimeter Tolerance</th>
                <th className="p-3">Reinforcement / Tie</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E5E5]">
              {SPECIFICATIONS_DATA.matrices.map((row, idx) => (
                <tr key={idx} className="hover:bg-neutral-50">
                  <td className="p-3 font-bold text-[#0A0A0A]">{row.component}</td>
                  <td className="p-3 text-neutral-700">{row.material}</td>
                  <td className="p-3 text-[#EF4444] font-bold">{row.tolerance}</td>
                  <td className="p-3 text-neutral-600">{row.reinforcement}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Elevation Blueprint SVG Schematic */}
        <div className="border-2 border-[#0A0A0A] p-6 bg-[#0A0A0A] text-white blueprint-dot-grid space-y-4">
          <div className="flex items-center justify-between border-b border-[#262626] pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#EF4444]"></span>
              <span className="micro-label text-white">LONGITUDINAL ELEVATION DATUM</span>
            </div>
            <span className="micro-label text-[#EF4444]">SECTION 01-A</span>
          </div>

          <svg className="w-full h-32 stroke-white fill-none" preserveAspectRatio="none" viewBox="0 0 500 100">
            {/* Grid Lines */}
            <line x1="0" y1="20" x2="500" y2="20" stroke="#333" strokeDasharray="2 4" strokeWidth="0.5" />
            <line x1="0" y1="50" x2="500" y2="50" stroke="#333" strokeDasharray="2 4" strokeWidth="0.5" />
            <line x1="0" y1="80" x2="500" y2="80" stroke="#333" strokeDasharray="2 4" strokeWidth="0.5" />

            {/* Massing Contour */}
            <path d="M0 100 V70 H40 V45 H90 V100 H120 V25 H180 V100 H220 V60 H270 V35 H340 V15 H390 V100 H430 V55 H470 V30 H500 V100" strokeWidth="2" />
            
            {/* Red Laser Datum Line */}
            <line x1="0" y1="35" x2="500" y2="35" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="5 3" />
            
            {/* Key Nodes */}
            <circle cx="180" cy="25" r="4" fill="#EF4444" />
            <circle cx="340" cy="15" r="4" fill="#EF4444" />
            <circle cx="470" cy="30" r="4" fill="#EF4444" />
          </svg>

          <div className="grid grid-cols-3 text-[10px] font-mono text-neutral-400 pt-2 border-t border-[#262626]">
            <div>GRADE: ±0.00m (BEDROCK BASALT)</div>
            <div className="text-center text-[#EF4444]">CANTILEVER APEX: +34.50m</div>
            <div className="text-right">ROOF CROWN: +48.20m</div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <button
            type="button"
            onClick={handlePrint}
            className="px-5 py-3 border-2 border-[#0A0A0A] bg-white text-[#0A0A0A] font-mono text-xs font-bold uppercase hover:bg-[#0A0A0A] hover:text-white transition-colors cursor-pointer"
          >
            PRINT SPECIFICATION MANUAL (PDF) ⎙
          </button>
          <button
            type="button"
            onClick={onInitiateInquiry}
            className="px-6 py-3 bg-[#EF4444] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#0A0A0A] transition-colors border-2 border-[#EF4444] cursor-pointer"
          >
            INITIATE STRUCTURAL COMMISSION →
          </button>
        </div>
      </div>
    </div>
  );
};
