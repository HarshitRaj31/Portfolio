import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import ThemeToggle from './ThemeToggle';

export default function Footer({ personal, onOpenDossier }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#06080D]/85 backdrop-blur-md py-12 border-t border-white/10 no-print">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <a
              href="#hero"
              className="font-display text-lg font-extrabold tracking-tight text-white hover:text-[#36D9F5] transition-colors"
            >
              {personal.brand}
            </a>
            <p className="text-xs text-zinc-200 mt-1">
              {personal.name} · <span className="text-[#36D9F5]">{personal.degree}</span> · {personal.country}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-semibold text-zinc-200">
            <button
              type="button"
              onClick={onOpenDossier}
              className="hover:text-[#36D9F5] transition-colors cursor-pointer whitespace-nowrap"
            >
              Student Resume / CV
            </button>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#36D9F5] transition-colors whitespace-nowrap"
            >
              <GithubIcon size={14} />
              <span>GitHub</span>
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#36D9F5] transition-colors whitespace-nowrap"
            >
              <LinkedinIcon size={14} />
              <span>LinkedIn</span>
            </a>
            <ThemeToggle />

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#36D9F5] hover:text-cyan-300 transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>Back to Top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono text-zinc-300">
          <span>© {currentYear} {personal.name}. Built while studying B.Tech CSE.</span>
          <span className="text-[#36D9F5]">React 19 · Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
