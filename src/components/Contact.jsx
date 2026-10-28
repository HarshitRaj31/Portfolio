import { useState } from 'react';
import { ArrowUpRight, Copy, Check, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const INQUIRY_TOPICS = [
  'Software / Cloud Engineering Internship',
  'Entry-Level / Junior Developer Role',
  'Hackathon or Open-Source Collaboration',
  'General Connect & Feedback'
];

export default function Contact({ personal }) {
  const [copied, setCopied] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(INQUIRY_TOPICS[0]);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formState.email.trim() || !formState.message.trim()) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 border-b border-white/12 no-print">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono text-[#36D9F5] font-semibold mb-3">
            06. Get in Touch &amp; Internships
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white tracking-tight">
            Open to Internships, Projects &amp; Learning Opportunities.
          </h2>
          <p className="text-zinc-200 text-base mt-3 leading-relaxed">
            I am actively looking for software development and cloud engineering internships, entry-level roles, and collaborative student/open-source projects. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Direct Channels & Copyable Coordinates */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#0B0F17]/90 backdrop-blur-md border border-white/15 rounded-2xl p-6 sm:p-8">
            <div className="space-y-8">
              <div>
                <span className="block text-xs font-mono text-amber-300 font-semibold mb-2">
                  Direct Email
                </span>
                <a
                  href={`mailto:${personal.email}?subject=${encodeURIComponent(selectedTopic)}`}
                  className="font-display text-xl sm:text-2xl font-extrabold text-white hover:text-[#36D9F5] transition-colors break-all inline-flex items-center gap-2"
                >
                  <span>{personal.email}</span>
                  <ArrowUpRight size={20} className="shrink-0 text-[#36D9F5]" />
                </a>

                <div className="mt-4">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono text-zinc-100 hover:text-white bg-[#06080D] hover:bg-white/10 border border-white/20 rounded-lg transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">Email Copied to Clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} className="text-[#36D9F5]" />
                        <span>Copy Email Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Profiles & Repositories */}
              <div className="space-y-3 pt-6 border-t border-white/10">
                <span className="block text-xs font-mono text-amber-300 font-semibold">
                  Social &amp; Code Profiles
                </span>

                <div className="divide-y divide-white/10 bg-[#06080D] border border-white/12 rounded-xl px-4">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 flex items-center justify-between text-xs hover:text-[#36D9F5] transition-colors group"
                  >
                    <span className="inline-flex items-center gap-2.5 font-semibold text-white group-hover:text-[#36D9F5]">
                      <GithubIcon size={15} />
                      <span>GitHub Profile</span>
                    </span>
                    <span className="font-mono text-[#36D9F5]">
                      @HarshitRaj31 ↗
                    </span>
                  </a>

                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 flex items-center justify-between text-xs hover:text-[#36D9F5] transition-colors group"
                  >
                    <span className="inline-flex items-center gap-2.5 font-semibold text-white group-hover:text-[#36D9F5]">
                      <LinkedinIcon size={15} />
                      <span>LinkedIn Profile</span>
                    </span>
                    <span className="font-mono text-[#36D9F5]">
                      /in/harshit-raj ↗
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Location & Student Status Footer */}
            <div className="pt-6 mt-8 border-t border-white/10 text-xs font-mono text-zinc-200 space-y-1">
              <div>Education: <span className="text-white">{personal.degree}</span></div>
              <div>Location: <span className="text-amber-300">{personal.location}</span></div>
            </div>
          </div>

          {/* Right Column: Quick Message Form */}
          <div className="lg:col-span-7 bg-[#0B0F17]/90 backdrop-blur-md border border-white/15 rounded-2xl p-6 sm:p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-start justify-center space-y-5 py-8">
                <div className="text-xs font-mono text-emerald-400 font-semibold">
                  Message Ready
                </div>
                <h3 className="font-display text-2xl font-extrabold text-white">
                  Thanks for reaching out, {formState.name || 'friend'}!
                </h3>
                <p className="text-sm text-zinc-100 leading-relaxed max-w-xl">
                  Your message regarding <strong className="text-[#36D9F5]">{selectedTopic}</strong> is ready. Click below to open your email app with the message pre-filled, or write another note.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={`mailto:${personal.email}?subject=${encodeURIComponent(
                      `${selectedTopic} — ${formState.name || formState.email}`
                    )}&body=${encodeURIComponent(
                      `${formState.message}\n\n---\nFrom: ${formState.name} (${formState.email})\nCompany / College: ${formState.organization || 'N/A'}`
                    )}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#06080D] bg-[#36D9F5] hover:bg-cyan-300 rounded-lg transition-colors"
                  >
                    <span>Send via Email App</span>
                    <ArrowUpRight size={14} />
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', email: '', organization: '', message: '' });
                    }}
                    className="px-4 py-2.5 text-xs font-semibold text-zinc-100 hover:text-white bg-[#06080D] border border-white/20 rounded-lg transition-colors cursor-pointer"
                  >
                    Write Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-mono text-amber-300 font-semibold mb-2">
                    What would you like to connect about?
                  </label>
                  <div className="flex flex-wrap gap-1.5 p-1 bg-[#06080D] border border-white/12 rounded-lg">
                    {INQUIRY_TOPICS.map((topic) => {
                      const active = selectedTopic === topic;
                      return (
                        <button
                          key={topic}
                          type="button"
                          onClick={() => setSelectedTopic(topic)}
                          className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                            active
                              ? 'bg-[#36D9F5] text-[#06080D]'
                              : 'text-zinc-200 hover:text-white'
                          }`}
                        >
                          {topic}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono text-zinc-200 mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Alex Rivera"
                      className="w-full px-3.5 py-2.5 text-sm text-white bg-[#06080D] border border-white/15 rounded-lg placeholder:text-zinc-500 focus:outline-none focus:border-[#36D9F5]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono text-zinc-200 mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 text-sm text-white bg-[#06080D] border border-white/15 rounded-lg placeholder:text-zinc-500 focus:outline-none focus:border-[#36D9F5]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-org"
                    className="block text-xs font-mono text-zinc-200 mb-1.5"
                  >
                    Company / Team / College (Optional)
                  </label>
                  <input
                    id="contact-org"
                    type="text"
                    value={formState.organization}
                    onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                    placeholder="e.g. Recruiting Team or Student Club"
                    className="w-full px-3.5 py-2.5 text-sm text-white bg-[#06080D] border border-white/15 rounded-lg placeholder:text-zinc-500 focus:outline-none focus:border-[#36D9F5]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono text-zinc-200 mb-1.5"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Hi Harshit, I'd love to chat about an internship opportunity or project collaboration..."
                    className="w-full px-3.5 py-2.5 text-sm text-white bg-[#06080D] border border-white/15 rounded-lg placeholder:text-zinc-500 focus:outline-none focus:border-[#36D9F5] resize-y"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs font-mono text-zinc-200">
                    Open to remote &amp; on-site internships
                  </span>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-[#06080D] bg-[#36D9F5] hover:bg-cyan-300 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send size={14} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
