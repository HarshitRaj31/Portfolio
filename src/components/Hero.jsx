import { useState, useEffect, useRef } from 'react';
import { ArrowDownRight, FileText, Copy, Check, Terminal, Cpu, Code2, CornerDownLeft } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const LAB_MODULES = [
  {
    id: 'go-service',
    code: 'LAB-01',
    name: 'Go Health-Check Service',
    topic: 'Learning Go Concurrency & HTTP',
    tools: 'Go (Golang) · net/http · Goroutines',
    summary: 'Practicing concurrent programming in Go by writing a lightweight service that pings local homelab nodes and logs their status.'
  },
  {
    id: 'docker-pods',
    code: 'LAB-02',
    name: 'Docker Container Setup',
    topic: 'Packaging & Isolating Web Apps',
    tools: 'Docker CLI · Dockerfiles · Port Mapping',
    summary: 'Learning how to containerize React and Node.js applications so they run consistently across any Linux machine.'
  },
  {
    id: 'linux-host',
    code: 'LAB-03',
    name: 'Linux CLI & OS Basics',
    topic: 'Applying Operating Systems Coursework',
    tools: 'Linux · Bash · Systemd · Processes',
    summary: 'Connecting university Operating Systems concepts (processes, memory, file permissions) with hands-on Linux server administration.'
  },
  {
    id: 'networking',
    code: 'LAB-04',
    name: 'Local Network Routing',
    topic: 'Applying Computer Networks Coursework',
    tools: 'TCP/IP · HTTP · Local DNS & Ports',
    summary: 'Experimenting with how client browsers communicate with backend APIs and local nodes over HTTP and TCP sockets.'
  }
];

const HERO_GO_CODE = `package main

import (
	"fmt"
	"net/http"
	"time"
)

// Student Homelab Experiment: Checking local node health in Go
func probeNode(name string, url string) {
	client := http.Client{Timeout: 2 * time.Second}
	start := time.Now()

	resp, err := client.Get(url)
	if err != nil {
		fmt.Printf("[%s] offline (%v)\\n", name, err)
		return
	}
	defer resp.Body.Close()

	fmt.Printf("[%s] online · status %d · %v\\n",
		name, resp.StatusCode, time.Since(start).Round(time.Millisecond))
}

func main() {
	probeNode("kamui-local-node-1", "http://localhost:8080/health")
}`;

export default function Hero({ personal, projects, onOpenDossier }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [timeString, setTimeString] = useState('IST (UTC+5:30)');
  const [activeTab, setActiveTab] = useState('lab');
  const [selectedModuleId, setSelectedModuleId] = useState('go-service');

  // Embedded Interactive Student Shell State
  const [cmdInput, setCmdInput] = useState('');
  const [shellHistory, setShellHistory] = useState([
    { type: 'sys', text: 'harshit@cse-lab ~ Interactive Student Terminal' },
    { type: 'sys', text: 'Click a command below or type "help" to explore my coursework, projects & goals.' }
  ]);
  const shellContainerRef = useRef(null);

  useEffect(() => {
    const updateClock = () => {
      try {
        const formatted = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        }).format(new Date());
        setTimeString(`${formatted} IST`);
      } catch {
        setTimeString('IST (UTC+5:30)');
      }
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (shellContainerRef.current) {
      shellContainerRef.current.scrollTop = shellContainerRef.current.scrollHeight;
    }
  }, [shellHistory]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(HERO_GO_CODE);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const executeShellCommand = (raw) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    const next = [...shellHistory, { type: 'cmd', text: `harshit@cse-lab:~$ ${raw}` }];

    if (cmd === 'help') {
      next.push({
        type: 'out',
        text: [
          'Available student commands:',
          '  whoami      Display student profile & degree info',
          '  coursework  List B.Tech CSE core subjects',
          '  projects    View hands-on student projects (01–04)',
          '  skills      Show web & cloud technologies I use',
          '  goals       What I am currently working toward',
          '  contact     Print email & GitHub/LinkedIn links',
          '  clear       Clear terminal screen'
        ].join('\n')
      });
    } else if (cmd === 'whoami') {
      next.push({
        type: 'out',
        text: `${personal.name} — B.Tech CSE Undergraduate (2023–2027)\nFocus    : Full-Stack Web Development & Cloud Infrastructure\nLocation : ${personal.location}\nStatus   : ${personal.statusLabel}`
      });
    } else if (cmd === 'coursework') {
      next.push({
        type: 'out',
        text: [
          'B.Tech Computer Science & Engineering Core Subjects:',
          '  · Data Structures & Algorithms (DSA)',
          '  · Operating Systems (OS & Linux Internals)',
          '  · Computer Networks (TCP/IP, HTTP, DNS)',
          '  · Database Management Systems (SQL & NoSQL)',
          '  · Object-Oriented Programming (OOP)'
        ].join('\n')
      });
    } else if (cmd === 'projects') {
      const list = projects
        .map((p) => `${p.num}. ${p.title.padEnd(12)} · ${p.category} (${p.year})`)
        .join('\n');
      next.push({ type: 'out', text: list });
    } else if (cmd === 'skills') {
      next.push({
        type: 'out',
        text: [
          'Frontend  : React, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS',
          'Backend   : Node.js, Express.js, REST APIs, JWT Auth',
          'Databases : MongoDB, MySQL',
          'Exploring : Go (Golang), Docker, Linux CLI, Git & GitHub'
        ].join('\n')
      });
    } else if (cmd === 'goals') {
      next.push({
        type: 'out',
        text: [
          'Current Goals as a Student:',
          '  01. Join an engineering team as a Software or Cloud Intern',
          '  02. Deepen hands-on experience with Go, Docker & Linux servers',
          '  03. Contribute to open-source web and cloud repositories'
        ].join('\n')
      });
    } else if (cmd === 'contact') {
      next.push({
        type: 'out',
        text: `Email    : ${personal.email}\nGitHub   : ${personal.github}\nLinkedIn : ${personal.linkedin}`
      });
    } else if (cmd === 'clear') {
      setShellHistory([]);
      setCmdInput('');
      return;
    } else {
      next.push({
        type: 'err',
        text: `Command not found: "${cmd}". Type "help" for available options.`
      });
    }

    setShellHistory(next);
    setCmdInput('');
  };

  const activeModule = LAB_MODULES.find((m) => m.id === selectedModuleId) || LAB_MODULES[0];

  return (
    <section id="hero" className="relative pt-10 pb-20 lg:pt-16 lg:pb-24 border-b border-white/12">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative z-10">
        {/* 2-Column Split-Screen Hero with items-stretch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Typographic Hierarchy & Primary Actions */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2">
            <div>
              {/* Clean Unboxed Metadata Kicker */}
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-mono text-zinc-200 mb-6">
                <span className="text-[#36D9F5] font-semibold">B.Tech CSE Student (2023–2027)</span>
                <span className="text-zinc-400" aria-hidden="true">·</span>
                <span className="text-white font-medium">{personal.country}</span>
                <span className="text-zinc-400" aria-hidden="true">·</span>
                <span className="tabular-nums text-amber-300">{timeString}</span>
              </div>

              {/* Balanced Display Headline */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-white leading-[1.08] mb-6 max-w-2xl">
                Building Interactive{' '}
                <span className="bg-gradient-to-r from-[#36D9F5] via-cyan-300 to-sky-400 bg-clip-text text-transparent">
                  Web Apps
                </span>{' '}
                &amp; Exploring{' '}
                <span className="text-[#36D9F5]">Cloud Systems.</span>
              </h1>

              {/* Editorial Lead Prose */}
              <p className="text-base sm:text-lg text-zinc-100 leading-relaxed max-w-[62ch] mb-8">
                Hi, I am <strong className="text-[#36D9F5] font-bold">{personal.name}</strong> — an undergraduate Computer Science Engineering student learning by building full-stack React &amp; Node.js applications while exploring Linux, Docker containers, and Go through self-hosted projects.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <a
                  href="#work"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-[#06080D] bg-[#36D9F5] hover:bg-cyan-300 rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Explore My Projects</span>
                  <ArrowDownRight size={17} />
                </a>

                <button
                  type="button"
                  onClick={onOpenDossier}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#0B0F17]/90 hover:bg-white/10 border border-white/20 rounded-lg backdrop-blur-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <FileText size={16} className="text-[#36D9F5]" />
                  <span>View Student Resume / CV</span>
                </button>
              </div>
            </div>

            {/* Bottom Contact & Repository Bar */}
            <div className="pt-6 border-t border-white/12 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-6 text-xs font-semibold text-zinc-100">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#36D9F5] transition-colors whitespace-nowrap shrink-0"
                >
                  <GithubIcon size={15} />
                  <span>GitHub (@HarshitRaj31)</span>
                </a>
                <span className="text-zinc-500" aria-hidden="true">/</span>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#36D9F5] transition-colors whitespace-nowrap shrink-0"
                >
                  <LinkedinIcon size={15} />
                  <span>LinkedIn</span>
                </a>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 text-xs font-mono text-white hover:text-[#36D9F5] py-1.5 px-3 rounded-md bg-[#0B0F17]/90 hover:bg-white/10 border border-white/15 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                title="Copy email address to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check size={13} className="text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied: {personal.email}</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} className="text-[#36D9F5]" />
                    <span>{personal.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Student Learning Lab & Terminal Workbench */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full bg-[#0B0F17]/90 backdrop-blur-md border border-white/15 rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-white/10">
                  <div>
                    <span className="block font-mono text-[11px] text-[#36D9F5] font-medium">
                      Student Sandbox · What I&apos;m Exploring
                    </span>
                    <h2 className="font-display text-base font-bold text-white mt-0.5">
                      Homelab &amp; Learning Workbench
                    </h2>
                  </div>

                  {/* Interactive Mode Tabs */}
                  <div className="flex items-center gap-1 p-1 bg-[#06080D] border border-white/12 rounded-lg">
                    <button
                      type="button"
                      onClick={() => setActiveTab('lab')}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        activeTab === 'lab'
                          ? 'bg-[#36D9F5] text-[#06080D]'
                          : 'text-zinc-200 hover:text-white'
                      }`}
                    >
                      <Cpu size={12} />
                      <span>Cloud Lab</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('code')}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        activeTab === 'code'
                          ? 'bg-[#36D9F5] text-[#06080D]'
                          : 'text-zinc-200 hover:text-white'
                      }`}
                    >
                      <Code2 size={12} />
                      <span>Go Practice</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('shell')}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        activeTab === 'shell'
                          ? 'bg-[#36D9F5] text-[#06080D]'
                          : 'text-zinc-200 hover:text-white'
                      }`}
                    >
                      <Terminal size={12} />
                      <span>CLI Shell</span>
                    </button>
                  </div>
                </div>

                {/* TAB 1: Student Cloud Lab Modules */}
                {activeTab === 'lab' && (
                  <div className="space-y-4">
                    <p className="text-xs text-zinc-200 leading-relaxed">
                      Click any module below to see how I connect my B.Tech CSE coursework with hands-on practice in my <strong className="text-[#36D9F5] font-semibold">Kamui Cloud</strong> student project:
                    </p>

                    <div className="grid grid-cols-2 gap-2.5">
                      {LAB_MODULES.map((mod) => {
                        const isSelected = mod.id === selectedModuleId;
                        return (
                          <button
                            key={mod.id}
                            type="button"
                            onClick={() => setSelectedModuleId(mod.id)}
                            className={`text-left p-3 rounded-xl border transition-colors cursor-pointer ${
                              isSelected
                                ? 'bg-[#36D9F5]/15 border-[#36D9F5]/60 text-white'
                                : 'bg-[#06080D]/80 border-white/10 text-zinc-200 hover:border-white/25'
                            }`}
                          >
                            <div className="text-[11px] font-mono text-[#36D9F5] font-semibold mb-1">
                              {mod.code}
                            </div>
                            <div className="font-display text-sm font-bold text-white truncate">
                              {mod.name}
                            </div>
                            <div className="text-[11px] font-mono text-zinc-300 truncate mt-0.5">
                              {mod.topic}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Selected Module Details */}
                    <div className="p-4 rounded-xl bg-[#06080D] border border-white/12 space-y-2">
                      <div className="text-xs font-mono text-[#36D9F5] font-semibold">
                        {activeModule.code} · {activeModule.name}
                      </div>
                      <div className="text-xs font-mono text-amber-300">
                        Tools: {activeModule.tools}
                      </div>
                      <p className="text-xs text-zinc-100 leading-relaxed">
                        {activeModule.summary}
                      </p>
                    </div>
                  </div>
                )}

                {/* TAB 2: Go Learning Snippet */}
                {activeTab === 'code' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-200">
                      <span>kamui-lab/health_check.go</span>
                      <button
                        type="button"
                        onClick={handleCopyCode}
                        className="inline-flex items-center gap-1.5 text-xs text-[#36D9F5] hover:text-cyan-300 font-semibold cursor-pointer"
                      >
                        {copiedCode ? <Check size={12} /> : <Copy size={12} />}
                        <span>{copiedCode ? 'Copied' : 'Copy Code'}</span>
                      </button>
                    </div>
                    <pre className="p-4 rounded-xl bg-[#06080D] border border-white/12 font-mono text-xs text-zinc-100 overflow-x-auto leading-relaxed">
                      <code>{HERO_GO_CODE}</code>
                    </pre>
                  </div>
                )}

                {/* TAB 3: Interactive Student CLI Shell */}
                {activeTab === 'shell' && (
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {['help', 'whoami', 'coursework', 'projects', 'skills', 'goals', 'clear'].map((preset) => (
                        <button
                          key={preset}
                          type="button"
                          onClick={() => executeShellCommand(preset)}
                          className="px-2.5 py-1 text-[11px] font-mono text-zinc-100 hover:text-[#06080D] bg-[#06080D] hover:bg-[#36D9F5] border border-white/15 rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0"
                        >
                          $ {preset}
                        </button>
                      ))}
                    </div>

                    <div
                      ref={shellContainerRef}
                      className="h-52 p-3.5 rounded-xl bg-[#06080D] border border-white/12 font-mono text-xs overflow-y-auto space-y-2"
                    >
                      {shellHistory.map((item, i) => (
                        <div
                          key={i}
                          className={
                            item.type === 'cmd'
                              ? 'text-[#36D9F5] font-semibold'
                              : item.type === 'err'
                              ? 'text-rose-400'
                              : item.type === 'sys'
                              ? 'text-amber-300/90'
                              : 'text-zinc-100 whitespace-pre-wrap leading-relaxed'
                          }
                        >
                          {item.text}
                        </div>
                      ))}
                    </div>

                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        executeShellCommand(cmdInput);
                      }}
                      className="flex items-center gap-2 bg-[#06080D] border border-white/15 rounded-lg px-3 py-2"
                    >
                      <span className="font-mono text-xs text-[#36D9F5] font-semibold shrink-0">
                        harshit@cse-lab:~$
                      </span>
                      <input
                        type="text"
                        value={cmdInput}
                        onChange={(e) => setCmdInput(e.target.value)}
                        placeholder="Type help, coursework, projects..."
                        aria-label="Interactive student shell command input"
                        className="w-full bg-transparent text-xs font-mono text-white placeholder:text-zinc-500 focus:outline-none"
                      />
                      <button
                        type="submit"
                        aria-label="Run command"
                        className="text-zinc-300 hover:text-[#36D9F5] cursor-pointer"
                      >
                        <CornerDownLeft size={14} />
                      </button>
                    </form>
                  </div>
                )}
              </div>

              {/* Workbench Footer Metadata */}
              <div className="pt-4 mt-5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-200">
                <span>B.Tech CSE Student</span>
                <span className="text-[#36D9F5]">Open to Internships &amp; Junior Roles</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Student Snapshot Row Below Split */}
        <div className="mt-12 lg:mt-16 pt-10 border-t border-white/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {personal.metrics.map((metric, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#0B0F17]/80 backdrop-blur-sm border border-white/10 space-y-1.5">
              <div className="flex items-baseline gap-2.5">
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-white tabular-nums tracking-tight">
                  {metric.value}
                </span>
                <span className="font-mono text-xs text-[#36D9F5] font-semibold">
                  / {metric.unit}
                </span>
              </div>
              <div className="text-sm font-bold text-amber-300">
                {metric.label}
              </div>
              <p className="text-xs text-zinc-200 leading-relaxed">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
