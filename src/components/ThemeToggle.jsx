import { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ variant = 'button', className = '' }) {
  const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close dropdown menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  // Segmented 3-option bar (great for mobile drawer or explicit settings)
  if (variant === 'segmented') {
    const options = [
      { id: 'light', label: 'Light', icon: Sun },
      { id: 'dark', label: 'Dark', icon: Moon },
      { id: 'system', label: 'System', icon: Monitor },
    ];

    return (
      <div
        className={`flex items-center p-1 rounded-xl bg-zinc-900/40 dark:bg-zinc-900/60 light:bg-slate-200/70 border border-white/10 dark:border-white/15 light:border-slate-300/80 ${className}`}
        role="group"
        aria-label="Theme selector"
      >
        {options.map((opt) => {
          const Icon = opt.icon;
          const isActive = theme === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => setTheme(opt.id)}
              className={`flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#36D9F5] text-[#06080D] light:bg-[#0284C7] light:text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200 light:text-slate-600 light:hover:text-slate-900'
              }`}
              aria-pressed={isActive}
            >
              <Icon size={14} className="shrink-0" />
              <span>{opt.label}</span>
            </button>
          );
        })}
      </div>
    );
  }

  // Default compact toggle button with dropdown options on right-click or hover/alt
  const isDark = resolvedTheme === 'dark';

  return (
    <div className={`relative inline-flex items-center ${className}`} ref={menuRef}>
      <button
        type="button"
        onClick={toggleTheme}
        onContextMenu={(e) => {
          e.preventDefault();
          setMenuOpen(!menuOpen);
        }}
        aria-label={`Current theme: ${theme}. Click to switch to ${isDark ? 'light' : 'dark'} mode. Right click for options.`}
        title={`Switch to ${isDark ? 'light' : 'dark'} mode (Right-click for System/Auto)`}
        className="relative inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/15 dark:border-white/15 light:border-slate-300/80 bg-white/5 dark:bg-white/5 light:bg-slate-100 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-slate-200 text-zinc-100 dark:text-zinc-100 light:text-slate-800 transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#36D9F5] light:focus-visible:outline-[#0284C7] group"
      >
        <span className="sr-only">Toggle theme</span>
        <div className="relative w-4 h-4 flex items-center justify-center overflow-hidden">
          {/* Sun icon for light mode */}
          <Sun
            size={16}
            className={`absolute transition-transform duration-300 ${
              isDark
                ? 'rotate-90 scale-0 opacity-0 text-amber-300'
                : 'rotate-0 scale-100 opacity-100 text-amber-500'
            }`}
          />
          {/* Moon icon for dark mode */}
          <Moon
            size={16}
            className={`absolute transition-transform duration-300 ${
              isDark
                ? 'rotate-0 scale-100 opacity-100 text-[#36D9F5]'
                : '-rotate-90 scale-0 opacity-0 text-indigo-400'
            }`}
          />
        </div>
      </button>

      {/* Dropdown menu for picking Light, Dark, System */}
      {menuOpen && (
        <div className="absolute right-0 top-full mt-2 w-36 py-1.5 rounded-xl bg-[#0B0F17] light:bg-white border border-white/15 light:border-slate-200 shadow-xl z-50 animate-in fade-in slide-in-from-top-1 duration-150">
          <div className="px-3 py-1 text-[10px] font-mono font-semibold text-zinc-400 light:text-slate-500 uppercase tracking-wider">
            Theme Options
          </div>
          {[
            { id: 'light', label: 'Light Mode', icon: Sun },
            { id: 'dark', label: 'Dark Mode', icon: Moon },
            { id: 'system', label: 'System Auto', icon: Monitor },
          ].map((item) => {
            const Icon = item.icon;
            const isSelected = theme === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setTheme(item.id);
                  setMenuOpen(false);
                }}
                className={`w-full flex items-center gap-2.5 px-3 py-1.5 text-xs font-medium transition-colors text-left cursor-pointer ${
                  isSelected
                    ? 'text-[#36D9F5] light:text-[#0284C7] font-semibold bg-white/5 light:bg-slate-100'
                    : 'text-zinc-300 light:text-slate-700 hover:bg-white/5 light:hover:bg-slate-100'
                }`}
              >
                <Icon size={14} className="shrink-0" />
                <span>{item.label}</span>
                {isSelected && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#36D9F5] light:bg-[#0284C7]" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
