import { useEffect, useState } from 'react';
import { X, Printer, Copy, Check, ArrowUpRight } from 'lucide-react';

export default function DossierModal({ isOpen, onClose, personal, projects, skillsGrouped, journey }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="dossier-title"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-4xl bg-[#0B0F17] border border-white/20 rounded-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
      >
        {/* Top Action Bar */}
        <div className="px-6 py-4 bg-[#06080D] border-b border-white/12 flex flex-wrap items-center justify-between gap-4 shrink-0 no-print">
          <div className="text-xs font-mono text-[#36D9F5] font-semibold">
            Student Resume &amp; Academic Profile · {personal.name}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-zinc-100 hover:text-white bg-white/10 hover:bg-white/15 rounded-lg transition-colors cursor-pointer"
            >
              {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
              <span>{copied ? 'Email Copied' : 'Copy Email'}</span>
            </button>

            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-[#06080D] bg-[#36D9F5] hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer"
            >
              <Printer size={13} />
              <span>Print / Save PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close Student Resume"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-mono text-zinc-100 hover:text-white bg-white/10 hover:bg-white/15 rounded-lg transition-colors cursor-pointer"
            >
              <span>ESC</span>
              <X size={15} />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-zinc-100">
          {/* Header Block */}
          <div className="pb-6 border-b border-white/12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 id="dossier-title" className="font-display text-3xl font-extrabold text-white">
                {personal.name}
              </h2>
              <p className="text-sm font-semibold text-[#36D9F5] mt-1">
                {personal.degree}
              </p>
              <p className="text-xs text-zinc-200 mt-1.5 max-w-xl">
                {personal.tagline}
              </p>
            </div>

            <div className="text-xs font-mono text-zinc-200 space-y-1 sm:text-right">
              <div className="text-white font-medium">{personal.email}</div>
              <div className="text-amber-300">{personal.location}</div>
              <div>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#36D9F5] hover:underline inline-flex items-center gap-1"
                >
                  <span>github.com/HarshitRaj31</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* 01. Education & Core Coursework */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs text-[#36D9F5] font-bold">
              01. Education &amp; Relevant Coursework
            </h3>
            <div className="p-5 rounded-xl bg-[#06080D] border border-white/12 space-y-2">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="font-display text-base font-bold text-white">
                  Bachelor of Technology (B.Tech) in Computer Science &amp; Engineering
                </div>
                <span className="font-mono text-xs text-amber-300 font-semibold tabular-nums">
                  2023 — 2027 (Expected)
                </span>
              </div>
              <p className="text-xs text-zinc-100 leading-relaxed">
                <strong className="text-[#36D9F5]">Core Coursework:</strong> Data Structures &amp; Algorithms (DSA), Operating Systems, Computer Networks, Database Management Systems (DBMS), Object-Oriented Programming (OOP).
              </p>
            </div>
          </div>

          {/* 02. Technical Skills & Tools */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs text-[#36D9F5] font-bold">
              02. Technical Skills &amp; Currently Learning
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillsGrouped.map((group) => (
                <div
                  key={group.id}
                  className="p-4 rounded-xl bg-[#06080D] border border-white/12"
                >
                  <div className="font-display text-sm font-bold text-white mb-1">
                    {group.category}
                  </div>
                  <p className="text-xs font-mono text-zinc-100">
                    {group.technologies.map((t) => t.name).join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 03. Academic & Personal Software Projects */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs text-[#36D9F5] font-bold">
              03. Hands-On Student Projects
            </h3>
            <div className="divide-y divide-white/10 bg-[#06080D] border border-white/12 rounded-xl px-5">
              {projects.map((proj) => (
                <div key={proj.id} className="py-4 space-y-1.5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div className="font-display text-base font-bold text-white">
                      {proj.num}. {proj.title}{' '}
                      <span className="font-normal text-xs text-amber-300">
                        — {proj.headline}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-[#36D9F5] tabular-nums">
                      {proj.year} · {proj.technologies.join(' · ')}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-100 leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 04. Learning Timeline */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs text-[#36D9F5] font-bold">
              04. Learning Progression
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {journey.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#06080D] border border-white/12 space-y-1"
                >
                  <div className="text-xs font-mono text-amber-300 font-semibold tabular-nums">
                    {item.year} · {item.domain}
                  </div>
                  <div className="font-display text-sm font-bold text-white">
                    {item.title}
                  </div>
                  <p className="text-xs text-zinc-200 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
