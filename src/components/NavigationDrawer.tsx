import React from 'react';
import { ScreenId } from '../types';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  onClose,
  currentScreen,
  onNavigate,
}) => {
  if (!isOpen) return null;

  const screens: { id: ScreenId; num: string; label: string; sub: string }[] = [
    { id: 'home', num: '01', label: 'OVERVIEW // MONOGRAPH', sub: 'Foundational practice, featured works & dispatch' },
    { id: 'projects', num: '02', label: 'SELECTED WORKS', sub: 'Rotterdam Hotel, Mendella Hall, Scott Villa, Osaka Shell' },
    { id: 'disciplines', num: '03', label: 'DISCIPLINES & SYSTEMS', sub: '01 Architecture · 02 Interior · 03 Plannings' },
    { id: 'dispatches', num: '04', label: 'DISPATCHES & JOURNAL', sub: 'Critical reports, essays & material monographs' },
    { id: 'specifications', num: '05', label: 'BLUEPRINT SPECIFICATIONS', sub: 'Eurocode 8 seismic tiers, C45/55 mix, structural tolerances' },
    { id: 'contact', num: '06', label: 'INITIATE INQUIRY', sub: 'Commission briefings, RFPs & site feasibility' },
  ];

  const handleSelect = (id: ScreenId) => {
    onNavigate(id);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-xs transition-opacity cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-[420px] bg-[#0A0A0A] text-white h-full border-r-2 border-[#EF4444] flex flex-col justify-between z-10 overflow-y-auto blueprint-dot-grid">
        {/* Drawer Header */}
        <div className="p-6 border-b-2 border-[#262626] flex items-center justify-between bg-[#141414]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#EF4444]"></span>
            <span className="micro-label text-white">INDEX // DIRECTORY</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 border-2 border-white text-white font-mono font-bold flex items-center justify-center hover:bg-[#EF4444] hover:border-[#EF4444] transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 py-4 divide-y divide-[#262626]">
          {screens.map((item) => {
            const isActive = currentScreen === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelect(item.id)}
                className={`w-full text-left px-6 py-4 flex items-start gap-4 transition-all group cursor-pointer ${
                  isActive ? 'bg-[#181818] border-l-4 border-[#EF4444]' : 'hover:bg-[#141414] hover:pl-7'
                }`}
              >
                <span className={`font-mono text-xs font-bold pt-1 ${isActive ? 'text-[#EF4444]' : 'text-neutral-500 group-hover:text-white'}`}>
                  {item.num}
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className={`font-heading text-sm uppercase tracking-tight ${isActive ? 'text-[#EF4444]' : 'text-white group-hover:text-[#EF4444]'}`}>
                      {item.label}
                    </span>
                    <span className="font-mono text-xs text-neutral-500 group-hover:text-white">
                      →
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-1 leading-snug font-normal">
                    {item.sub}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Drawer Footer Metrics & Coordinates */}
        <div className="p-6 border-t-2 border-[#262626] bg-[#111111] space-y-4">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-neutral-400">PRACTICE STATUS:</span>
            <span className="text-[#EF4444] font-bold">25 ACTIVE COMMISSIONS</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-neutral-400">
            <div>
              <span className="text-[#EF4444] block font-bold">ROTTERDAM / HQ</span>
              <span>+333 22 42 38</span>
            </div>
            <div>
              <span className="text-[#EF4444] block font-bold">DIRECT MAIL</span>
              <span className="truncate block">archio@gmail.com</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleSelect('contact')}
            className="w-full bg-[#EF4444] text-white py-3 font-mono font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-[#0A0A0A] transition-colors border-2 border-[#EF4444]"
          >
            INITIATE NEW INQUIRY →
          </button>
        </div>
      </div>
    </div>
  );
};
