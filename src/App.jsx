import { useState } from 'react';
import { portfolioData } from './portfolioData';
import RippleGrid from './components/RippleGrid';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import CloudSystems from './components/CloudSystems';
import Skills from './components/Skills';
import Journey from './components/Journey';
import GitHubStats from './components/GitHubStats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DossierModal from './components/DossierModal';
import { useTheme } from './context/ThemeContext';

export default function App() {
  const { personal, projects, skillsGrouped, cloudSection, journey } = portfolioData;
  const [dossierOpen, setDossierOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <div className="relative min-h-screen bg-[#040705] text-[#F4F7F4] flex flex-col selection:bg-[#84CC16]/30 selection:text-white transition-colors duration-200">
      {/* Interactive React Bits RippleGrid Background (Dark & Light Mode) */}
      <div className="fixed inset-0 z-0 pointer-events-none no-print" aria-hidden="true">
        <RippleGrid
          color={isDark ? "#84CC16" : "#15803D"}
          variant="lines"
          cellSize={48}
          lineWidth={1}
          glow={isDark ? 0.65 : 0.45}
          rippleStrength={1.05}
          rippleSpeed={1}
          rippleSize={1}
          autoRipple="center"
          rippleInterval={2.6}
          mouseInteraction={true}
          clickRipple={true}
          intro={true}
          fade={0.35}
          opacity={isDark ? 0.8 : 0.65}
          lightMode={!isDark}
        />
      </div>

      {/* 1. Top Terminal Navigation Bar */}
      <Navbar personal={personal} onOpenDossier={() => setDossierOpen(true)} />

      {/* Main Content */}
      <main id="main-content" className="relative z-10 flex-1 pb-4">
        {/* 2. Split-Screen Hero + Checklist + Developer Artwork */}
        <Hero
          personal={personal}
          onOpenDossier={() => setDossierOpen(true)}
        />

        {/* 3. Featured Projects (Grid & Detailed Split Views + Filters) */}
        <Projects projects={projects} />

        {/* 4. Beyond the Classroom — Cloud & Systems Learning Lab */}
        <CloudSystems cloudSection={cloudSection} />

        {/* 5. Tech Stack, Currently Exploring & Technical Toolkit / CS Coursework */}
        <Skills personal={personal} skillsGrouped={skillsGrouped} />

        {/* 6. Academic Path & Self-Directed Growth Timeline */}
        <Journey journey={journey} />

        {/* 7. GitHub Analytics (Stats, Bar Chart, Top Languages, Contribution Graph) */}
        <GitHubStats personal={personal} />

        {/* 8. Quote Banner ("A Brighter Self") & Let's Connect */}
        <Contact personal={personal} />
      </main>

      {/* 9. Terminal Footer */}
      <div className="relative z-10">
        <Footer personal={personal} onOpenDossier={() => setDossierOpen(true)} />
      </div>

      {/* 10. Printable Developer Resume / Dossier Modal */}
      <DossierModal
        isOpen={dossierOpen}
        onClose={() => setDossierOpen(false)}
        personal={personal}
        projects={projects}
        skillsGrouped={skillsGrouped}
        journey={journey}
      />
    </div>
  );
}
