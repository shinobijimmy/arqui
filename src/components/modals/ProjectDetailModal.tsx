import React from 'react';
import { Project } from '../../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onInitiateInquiry: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onInitiateInquiry,
}) => {
  if (!project) return null;

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
            <span className="micro-label text-white">PROJECT DOSSIER // {project.series}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 border-2 border-white text-white font-mono font-bold flex items-center justify-center hover:bg-[#EF4444] hover:border-[#EF4444] transition-colors cursor-pointer"
            aria-label="Close project modal"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Main Hero Image */}
          <div className="relative border-2 border-[#0A0A0A] bg-black">
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-64 sm:h-80 object-cover grayscale contrast-125"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4">
              <span className="micro-label text-[#EF4444] bg-[#0A0A0A] px-2 py-0.5 inline-block mb-1">
                {project.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading text-white uppercase tracking-tight">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 border-2 border-[#0A0A0A] bg-white p-3 text-xs font-mono">
            <div>
              <span className="text-neutral-500 block text-[9px] uppercase">LOCATION</span>
              <span className="font-bold text-[#0A0A0A]">{project.location}</span>
            </div>
            <div>
              <span className="text-neutral-500 block text-[9px] uppercase">YEAR</span>
              <span className="font-bold text-[#0A0A0A]">{project.year}</span>
            </div>
            <div>
              <span className="text-neutral-500 block text-[9px] uppercase">AREA</span>
              <span className="font-bold text-[#0A0A0A]">{project.area}</span>
            </div>
            <div>
              <span className="text-neutral-500 block text-[9px] uppercase">CONCRETE</span>
              <span className="font-bold text-[#EF4444]">{project.concreteGrade}</span>
            </div>
          </div>

          {/* Architectural Description */}
          <div>
            <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-neutral-500 mb-2">
              ARCHITECTURAL NARRATIVE
            </h3>
            <p className="text-sm text-[#0A0A0A] leading-relaxed mb-4">
              {project.description}
            </p>
            <blockquote className="border-l-4 border-[#EF4444] pl-4 py-1.5 bg-[#F5F5F5] text-xs font-medium text-[#0A0A0A]">
              "{project.summary}"
            </blockquote>
          </div>

          {/* Technical Specs Table */}
          <div className="border-2 border-[#0A0A0A] bg-white">
            <div className="bg-[#0A0A0A] text-white px-4 py-2 flex items-center justify-between">
              <span className="micro-label text-white">ENGINEERING PARAMETERS</span>
              <span className="micro-label text-[#EF4444]">CALIBRATED</span>
            </div>
            <div className="divide-y divide-[#E5E5E5] text-xs font-mono">
              {project.specs.map((item, idx) => (
                <div key={idx} className="p-3 flex items-center justify-between">
                  <span className="text-neutral-600">{item.label}</span>
                  <span className="font-bold text-[#0A0A0A]">{item.value}</span>
                </div>
              ))}
              <div className="p-3 flex items-center justify-between bg-[#F9F9F9]">
                <span className="text-neutral-600">Structural Typology</span>
                <span className="font-bold text-[#0A0A0A]">{project.structuralType}</span>
              </div>
            </div>
          </div>

          {/* Key Features List */}
          <div>
            <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-neutral-500 mb-2">
              STRUCTURAL INNOVATIONS
            </h3>
            <ul className="space-y-2 text-xs font-mono">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#EF4444] font-bold">▪</span>
                  <span className="text-neutral-800">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 bg-[#E5E5E5] border-t-2 border-[#0A0A0A] flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 border-2 border-[#0A0A0A] text-[#0A0A0A] font-mono text-xs font-bold uppercase hover:bg-[#0A0A0A] hover:text-white transition-colors cursor-pointer"
          >
            ← BACK TO MONOGRAPH
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onInitiateInquiry();
            }}
            className="px-5 py-2.5 bg-[#EF4444] border-2 border-[#EF4444] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#0A0A0A] hover:border-[#0A0A0A] transition-colors cursor-pointer"
          >
            INQUIRE ON SIMILAR PROGRAM →
          </button>
        </div>
      </div>
    </div>
  );
};
