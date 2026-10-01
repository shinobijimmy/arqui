import React, { useState } from 'react';
import { ScreenId, Project, Article } from '../../types';
import { HERO_SLIDES, PROJECTS_DATA, DISCIPLINES_DATA, CLIENT_PARTNERS, ARTICLES_DATA, ARCHIO_IMAGES } from '../../data/archioData';

interface HomeScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenProject: (project: Project) => void;
  onOpenArticle: (article: Article) => void;
  onOpenSpecs: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onOpenProject,
  onOpenArticle,
  onOpenSpecs,
}) => {
  // Hero slide state
  const [heroIndex, setHeroIndex] = useState(0);
  const currentHero = HERO_SLIDES[heroIndex];

  // Featured project carousel state (Rotterdam Hotel, etc.)
  const [featuredProjectIndex, setFeaturedProjectIndex] = useState(0);
  const featuredProjects = PROJECTS_DATA;
  const currentFeatured = featuredProjects[featuredProjectIndex % featuredProjects.length];

  // Discipline expansion states
  const [expandedDiscipline, setExpandedDiscipline] = useState<string | null>('architecture');

  // Client partner carousel offset
  const [clientOffset, setClientOffset] = useState(0);
  const visibleClients = CLIENT_PARTNERS.slice(clientOffset, clientOffset + 4);

  const nextHero = () => {
    setHeroIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevHero = () => {
    setHeroIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const nextFeatured = () => {
    setFeaturedProjectIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevFeatured = () => {
    setFeaturedProjectIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  const nextClients = () => {
    setClientOffset((prev) => (prev + 2 < CLIENT_PARTNERS.length ? prev + 1 : 0));
  };

  const prevClients = () => {
    setClientOffset((prev) => (prev > 0 ? prev - 1 : CLIENT_PARTNERS.length - 4));
  };

  const toggleDiscipline = (id: string) => {
    setExpandedDiscipline(expandedDiscipline === id ? null : id);
  };

  return (
    <div className="w-full flex flex-col">
      {/* BEGIN: Hero Section */}
      <section className="relative w-full min-h-[580px] bg-[#0A0A0A] flex flex-col justify-between text-white overflow-hidden border-b-2 border-[#0A0A0A]">
        {/* Full-bleed Architectural Visual */}
        <div className="absolute inset-0 z-0">
          <img
            alt="Fluid parametric architectural concrete structure"
            className="w-full h-full object-cover object-center grayscale contrast-125 brightness-[0.65] transition-all duration-700"
            src={currentHero.imageUrl}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-transparent to-[#0A0A0A]/95"></div>
        </div>

        {/* Hero Content Top / Body editorial typography */}
        <div className="relative z-10 pt-10 px-6 flex flex-col">
          {/* Red Overline Tag */}
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-[#EF4444]"></span>
            <p className="micro-label text-white tracking-[0.2em]">{currentHero.issue}</p>
          </div>

          <h1 className="text-3xl sm:text-4xl font-heading text-white leading-[1.05] uppercase tracking-tight mb-4">
            {currentHero.tagline.includes('TOUCH') ? (
              <>
                WITH THE <span className="text-[#EF4444] border-b-4 border-[#EF4444] pb-0.5">TOUCH</span><br />OF ARCHIO.
              </>
            ) : currentHero.tagline.includes('VOLUMES') ? (
              <>
                MONOLITHIC <span className="text-[#EF4444] border-b-4 border-[#EF4444] pb-0.5">VOLUMES</span><br />&amp; RAW TRUTH.
              </>
            ) : (
              <>
                LOGISTICAL <span className="text-[#EF4444] border-b-4 border-[#EF4444] pb-0.5">FLUIDITY</span><br />OF SHELLS.
              </>
            )}
          </h1>

          <p className="text-neutral-300 text-xs font-normal leading-relaxed max-w-[280px] mb-4">
            {currentHero.description}
          </p>

          <button
            type="button"
            onClick={() => onNavigate('dispatches')}
            className="inline-flex items-center gap-1.5 text-white text-xs font-bold font-mono tracking-wider group hover:text-[#EF4444] transition-colors self-start cursor-pointer"
          >
            <span>EXPLORE MONOGRAPH</span>
            <span className="text-[#EF4444] group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        {/* Bottom VoiceBox Stark CTAs and Controls */}
        <div className="relative z-10 p-6 pt-0 flex items-center justify-between gap-3">
          {/* Flat Zero-Radius Rectangular CTAs */}
          <div className="flex gap-2 flex-1">
            <button
              type="button"
              onClick={() => onNavigate('projects')}
              className="bg-white text-[#0A0A0A] border-2 border-white px-5 py-3 text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#EF4444] hover:text-white hover:border-[#EF4444] transition-colors flex-1 text-center cursor-pointer"
            >
              PROJECTS
            </button>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="bg-[#0A0A0A]/80 border-2 border-white/80 text-white px-5 py-3 text-xs font-mono font-bold uppercase tracking-wider hover:bg-white hover:text-[#0A0A0A] transition-colors flex-1 text-center cursor-pointer"
            >
              CONTACT
            </button>
          </div>

          {/* Directional Navigation Boxed Controls */}
          <div className="flex items-center border-2 border-white">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={prevHero}
              className="w-10 h-10 bg-[#0A0A0A] text-white flex items-center justify-center text-sm font-bold border-r border-white/40 hover:bg-[#EF4444] transition-colors font-mono cursor-pointer"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={nextHero}
              className="w-10 h-10 bg-[#0A0A0A] text-white flex items-center justify-center text-sm font-bold hover:bg-[#EF4444] transition-colors font-mono cursor-pointer"
            >
              ›
            </button>
          </div>
        </div>
      </section>
      {/* END: Hero Section */}

      {/* BEGIN: Editorial Intro Section */}
      <section className="w-full bg-[#FAFAFA] px-6 pt-12 pb-14 relative border-b-2 border-[#0A0A0A]" id="about">
        {/* Large Architectural Image Crop with VoiceBox Stark Red Action Ribbon */}
        <div className="relative z-10 w-full mb-8 border-2 border-[#0A0A0A] bg-white">
          <div className="h-72 w-full overflow-hidden bg-neutral-200">
            <img
              alt="Curved wooden architectural facade"
              className="w-full h-full object-cover grayscale contrast-125"
              src={ARCHIO_IMAGES.facadeWood}
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Signature Red Action Ribbon attached directly with sharp 0px borders */}
          <button
            type="button"
            onClick={onOpenSpecs}
            className="w-full bg-[#EF4444] border-t-2 border-[#0A0A0A] py-3.5 px-5 flex items-center justify-between text-white font-heading text-xs tracking-wider uppercase hover:bg-[#0A0A0A] transition-colors cursor-pointer"
          >
            <span className="tracking-widest">VIEW SPECIFICATIONS</span>
            <span className="w-6 h-6 border-2 border-white flex items-center justify-center text-xs font-mono font-bold">›</span>
          </button>
        </div>

        {/* Editorial Copy Block with Monogram Watermark */}
        <div className="relative z-10">
          <span className="absolute -right-3 -top-6 font-heading text-[140px] leading-none text-neutral-300/40 pointer-events-none select-none z-0">
            A
          </span>
          <div className="relative z-10">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#EF4444] flex-shrink-0"></span>
              <span className="micro-label text-[#EF4444]">DOSSIER • FOUNDATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading text-[#0A0A0A] leading-tight mb-4 tracking-tight uppercase">
              ARCHIO'S REAL ESTATE, TECHNICAL NETWORK AND SMART <span className="text-[#EF4444]">FOUNDATION</span>
            </h2>
            {/* Red Accent Rule */}
            <div className="w-14 h-[3px] bg-[#EF4444] mb-5"></div>
            {/* Pull-quote treatment with left 4px solid red border */}
            <blockquote className="border-l-4 border-[#EF4444] pl-4 py-1 mb-4 bg-white/70">
              <p className="text-xs font-medium text-[#0A0A0A] leading-relaxed">
                "If you use real content in the <button type="button" onClick={() => onNavigate('disciplines')} className="underline decoration-[#EF4444] underline-offset-4 decoration-2 font-bold hover:text-[#EF4444] cursor-pointer">design process</button>, anytime you reach a review point you focus on essential architecture rather than superfluous ornament."
              </p>
            </blockquote>
            <p className="text-[12px] text-neutral-600 leading-relaxed font-normal">
              Aenean tincidunt id mauris id auctor. Donec at ligula lacus. Nulla dignissim mi quis neque interdum, quis porta sem finibus nonummy perferendis architectural standard.
            </p>
          </div>
        </div>
      </section>
      {/* END: Editorial Intro */}

      {/* BEGIN: Disciplines / Services (High-contrast Stark Black) */}
      <section className="w-full bg-[#0A0A0A] text-white px-6 py-14 relative border-b-2 border-[#0A0A0A]">
        {/* Vertical Tracked Rubric on Left Edge */}
        <div className="absolute left-2.5 top-28 vertical-text text-[9px] uppercase tracking-[0.28em] text-neutral-400 font-mono font-bold flex items-center gap-2 pointer-events-none">
          <span className="inline-block w-1.5 h-1.5 bg-[#EF4444]"></span>
          DISCIPLINES // 03
        </div>

        <div className="ml-5 space-y-6">
          {DISCIPLINES_DATA.map((disc) => {
            const isExpanded = expandedDiscipline === disc.id;
            return (
              <div
                key={disc.id}
                className={`border-2 transition-all duration-300 p-6 relative ${
                  isExpanded ? 'border-[#EF4444] bg-[#141414]' : 'border-[#262626] bg-[#121212] hover:border-white'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 text-[#EF4444] flex items-center">
                    {disc.id === 'architecture' && (
                      <svg className="w-8 h-8 stroke-current fill-none" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M4 21h16M6 21V7l6-4 6 4v14M9 9h2M13 9h2M9 13h2M13 13h2M9 17h2M13 17h2"></path>
                      </svg>
                    )}
                    {disc.id === 'interior' && (
                      <svg className={`w-8 h-8 stroke-current fill-none ${isExpanded ? 'text-[#EF4444]' : 'text-white'}`} strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M5 19V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14M5 12h14M3 19h18M8 19v3M16 19v3"></path>
                      </svg>
                    )}
                    {disc.id === 'plannings' && (
                      <svg className={`w-8 h-8 stroke-current fill-none ${isExpanded ? 'text-[#EF4444]' : 'text-white'}`} strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M3 3h18v18H3V3zm7 0v18M3 10h7M10 14h11M15 14v7"></path>
                      </svg>
                    )}
                  </div>
                  <span className={`micro-label ${isExpanded ? 'text-[#EF4444]' : 'text-neutral-500'}`}>
                    {disc.number}
                  </span>
                </div>

                <h3 className="text-xl font-heading text-white mb-2 tracking-tight uppercase">
                  {disc.title}
                </h3>
                <p className={`text-xs leading-relaxed mb-4 ${isExpanded ? 'text-neutral-300' : 'text-neutral-400'}`}>
                  {disc.tagline}
                </p>

                {/* Expanded Details Drawer */}
                {isExpanded && (
                  <div className="pt-4 border-t border-[#262626] space-y-4 text-xs font-mono animate-in fade-in duration-200">
                    <p className="text-neutral-300 leading-relaxed font-body">
                      {disc.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-2">
                      {disc.metrics.map((m, i) => (
                        <div key={i} className="border border-[#262626] p-2 bg-[#0A0A0A]">
                          <span className="text-neutral-500 block text-[9px] uppercase">{m.label}</span>
                          <span className="text-[#EF4444] font-bold">{m.value}</span>
                        </div>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => onNavigate('disciplines')}
                      className="inline-flex items-center gap-1 text-[#EF4444] hover:text-white font-mono text-[11px] font-bold uppercase transition-colors"
                    >
                      OPEN SYSTEM WORKBENCH →
                    </button>
                  </div>
                )}

                {/* Signature Sharp Red Square Button */}
                <button
                  type="button"
                  aria-label={`Expand ${disc.title} details`}
                  onClick={() => toggleDiscipline(disc.id)}
                  className={`w-8 h-8 font-mono font-bold text-base flex items-center justify-center transition-colors border-2 mt-4 cursor-pointer ${
                    isExpanded 
                      ? 'bg-white text-[#0A0A0A] border-white hover:bg-[#EF4444] hover:text-white' 
                      : 'bg-[#EF4444] text-white border-[#EF4444] hover:bg-white hover:text-[#0A0A0A]'
                  }`}
                >
                  {isExpanded ? '−' : '+'}
                </button>
              </div>
            );
          })}
        </div>
      </section>
      {/* END: Disciplines / Services */}

      {/* BEGIN: Contiguous Architectural Showcase (Projects) */}
      <section className="w-full bg-[#0A0A0A] text-white border-b-2 border-[#0A0A0A]" id="projects">
        {/* Section Tag Header */}
        <div className="px-6 py-4 bg-[#141414] border-b-2 border-[#262626] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#EF4444]"></span>
            <span className="micro-label text-white">SELECTED WORKS</span>
          </div>
          <span className="micro-label text-[#EF4444]">SERIES 2026</span>
        </div>

        {/* Feature 1: Fantastic Interior (Full width edge-to-edge) */}
        <article 
          onClick={() => onOpenProject(currentFeatured)}
          className="relative w-full h-[360px] overflow-hidden border-b-2 border-[#262626] group cursor-pointer"
        >
          <img
            alt={currentFeatured.title}
            className="w-full h-full object-cover grayscale contrast-125 brightness-[0.72] group-hover:scale-105 transition-transform duration-700"
            src={currentFeatured.imageUrl}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent"></div>

          {/* Prev / Next Slider Arrows with Crisp VoiceBox Styling */}
          <div className="absolute inset-y-0 left-4 flex items-center z-10" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              aria-label="Previous Project"
              onClick={prevFeatured}
              className="w-9 h-9 bg-[#0A0A0A] border-2 border-white text-white text-sm font-mono flex items-center justify-center hover:bg-[#EF4444] hover:border-[#EF4444] transition-colors cursor-pointer"
            >
              ‹
            </button>
          </div>
          <div className="absolute inset-y-0 right-4 flex items-center z-10" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              aria-label="Next Project"
              onClick={nextFeatured}
              className="w-9 h-9 bg-[#0A0A0A] border-2 border-white text-white text-sm font-mono flex items-center justify-center hover:bg-[#EF4444] hover:border-[#EF4444] transition-colors cursor-pointer"
            >
              ›
            </button>
          </div>

          {/* Meta & Title */}
          <div className="absolute bottom-5 left-6 right-6">
            <div className="inline-block bg-[#EF4444] text-white px-2 py-0.5 micro-label text-[9px] mb-2">
              {currentFeatured.category}
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading text-white leading-tight uppercase tracking-tight group-hover:text-[#EF4444] transition-colors">
              {currentFeatured.title}
            </h3>
            <span className="micro-label text-neutral-400 mt-1 block">
              CLICK TO VIEW FULL BLUEPRINT SPECIFICATIONS →
            </span>
          </div>
        </article>

        {/* Split Edge-to-Edge Grid for Secondary Works */}
        <div className="grid grid-cols-2 w-full">
          {/* Mendella Exterior */}
          <article 
            onClick={() => onOpenProject(PROJECTS_DATA[1])}
            className="relative h-52 overflow-hidden border-r-2 border-[#262626] group bg-[#141414] cursor-pointer"
          >
            <img
              alt="Mendella exterior facade"
              className="w-full h-full object-cover grayscale contrast-125 brightness-[0.7] group-hover:scale-105 transition-transform duration-500"
              src={ARCHIO_IMAGES.mendellaExterior}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent"></div>
            <div className="absolute bottom-3 left-4 right-3">
              <span className="micro-label text-[#EF4444] text-[8px] block mb-0.5">HALL // 02</span>
              <h4 className="text-xs font-heading text-white uppercase leading-snug group-hover:text-[#EF4444] transition-colors">
                MENDELLA EXTERIOR
              </h4>
            </div>
          </article>

          {/* Scott Villa du */}
          <article 
            onClick={() => onOpenProject(PROJECTS_DATA[2])}
            className="relative h-52 overflow-hidden group bg-[#141414] cursor-pointer"
          >
            <img
              alt="Scott Villa du modern residence"
              className="w-full h-full object-cover grayscale contrast-125 brightness-[0.7] group-hover:scale-105 transition-transform duration-500"
              src={ARCHIO_IMAGES.scottVillaDu}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent"></div>
            <div className="absolute bottom-3 left-4 right-3">
              <span className="micro-label text-[#EF4444] text-[8px] block mb-0.5">RESIDENCE // 03</span>
              <h4 className="text-xs font-heading text-white uppercase leading-snug group-hover:text-[#EF4444] transition-colors">
                SCOTT VILLA DU
              </h4>
            </div>
          </article>
        </div>
      </section>
      {/* END: Contiguous Architectural Showcase */}

      {/* BEGIN: Blueprint Metrics & Studio Identity */}
      <section className="w-full bg-[#0A0A0A] px-6 py-14 text-white blueprint-dot-grid relative border-b-2 border-[#0A0A0A]">
        {/* Key Framed Milestone Box (VoiceBox 2px Stark Outline) */}
        <div className="relative w-full border-2 border-white p-6 mb-8 bg-[#141414] flex items-center justify-between">
          {/* Vertical Red Label on Left */}
          <div className="vertical-text micro-label text-[#EF4444] absolute left-2.5 top-1/2 -translate-y-1/2">
            ARCHIO DECADE
          </div>
          <div className="pl-6 flex items-baseline">
            <span className="text-6xl font-heading tracking-tight text-white">15</span>
          </div>
          <div className="text-right">
            <span className="micro-label text-neutral-400 block">YEARS</span>
            <span className="text-xs font-heading uppercase text-white tracking-wider">EXPERIENCE</span>
          </div>
        </div>

        {/* Subtitle Statement */}
        <p className="text-xs font-medium text-neutral-300 mb-8 leading-relaxed font-mono">
          ESTABLISHED PRACTICE SPANNING <span className="text-[#EF4444] font-bold">08 TERRITORIES</span>
        </p>

        {/* Large Central Wordmark Divider with 2px borders */}
        <div className="w-full text-center py-5 border-y-2 border-[#262626] mb-8 bg-[#111111]">
          <span className="font-heading text-3xl sm:text-4xl tracking-tight text-white uppercase">
            ARCHIO<span className="text-[#EF4444]">.</span> STUDIO
          </span>
        </div>

        {/* Vertical Stacked Monolith Metrics with 2px Dividing Borders */}
        <div className="space-y-6 text-center">
          <div className="pb-6 border-b-2 border-[#262626] flex flex-col items-center">
            <span className="text-4xl font-heading text-white tracking-tight">155<sup className="text-[#EF4444] text-xl font-mono ml-1">+</sup></span>
            <span className="micro-label text-neutral-400 mt-1">PROJECTS DELIVERED</span>
          </div>
          <div className="pb-6 border-b-2 border-[#262626] flex flex-col items-center">
            <span className="text-4xl font-heading text-white tracking-tight">18<sup className="text-[#EF4444] text-xl font-mono ml-1">+</sup></span>
            <span className="micro-label text-neutral-400 mt-1">PRINCIPAL PARTNERS</span>
          </div>
          <div className="pb-6 border-b-2 border-[#262626] flex flex-col items-center">
            <span className="text-4xl font-heading text-white tracking-tight">25<sup className="text-[#EF4444] text-xl font-mono ml-1">+</sup></span>
            <span className="micro-label text-neutral-400 mt-1">ACTIVE COMMISSIONS</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-heading text-white tracking-tight">15<sup className="text-[#EF4444] text-xl font-mono ml-1">+</sup></span>
            <span className="micro-label text-neutral-400 mt-1">GLOBAL CITATIONS</span>
          </div>
        </div>
      </section>
      {/* END: Blueprint Metrics & Studio Identity */}

      {/* BEGIN: Recognition & Client Marks */}
      <section className="w-full bg-[#FAFAFA] px-6 pt-12 pb-12 relative overflow-hidden border-b-2 border-[#0A0A0A]">
        {/* Background Glyph 'C' */}
        <span className="absolute -left-6 top-6 font-heading text-[140px] leading-none text-neutral-200/50 pointer-events-none select-none z-0">
          C
        </span>

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 bg-[#EF4444]"></span>
            <span className="micro-label text-[#EF4444]">COLLABORATION</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-heading text-[#0A0A0A] leading-tight mb-7 tracking-tight uppercase">
            WE DEPEND ON OUR<br />TRUSTED <span className="text-[#EF4444]">CLIENTS</span>
          </h2>

          {/* Monochrome Editorial Seals Grid with 2px solid #0A0A0A borders */}
          <div className="grid grid-cols-4 gap-2 items-center mb-6">
            {visibleClients.map((client) => (
              <div 
                key={client.id}
                title={`${client.name} ${client.sub} (${client.type})`}
                className="flex flex-col items-center justify-center p-2.5 border-2 border-[#0A0A0A] h-18 bg-white hover:bg-[#0A0A0A] hover:text-white transition-colors group cursor-pointer"
              >
                <span className="text-[8px] font-heading uppercase text-[#0A0A0A] group-hover:text-white">
                  {client.name}
                </span>
                <span className={`text-[6.5px] font-mono ${client.accent ? 'text-[#EF4444]' : 'text-neutral-500 group-hover:text-[#EF4444]'}`}>
                  {client.sub}
                </span>
              </div>
            ))}
          </div>

          {/* Directional Navigation */}
          <div className="flex justify-end gap-2">
            <button
              type="button"
              aria-label="Previous partner"
              onClick={prevClients}
              className="w-8 h-8 border-2 border-[#0A0A0A] bg-white flex items-center justify-center text-xs font-mono font-bold hover:bg-[#0A0A0A] hover:text-white transition-colors cursor-pointer"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next partner"
              onClick={nextClients}
              className="w-8 h-8 border-2 border-[#0A0A0A] bg-[#0A0A0A] text-white flex items-center justify-center text-xs font-mono font-bold hover:bg-[#EF4444] transition-colors cursor-pointer"
            >
              →
            </button>
          </div>
        </div>
      </section>
      {/* END: Recognition & Client Marks */}

      {/* BEGIN: Recent News / Journal */}
      <section className="w-full bg-[#F5F5F5] px-6 py-12 border-b-2 border-[#0A0A0A]">
        <div className="text-left mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 bg-[#EF4444]"></span>
            <span className="micro-label text-[#EF4444]">DISPATCHES // JOURNAL</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-heading text-[#0A0A0A] leading-tight uppercase tracking-tight">
            ARCHITECTURAL NEWS &amp;<br /><span className="text-[#EF4444]">FOUNDATION</span> REPORTS
          </h2>
        </div>

        {/* Article 1 */}
        <article className="bg-white border-2 border-[#0A0A0A] mb-6">
          <div className="h-44 w-full overflow-hidden bg-neutral-900 border-b-2 border-[#0A0A0A]">
            <img
              alt="Red structural parametric architecture"
              className="w-full h-full object-cover contrast-110"
              src={ARCHIO_IMAGES.journalRedStructure}
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="micro-label text-[#EF4444]">DISPATCH #042</span>
              <span className="text-[10px] text-neutral-500 font-mono">JULY 10, 2026</span>
            </div>
            <h3 className="text-base font-heading text-[#0A0A0A] mb-3 leading-snug uppercase">
              WE WANT TO HIRE SOMEONE FOR JOB
            </h3>
            <button
              type="button"
              onClick={() => onOpenArticle(ARTICLES_DATA[0])}
              className="inline-flex items-center gap-2 micro-label text-[#0A0A0A] hover:text-[#EF4444] transition-colors group font-bold cursor-pointer"
            >
              <span>READ FULL MONOGRAPH</span>
              <span className="text-[#EF4444] group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </article>

        {/* Article 2 */}
        <article className="bg-white border-2 border-[#0A0A0A]">
          <div className="h-44 w-full overflow-hidden bg-neutral-900 border-b-2 border-[#0A0A0A]">
            <img
              alt="Faceted glass architectural tower"
              className="w-full h-full object-cover grayscale contrast-125"
              src={ARCHIO_IMAGES.journalTower}
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="micro-label text-[#EF4444]">URBAN REPORT</span>
              <span className="text-[10px] text-neutral-500 font-mono">JUNE 18, 2026</span>
            </div>
            <h3 className="text-base font-heading text-[#0A0A0A] mb-3 leading-snug uppercase">
              COPS KILL BULL ATTACKING OWN
            </h3>
            <button
              type="button"
              onClick={() => onOpenArticle(ARTICLES_DATA[1])}
              className="inline-flex items-center gap-2 micro-label text-[#0A0A0A] hover:text-[#EF4444] transition-colors group font-bold cursor-pointer"
            >
              <span>READ FULL MONOGRAPH</span>
              <span className="text-[#EF4444] group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </article>
      </section>
      {/* END: Recent News / Journal */}

      {/* BEGIN: Architectural Contact & Elevation Footer */}
      <footer className="w-full bg-[#0A0A0A] text-white pt-12 pb-6 px-6 relative blueprint-dot-grid">
        {/* Footer Headline */}
        <div className="mb-8">
          <span className="micro-label text-[#EF4444] block mb-2">INITIATE INQUIRY</span>
          <h2 className="text-3xl font-heading tracking-tight leading-[1.05] text-white uppercase">
            LET'S<br />TALK<br /><span className="text-[#EF4444]">WITH US...</span>
          </h2>
        </div>

        {/* Coordinates 3-Column Grid with Hairline Dividers & Red Headers */}
        <div className="grid grid-cols-3 gap-2 py-4 border-y-2 border-[#262626] mb-8 text-[10px]">
          {/* Call */}
          <div className="border-r border-white/20 pr-2">
            <span className="text-[#EF4444] block font-bold mb-1 micro-label text-[8px]">CALL</span>
            <p className="text-neutral-300 font-mono text-[9px] leading-tight">+333 22 42 38</p>
            <p className="text-neutral-300 font-mono text-[9px] leading-tight mt-0.5">+333 22 42 65</p>
          </div>
          {/* Mail */}
          <div className="border-r border-white/20 px-2">
            <span className="text-[#EF4444] block font-bold mb-1 micro-label text-[8px]">MAIL</span>
            <p className="text-neutral-300 truncate font-mono text-[9px] leading-tight">archio@gmail.com</p>
            <p className="text-neutral-300 truncate font-mono text-[9px] leading-tight mt-0.5">info@gmail.com</p>
          </div>
          {/* Address */}
          <div className="pl-2">
            <span className="text-[#EF4444] block font-bold mb-1 micro-label text-[8px]">ADDRESS</span>
            <p className="text-neutral-300 text-[9px] leading-tight font-mono">012 MOKE ROAD,<br />USA</p>
          </div>
        </div>

        {/* Action Button inside footer */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="w-full py-3 bg-[#EF4444] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-[#0A0A0A] transition-colors border-2 border-[#EF4444] cursor-pointer"
          >
            DISPATCH ARCHITECTURAL RFP / BRIEF →
          </button>
        </div>

        {/* Architectural Elevation Skyline Wireframe Silhouette Graphic with Red Laser Datum Line */}
        <div className="w-full h-16 opacity-40 flex items-end justify-center mb-6 relative">
          <svg className="w-full h-14 stroke-white fill-none" preserveAspectRatio="none" viewBox="0 0 360 60">
            <path d="M0 60 V40 H20 V25 H45 V60 H60 V10 H90 V60 H110 V35 H130 V20 H160 V5 H180 V60 H200 V30 H230 V15 H255 V60 H280 V45 H305 V22 H335 V60 H360" strokeWidth="1.5"></path>
            <line stroke="#EF4444" strokeDasharray="3 3" strokeWidth="1" x1="0" x2="360" y1="20" y2="20"></line>
            <line strokeDasharray="3 3" strokeWidth="0.5" x1="0" x2="360" y1="40" y2="40"></line>
          </svg>
        </div>

        {/* Bottom Micro Bar with Square Back to Top Button */}
        <div className="pt-4 border-t-2 border-[#262626] flex items-center justify-between text-[9px] text-neutral-400 font-mono">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">ARCHIO • VB</span>
            <span>/</span>
            <button type="button" onClick={() => onNavigate('projects')} className="hover:text-[#EF4444] transition-colors cursor-pointer">WORKS</button>
            <span>/</span>
            <button type="button" onClick={() => onNavigate('disciplines')} className="hover:text-[#EF4444] transition-colors cursor-pointer">DISCIPLINES</button>
          </div>
          {/* Red Square Back to Top Button */}
          <button
            type="button"
            aria-label="Back to top"
            className="w-7 h-7 bg-[#EF4444] text-white font-bold flex items-center justify-center hover:bg-white hover:text-[#0A0A0A] transition-colors border-2 border-[#EF4444] cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ⌃
          </button>
        </div>
        <div className="mt-4 text-center">
          <span className="text-[8px] text-neutral-500 block uppercase tracking-widest font-mono">
            COPYRIGHT © 2026. ALL RIGHTS RESERVED. VOICEBOX SPECIFICATION.
          </span>
        </div>
      </footer>
      {/* END: Architectural Contact & Elevation Footer */}
    </div>
  );
};
