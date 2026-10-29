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
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="dossier-title"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-4xl bg-[#070C08] border border-[#244226] rounded-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col font-mono"
      >
        {/* Top Action Bar */}
        <div className="px-6 py-4 bg-[#040705] border-b border-[#182C1A] flex flex-wrap items-center justify-between gap-4 shrink-0 no-print">
          <div className="text-xs text-[#9EF01A] font-semibold">
            Developer Resume &amp; Dossier · {personal.name}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-zinc-100 hover:text-white bg-[#0C170E] border border-[#1E3520] rounded-lg transition-colors cursor-pointer"
            >
              {copied ? <Check size={13} className="text-[#84CC16]" /> : <Copy size={13} />}
              <span>{copied ? 'Email Copied' : 'Copy Email'}</span>
            </button>

            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-[#040705] bg-[#84CC16] hover:bg-[#9EF01A] rounded-lg transition-colors cursor-pointer"
            >
              <Printer size={13} />
              <span>Print / Save PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close Developer Resume"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs text-zinc-200 hover:text-white bg-[#0C170E] border border-[#1E3520] rounded-lg transition-colors cursor-pointer"
            >
              <span>ESC</span>
              <X size={15} />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-zinc-100">
          <div className="pb-5 border-b border-[#182C1A] flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 id="dossier-title" className="font-display text-3xl font-extrabold text-white">
                {personal.name}
              </h2>
              <p className="text-xs font-semibold text-[#84CC16] mt-1">
                {personal.title} · {personal.degree}
              </p>
              <p className="text-xs text-zinc-300 mt-1.5 max-w-xl">
                {personal.tagline}
              </p>
            </div>

            <div className="text-xs text-zinc-300 space-y-1 sm:text-right">
              <div className="text-white font-medium">{personal.email}</div>
              <div className="text-[#9EF01A]">{personal.location}</div>
              <div>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#84CC16] hover:underline inline-flex items-center gap-1"
                >
                  <span>github.com/HarshitRaj31</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-3">
            <h3 className="text-xs text-[#9EF01A] font-bold">
              01. Featured Projects
            </h3>
            <div className="divide-y divide-[#182C1A] bg-[#040705] border border-[#1B311D] rounded-xl px-5">
              {projects.map((proj) => (
                <div key={proj.id} className="py-3.5 space-y-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div className="font-display text-sm font-bold text-white">
                      {proj.num}. {proj.title}{' '}
                      <span className="font-normal text-xs text-[#84CC16]">
                        — {proj.headline}
                      </span>
                    </div>
                    <span className="text-xs text-zinc-400 tabular-nums">
                      {(proj.fullTechnologies || proj.technologies).join(' · ')}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Stack */}
          <div className="space-y-3">
            <h3 className="text-xs text-[#9EF01A] font-bold">
              02. Technical Stack
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skillsGrouped.map((group) => (
                <div
                  key={group.id}
                  className="p-4 rounded-xl bg-[#040705] border border-[#1B311D]"
                >
                  <div className="text-xs font-bold text-white mb-1">
                    {group.category}
                  </div>
                  <p className="text-xs text-[#84CC16]">
                    {group.technologies.map((t) => t.name).join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Journey */}
          <div className="space-y-3">
            <h3 className="text-xs text-[#9EF01A] font-bold">
              03. Education &amp; Progression
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {journey.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#040705] border border-[#1B311D] space-y-1"
                >
                  <div className="text-xs text-[#84CC16] font-semibold tabular-nums">
                    {item.year}
                  </div>
                  <div className="font-display text-sm font-bold text-white">
                    {item.title}
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
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
