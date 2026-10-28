import { Calendar, Compass, ArrowUpRight } from 'lucide-react';
import './Journey.css';

export default function Journey({ journey }) {
  return (
    <section id="journey" className="section journey-section">
      <div className="app-container">
        
        {/* Section Header */}
        <div className="section-header-editorial">
          <div className="section-tag">
            <span className="section-tag-dot"></span>
            <span>05 // MY JOURNEY</span>
          </div>
          <h2 className="section-headline-editorial">
            <span>THE PATH OF</span><br />
            <span className="text-cyan">CONTINUOUS</span>{' '}
            <span className="text-outlined">CURIOSITY.</span>
          </h2>
          <p className="section-lead">
            A chronological timeline tracing my evolution from fundamental computer science coursework to interactive frontend web craftsmanship and systems infrastructure.
          </p>
        </div>

        {/* Thin Vertical Timeline with Oversized Year Markers */}
        <div className="timeline-spine-wrapper">
          <div className="timeline-central-axis"></div>

          <div className="timeline-entries-list">
            {journey.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`timeline-milestone-row ${isEven ? 'milestone-left' : 'milestone-right'}`}
                >
                  {/* Oversized Year Marker */}
                  <div className="milestone-year-cell">
                    <span className="oversized-year-marker font-editorial">
                      {item.year.split('—')[0].trim()}
                    </span>
                    <span className="year-full-tag mono text-cyan">{item.year}</span>
                  </div>

                  {/* Central Node Dot on Timeline */}
                  <div className="milestone-axis-node">
                    <div className="node-glow-ring"></div>
                    <div className="node-center-point"></div>
                  </div>

                  {/* Content Card */}
                  <div className="milestone-content-card">
                    <div className="card-top-tag mono">
                      <span className="tag-bracket">[</span>
                      <span>{item.tag}</span>
                      <span className="tag-bracket">]</span>
                    </div>

                    <h3 className="milestone-title font-display">{item.title}</h3>
                    <p className="milestone-phase font-display">{item.phase}</p>
                    <p className="milestone-description">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
