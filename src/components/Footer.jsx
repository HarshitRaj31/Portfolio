import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import './Footer.css';

export default function Footer({ personal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="editorial-footer">
      <div className="app-container">
        
        <div className="footer-main-row">
          {/* Brand Left */}
          <div className="footer-brand-col">
            <a href="#hero" className="footer-brand-title font-editorial">
              HARSHIT<span className="text-cyan">.</span>DEV
            </a>
            <p className="footer-motto font-display">
              “Built with curiosity and a little obsession.”
            </p>
          </div>

          {/* Social Links & Back-To-Top Right */}
          <div className="footer-actions-col">
            <div className="footer-social-links">
              <a
                href="https://github.com/HarshitRaj31"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link-item mono"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={15} />
                <span>GITHUB</span>
              </a>

              <a
                href="https://www.linkedin.com/in/harshit-raj-a76b93329/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link-item mono"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={15} />
                <span>LINKEDIN</span>
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="footer-back-to-top mono"
              aria-label="Back to top"
            >
              <span>BACK TO TOP</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Bottom Editorial Bar */}
        <div className="footer-bottom-bar">
          <span className="mono text-muted" style={{ fontSize: '0.74rem' }}>
            © {currentYear} HARSHIT RAJ. ALL RIGHTS RESERVED.
          </span>
          <span className="mono text-muted" style={{ fontSize: '0.74rem' }}>
            DESIGNED & HANDCRAFTED WITH PRECISION
          </span>
        </div>

      </div>
    </footer>
  );
}
