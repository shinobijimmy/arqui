import React from 'react';
import { ScreenId } from '../types';

interface DeviceModeToggleProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  isMobileFrame: boolean;
  onToggleFrame: () => void;
}

export const DeviceModeToggle: React.FC<DeviceModeToggleProps> = ({
  currentScreen,
  onNavigate,
  isMobileFrame,
  onToggleFrame,
}) => {
  const tabs: { id: ScreenId; label: string; num: string }[] = [
    { id: 'home', label: 'MONOGRAPH', num: '01' },
    { id: 'projects', label: 'WORKS', num: '02' },
    { id: 'disciplines', label: 'DISCIPLINES', num: '03' },
    { id: 'dispatches', label: 'JOURNAL', num: '04' },
    { id: 'specifications', label: 'SPECS', num: '05' },
    { id: 'contact', label: 'INQUIRY', num: '06' },
  ];

  return (
    <div className="w-full bg-[#000000] border-b border-[#262626] text-white py-2 px-3 sm:px-6 flex flex-wrap items-center justify-between gap-2 text-xs font-mono select-none sticky top-0 z-50">
      {/* Brand & Mode switch */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 font-bold tracking-wider text-[11px]">
          <span className="w-2 h-2 bg-[#EF4444]"></span>
          <span className="text-white">ARCHIO.OS</span>
          <span className="text-neutral-500 hidden md:inline">/ 2026</span>
        </div>

        {/* Frame Toggle */}
        <button
          type="button"
          onClick={onToggleFrame}
          className="flex items-center gap-1.5 px-2.5 py-1 border border-neutral-700 hover:border-white bg-[#141414] text-[10px] text-neutral-300 hover:text-white transition-colors cursor-pointer"
          title="Toggle between authentic mobile frame (440px) and full-width broadsheet view"
        >
          <span className="text-[#EF4444]">●</span>
          <span>{isMobileFrame ? 'FRAME: 440PX' : 'FRAME: EXPANDED'}</span>
        </button>
      </div>

      {/* Screen Quick Tabs */}
      <div className="flex items-center overflow-x-auto gap-1 py-0.5 max-w-full">
        {tabs.map((tab) => {
          const isActive = currentScreen === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onNavigate(tab.id)}
              className={`px-2 py-1 text-[10px] font-bold tracking-wider whitespace-nowrap transition-colors border cursor-pointer ${
                isActive
                  ? 'bg-[#EF4444] text-white border-[#EF4444]'
                  : 'bg-[#121212] text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-600'
              }`}
            >
              <span className="opacity-60 mr-1">{tab.num}</span>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
