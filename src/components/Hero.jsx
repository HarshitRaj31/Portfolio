import { useState, useEffect } from 'react';
import { ArrowDownRight, ArrowUpRight, Copy, Check, Terminal as TerminalIcon, Globe } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import './Hero.css';

export default function Hero({ personal }) {
  const [copied, setCopied] = useState(false);
  const [timeString, setTimeString] = useState('');

  // Live IST Time Display
  useEffect(() => {
    const updateTime = () => {
      try {
        const ist = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }).format(new Date());
        setTimeString(ist);
      } catch {
        setTimeString('IST (UTC+5:30)');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="hero" className="hero-section">
      <div className="app-container hero-container">
        
        {/* Left Column: Asymmetrical Typography Masterpiece */}
        <div className="hero-typography">
          {/* Top Meta Line: Location, Time & Descriptor */}
          <div className="hero-meta-bar">
            <div className="hero-meta-item">
              <Globe size={13} className="text-cyan" />
              <span>INDIA</span>
              <span className="meta-separator">/</span>
              <span className="mono text-cyan">{timeString || 'IST'}</span>
            </div>
            <span className="meta-divider">•</span>
            <div className="hero-meta-item">
              <span className="mono">B.TECH CSE & CLOUD ASPIRANT</span>
            </div>
          </div>

          {/* Oversized Expressive Headline */}
          <div className="hero-headline-wrap">
            <h1 className="hero-title">
              <span className="headline-line line-1">ENGINEERING</span>
              <span className="headline-line line-2 text-outlined">THE NEXT</span>
              <span className="headline-line line-3">
                <span className="text-cyan">DIGITAL</span>{' '}
                <span className="text-electric-blue">FRONTIER.</span>
              </span>
            </h1>
          </div>

          {/* Editorial Subtitle */}
          <p className="hero-description">
            I'm <strong>Harshit Raj</strong> — a developer exploring the intersection of interactive web experiences, software engineering, and cloud infrastructure.
          </p>

          {/* Two Minimal Actions */}
          <div className="hero-actions">
            <a href="#work" className="btn btn-primary hero-action-btn">
              <span>Explore My Work</span>
              <ArrowDownRight size={18} />
            </a>

            <a href="#contact" className="btn btn-ghost hero-action-btn">
              <span>Get In Touch</span>
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Quick Connect & Socials */}
          <div className="hero-social-footer">
            <div className="hero-social-links">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>
            </div>

            <button
              onClick={handleCopyEmail}
              className="hero-copy-pill"
              title="Click to copy email address"
            >
              {copied ? (
                <>
                  <Check size={13} className="text-emerald" />
                  <span style={{ color: 'var(--accent-emerald)' }}>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={13} />
                  <span>{personal.email}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Original Abstract Composition */}
        <div className="hero-visual-art">
          {/* Dimensional Blue & Cyan Light Source */}
          <div className="dimensional-light-source" aria-hidden="true"></div>

          <div className="abstract-stage">
            {/* Orbital Rings & Geometric Vectors */}
            <svg className="orbital-svg" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Outer Orbit */}
              <circle cx="250" cy="250" r="220" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" strokeDasharray="4 8" className="spin-slow" />
              {/* Mid Orbit */}
              <circle cx="250" cy="250" r="160" stroke="rgba(71, 123, 255, 0.2)" strokeWidth="1.2" className="spin-reverse" />
              {/* Inner Orbit */}
              <circle cx="250" cy="250" r="105" stroke="rgba(54, 217, 245, 0.25)" strokeWidth="1" strokeDasharray="8 6" className="spin-slow" />
              {/* Radial Coordinate Lines */}
              <line x1="250" y1="20" x2="250" y2="480" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
              <line x1="20" y1="250" x2="480" y2="250" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
              {/* Orbital Nodes */}
              <circle cx="390" cy="170" r="4" fill="#36D9F5" className="pulsing-node" />
              <circle cx="110" cy="330" r="3.5" fill="#477BFF" className="pulsing-node" />
            </svg>

            {/* Floating Sleek Terminal / Code Editor */}
            <div className="floating-terminal glass-terminal">
              <div className="terminal-topbar">
                <div className="window-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="terminal-title mono">
                  <TerminalIcon size={12} className="text-cyan" />
                  <span>kamui_cluster.go</span>
                </div>
                <span className="terminal-branch mono">master*</span>
              </div>

              <div className="terminal-code mono">
                <div className="code-line">
                  <span className="code-num">01</span>
                  <span className="kw">package</span> <span className="entity">main</span>
                </div>
                <div className="code-line">
                  <span className="code-num">02</span>
                  <span className="kw">import</span> <span className="str">"github.com/kamui/cloud"</span>
                </div>
                <div className="code-line">
                  <span className="code-num">03</span>
                  <span className="cmt">// Initialize distributed cloud node</span>
                </div>
                <div className="code-line">
                  <span className="code-num">04</span>
                  <span className="kw">func</span> <span className="fn">main</span>() &#123;
                </div>
                <div className="code-line indent">
                  <span className="code-num">05</span>
                  node := cloud.<span className="fn">Connect</span>(<span className="str">"node-01"</span>)
                </div>
                <div className="code-line indent">
                  <span className="code-num">06</span>
                  node.<span className="fn">MountDocker</span>(<span className="num">8080</span>)
                </div>
                <div className="code-line indent">
                  <span className="code-num">07</span>
                  node.<span className="fn">LogStream</span>(<span className="str">"status: ACTIVE"</span>)
                </div>
                <div className="code-line">
                  <span className="code-num">08</span>
                  &#125; <span className="code-cursor"></span>
                </div>
              </div>

              <div className="terminal-statusbar">
                <span className="status-live-node">● NODE-01_ONLINE</span>
                <span className="status-metric">LATENCY: 14ms</span>
                <span className="status-metric">MEM: 32%</span>
              </div>
            </div>

            {/* Small Floating Technology Labels with dimensional anchors */}
            <div className="tech-badge-orbit badge-react">
              <span className="badge-dot cyan-dot"></span>
              <span className="mono">React</span>
            </div>

            <div className="tech-badge-orbit badge-go">
              <span className="badge-dot blue-dot"></span>
              <span className="mono">Go</span>
            </div>

            <div className="tech-badge-orbit badge-docker">
              <span className="badge-dot blue-dot"></span>
              <span className="mono">Docker</span>
            </div>

            <div className="tech-badge-orbit badge-js">
              <span className="badge-dot cyan-dot"></span>
              <span className="mono">JavaScript</span>
            </div>

            <div className="tech-badge-orbit badge-linux">
              <span className="badge-dot green-dot"></span>
              <span className="mono">Linux</span>
            </div>

            {/* Dimensional Geometric Coordinate HUD */}
            <div className="hud-metric hud-top-right">
              <span className="hud-label mono">TOPOLOGY</span>
              <span className="hud-value mono text-cyan">HYBRID MESH</span>
            </div>

            <div className="hud-metric hud-bottom-left">
              <span className="hud-label mono">SYSTEM ARCH</span>
              <span className="hud-value mono text-electric-blue">CLOUD & WEB</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
