import { FileText, ArrowUpRight, GraduationCap, Code2, Terminal } from 'lucide-react';

export default function About({ personal, onOpenDossier }) {
  return (
    <section id="about" className="py-20 lg:py-28 border-b border-white/12">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono text-[#36D9F5] font-semibold mb-3">
            05. About Me &amp; How I Learn
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white tracking-tight">
            Curious Student. Hands-On Builder.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Student Profile & Academic Snapshot Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full bg-[#0B0F17]/90 backdrop-blur-md border border-white/15 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-6">
                {/* Identity Header */}
                <div className="flex items-center gap-4 pb-6 border-b border-white/10">
                  <div className="w-16 h-16 rounded-2xl bg-[#36D9F5]/15 border border-[#36D9F5]/50 flex items-center justify-center shrink-0">
                    <span className="font-display text-2xl font-extrabold text-[#36D9F5] tracking-tight">
                      HR
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">
                      {personal.name}
                    </h3>
                    <p className="text-xs font-mono text-[#36D9F5] font-semibold mt-0.5">
                      B.Tech CSE Undergraduate (2023–2027)
                    </p>
                    <p className="text-xs text-zinc-200 mt-1">
                      Web Developer &amp; Aspiring Cloud Engineer · {personal.country}
                    </p>
                  </div>
                </div>

                {/* Student Academic & Learning Snapshot */}
                <div className="space-y-3">
                  <div className="text-xs font-mono text-amber-300 font-semibold">
                    Student Profile &amp; Academic Snapshot
                  </div>
                  <div className="divide-y divide-white/10 bg-[#06080D] border border-white/12 rounded-xl px-4">
                    {personal.studentSnapshot.map((spec, idx) => (
                      <div key={idx} className="py-3 flex flex-col gap-1 text-xs">
                        <span className="font-mono text-[#36D9F5] font-medium">{spec.label}</span>
                        <span className="font-mono text-white font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Core Student Pillars */}
                <div className="grid grid-cols-3 gap-2.5 pt-2">
                  <div className="p-3 rounded-xl bg-[#06080D] border border-white/10">
                    <GraduationCap size={15} className="text-[#36D9F5] mb-1.5" />
                    <div className="font-display text-xs font-bold text-white">
                      B.Tech CSE
                    </div>
                    <div className="text-[11px] text-zinc-200 mt-0.5">
                      CS Fundamentals
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#06080D] border border-white/10">
                    <Code2 size={15} className="text-[#36D9F5] mb-1.5" />
                    <div className="font-display text-xs font-bold text-white">
                      Web Apps
                    </div>
                    <div className="text-[11px] text-zinc-200 mt-0.5">
                      React &amp; Node
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#06080D] border border-white/10">
                    <Terminal size={15} className="text-[#36D9F5] mb-1.5" />
                    <div className="font-display text-xs font-bold text-white">
                      Cloud Lab
                    </div>
                    <div className="text-[11px] text-zinc-200 mt-0.5">
                      Go &amp; Docker
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <button
                  type="button"
                  onClick={onOpenDossier}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold text-[#06080D] bg-[#36D9F5] hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer"
                >
                  <FileText size={15} />
                  <span>View Printable Student Resume / CV</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Student Narrative & 3 Learning Principles */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B0F17]/85 backdrop-blur-md border border-white/12 space-y-4 text-base text-zinc-100 leading-relaxed">
              <p>
                Hi! I&apos;m <strong className="text-[#36D9F5] font-bold">{personal.name}</strong>, a Computer Science Engineering undergraduate student who loves learning how software works by building projects from scratch.
              </p>
              <p>
                My interest in programming started with frontend web development—creating interactive interfaces with <strong className="text-white font-semibold">React</strong>, <strong className="text-white font-semibold">JavaScript</strong>, and modern CSS. As I progressed through my B.Tech coursework in <strong className="text-amber-300 font-semibold">Operating Systems</strong>, <strong className="text-amber-300 font-semibold">Computer Networks</strong>, and <strong className="text-amber-300 font-semibold">DBMS</strong>, I became fascinated by what happens behind the browser.
              </p>
              <p>
                That curiosity led me to build full-stack web apps with <strong className="text-white font-semibold">Node.js</strong> and <strong className="text-white font-semibold">Express</strong> (like <strong className="text-[#36D9F5] font-semibold">MoneyPay</strong> and <strong className="text-[#36D9F5] font-semibold">ToxicGuard</strong>) and to start exploring <strong className="text-white font-semibold">Linux</strong>, <strong className="text-white font-semibold">Docker</strong>, and <strong className="text-white font-semibold">Go</strong> through my self-hosted learning project, <strong className="text-[#36D9F5] font-semibold">Kamui Cloud</strong>. I am currently looking for internship opportunities where I can contribute, learn from experienced engineers, and grow.
              </p>
            </div>

            {/* 3 Core Principles */}
            <div className="space-y-4 pt-2">
              <div className="text-xs font-mono text-[#36D9F5] font-semibold">
                My Approach as a Student Builder
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {personal.principles.map((p) => (
                  <div
                    key={p.number}
                    className="p-5 rounded-xl bg-[#0B0F17]/90 backdrop-blur-md border border-white/15 flex flex-col justify-between space-y-3"
                  >
                    <span className="font-mono text-xs text-amber-300 font-bold">
                      {p.number}
                    </span>
                    <div>
                      <h3 className="font-display text-base font-bold text-white mb-1.5">
                        {p.title}
                      </h3>
                      <p className="text-xs text-zinc-200 leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#36D9F5] hover:text-cyan-300 transition-colors"
              >
                <span>Reach out for internships, projects, or collaborations</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
