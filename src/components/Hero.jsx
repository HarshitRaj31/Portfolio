import { useState } from 'react';
import { Mail, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Hero({ personal }) {
  const [checklist, setChecklist] = useState(personal.checklist);
  const [activeNote, setActiveNote] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const toggleItem = (id) => {
    setChecklist((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
    const target = checklist.find((item) => item.id === id);
    if (target) {
      setActiveNote(`${target.label}: ${target.detail}`);
    }
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative pt-4 pb-8 lg:pt-6 lg:pb-10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-[#050806]/85 backdrop-blur-sm border border-[#182C1A] overflow-hidden">
          {/* Subtle top/bottom ambient emerald glow */}
          <div
            className="pointer-events-none absolute -top-24 left-1/3 w-96 h-48 rounded-full bg-[#7CE832]/[0.05] blur-3xl"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Column: Intro, Bio, Checklist & Social Buttons */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between z-10">
              <div>
                {/* Greeting Kicker */}
                <div className="flex items-center gap-2 text-sm sm:text-base font-mono text-zinc-200 mb-3">
                  <span className="inline-block w-1.5 h-4 bg-[#84CC16] rounded-[1px]" aria-hidden="true" />
                  <span>Hey there,</span>
                </div>

                {/* Oversized Display Name */}
                <h1 className="font-mono text-4xl sm:text-6xl lg:text-[4.25rem] font-extrabold tracking-tight leading-[1.04] text-white mb-4">
                  <span className="block text-zinc-100">I&apos;m</span>
                  <span className="block mt-1">
                    Harshit{' '}
                    <span className="text-[#7CE832] drop-shadow-[0_0_18px_rgba(124,232,50,0.28)]">
                      Raj_
                    </span>
                  </span>
                </h1>

                {/* Role Strip */}
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11px] sm:text-xs font-mono tracking-wider text-zinc-300 mb-6">
                  {personal.roles.map((role, i) => (
                    <span key={role} className="inline-flex items-center gap-2.5">
                      <span>{role}</span>
                      {i < personal.roles.length - 1 && (
                        <span className="text-[#84CC16] font-bold" aria-hidden="true">
                          •
                        </span>
                      )}
                    </span>
                  ))}
                </div>

                {/* Bio + Checklist Split */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start mb-7">
                  {/* Bio & Terminal Prompts */}
                  <div className="sm:col-span-7 space-y-4 font-mono">
                    <p className="text-xs sm:text-[13px] text-zinc-200 leading-relaxed">
                      {personal.bioParagraph1}
                      <br />
                      {personal.bioParagraph2}
                    </p>

                    <div className="space-y-1 pt-1 text-xs sm:text-[13px] text-zinc-300">
                      {personal.terminalPrompts.map((line) => (
                        <div key={line} className="flex items-center gap-2">
                          <span className="text-[#84CC16] font-bold">&gt;</span>
                          <span>{line}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Terminal Checklist Box */}
                  <div className="sm:col-span-5">
                    <div className="bg-[#070C08]/95 border border-[#1E3520] rounded-xl p-3.5 sm:p-4 font-mono text-xs space-y-2 shadow-[0_0_25px_rgba(0,0,0,0.6)]">
                      {checklist.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => toggleItem(item.id)}
                          title="Click to toggle & inspect focus area"
                          className="w-full flex items-center gap-2.5 text-left hover:bg-[#0E1910] px-1.5 py-0.5 rounded transition-colors cursor-pointer group"
                        >
                          <span className="text-zinc-400 group-hover:text-zinc-200 shrink-0">
                            [
                            <span
                              className={
                                item.checked
                                  ? 'text-[#84CC16] font-bold'
                                  : 'text-transparent select-none'
                              }
                            >
                              {item.checked ? 'v' : ' '}
                            </span>
                            ]
                          </span>
                          <span
                            className={`tracking-wide whitespace-nowrap ${
                              item.checked
                                ? 'text-zinc-100 font-medium'
                                : 'text-zinc-300'
                            }`}
                          >
                            {item.label}
                          </span>
                        </button>
                      ))}

                      {activeNote && (
                        <div className="pt-2 mt-2 border-t border-[#182C1A] text-[10px] text-[#84CC16] leading-snug">
                          {activeNote}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* 3 Outlined Social CTA Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between px-4 py-2.5 rounded-lg bg-[#080E09] hover:bg-[#0E1A10] border border-[#264223] hover:border-[#84CC16] transition-colors font-mono text-xs font-semibold text-zinc-100 whitespace-nowrap shrink-0"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <GithubIcon size={15} className="text-white" />
                    <span>GITHUB</span>
                  </span>
                  <span className="text-[#84CC16] group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between px-4 py-2.5 rounded-lg bg-[#080E09] hover:bg-[#0E1A10] border border-[#264223] hover:border-[#84CC16] transition-colors font-mono text-xs font-semibold text-zinc-100 whitespace-nowrap shrink-0"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <LinkedinIcon size={15} className="text-white" />
                    <span>LINKEDIN</span>
                  </span>
                  <span className="text-[#84CC16] group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </a>

                <a
                  href={`mailto:${personal.email}`}
                  onClick={handleEmailClick}
                  className="group flex items-center justify-between px-4 py-2.5 rounded-lg bg-[#080E09] hover:bg-[#0E1A10] border border-[#264223] hover:border-[#84CC16] transition-colors font-mono text-xs font-semibold text-zinc-100 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span className="inline-flex items-center gap-2.5">
                    {copiedEmail ? (
                      <>
                        <Check size={15} className="text-[#84CC16]" />
                        <span className="text-[#84CC16]">COPIED!</span>
                      </>
                    ) : (
                      <>
                        <Mail size={15} className="text-white" />
                        <span>EMAIL</span>
                      </>
                    )}
                  </span>
                  <span className="text-[#84CC16] group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Developer Artwork */}
            <div className="lg:col-span-5 relative min-h-[320px] sm:min-h-[380px] lg:min-h-full bg-[#050705] flex items-end justify-end overflow-hidden">
              {/* Left-edge gradient blend so the artwork merges seamlessly */}
              <div
                className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#050806] to-transparent z-10 hidden lg:block"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#050806] to-transparent z-10 lg:hidden"
                aria-hidden="true"
              />

              <img
                src="/assets/crops/hero_art.png"
                alt="Harshit Raj coding at night with neon crown hoodie, Build Learn Repeat sign, and stacked engineering books"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center lg:object-right-bottom select-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
