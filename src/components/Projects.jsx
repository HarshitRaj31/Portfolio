import { useState, useEffect } from 'react';
import {
  Folder,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  X,
  Copy,
  Check,
  Server,
  LayoutGrid,
  Rows,
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function Projects({ projects }) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [layoutMode, setLayoutMode] = useState('grid'); // 'grid' | 'detailed'
  const [highlightedIndex, setHighlightedIndex] = useState(null);
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [modalTab, setModalTab] = useState('overview');
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
    {
      id: 'cloud',
      label: 'Cloud & Systems',
      count: projects.filter((p) => p.filterCategory === 'cloud').length,
    },
    {
      id: 'ai',
      label: 'AI & Web',
      count: projects.filter((p) => p.filterCategory === 'ai').length,
    },
    {
      id: 'web',
      label: 'Full-Stack & UI',
      count: projects.filter((p) => p.filterCategory === 'web').length,
    },
  ];

  const filteredProjects =
    selectedFilter === 'all'
      ? projects
      : projects.filter((p) => p.filterCategory === selectedFilter);

  const handlePrev = () => {
    setHighlightedIndex((prev) => {
      if (prev === null) return filteredProjects.length - 1;
      return (prev - 1 + filteredProjects.length) % filteredProjects.length;
    });
  };

  const handleNext = () => {
    setHighlightedIndex((prev) => {
      if (prev === null) return 0;
      return (prev + 1) % filteredProjects.length;
    });
  };

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
    <section id="projects" className="py-10 lg:py-14 border-b border-[#162918]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Terminal Section Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-3 mb-6 border-b border-[#162918]">
          <div className="flex items-center gap-2.5 font-mono">
            <span className="text-[#84CC16] font-bold text-sm sm:text-base select-none">
              01.
            </span>
            <span className="font-mono text-sm sm:text-base font-bold tracking-wider text-[#9EF01A]">
              FEATURED PROJECTS
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block font-mono text-[11px] sm:text-xs tracking-widest text-zinc-400">
              REAL PROJECTS. REAL LEARNING.
            </span>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Highlight previous project"
                className="w-8 h-7 inline-flex items-center justify-center rounded bg-[#080E09] hover:bg-[#111F13] border border-[#1E3520] hover:border-[#84CC16] text-zinc-300 hover:text-[#84CC16] transition-colors cursor-pointer"
              >
                <ArrowLeft size={14} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Highlight next project"
                className="w-8 h-7 inline-flex items-center justify-center rounded bg-[#080E09] hover:bg-[#111F13] border border-[#1E3520] hover:border-[#84CC16] text-zinc-300 hover:text-[#84CC16] transition-colors cursor-pointer"
              >
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Editorial Headline + Interactive Filter Controls & View Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div>
            <div className="text-xs font-mono text-[#84CC16] font-semibold mb-2">
              01. Selected Student Projects
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Hands-On Builds &amp; Learning Projects.
            </h2>
            <p className="text-zinc-300 text-xs sm:text-sm font-mono mt-2 max-w-2xl leading-relaxed">
              Personal and academic software projects built to practice full-stack web development, REST APIs, AI text analysis, and self-hosted Linux/Docker infrastructure.
            </p>
          </div>

          {/* Interactive Filter Bar + Detailed/Grid Switcher */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0 font-mono">
            <div
              role="tablist"
              aria-label="Filter projects by category"
              className="flex flex-wrap items-center gap-1 p-1 bg-[#070B08]/90 backdrop-blur-sm border border-[#1E3520] rounded-lg"
            >
              {filterOptions.map((tab) => {
                const active = selectedFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => {
                      setSelectedFilter(tab.id);
                      setHighlightedIndex(null);
                    }}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      active
                        ? 'bg-[#84CC16] text-[#040705]'
                        : 'text-zinc-300 hover:text-white'
                    }`}
                  >
                    {tab.label} ({tab.count})
                  </button>
                );
              })}
            </div>

            {/* Layout Mode Switcher: Detailed vs Grid */}
            <div className="flex items-center gap-1 p-1 bg-[#070B08]/90 backdrop-blur-sm border border-[#1E3520] rounded-lg">
              <button
                type="button"
                onClick={() => setLayoutMode('detailed')}
                title="Detailed split showcase view"
                className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  layoutMode === 'detailed'
                    ? 'bg-[#84CC16] text-[#040705]'
                    : 'text-zinc-300 hover:text-white'
                }`}
              >
                <Rows size={13} />
                <span>Detailed</span>
              </button>
              <button
                type="button"
                onClick={() => setLayoutMode('grid')}
                title="4-Column card grid view"
                className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  layoutMode === 'grid'
                    ? 'bg-[#84CC16] text-[#040705]'
                    : 'text-zinc-300 hover:text-white'
                }`}
              >
                <LayoutGrid size={13} />
                <span>Grid</span>
              </button>
            </div>
          </div>
        </div>

        {/* VIEW MODE 1: 4-Column Featured Projects Grid */}
        {layoutMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredProjects.map((project, idx) => {
              const isPurple = project.accentColor === 'purple';
              const isHighlighted = highlightedIndex === idx;
              const imgFailed = failedImages[project.id];

              const borderClass = isHighlighted
                ? 'border-[#84CC16] ring-1 ring-[#84CC16]/50'
                : isPurple
                ? 'border-[#581C87]/80 hover:border-purple-400/90'
                : 'border-[#1C331E] hover:border-[#84CC16]/80';

              return (
                <article
                  key={project.id}
                  onClick={() => openProjectModal(project, 'overview')}
                  onKeyDown={(e) => e.key === 'Enter' && openProjectModal(project, 'overview')}
                  role="button"
                  tabIndex={0}
                  className={`group rounded-xl bg-[#070B08]/85 backdrop-blur-sm border ${borderClass} p-4 sm:p-5 flex flex-col justify-between transition-all duration-150 cursor-pointer hover:-translate-y-0.5`}
                >
                  <div>
                    {/* Index + Folder Icon */}
                    <div className="flex items-center gap-2.5 font-mono text-xs font-semibold text-[#84CC16] mb-3">
                      <span className="tabular-nums">{project.num}</span>
                      <Folder size={15} className="text-[#84CC16]" />
                    </div>

                    {/* Project Title + Arrow */}
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-[#9EF01A] transition-colors flex items-center gap-1.5 mb-2">
                      <span>{project.title}</span>
                      <ArrowUpRight
                        size={16}
                        className="text-zinc-300 group-hover:text-[#9EF01A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </h3>

                    {/* Concise 2-line Summary */}
                    <p className="font-mono text-xs text-zinc-300 leading-relaxed mb-4 min-h-[2.5rem]">
                      {project.summary}
                    </p>
                  </div>

                  <div>
                    {/* Artwork Container */}
                    <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden bg-[#040705] mb-4 border border-white/[0.05]">
                      {!imgFailed ? (
                        <img
                          src={project.image}
                          alt={`${project.title} — ${project.summary}`}
                          referrerPolicy="no-referrer"
                          onError={() =>
                            setFailedImages((prev) => ({ ...prev, [project.id]: true }))
                          }
                          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-[#060B07]">
                          <Server size={24} className="text-[#84CC16] mb-1.5" />
                          <span className="font-mono text-xs font-bold text-white">
                            {project.title}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Bottom Tech Stack Row */}
                    <div className="grid grid-cols-3 gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-center py-1 px-2 rounded-md bg-[#061F1C] border border-[#124A43] font-mono text-[11px] font-medium text-[#5EEAD4] whitespace-nowrap truncate"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* VIEW MODE 2: Detailed Split Showcase (Screenshot 3) */
          <div className="space-y-10 lg:space-y-12">
            {filteredProjects.map((project, index) => {
              const isReversed = index % 2 !== 0;
              const imgFailed = failedImages[`detailed-${project.id}`];

              return (
                <article
                  key={project.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch p-6 sm:p-8 rounded-2xl bg-[#070B08]/85 backdrop-blur-sm border border-[#1C331E]"
                >
                  {/* Visual Browser Frame Column */}
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
                      className="group relative h-full bg-[#040705] border border-[#1E3520] hover:border-[#84CC16] rounded-xl overflow-hidden flex flex-col justify-between transition-colors cursor-pointer"
                    >
                      {/* Browser Frame Topbar */}
                      <div className="px-4 py-3 bg-[#080E09] border-b border-[#182C1A] flex items-center justify-between text-xs font-mono text-zinc-300">
                        <span>
                          {project.num} · {project.title.toLowerCase().replace(/\s+/g, '-')}.project
                        </span>
                        <span className="text-[#84CC16] font-semibold group-hover:underline">
                          View Project Breakdown ↗
                        </span>
                      </div>

                      {/* Dashboard Preview Image */}
                      <div className="relative aspect-[16/10] w-full bg-[#040705] overflow-hidden">
                        {!imgFailed ? (
                          <img
                            src={project.detailedImage || project.image}
                            alt={`${project.title} — ${project.headline}`}
                            referrerPolicy="no-referrer"
                            onError={() =>
                              setFailedImages((prev) => ({
                                ...prev,
                                [`detailed-${project.id}`]: true,
                              }))
                            }
                            className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                            <Server size={32} className="text-[#84CC16] mb-3" />
                            <span className="font-display text-lg font-bold text-white">
                              {project.title}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Bottom Project Overview Strip */}
                      <div className="px-5 py-3.5 bg-[#080E09] border-t border-[#182C1A] grid grid-cols-3 gap-4">
                        {project.metrics.map((m, i) => (
                          <div key={i}>
                            <span className="block text-[11px] font-mono text-zinc-400">
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
                    className={`lg:col-span-5 flex flex-col justify-between py-1 font-mono ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="space-y-3.5">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-300">
                        <span className="text-[#84CC16] font-bold">{project.num}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-amber-300 font-medium">{project.category}</span>
                        <span aria-hidden="true">·</span>
                        <span className="tabular-nums text-white">{project.year}</span>
                      </div>

                      <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        {project.title}
                      </h3>

                      <p className="text-xs sm:text-sm font-semibold text-[#84CC16] leading-snug">
                        {project.headline}
                      </p>

                      <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-sans">
                        {project.description}
                      </p>

                      {/* What I Built & Practiced */}
                      <div className="pt-2 space-y-2">
                        <div className="text-xs text-amber-300 font-semibold">
                          What I Built &amp; Practiced:
                        </div>
                        <ul className="space-y-1.5 text-xs text-zinc-200 leading-relaxed">
                          {project.features.slice(0, 3).map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-[#84CC16] font-bold shrink-0">
                                0{idx + 1}.
                              </span>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Technologies Used + Interactive Actions */}
                    <div className="pt-5 mt-5 border-t border-[#182C1A] space-y-4">
                      <div className="text-xs text-zinc-200">
                        <span className="text-[#84CC16] font-semibold">Technologies Used: </span>
                        {(project.fullTechnologies || project.technologies).join(' · ')}
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <button
                          type="button"
                          onClick={() => openProjectModal(project, 'overview')}
                          className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-[#040705] bg-[#84CC16] hover:bg-[#9EF01A] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                        >
                          <span>Project Breakdown</span>
                          <ArrowUpRight size={14} />
                        </button>

                        <button
                          type="button"
                          onClick={() => openProjectModal(project, 'architecture')}
                          className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#080E09] hover:bg-[#0E1A10] border border-[#1E3520] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                        >
                          <span>How It Works</span>
                        </button>

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-2.5 text-xs text-zinc-200 hover:text-[#84CC16] transition-colors whitespace-nowrap shrink-0"
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
        )}
      </div>

      {/* Interactive Project Deep-Dive Modal */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl bg-[#070C08] border border-[#244226] rounded-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col shadow-2xl"
          >
            {/* Modal Top Bar */}
            <div className="px-6 py-4 bg-[#040705] border-b border-[#182C1A] flex items-center justify-between gap-4 shrink-0">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                <span className="text-[#84CC16] font-bold">
                  Project {activeModalProject.num}
                </span>
                <span aria-hidden="true">·</span>
                <span className="text-amber-300">{activeModalProject.category}</span>
                <span aria-hidden="true">·</span>
                <span className="text-white tabular-nums">{activeModalProject.year}</span>
              </div>

              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                aria-label="Close project modal"
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono text-zinc-200 hover:text-[#84CC16] bg-[#0B140C] border border-[#1F3822] rounded-md transition-colors cursor-pointer"
              >
                <span>ESC</span>
                <X size={14} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 font-mono">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <h2
                    id="project-modal-title"
                    className="font-display text-2xl sm:text-3xl font-extrabold text-white"
                  >
                    {activeModalProject.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#84CC16] mt-1">
                    {activeModalProject.headline}
                  </p>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-1 p-1 bg-[#040705] border border-[#1B311D] rounded-lg shrink-0">
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
                          ? 'bg-[#84CC16] text-[#040705]'
                          : 'text-zinc-300 hover:text-white'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {modalTab === 'overview' && (
                <div className="space-y-5">
                  <div className="rounded-xl overflow-hidden border border-[#1C331E] bg-[#040705] aspect-[16/9]">
                    <img
                      src={activeModalProject.detailedImage || activeModalProject.image}
                      alt={activeModalProject.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-[#040705] border border-[#1B311D]">
                    {activeModalProject.metrics.map((m, i) => (
                      <div key={i}>
                        <span className="block text-xs text-zinc-400">{m.label}</span>
                        <span className="font-display text-base font-bold text-amber-300 tabular-nums">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-sans">
                    {activeModalProject.description}
                  </p>

                  <div className="space-y-2">
                    <h3 className="text-xs font-bold text-[#9EF01A] tracking-wider">
                      What I Built &amp; Learned:
                    </h3>
                    <ul className="space-y-2 text-xs text-zinc-200">
                      {activeModalProject.features.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="text-[#84CC16] font-bold shrink-0">
                            0{i + 1}.
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-[#182C1A] flex flex-wrap items-center justify-between gap-4">
                    <div className="text-xs text-zinc-300">
                      <span className="text-[#84CC16] font-semibold">Stack: </span>
                      {(activeModalProject.fullTechnologies || activeModalProject.technologies).join(' · ')}
                    </div>

                    <a
                      href={activeModalProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-[#040705] bg-[#84CC16] hover:bg-[#9EF01A] rounded-lg transition-colors"
                    >
                      <GithubIcon size={14} />
                      <span>View on GitHub</span>
                    </a>
                  </div>
                </div>
              )}

              {modalTab === 'architecture' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeModalProject.architectureSteps.map((arch, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#040705] border border-[#1B311D] space-y-1.5"
                    >
                      <div className="text-xs font-bold text-[#84CC16]">
                        {arch.step}
                      </div>
                      <p className="text-xs text-zinc-200 leading-relaxed">
                        {arch.detail}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {modalTab === 'code' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-zinc-300">
                    <span>{activeModalProject.title} — Implementation Snippet</span>
                    <button
                      type="button"
                      onClick={() => handleCopyModalCode(activeModalProject.codeSnippet)}
                      className="inline-flex items-center gap-1.5 text-xs text-[#84CC16] hover:underline cursor-pointer"
                    >
                      {copiedSnippet ? <Check size={13} /> : <Copy size={13} />}
                      <span>{copiedSnippet ? 'Copied!' : 'Copy Code'}</span>
                    </button>
                  </div>
                  <pre className="p-4 rounded-xl bg-[#040705] border border-[#1B311D] text-xs text-zinc-100 overflow-x-auto leading-relaxed">
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
