import { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ variant = 'button', className = '' }) {
  const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

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

  if (variant === 'segmented') {
    const options = [
      { id: 'light', label: 'Light', icon: Sun },
      { id: 'dark', label: 'Dark', icon: Moon },
      { id: 'system', label: 'Auto', icon: Monitor },
    ];

    return (
      <div
        className={`flex items-center p-1 rounded-lg bg-[#081109] border border-[#284724] font-mono ${className}`}
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
              className={`flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#84CC16] text-[#040705] shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-100'
              }`}
              aria-pressed={isActive}
            >
              <Icon size={13} className="shrink-0" />
              <span>{opt.label}</span>
            </button>
          );
        })}
      </div>
    );
  }

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
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        title={`Switch to ${isDark ? 'light' : 'dark'} mode (Right-click for System/Auto)`}
        className="relative inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-[#284724] hover:border-[#84CC16] bg-[#081109] hover:bg-[#112413] text-zinc-200 hover:text-[#9EF01A] font-mono text-xs transition-colors cursor-pointer shrink-0"
      >
        {isDark ? (
          <>
            <Moon size={14} className="text-[#84CC16]" />
            <span className="hidden sm:inline text-[11px] font-semibold">DARK</span>
          </>
        ) : (
          <>
            <Sun size={14} className="text-amber-500" />
            <span className="hidden sm:inline text-[11px] font-semibold">LIGHT</span>
          </>
        )}
      </button>

      {menuOpen && (
        <div className="absolute right-0 top-full mt-2 w-36 py-1.5 rounded-xl bg-[#070C08] border border-[#244226] shadow-xl z-50 font-mono">
          <div className="px-3 py-1 text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">
            Theme Mode
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
                className={`w-full flex items-center gap-2.5 px-3 py-1.5 text-xs transition-colors text-left cursor-pointer ${
                  isSelected
                    ? 'text-[#84CC16] font-bold bg-[#0E1C10]'
                    : 'text-zinc-300 hover:bg-[#0E1C10]'
                }`}
              >
                <Icon size={13} className="shrink-0" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
