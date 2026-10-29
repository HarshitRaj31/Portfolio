import { useState } from 'react';
import { Mail, Check, Copy, Send, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Contact({ personal }) {
  const [composeOpen, setComposeOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.message.trim()) return;
    setSent(true);
  };

  return (
    <section id="contact" className="py-6 lg:py-8 no-print">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Left Column (8 cols): Quote + "A BRIGHTER SELF" Rooftop Moon Artwork */}
          <div className="lg:col-span-8 rounded-xl bg-[#050806] border border-[#1B321D] overflow-hidden grid grid-cols-1 md:grid-cols-12 items-stretch">
            {/* Quote Block */}
            <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-center relative z-10">
              <div className="space-y-3 font-mono">
                <span
                  className="block text-2xl sm:text-3xl font-extrabold text-[#84CC16] leading-none select-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                <div className="space-y-2 text-xs sm:text-sm text-zinc-100 leading-relaxed">
                  <p>Build things that solve problems.</p>
                  <p>Keep learning.</p>
                  <p>Keep shipping.</p>
                </div>

                <span
                  className="block text-2xl sm:text-3xl font-extrabold text-[#84CC16] leading-none pt-1 select-none"
                  aria-hidden="true"
                >
                  &rdquo;
                </span>
              </div>
            </div>

            {/* Rooftop Moon Artwork ("A BRIGHTER SELF") */}
            <div className="md:col-span-6 relative min-h-[200px] sm:min-h-[220px] bg-[#040705] overflow-hidden flex items-center justify-end">
              <div
                className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#050806] to-transparent z-10 hidden md:block"
                aria-hidden="true"
              />
              <img
                src="/assets/crops/brighter_self.png"
                alt="A Brighter Self — developer looking over night city skyline under the full moon"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center select-none"
              />
            </div>
          </div>

          {/* Right Column (4 cols): LET'S CONNECT */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 font-mono mb-1.5">
                <span className="text-[#84CC16] font-bold text-sm sm:text-base">
                  05.
                </span>
                <h2 className="font-mono text-sm sm:text-base font-bold tracking-wider text-[#9EF01A]">
                  LET&apos;S CONNECT
                </h2>
              </div>
              <p className="font-mono text-xs text-zinc-400 mb-4">
                Good ideas are better when shared.
              </p>
            </div>

            {/* 3 Connect Action Rows */}
            <div className="space-y-2.5 my-auto">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full flex items-center justify-between px-4 py-3 rounded-xl bg-[#070B08] hover:bg-[#0D170E] border border-[#1E3520] hover:border-[#84CC16] transition-colors font-mono text-xs"
              >
                <span className="inline-flex items-center gap-3 font-semibold text-white">
                  <GithubIcon size={16} className="text-zinc-100" />
                  <span>GitHub</span>
                </span>
                <span className="inline-flex items-center gap-2 text-zinc-400 group-hover:text-[#9EF01A] transition-colors whitespace-nowrap">
                  <span>Follow my work</span>
                  <span className="text-[#84CC16] group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </span>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full flex items-center justify-between px-4 py-3 rounded-xl bg-[#070B08] hover:bg-[#0D170E] border border-[#1E3520] hover:border-[#84CC16] transition-colors font-mono text-xs"
              >
                <span className="inline-flex items-center gap-3 font-semibold text-white">
                  <LinkedinIcon size={16} className="text-zinc-100" />
                  <span>LinkedIn</span>
                </span>
                <span className="inline-flex items-center gap-2 text-zinc-400 group-hover:text-[#9EF01A] transition-colors whitespace-nowrap">
                  <span>Let&apos;s connect</span>
                  <span className="text-[#84CC16] group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </span>
              </a>

              <button
                type="button"
                onClick={() => setComposeOpen(true)}
                className="group w-full flex items-center justify-between px-4 py-3 rounded-xl bg-[#070B08] hover:bg-[#0D170E] border border-[#1E3520] hover:border-[#84CC16] transition-colors font-mono text-xs cursor-pointer text-left"
              >
                <span className="inline-flex items-center gap-3 font-semibold text-white">
                  <Mail size={16} className="text-zinc-100" />
                  <span>Email</span>
                </span>
                <span className="inline-flex items-center gap-2 text-zinc-400 group-hover:text-[#9EF01A] transition-colors whitespace-nowrap">
                  <span>Drop a message</span>
                  <span className="text-[#84CC16] group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Message / Email Modal */}
      {composeOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setComposeOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="connect-modal-title"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg bg-[#070C08] border border-[#244226] rounded-2xl overflow-hidden shadow-2xl font-mono"
          >
            <div className="px-6 py-4 bg-[#040705] border-b border-[#182C1A] flex items-center justify-between">
              <h3 id="connect-modal-title" className="text-sm font-bold text-[#9EF01A]">
                Drop a Message · {personal.name}
              </h3>
              <button
                type="button"
                onClick={() => setComposeOpen(false)}
                className="text-zinc-400 hover:text-white cursor-pointer"
                aria-label="Close message dialog"
              >
                <X size={16} />
              </button>
            </div>

            <div className="p-6 space-y-5">
              {/* Direct Email Copy Box */}
              <div className="p-3.5 rounded-xl bg-[#040705] border border-[#1B311D] flex items-center justify-between gap-3">
                <div className="text-xs text-zinc-200 truncate">
                  {personal.email}
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0E1C10] hover:bg-[#162C19] border border-[#284724] text-xs text-[#84CC16] font-semibold shrink-0 cursor-pointer"
                >
                  {copied ? <Check size={13} /> : <Copy size={13} />}
                  <span>{copied ? 'Copied' : 'Copy Email'}</span>
                </button>
              </div>

              {sent ? (
                <div className="space-y-4 py-2">
                  <p className="text-xs text-[#84CC16] font-semibold">
                    Message drafted! Click below to launch your email client or write another note.
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href={`mailto:${personal.email}?subject=${encodeURIComponent(
                        `Portfolio Inquiry from ${formState.name || 'Visitor'}`
                      )}&body=${encodeURIComponent(
                        `${formState.message}\n\nFrom: ${formState.name} (${formState.email})`
                      )}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#84CC16] text-[#040705] text-xs font-bold"
                    >
                      <span>Open in Email Client</span>
                      <Send size={13} />
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSent(false);
                        setFormState({ name: '', email: '', message: '' });
                      }}
                      className="px-3 py-2 rounded-lg border border-[#1E3520] text-xs text-zinc-300 hover:text-white cursor-pointer"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label htmlFor="msg-name" className="block text-xs text-zinc-300 mb-1">
                      Your Name
                    </label>
                    <input
                      id="msg-name"
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Alex Rivera"
                      className="w-full px-3 py-2 text-xs text-white bg-[#040705] border border-[#1E3520] rounded-lg focus:outline-none focus:border-[#84CC16]"
                    />
                  </div>
                  <div>
                    <label htmlFor="msg-email" className="block text-xs text-zinc-300 mb-1">
                      Your Email
                    </label>
                    <input
                      id="msg-email"
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="alex@example.com"
                      className="w-full px-3 py-2 text-xs text-white bg-[#040705] border border-[#1E3520] rounded-lg focus:outline-none focus:border-[#84CC16]"
                    />
                  </div>
                  <div>
                    <label htmlFor="msg-body" className="block text-xs text-zinc-300 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="msg-body"
                      required
                      rows={3}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hey Harshit, let's connect about..."
                      className="w-full px-3 py-2 text-xs text-white bg-[#040705] border border-[#1E3520] rounded-lg focus:outline-none focus:border-[#84CC16]"
                    />
                  </div>
                  <div className="flex justify-end pt-1">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#84CC16] hover:bg-[#9EF01A] text-[#040705] text-xs font-bold cursor-pointer"
                    >
                      <span>Prepare Email</span>
                      <Send size={13} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
