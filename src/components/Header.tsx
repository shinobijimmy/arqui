import React from 'react';
import { ScreenId } from '../types';

interface HeaderProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  onToggleMenu: () => void;
  isMenuOpen: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  onToggleMenu,
  isMenuOpen,
}) => {
  return (
    <header className="w-full h-14 bg-white border-b-2 border-[#0A0A0A] flex items-center justify-between sticky top-0 z-40 select-none">
      {/* Crisp Black/Red Menu Button on Left */}
      <button
        type="button"
        aria-label={isMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
        onClick={onToggleMenu}
        className={`w-14 h-14 ${isMenuOpen ? 'bg-[#EF4444]' : 'bg-[#0A0A0A]'} text-white flex flex-col items-center justify-center gap-[5px] focus:outline-none flex-shrink-0 cursor-pointer border-r-2 border-[#0A0A0A] hover:bg-[#EF4444] transition-colors group`}
      >
        {isMenuOpen ? (
          <div className="relative w-5 h-5 flex items-center justify-center font-mono font-bold text-lg leading-none">
            ✕
          </div>
        ) : (
          <>
            <span className="w-[18px] h-[2px] bg-white transition-transform"></span>
            <span className="w-[18px] h-[2px] bg-[#EF4444] group-hover:bg-white transition-colors"></span>
            <span className="w-[18px] h-[2px] bg-white transition-transform"></span>
          </>
        )}
      </button>

      {/* Centered VoiceBox / ARCHIO Brand Masthead */}
      <button
        type="button"
        onClick={() => onNavigate('home')}
        className="flex-1 flex justify-center items-center px-2 cursor-pointer focus:outline-none group"
      >
        <span className="font-heading text-lg tracking-tight text-[#0A0A0A] uppercase group-hover:text-[#EF4444] transition-colors">
          ARCHIO<span className="text-[#EF4444] group-hover:text-[#0A0A0A]">.</span>
        </span>
        {currentScreen !== 'home' && (
          <span className="ml-2 font-mono text-[9px] uppercase tracking-wider bg-[#0A0A0A] text-white px-1.5 py-0.5 hidden sm:inline-block">
            {currentScreen}
          </span>
        )}
      </button>

      {/* Far right minimalist status indicator / quick inquiry trigger */}
      <button
        type="button"
        title="Initiate Inquiry"
        onClick={() => onNavigate('contact')}
        className="w-14 h-14 flex items-center justify-center flex-shrink-0 border-l-2 border-[#0A0A0A] bg-white hover:bg-[#F5F5F5] transition-colors cursor-pointer"
        aria-label="Contact Studio"
      >
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 bg-[#EF4444] animate-pulse"></span>
          <span className="w-1.5 h-1.5 bg-[#0A0A0A]"></span>
        </div>
      </button>
    </header>
  );
};
