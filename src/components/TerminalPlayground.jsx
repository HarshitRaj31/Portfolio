import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, Trash2 } from 'lucide-react';
import './TerminalPlayground.css';

export default function TerminalPlayground({ personal, skills, projects }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: `Welcome to ${personal.name}'s Interactive Developer Terminal (v4.8.2-prod)` },
    { type: 'system', text: "Type 'help' to inspect available system commands or click the shortcut chips below." },
  ]);

  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (rawCmd) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'user', text: rawCmd }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `Available Commands:
  • help       : List all executable commands
  • bio        : My background & learning philosophy
  • skills     : View current technologies & toolkit
  • projects   : View hands-on projects & practice apps
  • goals      : What I am currently aiming to accomplish
  • contact    : Get direct contact & socials
  • clear      : Clear terminal screen
  • quote      : Print inspiring developer wisdom`
        });
        break;

      case 'bio':
        newHistory.push({
          type: 'output',
          text: `[PROFILE] ${personal.name} — ${personal.role}
[STATUS] ${personal.status.label} (${personal.status.relocation})
[SUMMARY] ${personal.bio}`
        });
        break;

      case 'skills':
        const topSkills = skills.categories
          .flatMap((c) => c.items || [])
          .slice(0, 8)
          .map((s) => `  - ${s.name.padEnd(25)} [${s.level}%] (${s.tag})`)
          .join('\n');
        newHistory.push({
          type: 'output',
          text: `Core Technical Competencies:\n${topSkills}\n  ...and many more in the skills section above!`
        });
        break;

      case 'projects':
        const projList = projects
          .map((p) => `  • ${p.title} (${p.category})\n    ${p.summary}`)
          .join('\n\n');
        newHistory.push({
          type: 'output',
          text: `Featured Engineering Work:\n${projList}`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `Direct Lines of Communication:
  • Email    : ${personal.email}
  • GitHub   : ${personal.github}
  • LinkedIn : ${personal.linkedin}
  • Location : ${personal.location}`
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'goals':
        newHistory.push({
          type: 'output',
          text: `Current Aspirations & Goals:
  1. Secure an internship or junior frontend/full-stack developer role
  2. Build 5+ full-stack applications with React, Node.js, and databases
  3. Master TypeScript and write clean, testable code
  4. Actively contribute to beginner-friendly open source repositories`
        });
        break;

      case 'sudo':
        newHistory.push({
          type: 'output',
          text: "permission denied: nice try! You don't need root permissions to collaborate with me 😊"
        });
        break;

      case 'quote':
        const quotes = [
          `"Every great developer you know got there by solving problems they were unqualified to solve until they actually did it." — Patrick McKenzie`,
          `"Talk is cheap. Show me the code." — Linus Torvalds`,
          `"Make it work, make it right, make it fast." — Kent Beck`,
          `"The expert in anything was once a beginner." — Helen Hayes`
        ];
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        newHistory.push({
          type: 'output',
          text: randomQuote
        });
        break;

      default:
        newHistory.push({
          type: 'error',
          text: `bash: command not found: "${cmd}". Type "help" for a list of valid commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    }
  };

  const handleChipClick = (cmd) => {
    handleCommand(cmd);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <section id="terminal" className="section terminal-section">
      <div className="app-container">
        <div className="section-header">
          <div className="section-tag">
            <TerminalIcon size={14} />
            <span>Interactive Console</span>
          </div>
          <h2 className="section-title">
            Developer <span className="gradient-text">CLI Playground</span>
          </h2>
          <p className="section-subtitle">
            Explore my profile, tech stack, and background interactively through a simulated UNIX developer shell.
          </p>
        </div>

        {/* Quick Command Chips */}
        <div className="terminal-shortcuts">
          <span className="shortcuts-label">Quick Commands:</span>
          {['help', 'skills', 'projects', 'goals', 'bio', 'contact', 'quote', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleChipClick(cmd)}
              className="shortcut-chip mono"
            >
              ${cmd}
            </button>
          ))}
        </div>

        {/* Terminal Window */}
        <div className="terminal-window glass-panel" onClick={() => inputRef.current?.focus()}>
          {/* Header */}
          <div className="terminal-topbar">
            <div className="terminal-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="terminal-title mono">
              {personal.name.toLowerCase().split(' ')[0]}@arch-linux: ~ (bash 5.2)
            </div>
            <button
              className="terminal-clear-btn"
              onClick={(e) => {
                e.stopPropagation();
                setHistory([]);
              }}
              title="Clear terminal"
            >
              <Trash2 size={14} />
            </button>
          </div>

          {/* Terminal History Body */}
          <div className="terminal-body" ref={terminalBodyRef}>
            {history.map((entry, idx) => (
              <div key={idx} className={`term-line term-${entry.type}`}>
                {entry.type === 'user' && (
                  <span className="term-prompt mono">guest@portfolio:~$ </span>
                )}
                <pre className="term-text mono">{entry.text}</pre>
              </div>
            ))}

            {/* Active Input Line */}
            <div className="term-input-row">
              <span className="term-prompt mono">guest@portfolio:~$ </span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                className="term-input mono"
                placeholder="type a command (e.g. 'help')..."
                autoComplete="off"
                spellCheck="false"
              />
              <button
                className="term-submit-btn"
                onClick={() => handleCommand(inputVal)}
                aria-label="Submit command"
              >
                <CornerDownLeft size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
