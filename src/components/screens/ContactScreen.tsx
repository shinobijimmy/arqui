import React, { useState } from 'react';
import { InquiryFormState } from '../../types';

export const ContactScreen: React.FC = () => {
  const [formData, setFormData] = useState<InquiryFormState>({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    discipline: 'architecture',
    squareMeters: 3500,
    timeline: '2026-2027',
    notes: '',
  });

  const [submittedReceipt, setSubmittedReceipt] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;

    // Generate brutalist docket tracking ID
    const randomDocket = `ARCHIO-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedReceipt(randomDocket);
  };

  const handleReset = () => {
    setSubmittedReceipt(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      location: '',
      discipline: 'architecture',
      squareMeters: 3500,
      timeline: '2026-2027',
      notes: '',
    });
  };

  return (
    <div className="w-full bg-[#FAFAFA] text-[#0A0A0A] flex flex-col min-h-screen">
      {/* Screen Header */}
      <div className="bg-[#0A0A0A] text-white p-6 border-b-2 border-[#0A0A0A] blueprint-dot-grid">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2.5 h-2.5 bg-[#EF4444]"></span>
          <span className="micro-label text-[#EF4444]">INITIATE INQUIRY // RFP</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-heading uppercase tracking-tight text-white mb-2 leading-[1.05]">
          LET'S TALK<br /><span className="text-[#EF4444]">WITH US...</span>
        </h1>
        <p className="text-xs text-neutral-400 font-mono max-w-md">
          Direct communication channel for private patrons, municipal authorities, and institutions seeking structural autonomy solutions.
        </p>

        {/* Quick Coordinates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-6 pt-4 border-t border-[#262626] text-xs font-mono">
          <div className="bg-[#141414] p-3 border border-neutral-800">
            <span className="text-[#EF4444] block font-bold text-[9px]">DIRECT PHONE</span>
            <span className="text-white block mt-0.5">+333 22 42 38</span>
            <span className="text-neutral-500 block text-[10px]">+333 22 42 65</span>
          </div>
          <div className="bg-[#141414] p-3 border border-neutral-800">
            <span className="text-[#EF4444] block font-bold text-[9px]">STUDIO MAIL</span>
            <span className="text-white block mt-0.5 truncate">archio@gmail.com</span>
            <span className="text-neutral-500 block text-[10px] truncate">info@gmail.com</span>
          </div>
          <div className="bg-[#141414] p-3 border border-neutral-800">
            <span className="text-[#EF4444] block font-bold text-[9px]">HEADQUARTERS</span>
            <span className="text-white block mt-0.5">012 MOKE ROAD</span>
            <span className="text-neutral-500 block text-[10px]">ROTTERDAM &amp; USA</span>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6 space-y-6 flex-1">
        {submittedReceipt ? (
          /* Confirmation Receipt Docket */
          <div className="border-2 border-[#0A0A0A] bg-white p-6 sm:p-8 space-y-6 animate-in fade-in duration-300">
            <div className="border-b-2 border-[#0A0A0A] pb-4 flex items-center justify-between">
              <div>
                <span className="micro-label text-[#EF4444] block mb-1">DISPATCH ACKNOWLEDGED</span>
                <h2 className="text-2xl font-heading text-[#0A0A0A] uppercase tracking-tight">
                  COMMISSION BRIEF RECORDED
                </h2>
              </div>
              <span className="text-2xl font-mono text-[#EF4444] font-bold">✔</span>
            </div>

            <div className="bg-[#0A0A0A] text-white p-4 font-mono text-xs space-y-2 border-2 border-[#0A0A0A] blueprint-dot-grid">
              <div className="flex justify-between border-b border-neutral-800 pb-2">
                <span className="text-neutral-400">DOCKET REFERENCE:</span>
                <span className="text-[#EF4444] font-bold text-sm">{submittedReceipt}</span>
              </div>
              <div className="flex justify-between border-b border-neutral-800 pb-2">
                <span className="text-neutral-400">PATRON / INQUIRER:</span>
                <span className="text-white font-bold">{formData.fullName}</span>
              </div>
              <div className="flex justify-between border-b border-neutral-800 pb-2">
                <span className="text-neutral-400">COMMUNICATION VECTOR:</span>
                <span className="text-white">{formData.email}</span>
              </div>
              <div className="flex justify-between border-b border-neutral-800 pb-2">
                <span className="text-neutral-400">PROGRAM SCOPE:</span>
                <span className="text-[#EF4444] uppercase font-bold">{formData.discipline}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">ESTIMATED SCALE:</span>
                <span className="text-white font-bold">{formData.squareMeters.toLocaleString()} m²</span>
              </div>
            </div>

            <p className="text-xs text-neutral-600 font-mono leading-relaxed">
              A Lead Structural Partner has been assigned to analyze site parameters and load requirements. You will receive an initial feasibility monograph within 48 hours.
            </p>

            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-3 border-2 border-[#0A0A0A] bg-[#0A0A0A] text-white font-mono text-xs font-bold uppercase hover:bg-[#EF4444] hover:border-[#EF4444] transition-colors cursor-pointer"
            >
              ← LODGE ANOTHER BRIEF
            </button>
          </div>
        ) : (
          /* Intake Briefing Form */
          <form onSubmit={handleSubmit} className="border-2 border-[#0A0A0A] bg-white p-6 space-y-6">
            <div className="border-b-2 border-[#0A0A0A] pb-3">
              <span className="micro-label text-[#EF4444] block mb-1">STAGE 01</span>
              <h2 className="text-xl font-heading uppercase text-[#0A0A0A]">
                SUBMIT PROJECT SPECIFICATIONS
              </h2>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="micro-label text-[#0A0A0A] block mb-1">
                  PATRON / PRINCIPAL NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="E.G. HANS VERMEER"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-[#FAFAFA] border-2 border-[#D4D4D4] focus:border-[#0A0A0A] focus:outline-none p-3 text-xs font-mono"
                />
              </div>

              <div>
                <label className="micro-label text-[#0A0A0A] block mb-1">
                  OFFICIAL EMAIL *
                </label>
                <input
                  type="email"
                  required
                  placeholder="NAME@INSTITUTION.COM"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#FAFAFA] border-2 border-[#D4D4D4] focus:border-[#0A0A0A] focus:outline-none p-3 text-xs font-mono"
                />
              </div>

              <div>
                <label className="micro-label text-[#0A0A0A] block mb-1">
                  TELEPHONE NUMBER
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#FAFAFA] border-2 border-[#D4D4D4] focus:border-[#0A0A0A] focus:outline-none p-3 text-xs font-mono"
                />
              </div>

              <div>
                <label className="micro-label text-[#0A0A0A] block mb-1">
                  SITE LOCATION / CITY
                </label>
                <input
                  type="text"
                  placeholder="E.G. ROTTERDAM, NETHERLANDS"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-[#FAFAFA] border-2 border-[#D4D4D4] focus:border-[#0A0A0A] focus:outline-none p-3 text-xs font-mono"
                />
              </div>
            </div>

            {/* Discipline Selector */}
            <div>
              <label className="micro-label text-[#0A0A0A] block mb-2">
                PRIMARY ARCHITECTURAL DISCIPLINE
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(['architecture', 'interior', 'plannings', 'all'] as const).map((disc) => (
                  <button
                    key={disc}
                    type="button"
                    onClick={() => setFormData({ ...formData, discipline: disc })}
                    className={`p-3 text-xs font-mono font-bold uppercase border-2 transition-colors cursor-pointer ${
                      formData.discipline === disc
                        ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]'
                        : 'bg-[#FAFAFA] text-neutral-600 border-[#D4D4D4] hover:border-[#0A0A0A]'
                    }`}
                  >
                    {disc}
                  </button>
                ))}
              </div>
            </div>

            {/* Estimated Footprint Slider */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="micro-label text-[#0A0A0A]">
                  ESTIMATED GROSS FLOOR AREA
                </label>
                <span className="font-heading text-sm text-[#EF4444]">
                  {formData.squareMeters.toLocaleString()} m²
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="25000"
                step="500"
                value={formData.squareMeters}
                onChange={(e) => setFormData({ ...formData, squareMeters: Number(e.target.value) })}
                className="w-full accent-[#EF4444] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-neutral-400 mt-1">
                <span>500 m² (RESIDENCE)</span>
                <span>8,000 m² (CIVIC)</span>
                <span>25,000+ m² (DISTRICT)</span>
              </div>
            </div>

            {/* Project Notes */}
            <div>
              <label className="micro-label text-[#0A0A0A] block mb-1">
                STRUCTURAL AMBITIONS &amp; SITE CHARACTERISTICS
              </label>
              <textarea
                rows={4}
                placeholder="Detail site topography, seismic constraints, historic preservation, or required post-tensioned spans..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-[#FAFAFA] border-2 border-[#D4D4D4] focus:border-[#0A0A0A] focus:outline-none p-3 text-xs font-mono"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#EF4444] text-white py-4 font-mono font-bold text-xs uppercase tracking-widest hover:bg-[#0A0A0A] transition-colors border-2 border-[#EF4444] cursor-pointer"
            >
              DISPATCH OFFICIAL INQUIRY DOCKET →
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
