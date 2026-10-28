import { useState } from 'react';
import { ArrowUpRight, Copy, Check, Send, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import './Contact.css';

export default function Contact({ personal }) {
  const [copied, setCopied] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="section contact-section">
      {/* Subtle Blue Glow Ambient Backlight */}
      <div className="contact-ambient-glow" aria-hidden="true"></div>

      <div className="app-container">
        
        {/* Section Identifier */}
        <div className="section-tag">
          <span className="section-tag-dot"></span>
          <span>06 // INITIATE DIALOGUE</span>
        </div>

        {/* Dramatic Oversized Headline */}
        <div className="contact-headline-wrap">
          <h2 className="contact-huge-headline font-editorial">
            <span>HAVE SOMETHING</span><br />
            <span className="text-cyan">INTERESTING</span>{' '}
            <span className="text-outlined">IN MIND?</span>
          </h2>

          <p className="contact-lead-text font-display">
            Let's exchange ideas, build something useful, and explore what technology can make possible.
          </p>
        </div>

        {/* The Invitation: Large Editorial Email Contact Link */}
        <div className="contact-main-invite">
          <div className="large-email-box">
            <span className="email-meta-label mono text-muted">DIRECT TRANSMISSION // INBOX</span>
            
            <a
              href={`mailto:${personal.email}`}
              className="large-email-link font-display"
              title="Click to compose email"
            >
              <span>{personal.email}</span>
              <ArrowUpRight size={36} className="email-arrow-icon" />
            </a>

            <div className="email-actions-bar">
              <button
                onClick={handleCopyEmail}
                className="contact-copy-btn mono"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald" />
                    <span style={{ color: 'var(--accent-emerald)' }}>EMAIL ADDRESS COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>COPY EMAIL TO CLIPBOARD</span>
                  </>
                )}
              </button>

              <span className="contact-location-info mono text-muted">
                Based in India · IST · Open to Remote & Relocation
              </span>
            </div>
          </div>
        </div>

        {/* Social Links & Optional Form Toggle Bar */}
        <div className="contact-social-bar">
          <div className="social-links-group">
            <a
              href="https://github.com/HarshitRaj31"
              target="_blank"
              rel="noopener noreferrer"
              className="social-editorial-link"
            >
              <GithubIcon size={18} />
              <span className="font-display">GitHub</span>
              <span className="social-handle mono">@HarshitRaj31</span>
              <ArrowUpRight size={14} className="link-hover-arrow" />
            </a>

            <a
              href="https://www.linkedin.com/in/harshit-raj-a76b93329/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-editorial-link"
            >
              <LinkedinIcon size={18} />
              <span className="font-display">LinkedIn</span>
              <span className="social-handle mono">/in/harshit-raj</span>
              <ArrowUpRight size={14} className="link-hover-arrow" />
            </a>
          </div>

          <button
            onClick={() => setFormOpen(!formOpen)}
            className="toggle-form-btn mono"
            aria-expanded={formOpen}
          >
            <span>{formOpen ? '[-] HIDE MESSAGE FORM' : '[+] PREFER SENDING A QUICK MESSAGE?'}</span>
          </button>
        </div>

        {/* Optional Elegant Contact Form */}
        {formOpen && (
          <div className="optional-form-container">
            {submitted ? (
              <div className="form-success-box">
                <Sparkles size={24} className="text-cyan" />
                <h4 className="font-editorial">MESSAGE DISPATCHED</h4>
                <p className="text-secondary">
                  Thank you for reaching out! I typically respond within 12–24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', message: '' }); }}
                  className="btn btn-ghost btn-sm mono"
                  style={{ marginTop: '16px' }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="contact-minimal-form">
                <div className="form-fields-grid">
                  <div className="input-group">
                    <label className="mono text-muted" htmlFor="form-name">YOUR NAME</label>
                    <input
                      id="form-name"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Alex Rivera"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>

                  <div className="input-group">
                    <label className="mono text-muted" htmlFor="form-email">EMAIL ADDRESS *</label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      className="form-input"
                      placeholder="e.g. alex@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="input-group" style={{ marginTop: '20px' }}>
                  <label className="mono text-muted" htmlFor="form-message">MESSAGE *</label>
                  <textarea
                    id="form-message"
                    required
                    rows={4}
                    className="form-input form-textarea"
                    placeholder="Describe your project, question, or opportunity..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>

                <div className="form-submit-row">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
