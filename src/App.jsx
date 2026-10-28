import { useState } from 'react';
import { portfolioData } from './portfolioData';
import RippleGrid from './components/RippleGrid';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import CloudSystems from './components/CloudSystems';
import Skills from './components/Skills';
import Journey from './components/Journey';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DossierModal from './components/DossierModal';

export default function App() {
  const { personal, projects, skillsGrouped, cloudSection, journey } = portfolioData;
  const [dossierOpen, setDossierOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#07090E] text-[#F8FAFC] flex flex-col selection:bg-blue-500/30 selection:text-white">
      {/* Interactive React Bits RippleGrid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none no-print" aria-hidden="true">
        <RippleGrid
          color="#3B82F6"
          variant="lines"
          cellSize={48}
          lineWidth={1}
          glow={0.65}
          rippleStrength={1.05}
          rippleSpeed={0.95}
          rippleSize={1.1}
          autoRipple="center"
          rippleInterval={3.2}
          mouseInteraction={true}
          clickRipple={true}
          fade={0.35}
          opacity={0.75}
        />
      </div>

      {/* 1. 3-Zone Top Navigation Bar */}
      <Navbar personal={personal} onOpenDossier={() => setDossierOpen(true)} />

      {/* Main Content */}
      <main id="main-content" className="relative z-10 flex-1">
        {/* 2. Split-Screen Hero + Student Sandbox Workbench + 4-Column Snapshot Row */}
        <Hero
          personal={personal}
          projects={projects}
          onOpenDossier={() => setDossierOpen(true)}
        />

        {/* 3. Selected Student Projects */}
        <Projects projects={projects} />

        {/* 4. Cloud & Systems Learning Lab */}
        <CloudSystems cloudSection={cloudSection} />

        {/* 5. Technical Toolkit & CS Coursework */}
        <Skills skillsGrouped={skillsGrouped} />

        {/* 6. Learning Journey & Education */}
        <Journey journey={journey} />

        {/* 7. About Me & Student Snapshot */}
        <About personal={personal} onOpenDossier={() => setDossierOpen(true)} />

        {/* 8. Get in Touch & Internships */}
        <Contact personal={personal} />
      </main>

      {/* 9. Minimal Editorial Footer */}
      <div className="relative z-10">
        <Footer personal={personal} onOpenDossier={() => setDossierOpen(true)} />
      </div>

      {/* 10. Printable Student Resume / Academic Profile Modal */}
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
