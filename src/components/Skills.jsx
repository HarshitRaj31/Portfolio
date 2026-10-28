import { useState } from 'react';

export default function Skills({ skillsGrouped }) {
  const [activeDomain, setActiveDomain] = useState('all');

  const domainTabs = [
    { id: 'all', label: 'All Skills & Coursework' },
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
    <section id="skills" className="py-20 lg:py-28 border-b border-white/12">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Header + Interactive Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <div className="text-xs font-mono text-[#36D9F5] font-semibold mb-3">
              03. Technical Toolkit &amp; CS Coursework
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white tracking-tight">
              What I Build With &amp; What I&apos;m Studying.
            </h2>
            <p className="text-zinc-200 text-base mt-3 max-w-2xl">
              A transparent overview of the web technologies I use in my projects, the cloud tools I am actively exploring, and my core B.Tech Computer Science subjects.
            </p>
          </div>

          {/* Interactive Domain Filter */}
          <div
            role="tablist"
            aria-label="Filter skills and coursework by domain"
            className="flex flex-wrap items-center gap-1 p-1 bg-[#0B0F17]/90 backdrop-blur-md border border-white/15 rounded-lg w-fit shrink-0"
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
                      ? 'bg-[#36D9F5] text-[#06080D]'
                      : 'text-zinc-200 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Capabilities Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {visibleGroups.map((group) => (
            <div
              key={group.id}
              className="bg-[#0B0F17]/90 backdrop-blur-md border border-white/15 rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 pb-4 mb-6 border-b border-white/10">
                  <div>
                    <span className="font-mono text-xs text-[#36D9F5] font-bold">
                      {group.index}. {group.category}
                    </span>
                    <p className="text-xs text-zinc-200 mt-1">
                      {group.desc}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-amber-300 font-semibold tabular-nums shrink-0">
                    {group.technologies.length} Areas
                  </span>
                </div>

                <div className="divide-y divide-white/10">
                  {group.technologies.map((tech) => (
                    <div key={tech.name} className="py-3.5 first:pt-0 last:pb-0">
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                        <h3 className="font-display text-base font-bold text-white">
                          {tech.name}
                        </h3>
                        <span className="font-mono text-xs text-[#36D9F5] font-semibold">
                          {tech.level}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-200 leading-relaxed">
                        {tech.context}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
