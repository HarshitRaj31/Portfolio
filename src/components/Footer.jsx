import ThemeToggle from './ThemeToggle';

export default function Footer({ personal, onOpenDossier }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040705]/90 backdrop-blur-sm border-t border-[#152617] py-4 mt-4 no-print">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs">
        {/* Left Terminal Prompt + Thanks Message */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={scrollToTop}
            title="Scroll to top"
            className="text-zinc-200 hover:text-[#84CC16] transition-colors cursor-pointer"
          >
            {personal.brand}
          </button>
          <span className="text-[#84CC16] font-medium">
            Thanks for visiting! ★
          </span>
        </div>

        {/* Right Tagline + Theme Switcher */}
        <div className="flex flex-wrap items-center gap-3 text-[11px] tracking-wider text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="text-[#84CC16] font-bold">&lt;/&gt;</span>
            <span>MADE WITH PASSION</span>
            <span aria-hidden="true">•</span>
            <button
              type="button"
              onClick={onOpenDossier}
              className="hover:text-[#84CC16] transition-colors cursor-pointer"
            >
              KEEP BUILDING
            </button>
            <span aria-hidden="true">•</span>
            <span className="tabular-nums">2026</span>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
