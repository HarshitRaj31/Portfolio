import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ personal, onOpenDossier }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);

      const sectionIds = ['about', 'projects', 'skills', 'stats', 'contact'];
      const scrollPos = window.scrollY + 220;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'PROJECTS', href: '#projects', id: 'projects' },
    { label: 'SKILLS', href: '#skills', id: 'skills' },
    { label: 'STATS', href: '#stats', id: 'stats' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 no-print ${
        scrolled
          ? 'bg-[#040705]/95 backdrop-blur-md border-b border-[#182B1A]'
          : 'bg-[#040705]/90 backdrop-blur-sm border-b border-[#142316]'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#about"
          className="font-mono text-sm sm:text-base font-medium tracking-tight text-zinc-100 hover:text-[#84CC16] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#84CC16]"
        >
          {personal.brand}
        </a>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-4 lg:gap-5 font-mono text-xs tracking-wider">
          {navLinks.map((link, idx) => {
            const isActive = activeSection === link.id;
            return (
              <div key={link.id} className="flex items-center gap-4 lg:gap-5">
                <a
                  href={link.href}
                  onClick={() => setActiveSection(link.id)}
                  className={`py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 ${
                    isActive
                      ? 'text-[#84CC16] font-bold border-[#84CC16]'
                      : 'text-zinc-300 border-transparent hover:text-white hover:border-[#84CC16]/50'
                  }`}
                >
                  {link.label}
                </a>
                {idx < navLinks.length - 1 && (
                  <span className="text-zinc-600 select-none" aria-hidden="true">
                    /
                  </span>
                )}
              </div>
            );
          })}
        </nav>

        {/* Zone 3: Theme Toggle + BUILD. Action */}
        <div className="flex items-center gap-2.5 shrink-0">
          <ThemeToggle />

          <button
            type="button"
            onClick={onOpenDossier}
            title="Open Resume & Developer Dossier"
            className="inline-flex items-center justify-center px-3.5 py-1.5 text-xs font-mono font-bold tracking-widest text-[#9EF01A] bg-[#081109] hover:bg-[#112413] border border-[#284724] hover:border-[#84CC16] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            BUILD.
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 text-zinc-200 hover:text-[#84CC16] rounded-md border border-[#1E3520] hover:bg-[#0B140C] transition-colors cursor-pointer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#060A07]/98 backdrop-blur-md border-b border-[#1E3520] px-5 py-4">
          <nav className="flex flex-col space-y-2.5 font-mono" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.id);
                  setMobileOpen(false);
                }}
                className="flex items-center justify-between py-2 text-xs font-semibold text-zinc-200 hover:text-[#84CC16] border-b border-[#142316]"
              >
                <span>{link.label}</span>
                <span className="text-[#84CC16]">→</span>
              </a>
            ))}

            <div className="pt-2 pb-1 space-y-1.5">
              <span className="text-[11px] font-mono text-zinc-400">Appearance</span>
              <ThemeToggle variant="segmented" />
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onOpenDossier();
                }}
                className="w-full py-2 px-4 text-xs font-mono font-bold text-[#040705] bg-[#84CC16] hover:bg-[#9EF01A] rounded-md transition-colors text-center cursor-pointer"
              >
                VIEW RESUME / DOSSIER
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
