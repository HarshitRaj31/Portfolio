import { useState } from 'react';
import { ArrowUpRight, ExternalLink, X, CheckCircle, Sparkles, Layers, Terminal } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import './Projects.css';

export default function Projects({ projects }) {
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  return (
    <section id="work" className="section projects-section">
      <div className="app-container">
        
        {/* Section Header */}
        <div className="section-header-editorial">
          <div className="section-tag">
            <span className="section-tag-dot"></span>
            <span>02 // SELECTED WORK</span>
          </div>
          <h2 className="section-headline-editorial">
            <span>CRAFTED WORKS &</span><br />
            <span className="text-cyan">DIGITAL</span>{' '}
            <span className="text-outlined">SYSTEMS.</span>
          </h2>
          <p className="section-lead">
            Curated software projects spanning artificial intelligence, self-hosted cloud topology, financial engines, and interactive media interfaces.
          </p>
        </div>

        {/* Full-Width Alternating Editorial Project Gallery */}
        <div className="editorial-gallery">
          {projects.map((project, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <article
                key={project.id}
                className={`editorial-project-row ${isReversed ? 'row-reversed' : ''}`}
                style={{ '--project-accent': project.accentColor }}
              >
                {/* Media Presentation Column */}
                <div className="project-media-col">
                  <div
                    className="project-mockup-frame"
                    onClick={() => setActiveProjectModal(project)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setActiveProjectModal(project)}
                    title={`Click to inspect ${project.title} case study`}
                  >
                    <div className="mockup-backlight" style={{ backgroundColor: project.accentColor }}></div>
                    
                    <div className="mockup-browser-shell">
                      <div className="mockup-header-bar">
                        <div className="mockup-dots">
                          <span className="dot dot-red"></span>
                          <span className="dot dot-yellow"></span>
                          <span className="dot dot-green"></span>
                        </div>
                        <div className="mockup-address mono">
                          <span>{project.id}.harshit.dev</span>
                        </div>
                        <span className="mockup-year mono">{project.year}</span>
                      </div>

                      <div className="mockup-viewport">
                        <img
                          src={project.image}
                          alt={`${project.title} - ${project.summary}`}
                          className="mockup-img"
                          loading="lazy"
                        />
                        <div className="mockup-hover-overlay">
                          <span className="overlay-inspect-btn mono">
                            <span>EXAMINE CASE STUDY</span>
                            <ArrowUpRight size={14} />
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Visual Aspect Chip */}
                    <div className="visual-direction-chip mono">
                      <span className="chip-indicator" style={{ background: project.accentColor }}></span>
                      <span>{project.visualAspect}</span>
                    </div>
                  </div>
                </div>

                {/* Typography & Details Column */}
                <div className="project-details-col">
                  <div className="project-top-meta">
                    <span className="project-big-num mono">{project.num}</span>
                    <span className="project-category-badge mono">{project.category}</span>
                  </div>

                  <h3 className="project-title-editorial">{project.title}</h3>
                  <p className="project-headline-editorial">{project.headline}</p>
                  <p className="project-description-text">{project.description}</p>

                  {/* Core Features Preview */}
                  <div className="project-features-list">
                    {project.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="feature-item">
                        <CheckCircle size={14} className="text-cyan feature-icon" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Chips */}
                  <div className="project-tech-stack">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-chip mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Affordances */}
                  <div className="project-action-links">
                    <button
                      onClick={() => setActiveProjectModal(project)}
                      className="btn btn-ghost btn-sm project-btn"
                    >
                      <span>View Details</span>
                      <ArrowUpRight size={15} />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-icon-link"
                      title="View Source Repository on GitHub"
                    >
                      <GithubIcon size={17} />
                      <span className="mono">Source Code</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Case Study Deep-Dive Modal */}
      {activeProjectModal && (
        <div className="modal-backdrop" onClick={() => setActiveProjectModal(null)}>
          <div
            className="modal-panel"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
          >
            <button
              className="modal-close"
              onClick={() => setActiveProjectModal(null)}
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            <div className="modal-top-header">
              <div className="modal-meta mono">
                <span className="text-cyan">PROJECT {activeProjectModal.num}</span>
                <span>//</span>
                <span>{activeProjectModal.category}</span>
              </div>
              <h2 id="modal-project-title" className="modal-title font-editorial">
                {activeProjectModal.title}
              </h2>
              <p className="modal-headline font-display">{activeProjectModal.headline}</p>
            </div>

            <div className="modal-media-container">
              <img
                src={activeProjectModal.image}
                alt={activeProjectModal.title}
                className="modal-full-img"
              />
            </div>

            <div className="modal-content-grid">
              <div className="modal-narrative-block">
                <h4 className="modal-section-h mono text-cyan">SYSTEM OVERVIEW</h4>
                <p className="modal-desc-p">{activeProjectModal.description}</p>

                <h4 className="modal-section-h mono text-cyan" style={{ marginTop: '24px' }}>
                  KEY ARCHITECTURAL HIGHLIGHTS
                </h4>
                <div className="modal-highlights-list">
                  {activeProjectModal.features.map((item, idx) => (
                    <div key={idx} className="modal-highlight-item">
                      <Sparkles size={14} className="text-cyan" style={{ flexShrink: 0, marginTop: '4px' }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-sidebar-block">
                <h4 className="modal-section-h mono text-cyan">TECH STACK</h4>
                <div className="modal-tags">
                  {activeProjectModal.technologies.map((t) => (
                    <span key={t} className="tech-chip mono">{t}</span>
                  ))}
                </div>

                <div className="modal-action-box">
                  <a
                    href={activeProjectModal.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ width: '100%', marginBottom: '12px' }}
                  >
                    <GithubIcon size={16} />
                    <span>View on GitHub</span>
                  </a>

                  <p className="modal-disclaimer mono">
                    Repository and code exploration available via GitHub (@HarshitRaj31).
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
