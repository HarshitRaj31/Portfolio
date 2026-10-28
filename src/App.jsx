import { useEffect, useState } from 'react';
import { portfolioData } from './portfolioData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CloudSystems from './components/CloudSystems';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { personal, projects, skillsGrouped, cloudSection, journey } = portfolioData;
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  useEffect(() => {
    // Detect fine pointer devices (desktop mouse)
    if (window.matchMedia('(pointer: fine)').matches) {
      setIsPointerDevice(true);
      const handleMouseMove = (e) => {
        setCursorPos({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <>
      {/* Subtle Cursor Follower Glow on Desktop */}
      {isPointerDevice && (
        <div
          className="cursor-ambient-aura"
          style={{
            transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Atmospheric Background & Subtle Grain */}
      <div className="ambient-background" aria-hidden="true">
        <div className="ambient-blue-glow"></div>
        <div className="ambient-cyan-glow"></div>
        <div className="ambient-bottom-glow"></div>
        <div className="ambient-grid"></div>
      </div>
      <div className="grain-overlay" aria-hidden="true"></div>

      {/* 1. Floating Navigation Bar */}
      <Navbar personal={personal} />

      {/* Main Editorial Sections */}
      <main id="main-content">
        {/* 2. Hero — The Signature Moment */}
        <Hero personal={personal} />

        {/* 3. About — The Human Behind the Code */}
        <About personal={personal} />

        {/* 4. Selected Work — Showcase Projects Like Artworks */}
        <Projects projects={projects} />

        {/* 5. Skills — My Creative Toolkit */}
        <Skills skillsGrouped={skillsGrouped} />

        {/* 6. Beyond the Browser — Cloud & Open Source */}
        <CloudSystems cloudSection={cloudSection} />

        {/* 7. My Journey */}
        <Journey journey={journey} />

        {/* 8. Contact — An Invitation, Not a Form */}
        <Contact personal={personal} />
      </main>

      {/* 9. Minimal Editorial Footer */}
      <Footer personal={personal} />
    </>
  );
}

export default App;
