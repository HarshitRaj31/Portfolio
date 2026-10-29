export default function Journey({ journey }) {
  return (
    <section id="journey" className="py-12 lg:py-16 border-b border-[#162918]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-[#84CC16] font-semibold mb-2.5">
            04. My Learning Journey &amp; Education
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-white tracking-tight">
            Academic Path &amp; Self-Directed Growth.
          </h2>
          <p className="text-zinc-200 text-sm sm:text-base font-sans mt-3 leading-relaxed">
            How I have grown year by year—from starting my B.Tech in Computer Science and learning HTML/CSS to building full-stack apps and exploring cloud infrastructure.
          </p>
        </div>

        {/* Clean Structured Editorial Timeline Rows */}
        <div className="divide-y divide-[#182C1A] border-t border-b border-[#182C1A]">
          {journey.map((item, index) => (
            <article
              key={index}
              className="py-8 lg:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start"
            >
              {/* Left Column: Period & Domain Metadata */}
              <div className="lg:col-span-3 space-y-1">
                <div className="font-display text-2xl font-extrabold text-white tabular-nums">
                  {item.year}
                </div>
                <div className="text-xs font-mono text-[#84CC16] font-semibold">
                  {item.domain}
                </div>
              </div>

              {/* Middle Column: Milestone Title & Narrative */}
              <div className="lg:col-span-5 space-y-2">
                <div className="text-xs font-mono text-amber-300 font-medium">
                  0{index + 1} · {item.phase}
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-200 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              {/* Right Column: Key Highlights */}
              <div className="lg:col-span-4 bg-[#070B08]/85 backdrop-blur-sm border border-[#1C331E] rounded-xl p-4 sm:p-5 space-y-2">
                <div className="text-xs font-mono text-[#84CC16] font-semibold">
                  Key Highlights
                </div>
                <ul className="space-y-1.5 text-xs text-zinc-200 leading-relaxed font-sans">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="font-mono text-amber-300 font-bold shrink-0">·</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
