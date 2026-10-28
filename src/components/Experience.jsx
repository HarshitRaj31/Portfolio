import { useState } from 'react';
import { Briefcase, GraduationCap, CheckCircle, Award, Calendar, Sparkles } from 'lucide-react';
import './Experience.css';

export default function Experience({ experience, education }) {
  const [activeTab, setActiveTab] = useState('work');

  return (
    <section id="experience" className="section experience-section">
      <div className="app-container">
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>My Journey</span>
          </div>
          <h2 className="section-title">
            Experience & <span className="gradient-text">Learning Path</span>
          </h2>
          <p className="section-subtitle">
            My progress through hands-on project building, self-directed study, and Computer Science academic foundations.
          </p>
        </div>

        {/* Tab switch */}
        <div className="exp-tabs">
          <button
            onClick={() => setActiveTab('work')}
            className={`exp-tab-btn ${activeTab === 'work' ? 'active' : ''}`}
          >
            <Briefcase size={18} />
            <span>Learning & Experience</span>
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`exp-tab-btn ${activeTab === 'education' ? 'active' : ''}`}
          >
            <GraduationCap size={18} />
            <span>Education & Certifications</span>
          </button>
        </div>

        {/* Work Timeline */}
        {activeTab === 'work' && (
          <div className="timeline-container">
            <div className="timeline-rail"></div>
            {experience.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot">
                  <div className="inner-dot"></div>
                </div>

                <div className="timeline-card glass-card">
                  <div className="timeline-header">
                    <div>
                      <h3 className="timeline-role">{item.role}</h3>
                      <div className="timeline-company-row">
                        <span className="timeline-company">{item.company}</span>
                        <span className="timeline-type">{item.type}</span>
                      </div>
                    </div>
                    <div className="timeline-period-badge">
                      <Calendar size={14} />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <p className="timeline-desc">{item.description}</p>

                  <ul className="timeline-achievements">
                    {item.achievements.map((ach, idx) => (
                      <li key={idx}>
                        <CheckCircle size={15} className="ach-icon" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="timeline-tech-stack">
                    {item.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Education & Certifications Timeline */}
        {activeTab === 'education' && (
          <div className="timeline-container">
            <div className="timeline-rail"></div>
            {education.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot purple-dot">
                  <div className="inner-dot"></div>
                </div>

                <div className="timeline-card glass-card">
                  <div className="timeline-header">
                    <div>
                      <h3 className="timeline-role">{item.degree}</h3>
                      <div className="timeline-company-row">
                        <span className="timeline-company">{item.institution}</span>
                      </div>
                    </div>
                    <div className="timeline-period-badge">
                      <Award size={14} />
                      <span>{item.year}</span>
                    </div>
                  </div>

                  <p className="timeline-desc" style={{ marginBottom: 0 }}>
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
