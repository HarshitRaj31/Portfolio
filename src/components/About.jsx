import { Sparkles, Terminal, Code2, Cloud, ArrowUpRight } from 'lucide-react';
import './About.css';

export default function About({ personal }) {
  return (
    <section id="about" className="section about-section">
      <div className="app-container">

        {/* Section Identifier */}
        <div className="section-tag">
          <span className="section-tag-dot"></span>
          <span>01 // THE HUMAN BEHIND THE CODE</span>
        </div>

        {/* Large Editorial Headline */}
        <div className="about-header-wrap">
          <h2 className="section-headline-editorial about-title">
            <span>CURIOUS BY NATURE.</span>
            <br />
            <span className="text-cyan">BUILDER</span>{' '}
            <span className="text-outlined">BY CHOICE.</span>
          </h2>
        </div>

        {/* Main Content: Asymmetrical Grid */}
        <div className="about-grid">

          {/* Left Column: Portrait Frame with Technical Coordinates */}
          <div className="about-visual-col">
            <div className="portrait-frame-wrap">
              <div className="portrait-backlight"></div>

              <div className="portrait-card">
                <div className="portrait-img-box">
                  <img
                    src={personal.avatar}
                    alt={personal.name}
                    className="portrait-img"
                    loading="lazy"
                  />
                  <div className="portrait-overlay"></div>
                </div>

                <div className="portrait-meta-badge">
                  <span className="portrait-status-dot"></span>
                  <div className="portrait-meta-text">
                    <span className="portrait-name mono">{personal.name}</span>
                    <span className="portrait-sub mono">B.Tech CSE · Developer</span>
                  </div>
                </div>

                {/* Technical Corner Brackets */}
                <span className="corner-bracket top-left"></span>
                <span className="corner-bracket top-right"></span>
                <span className="corner-bracket bottom-left"></span>
                <span className="corner-bracket bottom-right"></span>
              </div>

              {/* Expressive Typographic Detail Badge */}
              <div className="about-stamp-pill mono">
                <span>EST. 2023 // CSE UNDERGRAD</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & 3 Core Principles */}
          <div className="about-content-col">
            <div className="about-narrative">
              <p className="narrative-p lead-p">
                I'm <strong>Harshit Raj</strong>, an undergraduate Computer Science Engineering student, web developer, and aspiring cloud engineer who views software as an art of craft and system architecture.
              </p>
              <p className="narrative-p">
                My journey began with curiosity about how the web creates real-time interactive wonders in the browser. That curiosity naturally evolved deeper into the stack — delving into backend services with <strong>Node.js</strong> and <strong>Go</strong>, Linux kernel tooling, containerization with <strong>Docker</strong>, and self-hosted private cloud topologies through my project <strong>Kamui Cloud</strong>.
              </p>
              <p className="narrative-p">
                Whether designing a fluid interface or architecting a bare-metal container cluster, I thrive at the crossroads where thoughtful aesthetics meet uncompromising system reliability.
              </p>
            </div>

            {/* Three Small Principles */}
            <div className="principles-container">
              <span className="principles-section-label mono text-cyan">CORE ENGINEERING PRINCIPLES</span>

              <div className="principles-list">
                {personal.principles.map((p) => (
                  <div key={p.number} className="principle-card">
                    <div className="principle-num mono">{p.number}</div>
                    <div className="principle-body">
                      <h3 className="principle-title">{p.title}</h3>
                      <p className="principle-desc">{p.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Action */}
            <div className="about-action-wrap">
              <a href="#work" className="animated-link mono text-cyan" style={{ fontSize: '0.9rem' }}>
                <span>Review Selected Works Below</span>
                <ArrowUpRight size={15} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
