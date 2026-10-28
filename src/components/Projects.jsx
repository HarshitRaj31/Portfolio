import { useState, useEffect } from 'react';
import { ArrowUpRight, X, Copy, Check, LayoutGrid, Rows, Server } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function Projects({ projects }) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [layoutMode, setLayoutMode] = useState('editorial'); // 'editorial' | 'bento'
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [modalTab, setModalTab] = useState('overview'); // 'overview' | 'architecture' | 'code'
  const [copiedSnippet, setCopiedSnippet] = useState(false);
  const [failedImages, setFailedImages] = useState({});

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && activeModalProject) {
        setActiveModalProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalProject]);

  const filterOptions = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'cloud', label: 'Cloud & Systems', count: projects.filter((p) => p.filterCategory === 'cloud').length },
    { id: 'ai', label: 'AI & Web', count: projects.filter((p) => p.filterCategory === 'ai').length },
    { id: 'web', label: 'Full-Stack & UI', count: projects.filter((p) => p.filterCategory === 'web').length },
  ];

  const filteredProjects =
    selectedFilter === 'all'
      ? projects
      : projects.filter((p) => p.filterCategory === selectedFilter);

  const openProjectModal = (project, initialTab = 'overview') => {
    setModalTab(initialTab);
    setActiveModalProject(project);
  };

  const handleCopyModalCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section id="work" className="py-20 lg:py-28 border-b border-white/12">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Section Header + Interactive Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <div className="text-xs font-mono text-[#36D9F5] font-semibold mb-3">
              01. Selected Student Projects
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white tracking-tight">
              Hands-On Builds &amp; Learning Projects.
            </h2>
            <p className="text-zinc-200 text-base mt-3 max-w-2xl">
              Personal and academic software projects built to practice full-stack web development, REST APIs, AI text analysis, and self-hosted Linux/Docker infrastructure.
            </p>
          </div>

          {/* Interactive Filter Bar & View Switcher */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <div
              role="tablist"
              aria-label="Filter projects by category"
              className="flex flex-wrap items-center gap-1 p-1 bg-[#0B0F17]/90 backdrop-blur-md border border-white/15 rounded-lg"
            >
              {filterOptions.map((tab) => {
                const active = selectedFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSelectedFilter(tab.id)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      active
                        ? 'bg-[#36D9F5] text-[#06080D]'
                        : 'text-zinc-200 hover:text-white'
                    }`}
                  >
                    {tab.label} ({tab.count})
                  </button>
                );
              })}
            </div>

            {/* Layout Mode Switcher */}
            <div className="hidden sm:flex items-center gap-1 p-1 bg-[#0B0F17]/90 backdrop-blur-md border border-white/15 rounded-lg">
              <button
                type="button"
                onClick={() => setLayoutMode('editorial')}
                title="Detailed split view"
                className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  layoutMode === 'editorial'
                    ? 'bg-white/15 text-white'
                    : 'text-zinc-200 hover:text-white'
                }`}
              >
                <Rows size={13} />
                <span>Detailed</span>
              </button>
              <button
                type="button"
                onClick={() => setLayoutMode('bento')}
                title="Bento grid view"
                className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  layoutMode === 'bento'
                    ? 'bg-white/15 text-white'
                    : 'text-zinc-200 hover:text-white'
                }`}
              >
                <LayoutGrid size={13} />
                <span>Grid</span>
              </button>
            </div>
          </div>
        </div>

        {/* VIEW MODE 1: Detailed Split Showcase */}
        {layoutMode === 'editorial' ? (
          <div className="space-y-16 lg:space-y-20">
            {filteredProjects.map((project, index) => {
              const isReversed = index % 2 !== 0;
              const imgFailed = failedImages[project.id];

              return (
                <article
                  key={project.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch p-6 sm:p-8 rounded-2xl bg-[#0B0F17]/85 backdrop-blur-md border border-white/12"
                >
                  {/* Visual Media Column */}
                  <div
                    className={`lg:col-span-7 flex flex-col ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div
                      onClick={() => openProjectModal(project, 'overview')}
                      onKeyDown={(e) => e.key === 'Enter' && openProjectModal(project, 'overview')}
                      role="button"
                      tabIndex={0}
                      className="group relative h-full bg-[#06080D] border border-white/15 hover:border-[#36D9F5]/60 rounded-xl overflow-hidden flex flex-col justify-between transition-colors cursor-pointer"
                    >
                      {/* Browser Frame Topbar */}
                      <div className="px-4 py-3 bg-[#06080D] border-b border-white/10 flex items-center justify-between text-xs font-mono text-zinc-200">
                        <span>
                          {project.num} · {project.title.toLowerCase().replace(/\s+/g, '-')}.project
                        </span>
                        <span className="text-[#36D9F5] font-semibold group-hover:underline">
                          View Project Breakdown ↗
                        </span>
                      </div>

                      {/* Image or Resilient Fallback Container */}
                      <div className="relative aspect-[16/10] w-full bg-[#06080D] overflow-hidden">
                        {!imgFailed ? (
                          <img
                            src={project.image}
                            alt={`${project.title} — ${project.headline}`}
                            referrerPolicy="no-referrer"
                            onError={() =>
                              setFailedImages((prev) => ({ ...prev, [project.id]: true }))
                            }
                            className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#0B0F17] to-[#06080D]">
                            <Server size={32} className="text-[#36D9F5] mb-3" />
                            <span className="font-display text-lg font-bold text-white">
                              {project.title}
                            </span>
                            <span className="font-mono text-xs text-zinc-200 mt-1">
                              {project.headline}
                            </span>
                          </div>
                        )}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06080D]/60 via-transparent to-transparent" />
                      </div>

                      {/* Bottom Project Overview Strip */}
                      <div className="px-5 py-3.5 bg-[#06080D] border-t border-white/10 grid grid-cols-3 gap-4">
                        {project.metrics.map((m, i) => (
                          <div key={i}>
                            <span className="block text-[11px] font-mono text-zinc-300">
                              {m.label}
                            </span>
                            <span className="font-mono text-xs font-bold text-amber-300 tabular-nums">
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Narrative & Learning Details Column */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-between py-1 ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="space-y-4">
                      {/* Clean Unboxed Metadata Line */}
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-200">
                        <span className="text-[#36D9F5] font-bold">{project.num}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-amber-300 font-medium">{project.category}</span>
                        <span aria-hidden="true">·</span>
                        <span className="tabular-nums text-white">{project.year}</span>
                      </div>

                      <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        {project.title}
                      </h3>

                      <p className="text-sm font-semibold text-[#36D9F5] leading-snug">
                        {project.headline}
                      </p>

                      <p className="text-sm text-zinc-100 leading-relaxed">
                        {project.description}
                      </p>

                      {/* What I Built & Learned */}
                      <div className="pt-2 space-y-2">
                        <div className="text-xs font-mono text-amber-300 font-semibold">
                          What I Built &amp; Practiced:
                        </div>
                        <ul className="space-y-1.5 text-xs text-zinc-100 leading-relaxed">
                          {project.features.slice(0, 3).map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="font-mono text-[#36D9F5] font-bold shrink-0">0{idx + 1}.</span>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Unboxed Tech Stack + Interactive Actions */}
                    <div className="pt-6 mt-6 border-t border-white/12 space-y-5">
                      <div className="text-xs font-mono text-white">
                        <span className="text-[#36D9F5] font-semibold">Technologies Used: </span>
                        {project.technologies.join(' · ')}
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <button
                          type="button"
                          onClick={() => openProjectModal(project, 'overview')}
                          className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-[#06080D] bg-[#36D9F5] hover:bg-cyan-300 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                        >
                          <span>Project Breakdown</span>
                          <ArrowUpRight size={14} />
                        </button>

                        <button
                          type="button"
                          onClick={() => openProjectModal(project, 'architecture')}
                          className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#06080D] hover:bg-white/10 border border-white/20 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                        >
                          <span>How It Works</span>
                        </button>

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-2.5 text-xs font-mono text-zinc-100 hover:text-[#36D9F5] transition-colors whitespace-nowrap shrink-0"
                        >
                          <GithubIcon size={14} />
                          <span>GitHub</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* VIEW MODE 2: Dynamic Bento Showcase Grid */
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {filteredProjects.map((project, index) => {
              const isWide = index === 0 || index === 3;
              const imgFailed = failedImages[project.id];

              return (
                <article
                  key={project.id}
                  className={`${
                    isWide ? 'md:col-span-7' : 'md:col-span-5'
                  } bg-[#0B0F17]/90 backdrop-blur-md border border-white/15 hover:border-[#36D9F5]/60 rounded-2xl overflow-hidden flex flex-col justify-between transition-colors`}
                >
                  <div>
                    <div
                      onClick={() => openProjectModal(project, 'overview')}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && openProjectModal(project, 'overview')}
                      className="relative aspect-[16/10] w-full bg-[#06080D] overflow-hidden cursor-pointer group"
                    >
                      {!imgFailed ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          referrerPolicy="no-referrer"
                          onError={() =>
                            setFailedImages((prev) => ({ ...prev, [project.id]: true }))
                          }
                          className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center p-6">
                          <span className="font-display text-lg font-bold text-white">
                            {project.title}
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-transparent" />
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs font-mono text-zinc-200 mb-2">
                        <span className="text-[#36D9F5] font-bold">{project.num}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-amber-300">{project.category}</span>
                        <span aria-hidden="true">·</span>
                        <span className="tabular-nums text-white">{project.year}</span>
                      </div>

                      <h3 className="font-display text-xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-xs text-zinc-100 leading-relaxed mb-4">
                        {project.summary}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                    <span className="text-[11px] font-mono text-zinc-200 truncate">
                      {project.technologies.slice(0, 3).join(' · ')}
                    </span>
                    <button
                      type="button"
                      onClick={() => openProjectModal(project, 'overview')}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#36D9F5] hover:text-cyan-300 whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <span>View Details</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>

      {/* Fullscreen Project Deep-Dive Modal */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-modal-title"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl bg-[#0B0F17] border border-white/20 rounded-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
          >
            {/* Modal Top Bar */}
            <div className="px-6 py-4 bg-[#06080D] border-b border-white/12 flex items-center justify-between gap-4 shrink-0">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-200">
                <span className="text-[#36D9F5] font-bold">
                  Project {activeModalProject.num}
                </span>
                <span aria-hidden="true">·</span>
                <span className="text-amber-300">{activeModalProject.category}</span>
                <span aria-hidden="true">·</span>
                <span className="text-white">{activeModalProject.year}</span>
              </div>

              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                aria-label="Close project modal"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-zinc-100 hover:text-white bg-white/10 hover:bg-white/15 rounded-lg transition-colors cursor-pointer"
              >
                <span>ESC</span>
                <X size={15} />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h2
                    id="case-study-modal-title"
                    className="font-display text-2xl sm:text-3xl font-extrabold text-white"
                  >
                    {activeModalProject.title}
                  </h2>
                  <p className="text-sm text-[#36D9F5] font-medium mt-1">
                    {activeModalProject.headline}
                  </p>
                </div>

                {/* Interactive Modal Tab Bar */}
                <div className="flex items-center gap-1 p-1 bg-[#06080D] border border-white/12 rounded-lg shrink-0">
                  {[
                    { id: 'overview', label: 'Overview & Learning' },
                    { id: 'architecture', label: 'How It Works' },
                    { id: 'code', label: 'Code Sample' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setModalTab(t.id)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        modalTab === t.id
                          ? 'bg-[#36D9F5] text-[#06080D]'
                          : 'text-zinc-200 hover:text-white'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content 1: Overview & Learning */}
              {modalTab === 'overview' && (
                <div className="space-y-6">
                  <div className="rounded-xl overflow-hidden border border-white/15 bg-[#06080D] aspect-[16/9]">
                    <img
                      src={activeModalProject.image}
                      alt={activeModalProject.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-[#06080D] border border-white/12">
                    {activeModalProject.metrics.map((m, i) => (
                      <div key={i}>
                        <span className="block text-xs font-mono text-zinc-300">
                          {m.label}
                        </span>
                        <span className="font-display text-base font-bold text-amber-300 tabular-nums">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="md:col-span-8 space-y-4">
                      <h3 className="font-display text-base font-bold text-white">
                        Project Motivation &amp; Overview
                      </h3>
                      <p className="text-sm text-zinc-100 leading-relaxed">
                        {activeModalProject.description}
                      </p>

                      <h4 className="font-display text-sm font-bold text-[#36D9F5] pt-2">
                        What I Built &amp; Learned
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-zinc-100">
                        {activeModalProject.features.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="font-mono text-[#36D9F5] font-bold shrink-0">
                              0{idx + 1}.
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="md:col-span-4 p-5 rounded-xl bg-[#06080D] border border-white/12 space-y-4 h-fit">
                      <div>
                        <span className="block text-xs font-mono text-zinc-300">
                          Project Scope
                        </span>
                        <span className="text-sm font-bold text-white">
                          {activeModalProject.role}
                        </span>
                      </div>
                      <div>
                        <span className="block text-xs font-mono text-zinc-300 mb-1">
                          Technologies Practiced
                        </span>
                        <p className="text-xs font-mono text-[#36D9F5] leading-relaxed">
                          {activeModalProject.technologies.join(' · ')}
                        </p>
                      </div>
                      <div className="pt-2">
                        <a
                          href={activeModalProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-[#06080D] bg-[#36D9F5] hover:bg-cyan-300 rounded-lg transition-colors"
                        >
                          <GithubIcon size={15} />
                          <span>View on GitHub</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab Content 2: How It Works */}
              {modalTab === 'architecture' && (
                <div className="space-y-6">
                  <p className="text-sm text-zinc-100">
                    Step-by-step workflow of how{' '}
                    <strong className="text-[#36D9F5]">{activeModalProject.title}</strong> is structured:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeModalProject.architectureSteps.map((arch, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-xl bg-[#06080D] border border-white/12 space-y-2"
                      >
                        <div className="font-mono text-xs text-[#36D9F5] font-bold">
                          {arch.step}
                        </div>
                        <p className="text-xs sm:text-sm text-zinc-100 leading-relaxed">
                          {arch.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab Content 3: Code Sample */}
              {modalTab === 'code' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-200">
                    <span>Code Sample · {activeModalProject.title}</span>
                    <button
                      type="button"
                      onClick={() => handleCopyModalCode(activeModalProject.codeSnippet)}
                      className="inline-flex items-center gap-1.5 text-xs text-[#36D9F5] hover:text-cyan-300 font-semibold cursor-pointer"
                    >
                      {copiedSnippet ? <Check size={13} /> : <Copy size={13} />}
                      <span>{copiedSnippet ? 'Copied to clipboard' : 'Copy Code'}</span>
                    </button>
                  </div>

                  <pre className="p-5 rounded-xl bg-[#06080D] border border-white/12 font-mono text-xs text-zinc-100 overflow-x-auto leading-relaxed">
                    <code>{activeModalProject.codeSnippet}</code>
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
