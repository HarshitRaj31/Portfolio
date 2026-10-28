import { Sparkles, Terminal, Code2, Database, Server } from 'lucide-react';
import './Skills.css';

export default function Skills({ skillsGrouped }) {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'FRONTEND':
        return <Code2 size={18} className="text-cyan" />;
      case 'BACKEND':
        return <Server size={18} className="text-electric-blue" />;
      case 'DATABASES':
        return <Database size={18} className="text-cyan" />;
      case 'INFRASTRUCTURE':
        return <Terminal size={18} className="text-electric-blue" />;
      default:
        return <Sparkles size={18} className="text-cyan" />;
    }
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="app-container">
        
        {/* Section Header */}
        <div className="section-header-editorial">
          <div className="section-tag">
            <span className="section-tag-dot"></span>
            <span>03 // MY CREATIVE TOOLKIT</span>
          </div>
          <h2 className="section-headline-editorial">
            <span>ENGINEERING</span><br />
            <span className="text-cyan">ARSENAL</span>{' '}
            <span className="text-outlined">& CRAFT.</span>
          </h2>
          <p className="section-lead">
            Deliberately curated technologies chosen for speed, reliability, and expressive interactive capability across the full modern software stack.
          </p>
        </div>

        {/* Editorial Typographic Skills Composition */}
        <div className="typographic-skills-grid">
          {skillsGrouped.map((group, index) => (
            <div key={group.category} className="skill-category-block">
              {/* Category Header with Oversized Label */}
              <div className="category-header-wrap">
                <div className="category-index mono">
                  <span>// 0{index + 1}</span>
                  {getCategoryIcon(group.category)}
                </div>
                <h3 className="category-oversized-label font-editorial">
                  {group.category}
                </h3>
                <p className="category-editorial-desc mono">{group.desc}</p>
              </div>

              {/* Small Outlined Technology Chips with Subtle Micro-Interactions */}
              <div className="tech-chips-matrix">
                {group.technologies.map((tech) => (
                  <div key={tech} className="skill-chip-pill">
                    <span className="pill-dot"></span>
                    <span className="pill-text font-display">{tech}</span>
                  </div>
                ))}
              </div>

              {/* Decorative Subtle Hairline */}
              <div className="category-hairline"></div>
            </div>
          ))}
        </div>

        {/* Micro-Philosophy Footer */}
        <div className="skills-editorial-footer">
          <span className="mono text-muted" style={{ fontSize: '0.8rem' }}>
            FRAMEWORKS CHANGE · FIRST PRINCIPLES REMAIN CONSTANT
          </span>
        </div>

      </div>
    </section>
  );
}
