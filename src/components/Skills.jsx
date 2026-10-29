import { useState } from 'react';

function TechIcon({ id, className = 'w-7 h-7' }) {
  switch (id) {
    case 'c':
      return (
        <svg viewBox="0 0 40 40" className={className}>
          <polygon points="20,3 35,11.5 35,28.5 20,37 5,28.5 5,11.5" fill="#2563EB" />
          <polygon points="20,3 35,11.5 20,20 5,11.5" fill="#60A5FA" opacity="0.45" />
          <text x="20" y="25.5" textAnchor="middle" fill="#FFFFFF" fontSize="17" fontWeight="800" fontFamily="sans-serif">
            C
          </text>
        </svg>
      );
    case 'cpp':
      return (
        <svg viewBox="0 0 40 40" className={className}>
          <polygon points="20,3 35,11.5 35,28.5 20,37 5,28.5 5,11.5" fill="#1D4ED8" />
          <polygon points="20,3 35,11.5 20,20 5,11.5" fill="#3B82F6" opacity="0.5" />
          <text x="19.5" y="24.5" textAnchor="middle" fill="#FFFFFF" fontSize="12.5" fontWeight="800" fontFamily="sans-serif">
            C++
          </text>
        </svg>
      );
    case 'java':
      return (
        <svg viewBox="0 0 40 40" className={className}>
          <path d="M18 7 C15 10, 21 12, 18 15 M23 8 C20 11, 25 13, 22 16" stroke="#F97316" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M11 19 H26 C26 24 23 26 18.5 26 C14 26 11 24 11 19 Z" fill="none" stroke="#38BDF8" strokeWidth="2" />
          <path d="M26 20 H28.5 C29.8 20 29.8 23.5 28.5 23.5 H25.5" fill="none" stroke="#38BDF8" strokeWidth="1.8" />
          <text x="20" y="34.5" textAnchor="middle" fill="#FB923C" fontSize="9.5" fontWeight="700" fontFamily="serif">
            Java
          </text>
        </svg>
      );
    case 'python':
      return (
        <svg viewBox="0 0 40 40" className={className}>
          <path d="M19.5 6 C13 6 13.5 9 13.5 11.5 V14 H20 V15.5 H11 C7.5 15.5 6.5 18 6.5 21.5 C6.5 25 7.5 27.5 11 27.5 H13.5 V24 C13.5 21 16 19.5 19.5 19.5 H25.5 C27.8 19.5 29.5 18 29.5 15.5 V11.5 C29.5 8 26 6 19.5 6 Z" fill="#38BDF8" />
          <path d="M20.5 34 C27 34 26.5 31 26.5 28.5 V26 H20 V24.5 H29 C32.5 24.5 33.5 22 33.5 18.5 C33.5 15 32.5 12.5 29 12.5 H26.5 V16 C26.5 19 24 20.5 20.5 20.5 H14.5 C12.2 20.5 10.5 22 10.5 24.5 V28.5 C10.5 32 14 34 20.5 34 Z" fill="#FACC15" opacity="0.92" />
          <circle cx="16.5" cy="9.5" r="1.3" fill="#FFF" />
          <circle cx="23.5" cy="30.5" r="1.3" fill="#1E293B" />
        </svg>
      );
    case 'js':
      return (
        <svg viewBox="0 0 40 40" className={className}>
          <rect x="6" y="6" width="28" height="28" rx="4" fill="#FACC15" />
          <text x="20.5" y="28.5" textAnchor="middle" fill="#090D0A" fontSize="15.5" fontWeight="900" fontFamily="sans-serif">
            JS
          </text>
        </svg>
      );
    case 'go':
      return (
        <svg viewBox="0 0 44 40" className={className}>
          <line x1="3" y1="17" x2="10" y2="17" stroke="#38BDF8" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="1" y1="21" x2="9" y2="21" stroke="#38BDF8" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="4" y1="25" x2="10" y2="25" stroke="#38BDF8" strokeWidth="2.2" strokeLinecap="round" />
          <text x="26" y="25.5" textAnchor="middle" fill="#38BDF8" fontSize="15.5" fontWeight="900" fontStyle="italic" fontFamily="sans-serif">
            GO
          </text>
        </svg>
      );
    case 'react':
      return (
        <svg viewBox="0 0 40 40" className={className}>
          <circle cx="20" cy="20" r="3" fill="#38BDF8" />
          <ellipse cx="20" cy="20" rx="14" ry="5.5" fill="none" stroke="#38BDF8" strokeWidth="1.8" />
          <ellipse cx="20" cy="20" rx="14" ry="5.5" fill="none" stroke="#38BDF8" strokeWidth="1.8" transform="rotate(60 20 20)" />
          <ellipse cx="20" cy="20" rx="14" ry="5.5" fill="none" stroke="#38BDF8" strokeWidth="1.8" transform="rotate(120 20 20)" />
        </svg>
      );
    case 'vite':
      return (
        <svg viewBox="0 0 40 40" className={className}>
          <polygon points="8,9 20,34 32,9 21,13" fill="#8B5CF6" />
          <polygon points="21,6 15,20 21,19 18,30 28,15 22,16" fill="#FACC15" />
        </svg>
      );
    case 'tailwind':
      return (
        <svg viewBox="0 0 40 40" className={className}>
          <path d="M11 17.5 C12.5 13 15.5 11.5 19.5 12.5 C23 13.5 24 16 26.5 16.5 C28.5 17 30.5 16 32 14 C30.5 18.5 27.5 20 23.5 19 C20 18 19 15.5 16.5 15 C14.5 14.5 12.5 15.5 11 17.5 Z" fill="#38BDF8" />
          <path d="M7 25.5 C8.5 21 11.5 19.5 15.5 20.5 C19 21.5 20 24 22.5 24.5 C24.5 25 26.5 24 28 22 C26.5 26.5 23.5 28 19.5 27 C16 26 15 23.5 12.5 23 C10.5 22.5 8.5 23.5 7 25.5 Z" fill="#38BDF8" />
        </svg>
      );
    case 'html':
      return (
        <svg viewBox="0 0 40 40" className={className}>
          <polygon points="8,6 32,6 29.5,31 20,35 10.5,31" fill="#EA580C" />
          <polygon points="20,8 29.5,8 27.5,29.5 20,32.5" fill="#F97316" />
          <text x="20" y="25.5" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="900" fontFamily="sans-serif">
            5
          </text>
        </svg>
      );
    case 'css':
      return (
        <svg viewBox="0 0 40 40" className={className}>
          <polygon points="8,6 32,6 29.5,31 20,35 10.5,31" fill="#0284C7" />
          <polygon points="20,8 29.5,8 27.5,29.5 20,32.5" fill="#38BDF8" opacity="0.4" />
          <text x="20" y="25.5" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="900" fontFamily="sans-serif">
            3
          </text>
        </svg>
      );
    case 'node':
      return (
        <svg viewBox="0 0 40 40" className={className}>
          <polygon points="20,4 34,12 34,28 20,36 6,28 6,12" fill="none" stroke="#4ADE80" strokeWidth="2.4" />
          <text x="20" y="23.5" textAnchor="middle" fill="#4ADE80" fontSize="10.5" fontWeight="800" fontFamily="monospace">
            node
          </text>
        </svg>
      );
    case 'express':
      return (
        <svg viewBox="0 0 40 40" className={className}>
          <text x="20" y="25.5" textAnchor="middle" fill="#F4F4F5" fontSize="18" fontWeight="500" fontFamily="sans-serif">
            ex
          </text>
        </svg>
      );
    case 'mongodb':
      return (
        <svg viewBox="0 0 40 40" className={className}>
          <path d="M20 5 C26 12 28 19 20 32 C12 19 14 12 20 5 Z" fill="#22C55E" />
          <path d="M20 5 C20 15 20 24 20 35" stroke="#86EFAC" strokeWidth="1.5" />
        </svg>
      );
    case 'mysql':
      return (
        <svg viewBox="0 0 44 40" className={className}>
          <path d="M12 20 C14 11 23 9 29 14 C25 14 22 17 21 21" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
          <text x="22" y="31" textAnchor="middle" fill="#FB923C" fontSize="9.5" fontWeight="700" fontFamily="sans-serif">
            MySQL
          </text>
        </svg>
      );
    case 'git':
      return (
        <svg viewBox="0 0 40 40" className={className}>
          <rect x="10" y="10" width="20" height="20" rx="3" transform="rotate(45 20 20)" fill="#F97316" />
          <line x1="15" y1="15" x2="24" y2="24" stroke="#FFF" strokeWidth="2" />
          <line x1="20" y1="13" x2="20" y2="25" stroke="#FFF" strokeWidth="2" />
          <circle cx="20" cy="13" r="2.2" fill="#FFF" />
          <circle cx="20" cy="25" r="2.2" fill="#FFF" />
          <circle cx="25" cy="20" r="2.2" fill="#FFF" />
        </svg>
      );
    case 'docker':
      return (
        <svg viewBox="0 0 40 40" className={className}>
          <rect x="10" y="14" width="4.5" height="4" fill="#38BDF8" />
          <rect x="15.5" y="14" width="4.5" height="4" fill="#38BDF8" />
          <rect x="21" y="14" width="4.5" height="4" fill="#38BDF8" />
          <rect x="15.5" y="9" width="4.5" height="4" fill="#38BDF8" />
          <rect x="21" y="9" width="4.5" height="4" fill="#38BDF8" />
          <path d="M6 20 H30 C32 18 35 18 36 19.5 C34.5 22 33 22.5 31 22.5 C30 28 24 31 17 31 C10 31 6.5 27 6 20 Z" fill="#0284C7" />
        </svg>
      );
    case 'linux':
      return (
        <svg viewBox="0 0 40 40" className={className}>
          <ellipse cx="20" cy="22" rx="8.5" ry="11" fill="#1E293B" stroke="#E2E8F0" strokeWidth="1.5" />
          <ellipse cx="20" cy="24" rx="5.5" ry="7.5" fill="#F8FAFC" />
          <circle cx="17.5" cy="15" r="1.3" fill="#FFF" />
          <circle cx="22.5" cy="15" r="1.3" fill="#FFF" />
          <polygon points="17.5,18 22.5,18 20,21" fill="#FACC15" />
          <ellipse cx="15" cy="32.5" rx="3.5" ry="2" fill="#FACC15" />
          <ellipse cx="25" cy="32.5" rx="3.5" ry="2" fill="#FACC15" />
        </svg>
      );
    case 'vscode':
      return (
        <svg viewBox="0 0 40 40" className={className}>
          <path d="M27 7 L33 10 V30 L27 33 L14 21 L27 7 Z" fill="#0284C7" />
          <path d="M9 14 L14 11.5 L27 25.5 L27 32.5 L9 14 Z" fill="#38BDF8" />
          <path d="M9 26 L14 28.5 L27 14.5 L27 7.5 L9 26 Z" fill="#0EA5E9" />
        </svg>
      );
    case 'github':
      return (
        <svg viewBox="0 0 40 40" className={className}>
          <path
            fill="#F8FAFC"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 6C12.265 6 6 12.265 6 20c0 6.188 4.012 11.434 9.575 13.286.7.128.956-.304.956-.674 0-.333-.012-1.215-.019-2.385-3.895.846-4.717-1.877-4.717-1.877-.637-1.618-1.555-2.049-1.555-2.049-1.27-.869.096-.851.096-.851 1.405.099 2.144 1.442 2.144 1.442 1.248 2.139 3.274 1.521 4.073 1.163.127-.904.488-1.521.888-1.871-3.11-.354-6.379-1.555-6.379-6.92 0-1.529.546-2.778 1.442-3.758-.145-.353-.625-1.777.137-3.705 0 0 1.176-.376 3.852 1.435A13.43 13.43 0 0120 12.78c1.19.005 2.388.161 3.508.472 2.674-1.811 3.848-1.435 3.848-1.435.764 1.928.284 3.352.14 3.705.898.98 1.44 2.229 1.44 3.758 0 5.379-3.274 6.562-6.394 6.909.503.433.951 1.288.951 2.596 0 1.874-.017 3.385-.017 3.845 0 .373.252.809.963.672C30.002 31.43 34 26.185 34 20c0-7.735-6.265-14-14-14z"
          />
        </svg>
      );
    default:
      return null;
  }
}

const NAME_TO_ICON_ID = {
  C: 'c',
  'C++': 'cpp',
  Java: 'java',
  Python: 'python',
  'JavaScript (ES6+)': 'js',
  'Go (Golang)': 'go',
  React: 'react',
  Vite: 'vite',
  'Tailwind CSS': 'tailwind',
  HTML5: 'html',
  CSS3: 'css',
  'Node.js': 'node',
  'Express.js': 'express',
  MongoDB: 'mongodb',
  MySQL: 'mysql',
  Linux: 'linux',
  Docker: 'docker',
  Git: 'git',
  GitHub: 'github',
};

const TECH_COLUMNS = [
  {
    title: 'LANGUAGES',
    items: [
      { id: 'c', name: 'C', detail: 'Systems programming, pointers & memory basics' },
      { id: 'cpp', name: 'C++', detail: 'Data Structures & Algorithms (DSA) & problem solving' },
      { id: 'java', name: 'Java', detail: 'Object-Oriented Programming & core CS coursework' },
      { id: 'python', name: 'Python', detail: 'Scripting, backend tooling & AI/ML integrations' },
      { id: 'js', name: 'JavaScript', detail: 'ES6+, asynchronous web apps & full-stack logic' },
      { id: 'go', name: 'Go', detail: 'Concurrent backend microservices & Kamui Cloud' },
    ],
  },
  {
    title: 'FRONTEND',
    items: [
      { id: 'react', name: 'React', detail: 'Component architecture, hooks & interactive UIs' },
      { id: 'vite', name: 'Vite', detail: 'Modern fast build tooling for React SPAs' },
      { id: 'tailwind', name: 'Tailwind', detail: 'Utility-first styling & custom dark interfaces' },
      { id: 'html', name: 'HTML5', detail: 'Semantic, accessible document structure' },
      { id: 'css', name: 'CSS3', detail: 'Responsive Grid, Flexbox & animations' },
    ],
  },
  {
    title: 'BACKEND',
    items: [
      { id: 'node', name: 'Node.js', detail: 'Server-side JavaScript runtime & API services' },
      { id: 'express', name: 'Express', detail: 'RESTful routing, middleware & auth controllers' },
      { id: 'mongodb', name: 'MongoDB', detail: 'Document schemas & NoSQL queries (used in CityLink)' },
      { id: 'mysql', name: 'MySQL', detail: 'Relational schemas, SQL joins & DBMS coursework' },
    ],
  },
  {
    title: 'TOOLS',
    items: [
      { id: 'git', name: 'Git', detail: 'Distributed version control & branching workflows' },
      { id: 'docker', name: 'Docker', detail: 'Containerization & isolated service deployment' },
      { id: 'linux', name: 'Linux', detail: 'CLI administration, Bash & self-hosted servers' },
      { id: 'vscode', name: 'VS Code', detail: 'Primary code editor & debugging workflow' },
      { id: 'github', name: 'GitHub', detail: 'Open-source repositories, PRs & collaboration' },
    ],
  },
];

export default function Skills({ personal, skillsGrouped }) {
  const [selectedTech, setSelectedTech] = useState(null);
  const [activeDomain, setActiveDomain] = useState('all');

  const domainTabs = [
    { id: 'all', label: 'All Skills & Coursework' },
    { id: 'languages', label: 'Languages' },
    { id: 'frontend', label: 'Frontend Web' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'systems', label: 'Cloud & Linux' },
    { id: 'databases', label: 'Databases & CS Core' },
  ];

  const visibleGroups =
    activeDomain === 'all'
      ? skillsGrouped
      : skillsGrouped.filter((g) => g.id === activeDomain);

  return (
    <section id="skills" className="py-12 lg:py-16 border-b border-[#162918]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* PART 1: TECH STACK (EACH LANGUAGE & TOOL IN ITS OWN INDIVIDUAL GRID CELL) + CURRENTLY EXPLORING */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Left Column: TECH STACK */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-[#162918]">
              <div className="flex items-center gap-2 font-mono">
                <span className="text-[#84CC16] font-bold text-sm sm:text-base">
                  03.
                </span>
                <span className="font-mono text-sm sm:text-base font-bold tracking-wider text-[#9EF01A]">
                  TECH STACK
                </span>
              </div>
              <span className="font-mono text-[11px] sm:text-xs tracking-widest text-zinc-400">
                THE TOOLS I WORK WITH.
              </span>
            </div>

            <div className="flex-1 rounded-xl bg-[#070B08]/85 backdrop-blur-sm border border-[#1B321D] overflow-hidden flex flex-col justify-between">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#182B1A] h-full">
                {TECH_COLUMNS.map((col) => (
                  <div key={col.title} className="p-4 flex flex-col">
                    <h3 className="font-mono text-xs font-bold tracking-wider text-zinc-200 mb-3.5">
                      {col.title}
                    </h3>

                    {/* Individual Grid Box for Every Single Language / Tool */}
                    <div className="grid grid-cols-2 gap-2 my-auto">
                      {col.items.map((item) => {
                        const isActive = selectedTech?.id === item.id;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setSelectedTech(item)}
                            title={`${item.name} — ${item.detail}`}
                            className={`p-2 rounded-lg border flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${
                              isActive
                                ? 'bg-[#122614] border-[#84CC16] ring-1 ring-[#84CC16]/50'
                                : 'bg-[#080E09] border-[#1E3520] hover:border-[#84CC16] hover:bg-[#0E1A10]'
                            }`}
                          >
                            <TechIcon id={item.id} className="w-7 h-7" />
                            <span className="font-mono text-[11px] font-semibold text-zinc-200 whitespace-nowrap truncate max-w-full">
                              {item.name}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {selectedTech && (
                <div className="px-4 py-2.5 bg-[#050806] border-t border-[#182B1A] flex items-center justify-between gap-3 font-mono text-xs">
                  <div>
                    <span className="text-[#84CC16] font-bold">{selectedTech.name}: </span>
                    <span className="text-zinc-200">{selectedTech.detail}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedTech(null)}
                    className="text-zinc-400 hover:text-white text-[11px] cursor-pointer"
                  >
                    [close]
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: CURRENTLY EXPLORING */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-[#162918]">
              <div className="flex items-center gap-2 font-mono">
                <span className="text-[#84CC16] font-bold text-sm sm:text-base">
                  ✦
                </span>
                <span className="font-mono text-sm sm:text-base font-bold tracking-wider text-[#9EF01A]">
                  CURRENTLY EXPLORING
                </span>
              </div>
            </div>

            <div className="flex-1 rounded-xl bg-[#050806]/90 backdrop-blur-sm border border-[#1B321D] p-5 relative overflow-hidden flex items-center justify-between gap-2">
              <ul className="space-y-2.5 font-mono text-xs text-zinc-200 z-10">
                {personal.currentlyExploring.map((topic) => (
                  <li key={topic} className="flex items-center gap-2">
                    <span className="text-[#84CC16] font-bold shrink-0">→</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>

              <div className="shrink-0 w-24 sm:w-28 h-36 relative flex items-center justify-end select-none bg-[#050806] rounded-lg overflow-hidden">
                <img
                  src="/assets/crops/exploring_moon.png"
                  alt="Moonlit mountain peak — One step at a time"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain object-right"
                />
              </div>
            </div>
          </div>
        </div>

        {/* PART 2: TECHNICAL TOOLKIT & CS COURSEWORK (EACH LANGUAGE & SKILL IN ITS OWN SEPARATE GRID CARD) */}
        <div className="pt-4">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-xs font-mono text-[#84CC16] font-semibold mb-2.5">
                03. Technical Toolkit &amp; CS Coursework
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-white tracking-tight">
                What I Build With &amp; What I&apos;m Studying.
              </h2>
              <p className="text-zinc-200 text-sm sm:text-base font-sans mt-3 max-w-2xl leading-relaxed">
                Every programming language, web framework, cloud tool, and B.Tech Computer Science subject organized into its own dedicated card.
              </p>
            </div>

            {/* Interactive Domain Filter */}
            <div
              role="tablist"
              aria-label="Filter skills and coursework by domain"
              className="flex flex-wrap items-center gap-1 p-1 bg-[#070B08]/90 backdrop-blur-sm border border-[#1E3520] rounded-lg w-fit shrink-0 font-mono"
            >
              {domainTabs.map((tab) => {
                const active = activeDomain === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveDomain(tab.id)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      active
                        ? 'bg-[#84CC16] text-[#040705]'
                        : 'text-zinc-300 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Domain Sections with Separate Grid Cards for Each Language & Technology */}
          <div className="space-y-8">
            {visibleGroups.map((group) => (
              <div
                key={group.id}
                className="bg-[#070B08]/85 backdrop-blur-sm border border-[#1C331E] rounded-2xl p-6 sm:p-7"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-5 border-b border-[#182C1A]">
                  <div>
                    <span className="font-mono text-xs sm:text-sm text-[#84CC16] font-bold">
                      {group.index}. {group.category}
                    </span>
                    <p className="text-xs text-zinc-300 mt-1 font-sans">
                      {group.desc}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-amber-300 font-semibold tabular-nums shrink-0">
                    {group.technologies.length} Items
                  </span>
                </div>

                {/* Individual Grid Card for Every Single Language / Technology */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.technologies.map((tech) => {
                    const iconId = NAME_TO_ICON_ID[tech.name];
                    return (
                      <div
                        key={tech.name}
                        className="p-4 rounded-xl bg-[#080E09] border border-[#1E3520] hover:border-[#84CC16]/70 transition-colors flex flex-col justify-between gap-2.5"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2.5 min-w-0">
                            {iconId && (
                              <div className="shrink-0">
                                <TechIcon id={iconId} className="w-6 h-6" />
                              </div>
                            )}
                            <h3 className="font-display text-base font-bold text-white truncate">
                              {tech.name}
                            </h3>
                          </div>
                          <span className="font-mono text-[11px] text-[#84CC16] font-semibold whitespace-nowrap shrink-0">
                            {tech.level}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-200 leading-relaxed font-sans">
                          {tech.context}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
