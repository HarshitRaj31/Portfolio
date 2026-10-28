import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ personal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sectionIds = ['hero', 'about', 'work', 'skills', 'systems', 'journey', 'contact'];
      const scrollPos = window.scrollY + 250;

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
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Selected Work', href: '#work', id: 'work' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header className={`floating-nav ${scrolled ? 'nav-elevated' : 'nav-transparent'}`}>
        <div className="nav-inner">
          {/* Brand Left */}
          <a href="#hero" className="nav-brand" aria-label="Harshit Raj Portfolio">
            <span className="brand-primary">HARSHIT</span>
            <span className="brand-dot">.</span>
            <span className="brand-sub">DEV</span>
          </a>

          {/* Availability Indicator (Center-Left on desktop) */}
          <div className="nav-availability" title="Currently open for opportunities and collaborations">
            <span className="availability-dot"></span>
            <span className="availability-text">AVAILABLE</span>
          </div>

          {/* Right Navigation Links */}
          <nav className="nav-links-desktop">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`nav-item ${activeSection === link.id ? 'active' : ''}`}
              >
                <span>{link.label}</span>
              </a>
            ))}
            <a href="#contact" className="nav-talk-btn">
              <span>Connect</span>
              <ArrowUpRight size={14} />
            </a>
          </nav>

          {/* Distinctive Circular Menu Button on Mobile */}
          <button
            className={`mobile-circle-btn ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileOpen}
          >
            <div className="circle-bars">
              <span className="bar bar-1"></span>
              <span className="bar bar-2"></span>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div className={`mobile-nav-backdrop ${mobileOpen ? 'visible' : ''}`} onClick={() => setMobileOpen(false)}>
        <div className="mobile-nav-panel" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-panel-header">
            <span className="mono text-cyan" style={{ fontSize: '0.8rem', letterSpacing: '0.15em' }}>INDEX // HARSHIT.DEV</span>
            <button className="mobile-close-btn" onClick={() => setMobileOpen(false)} aria-label="Close Menu">✕</button>
          </div>

          <nav className="mobile-links-list">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                className="mobile-nav-item"
                onClick={() => setMobileOpen(false)}
              >
                <span className="mobile-item-num">0{idx + 1}</span>
                <span className="mobile-item-text">{link.label}</span>
                <ArrowUpRight size={18} className="mobile-arrow" />
              </a>
            ))}
          </nav>

          <div className="mobile-panel-footer">
            <div className="status-pill" style={{ marginBottom: '16px' }}>
              <span className="status-dot"></span>
              <span>Open to Internships & Roles</span>
            </div>
            <a
              href="#contact"
              className="btn btn-primary"
              style={{ width: '100%' }}
              onClick={() => setMobileOpen(false)}
            >
              Get In Touch ↗
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
