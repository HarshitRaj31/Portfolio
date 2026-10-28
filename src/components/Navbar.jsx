import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ personal, onOpenDossier }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('work');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sectionIds = ['work', 'systems', 'skills', 'journey', 'about', 'contact'];
      const scrollPos = window.scrollY + 240;

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
    { label: 'Projects', href: '#work', id: 'work' },
    { label: 'Cloud Lab', href: '#systems', id: 'systems' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Journey', href: '#journey', id: 'journey' },
    { label: 'About', href: '#about', id: 'about' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 no-print ${
        scrolled
          ? 'bg-[#06080D]/90 backdrop-blur-md border-b border-white/12'
          : 'bg-[#06080D]/75 backdrop-blur-sm border-b border-white/[0.08]'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#hero"
          className="font-display text-lg font-extrabold tracking-tight text-white hover:text-[#36D9F5] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#36D9F5]"
        >
          {personal.brand}
        </a>

        {/* Zone 2: 5 concise single-line text navigation links */}
        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`text-sm font-medium transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                  isActive
                    ? 'text-[#36D9F5] border-[#36D9F5]'
                    : 'text-zinc-200 border-transparent hover:text-white hover:border-white/40'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Actions + Theme Switcher */}
        <div className="flex items-center gap-3 shrink-0">
          <ThemeToggle />

          <button
            type="button"
            onClick={onOpenDossier}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-[#06080D] bg-[#36D9F5] hover:bg-cyan-300 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#36D9F5]"
          >
            Student Resume
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 text-zinc-100 hover:text-[#36D9F5] rounded-lg border border-white/15 hover:bg-white/5 transition-colors cursor-pointer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0B0F17]/95 backdrop-blur-md border-b border-white/15 px-6 py-5">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navLinks.map((link, idx) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between py-2 text-sm font-medium text-zinc-100 hover:text-[#36D9F5] border-b border-white/[0.08]"
              >
                <span>0{idx + 1}. {link.label}</span>
                <span className="font-mono text-xs text-[#36D9F5]">View</span>
              </a>
            ))}

            {/* Mobile Theme Mode Switcher */}
            <div className="pt-3 pb-1 border-t border-white/[0.08] space-y-2">
              <span className="text-[11px] font-mono font-semibold text-zinc-400">
                Theme Appearance
              </span>
              <ThemeToggle variant="segmented" />
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onOpenDossier();
                }}
                className="w-full py-2.5 px-4 text-xs font-bold text-[#06080D] bg-[#36D9F5] hover:bg-cyan-300 rounded-lg transition-colors text-center cursor-pointer"
              >
                View Student Resume / CV
              </button>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="w-full py-2.5 px-4 text-xs font-medium text-zinc-100 hover:text-white border border-white/15 rounded-lg transition-colors text-center"
              >
                Get in Touch
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
