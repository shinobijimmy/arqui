import React, { useState } from 'react';
import { Project } from '../../types';
import { PROJECTS_DATA } from '../../data/archioData';

interface ProjectsScreenProps {
  onOpenProject: (project: Project) => void;
  onInitiateInquiry: () => void;
}

export const ProjectsScreen: React.FC<ProjectsScreenProps> = ({
  onOpenProject,
  onInitiateInquiry,
}) => {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'HOTEL' | 'HALL' | 'RESIDENCE' | 'CULTURAL'>('ALL');

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'HOTEL') return proj.category.includes('HOTEL');
    if (activeFilter === 'HALL') return proj.category.includes('HALL') || proj.category.includes('RESEARCH');
    if (activeFilter === 'RESIDENCE') return proj.category.includes('RESIDENCE');
    if (activeFilter === 'CULTURAL') return proj.category.includes('CULTURAL');
    return true;
  });

  return (
    <div className="w-full bg-[#FAFAFA] text-[#0A0A0A] flex flex-col min-h-screen">
      {/* Screen Header Banner */}
      <div className="bg-[#0A0A0A] text-white p-6 border-b-2 border-[#0A0A0A]">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2.5 h-2.5 bg-[#EF4444]"></span>
          <span className="micro-label text-[#EF4444]">INDEX // SERIES 2026</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-heading uppercase tracking-tight text-white mb-2">
          SELECTED <span className="text-[#EF4444]">WORKS</span> &amp; ARCHITECTURE
        </h1>
        <p className="text-xs text-neutral-400 font-mono max-w-md">
          Precision-engineered structural autonomy commissions across civic, hospitality, and residential programs.
        </p>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-[#262626]">
          {(['ALL', 'HOTEL', 'HALL', 'RESIDENCE', 'CULTURAL'] as const).map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 text-[10px] font-mono font-bold tracking-wider uppercase transition-colors border cursor-pointer ${
                  isActive
                    ? 'bg-[#EF4444] text-white border-[#EF4444]'
                    : 'bg-[#181818] text-neutral-400 border-neutral-700 hover:text-white hover:border-white'
                }`}
              >
                {filter === 'ALL' ? `ALL (${PROJECTS_DATA.length})` : filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects List / Grid */}
      <div className="p-4 sm:p-6 space-y-8 flex-1">
        {filteredProjects.map((project, idx) => (
          <article
            key={project.id}
            className="border-2 border-[#0A0A0A] bg-white group hover:border-[#EF4444] transition-colors"
          >
            {/* Visual Frame */}
            <div 
              className="relative h-64 sm:h-80 w-full overflow-hidden bg-black cursor-pointer"
              onClick={() => onOpenProject(project)}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover grayscale contrast-125 brightness-[0.8] group-hover:scale-105 group-hover:brightness-95 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
              
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="bg-[#EF4444] text-white micro-label px-2 py-0.5 text-[9px]">
                  {project.category}
                </span>
                <span className="bg-[#0A0A0A] text-white micro-label px-2 py-0.5 text-[9px] border border-neutral-700">
                  {project.series}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-xl sm:text-2xl font-heading text-white uppercase tracking-tight group-hover:text-[#EF4444] transition-colors">
                  {project.title}
                </h2>
                <div className="flex items-center gap-4 text-xs font-mono text-neutral-300 mt-1">
                  <span>{project.location}</span>
                  <span>·</span>
                  <span>{project.area}</span>
                  <span>·</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </div>

            {/* Content & Specs Body */}
            <div className="p-5 space-y-4">
              <p className="text-xs text-neutral-700 leading-relaxed font-normal">
                {project.description}
              </p>

              {/* Technical Ribbon */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 border-y-2 border-[#E5E5E5] py-3 text-[11px] font-mono">
                {project.specs.map((sp, sIdx) => (
                  <div key={sIdx}>
                    <span className="text-neutral-500 block text-[9px] uppercase">{sp.label}</span>
                    <span className="font-bold text-[#0A0A0A]">{sp.value}</span>
                  </div>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => onOpenProject(project)}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#0A0A0A] group-hover:text-[#EF4444] transition-colors cursor-pointer"
                >
                  <span>VIEW FULL SPECIFICATIONS</span>
                  <span>→</span>
                </button>

                <button
                  type="button"
                  onClick={onInitiateInquiry}
                  className="px-3 py-1.5 bg-[#0A0A0A] text-white font-mono text-[10px] font-bold uppercase hover:bg-[#EF4444] transition-colors cursor-pointer"
                >
                  INQUIRE
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Screen Bottom CTA */}
      <div className="p-6 bg-[#0A0A0A] text-white border-t-2 border-[#0A0A0A] text-center">
        <h3 className="text-lg font-heading uppercase text-white mb-2">
          HAVE A SITE REQUIRING STRUCTURAL CLARITY?
        </h3>
        <p className="text-xs text-neutral-400 font-mono mb-4 max-w-sm mx-auto">
          We accept commissions for civic, hospitality, and residential architecture worldwide.
        </p>
        <button
          type="button"
          onClick={onInitiateInquiry}
          className="bg-[#EF4444] text-white px-6 py-3 font-mono font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-[#0A0A0A] transition-colors border-2 border-[#EF4444] cursor-pointer"
        >
          SUBMIT PROJECT RFP →
        </button>
      </div>
    </div>
  );
};
