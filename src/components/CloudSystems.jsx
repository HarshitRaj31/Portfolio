import { useState } from 'react';
import { ArrowUpRight, Network, Cpu, Server, HardDrive } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const LEARNING_LAYERS = [
  {
    id: 0,
    code: 'CONCEPT-01',
    name: 'Local Network & HTTP',
    subject: 'Computer Networks Coursework',
    tools: 'TCP/IP · HTTP Requests · Local Ports',
    focus: 'Request Routing',
    details:
      'Understanding how browser requests travel over a local network, resolve ports, and reach backend services running on a Linux machine.'
  },
  {
    id: 1,
    code: 'CONCEPT-02',
    name: 'Go Status Service',
    subject: 'Systems & Concurrency Practice',
    tools: 'Go (Golang) · Goroutines · HTTP Client',
    focus: 'Health Checks',
    details:
      'Learning Go by building a lightweight service that periodically checks whether connected local homelab nodes are online and responsive.'
  },
  {
    id: 2,
    code: 'CONCEPT-03',
    name: 'Docker Containers',
    subject: 'Containerization & App Packaging',
    tools: 'Docker CLI · Dockerfiles · Port Mapping',
    focus: 'App Isolation',
    details:
      'Practicing how to package web apps and APIs into isolated Docker containers so they can be started, stopped, and tested reliably.'
  },
  {
    id: 3,
    code: 'CONCEPT-04',
    name: 'Linux Host & CLI',
    subject: 'Operating Systems Coursework',
    tools: 'Linux · Bash · Processes · Systemd',
    focus: 'OS Internals',
    details:
      'Applying B.Tech Operating Systems concepts directly on Linux—monitoring CPU load, memory usage, running processes, and shell scripts.'
  }
];

export default function CloudSystems({ cloudSection }) {
  const [selectedLayer, setSelectedLayer] = useState(1);
  const [walkthroughStep, setWalkthroughStep] = useState('health'); // 'health' | 'deploy' | 'metrics'

  const currentLayer = LEARNING_LAYERS[selectedLayer];

  const walkthroughInfo = {
    health: {
      title: 'Step 1: Node Health Check (Go)',
      command: '$ go run ./cmd/kamui-check --node http://localhost:8080/health',
      explanation: 'A small Go program sends HTTP health probes to verify which local containers and nodes are active.'
    },
    deploy: {
      title: 'Step 2: Running a Container (Docker)',
      command: '$ docker run -d --name kamui-web -p 8080:3000 kamui-dashboard:latest',
      explanation: 'Docker packages the application and exposes it on a local port without conflicting with host dependencies.'
    },
    metrics: {
      title: 'Step 3: Inspecting Host Resources (Linux)',
      command: '$ uname -r && free -h && docker ps --format "table {{.Names}}\\t{{.Status}}"',
      explanation: 'Standard Linux CLI utilities report kernel version, available RAM, and running container states.'
    }
  }[walkthroughStep];

  return (
    <section id="systems" className="py-20 lg:py-28 border-b border-white/12">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono text-[#36D9F5] font-semibold mb-3">
            {cloudSection.kicker}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white tracking-tight">
            {cloudSection.headline}
          </h2>
          <p className="text-zinc-200 text-base mt-3 leading-relaxed">
            {cloudSection.intro}
          </p>
        </div>

        {/* 2-Column Interactive Student Lab Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Interactive Concept & Homelab Explorer */}
          <div className="lg:col-span-7 bg-[#0B0F17]/90 backdrop-blur-md border border-white/15 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Top Controls Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-6 border-b border-white/10">
                <div>
                  <span className="block font-mono text-xs text-[#36D9F5] font-medium">
                    Kamui Cloud · Student Learning Lab
                  </span>
                  <span className="font-display text-base font-bold text-white">
                    How I Practice Cloud &amp; Systems Concepts
                  </span>
                </div>

                {/* Interactive Walkthrough Switcher */}
                <div className="flex flex-wrap items-center gap-1 p-1 bg-[#06080D] border border-white/12 rounded-lg">
                  <button
                    type="button"
                    onClick={() => setWalkthroughStep('health')}
                    className={`px-2.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      walkthroughStep === 'health'
                        ? 'bg-[#36D9F5] text-[#06080D]'
                        : 'text-zinc-200 hover:text-white'
                    }`}
                  >
                    1. Health Check
                  </button>
                  <button
                    type="button"
                    onClick={() => setWalkthroughStep('deploy')}
                    className={`px-2.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      walkthroughStep === 'deploy'
                        ? 'bg-[#36D9F5] text-[#06080D]'
                        : 'text-zinc-200 hover:text-white'
                    }`}
                  >
                    2. Docker Run
                  </button>
                  <button
                    type="button"
                    onClick={() => setWalkthroughStep('metrics')}
                    className={`px-2.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      walkthroughStep === 'metrics'
                        ? 'bg-[#36D9F5] text-[#06080D]'
                        : 'text-zinc-200 hover:text-white'
                    }`}
                  >
                    3. Linux Stats
                  </button>
                </div>
              </div>

              {/* 4-Layer Learning Selector */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                {LEARNING_LAYERS.map((layer) => {
                  const active = selectedLayer === layer.id;
                  return (
                    <button
                      key={layer.id}
                      type="button"
                      onClick={() => setSelectedLayer(layer.id)}
                      className={`text-left p-4 rounded-xl border transition-colors cursor-pointer flex flex-col justify-between ${
                        active
                          ? 'bg-[#36D9F5]/15 border-[#36D9F5]/60 text-white'
                          : 'bg-[#06080D] border-white/10 text-zinc-200 hover:border-white/25'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-300 mb-3">
                        <span className={active ? 'text-[#36D9F5] font-bold' : 'text-[#36D9F5]'}>
                          {layer.code}
                        </span>
                        {layer.id === 0 && <Network size={15} className="text-[#36D9F5]" />}
                        {layer.id === 1 && <Cpu size={15} className="text-[#36D9F5]" />}
                        {layer.id === 2 && <Server size={15} className="text-[#36D9F5]" />}
                        {layer.id === 3 && <HardDrive size={15} className="text-[#36D9F5]" />}
                      </div>

                      <div>
                        <div className="font-display text-sm font-bold text-white mb-1">
                          {layer.name}
                        </div>
                        <div className="text-[11px] font-mono text-amber-300 pt-2 border-t border-white/10">
                          {layer.focus}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Selected Concept Deep Inspector */}
              <div className="p-5 rounded-xl bg-[#06080D] border border-white/12 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                  <span className="text-[#36D9F5] font-bold">
                    {currentLayer.code} · {currentLayer.name}
                  </span>
                  <span className="text-amber-300 font-medium">
                    {currentLayer.subject}
                  </span>
                </div>

                <div className="text-xs font-mono text-white">
                  <span className="text-[#36D9F5] font-semibold">Tools Practiced: </span>
                  {currentLayer.tools}
                </div>

                <p className="text-xs sm:text-sm text-zinc-100 leading-relaxed">
                  {currentLayer.details}
                </p>
              </div>
            </div>

            {/* Bottom CLI Walkthrough Box */}
            <div className="mt-6 pt-5 border-t border-white/10 space-y-2.5">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-200">
                <span className="text-amber-300 font-semibold">{walkthroughInfo.title}</span>
                <span>Homelab CLI Example</span>
              </div>
              <div className="px-3.5 py-2.5 rounded-lg bg-[#06080D] border border-white/12 font-mono text-xs text-[#36D9F5] overflow-x-auto">
                {walkthroughInfo.command}
              </div>
              <p className="text-xs text-zinc-200">
                {walkthroughInfo.explanation}
              </p>
            </div>
          </div>

          {/* Right Column: Kamui Cloud Student Project Spotlight */}
          <div className="lg:col-span-5 bg-[#0B0F17]/90 backdrop-blur-md border border-white/15 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-[#36D9F5] font-semibold mb-2">
                Self-Directed Student Project
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {cloudSection.kamuiHighlight.title}
              </h3>
              <p className="text-sm font-semibold text-amber-300 mt-1.5">
                {cloudSection.kamuiHighlight.subtitle}
              </p>
              <p className="text-sm text-zinc-100 leading-relaxed mt-4">
                {cloudSection.kamuiHighlight.description}
              </p>

              {/* 4 Learning Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/10">
                {cloudSection.kamuiHighlight.pillars.map((pillar) => (
                  <div
                    key={pillar.index}
                    className="p-4 rounded-xl bg-[#06080D] border border-white/10 space-y-1.5"
                  >
                    <span className="font-mono text-xs text-[#36D9F5] font-bold">
                      {pillar.index}. {pillar.title}
                    </span>
                    <p className="text-xs text-zinc-200 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between gap-4">
              <span className="text-xs font-mono text-zinc-200">
                Open-Source Student Repo
              </span>

              <a
                href={cloudSection.kamuiHighlight.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-[#06080D] bg-[#36D9F5] hover:bg-cyan-300 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <GithubIcon size={14} />
                <span>View on GitHub</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
