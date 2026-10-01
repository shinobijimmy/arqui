import React, { useState } from 'react';
import { DISCIPLINES_DATA } from '../../data/archioData';

interface DisciplinesScreenProps {
  onInitiateInquiry: () => void;
}

export const DisciplinesScreen: React.FC<DisciplinesScreenProps> = ({
  onInitiateInquiry,
}) => {
  const [selectedDiscipline, setSelectedDiscipline] = useState<'architecture' | 'interior' | 'plannings'>('architecture');

  // Interactive structural calculation workbench
  const [calcArea, setCalcArea] = useState<number>(2400);
  const [calcFloors, setCalcFloors] = useState<number>(4);
  const [concreteClass, setConcreteClass] = useState<'C35' | 'C45' | 'C55'>('C45');

  // Formulas
  const concreteVolume = Math.round(calcArea * (calcFloors * 0.32));
  const steelTensionTons = Math.round((concreteVolume * (concreteClass === 'C55' ? 0.11 : 0.085)));
  const embodiedCarbon = Math.round(concreteVolume * 220); // kg CO2e

  const activeData = DISCIPLINES_DATA.find((d) => d.id === selectedDiscipline) || DISCIPLINES_DATA[0];

  return (
    <div className="w-full bg-[#FAFAFA] text-[#0A0A0A] flex flex-col min-h-screen">
      {/* Screen Header */}
      <div className="bg-[#0A0A0A] text-white p-6 border-b-2 border-[#0A0A0A]">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2.5 h-2.5 bg-[#EF4444]"></span>
          <span className="micro-label text-[#EF4444]">CORE PRACTICE // SYSTEMS</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-heading uppercase tracking-tight text-white mb-2">
          DISCIPLINES &amp; <span className="text-[#EF4444]">SPATIAL</span> MODES
        </h1>
        <p className="text-xs text-neutral-400 font-mono max-w-md">
          Three unified practices executing structural autonomy from continental territorial planning down to millimeter acoustic joinery.
        </p>

        {/* Tab switchers */}
        <div className="grid grid-cols-3 gap-2 mt-6">
          {DISCIPLINES_DATA.map((d) => {
            const isSelected = selectedDiscipline === d.id;
            return (
              <button
                key={d.id}
                type="button"
                onClick={() => setSelectedDiscipline(d.id as any)}
                className={`p-3 text-left border-2 transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[#EF4444] bg-[#1A1A1A] text-white'
                    : 'border-[#262626] bg-[#111111] text-neutral-400 hover:text-white hover:border-neutral-600'
                }`}
              >
                <span className={`block micro-label ${isSelected ? 'text-[#EF4444]' : 'text-neutral-500'}`}>
                  {d.number}
                </span>
                <span className="font-heading text-xs uppercase tracking-tight block mt-1">
                  {d.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Discipline Detail Pane */}
      <div className="p-4 sm:p-6 space-y-6 flex-1">
        {/* Core Statement Banner */}
        <div className="border-2 border-[#0A0A0A] bg-white p-6 space-y-4">
          <div className="flex items-center justify-between border-b-2 border-[#0A0A0A] pb-3">
            <span className="font-heading text-xl uppercase tracking-tight text-[#0A0A0A]">
              {activeData.number} // {activeData.title}
            </span>
            <span className="micro-label bg-[#EF4444] text-white px-2 py-0.5">
              ACTIVE STANDARD
            </span>
          </div>

          <p className="text-sm font-semibold text-[#0A0A0A] leading-relaxed">
            {activeData.tagline}
          </p>

          <p className="text-xs text-neutral-600 leading-relaxed font-body">
            {activeData.description}
          </p>

          {/* Metrics Trio */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
            {activeData.metrics.map((m, i) => (
              <div key={i} className="border-2 border-[#0A0A0A] bg-[#F5F5F5] p-3">
                <span className="micro-label text-neutral-500 block">{m.label}</span>
                <span className="text-lg font-heading text-[#EF4444] mt-1 block">{m.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables & Material Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Deliverables */}
          <div className="border-2 border-[#0A0A0A] bg-white p-5 space-y-3">
            <div className="flex items-center gap-2 border-b-2 border-[#0A0A0A] pb-2">
              <span className="w-2 h-2 bg-[#EF4444]"></span>
              <span className="micro-label text-[#0A0A0A]">PROGRAM DELIVERABLES</span>
            </div>
            <ul className="space-y-2 text-xs font-mono text-neutral-800">
              {activeData.deliverables.map((deliv, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#EF4444] font-bold">✔</span>
                  <span>{deliv}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Materials */}
          <div className="border-2 border-[#0A0A0A] bg-white p-5 space-y-3">
            <div className="flex items-center gap-2 border-b-2 border-[#0A0A0A] pb-2">
              <span className="w-2 h-2 bg-[#EF4444]"></span>
              <span className="micro-label text-[#0A0A0A]">PRIMARY MATERIAL INTEGRITY</span>
            </div>
            <ul className="space-y-2 text-xs font-mono text-neutral-800">
              {activeData.materials.map((mat, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#0A0A0A] font-bold">▪</span>
                  <span>{mat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Interactive Structural Autonomy Calculator */}
        <div className="border-2 border-[#0A0A0A] bg-[#0A0A0A] text-white p-6 blueprint-dot-grid space-y-4">
          <div className="flex items-center justify-between border-b border-[#262626] pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#EF4444]"></span>
              <span className="micro-label text-white">INTERACTIVE STRUCTURAL ESTIMATOR</span>
            </div>
            <span className="micro-label text-[#EF4444]">CALCULATOR</span>
          </div>

          <p className="text-xs text-neutral-300 font-mono">
            Calibrate preliminary concrete mass, post-tensioning steel requirements, and embodied carbon for your site.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {/* Input 1: Floor Area */}
            <div>
              <label className="micro-label text-neutral-400 block mb-1">
                FOOTPRINT: {calcArea.toLocaleString()} m²
              </label>
              <input
                type="range"
                min="500"
                max="10000"
                step="250"
                value={calcArea}
                onChange={(e) => setCalcArea(Number(e.target.value))}
                className="w-full accent-[#EF4444] cursor-pointer"
              />
            </div>

            {/* Input 2: Number of Levels */}
            <div>
              <label className="micro-label text-neutral-400 block mb-1">
                TIERS / LEVELS: {calcFloors}
              </label>
              <input
                type="range"
                min="1"
                max="16"
                step="1"
                value={calcFloors}
                onChange={(e) => setCalcFloors(Number(e.target.value))}
                className="w-full accent-[#EF4444] cursor-pointer"
              />
            </div>

            {/* Input 3: Concrete Class */}
            <div>
              <label className="micro-label text-neutral-400 block mb-1">
                CONCRETE MIX CLASS
              </label>
              <div className="flex gap-1">
                {(['C35', 'C45', 'C55'] as const).map((grade) => (
                  <button
                    key={grade}
                    type="button"
                    onClick={() => setConcreteClass(grade)}
                    className={`flex-1 py-1 text-xs font-mono font-bold border transition-colors cursor-pointer ${
                      concreteClass === grade
                        ? 'bg-[#EF4444] text-white border-[#EF4444]'
                        : 'bg-[#181818] text-neutral-400 border-neutral-700 hover:text-white'
                    }`}
                  >
                    {grade}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Output Ribbon */}
          <div className="grid grid-cols-3 gap-2 border-2 border-white/30 bg-[#141414] p-4 text-center mt-4">
            <div>
              <span className="text-xl sm:text-2xl font-heading text-white">{concreteVolume.toLocaleString()}</span>
              <span className="micro-label text-neutral-400 block mt-1">m³ CONCRETE</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-heading text-[#EF4444]">{steelTensionTons}</span>
              <span className="micro-label text-neutral-400 block mt-1">TONS TENSION STEEL</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-heading text-white">{Math.round(embodiedCarbon / 1000)}t</span>
              <span className="micro-label text-neutral-400 block mt-1">EMBODIED CO₂e</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onInitiateInquiry}
            className="w-full py-3 bg-[#EF4444] text-white font-mono font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-[#0A0A0A] transition-colors border-2 border-[#EF4444] cursor-pointer"
          >
            REQUEST FORMAL STRUCTURAL PEER REVIEW →
          </button>
        </div>
      </div>
    </div>
  );
};
