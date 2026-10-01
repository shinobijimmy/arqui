/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ScreenId, Project, Article } from './types';
import { Header } from './components/Header';
import { NavigationDrawer } from './components/NavigationDrawer';
import { DeviceModeToggle } from './components/DeviceModeToggle';
import { HomeScreen } from './components/screens/HomeScreen';
import { ProjectsScreen } from './components/screens/ProjectsScreen';
import { DisciplinesScreen } from './components/screens/DisciplinesScreen';
import { DispatchesScreen } from './components/screens/DispatchesScreen';
import { SpecificationsScreen } from './components/screens/SpecificationsScreen';
import { ContactScreen } from './components/screens/ContactScreen';
import { ProjectDetailModal } from './components/modals/ProjectDetailModal';
import { MonographModal } from './components/modals/MonographModal';
import { SpecificationsModal } from './components/modals/SpecificationsModal';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileFrame, setIsMobileFrame] = useState(true);

  // Modals state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);

  const handleNavigate = (screen: ScreenId) => {
    setCurrentScreen(screen);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full min-h-screen bg-[#0A0A0A] flex flex-col items-center selection:bg-[#EF4444] selection:text-white">
      {/* Top Device & Screen Switcher Bar */}
      <DeviceModeToggle
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        isMobileFrame={isMobileFrame}
        onToggleFrame={() => setIsMobileFrame((prev) => !prev)}
      />

      {/* Main Viewport Container */}
      <main
        className={`w-full bg-[#FAFAFA] min-h-screen overflow-x-hidden relative flex flex-col border-x-2 border-[#0A0A0A] transition-all duration-300 ${
          isMobileFrame ? 'max-w-[440px]' : 'max-w-5xl'
        }`}
      >
        {/* Persistent Editorial Header */}
        <Header
          currentScreen={currentScreen}
          onNavigate={handleNavigate}
          onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
          isMenuOpen={isMenuOpen}
        />

        {/* Dynamic Screen View */}
        {currentScreen === 'home' && (
          <HomeScreen
            onNavigate={handleNavigate}
            onOpenProject={(proj) => setSelectedProject(proj)}
            onOpenArticle={(art) => setSelectedArticle(art)}
            onOpenSpecs={() => setIsSpecsOpen(true)}
          />
        )}

        {currentScreen === 'projects' && (
          <ProjectsScreen
            onOpenProject={(proj) => setSelectedProject(proj)}
            onInitiateInquiry={() => handleNavigate('contact')}
          />
        )}

        {currentScreen === 'disciplines' && (
          <DisciplinesScreen
            onInitiateInquiry={() => handleNavigate('contact')}
          />
        )}

        {currentScreen === 'dispatches' && (
          <DispatchesScreen
            onOpenArticle={(art) => setSelectedArticle(art)}
            onInitiateInquiry={() => handleNavigate('contact')}
          />
        )}

        {currentScreen === 'specifications' && (
          <SpecificationsScreen
            onInitiateInquiry={() => handleNavigate('contact')}
          />
        )}

        {currentScreen === 'contact' && (
          <ContactScreen />
        )}
      </main>

      {/* Global Navigation Drawer */}
      <NavigationDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
      />

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInitiateInquiry={() => handleNavigate('contact')}
      />

      {/* Monograph Article Reader Modal */}
      <MonographModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onInquire={() => handleNavigate('contact')}
      />

      {/* Blueprint Specifications Drawer */}
      <SpecificationsModal
        isOpen={isSpecsOpen}
        onClose={() => setIsSpecsOpen(false)}
        onInquire={() => handleNavigate('contact')}
      />
    </div>
  );
}
