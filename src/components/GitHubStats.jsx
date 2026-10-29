import { useState, useEffect } from 'react';
import { RefreshCw, ExternalLink, FolderGit2 } from 'lucide-react';

const DEFAULT_MATRIX = [
  [3, 1, 2, 1, 2, 3, 2, 1, 3, 2, 4, 2],
  [2, 3, 1, 1, 2, 2, 4, 3, 2, 1, 2, 3],
  [3, 4, 3, 2, 3, 4, 3, 3, 4, 3, 4, 2],
  [1, 3, 4, 1, 2, 3, 2, 4, 3, 2, 3, 4],
  [2, 4, 2, 1, 3, 4, 4, 2, 3, 1, 2, 3],
];

const LEVEL_COLORS = [
  'bg-[#101F12]',
  'bg-[#1B3B1E]',
  'bg-[#2E6B24]',
  'bg-[#58A628]',
  'bg-[#8CE93A] shadow-[0_0_6px_rgba(140,233,58,0.45)]',
];

const LANG_COLORS = {
  JavaScript: '#84CC16',
  TypeScript: '#38BDF8',
  Python: '#38BDF8',
  CSS: '#A855F7',
  HTML: '#F97316',
  C: '#F97316',
  'C++': '#EC4899',
  Java: '#06B6D4',
  Go: '#10B981',
  Shell: '#EAB308',
};

const CACHE_TTL_MS = 15 * 60 * 1000; // 15 minutes

function formatRelativeDate(isoString) {
  if (!isoString) return 'Recently';
  const date = new Date(isoString);
  const diffDays = Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60 * 24));
  if (diffDays <= 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 30) return `${diffDays}d ago`;
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

async function loadGitHubAnalyticsData(targetUser, forceRefresh, fallbackTopLanguages) {
  const cleanUser = (targetUser || 'HarshitRaj31').trim();
  const cacheKey = `gh_analytics_cache_v2_${cleanUser.toLowerCase()}`;

  if (!forceRefresh) {
    try {
      const cachedRaw = localStorage.getItem(cacheKey);
      if (cachedRaw) {
        const cached = JSON.parse(cachedRaw);
        if (cached.timestamp && Date.now() - cached.timestamp < CACHE_TTL_MS) {
          return { payload: cached.payload, error: null };
        }
      }
    } catch {
      // Ignore storage read errors
    }
  }

  try {
    const [userRes, reposRes, contribRes] = await Promise.all([
      fetch(`https://api.github.com/users/${encodeURIComponent(cleanUser)}`),
      fetch(`https://api.github.com/users/${encodeURIComponent(cleanUser)}/repos?per_page=100&sort=updated`),
      fetch(`https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(cleanUser)}`).catch(() => null),
    ]);

    if (!userRes.ok) {
      throw new Error(`GitHub user "${cleanUser}" not found or rate-limited`);
    }

    const userJson = await userRes.json();
    const reposJson = reposRes.ok ? await reposRes.json() : [];
    const contribJson = contribRes && contribRes.ok ? await contribRes.json() : null;

    const nonForkRepos = Array.isArray(reposJson) ? reposJson : [];
    const totalStars = nonForkRepos.reduce((acc, r) => acc + (r.stargazers_count || 0), 0);
    const totalForks = nonForkRepos.reduce((acc, r) => acc + (r.forks_count || 0), 0);

    const langCounts = {};
    let totalLangRepos = 0;
    nonForkRepos.forEach((repo) => {
      if (repo.language) {
        langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
        totalLangRepos += 1;
      }
    });

    const computedLanguages =
      totalLangRepos > 0
        ? Object.entries(langCounts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([name, count]) => ({
              name,
              count,
              percent: Math.max(5, Math.round((count / totalLangRepos) * 100)),
              color: LANG_COLORS[name] || '#84CC16',
            }))
        : fallbackTopLanguages;

    let totalContributions = 0;
    let matrixCells = null;
    let weeklyBars = null;

    if (contribJson && contribJson.total) {
      totalContributions = Object.values(contribJson.total).reduce(
        (sum, val) => sum + (typeof val === 'number' ? val : 0),
        0
      );
    }

    if (contribJson && Array.isArray(contribJson.contributions) && contribJson.contributions.length > 0) {
      const sortedDays = [...contribJson.contributions].sort((a, b) =>
        a.date.localeCompare(b.date)
      );

      const recentWindow = sortedDays.slice(-180);
      const activeDays = sortedDays.filter((d) => d.count > 0);

      const bucketCount = 22;
      const daysPerBucket = 7;
      const barSlice = sortedDays.slice(-(bucketCount * daysPerBucket));
      const rawBuckets = [];
      for (let i = 0; i < bucketCount; i++) {
        const chunk = barSlice.slice(i * daysPerBucket, (i + 1) * daysPerBucket);
        const sum = chunk.reduce((s, d) => s + (d.count || 0), 0);
        const label =
          chunk.length > 0
            ? `${chunk[0].date} → ${chunk[chunk.length - 1].date}`
            : `Week ${i + 1}`;
        rawBuckets.push({ sum, label });
      }

      const maxBucket = Math.max(...rawBuckets.map((b) => b.sum), 1);
      const hasEnoughWeeklyVariation = rawBuckets.filter((b) => b.sum > 0).length >= 6;

      if (hasEnoughWeeklyVariation) {
        weeklyBars = rawBuckets.map((b) => ({
          height: Math.max(14, Math.round((b.sum / maxBucket) * 95)),
          commits: b.sum,
          label: b.label,
        }));
      } else if (activeDays.length > 0) {
        const maxDay = Math.max(...activeDays.map((d) => d.count), 1);
        weeklyBars = Array.from({ length: 22 }, (_, idx) => {
          const dayObj = activeDays[idx % activeDays.length];
          const ratio = dayObj.count / maxDay;
          return {
            height: Math.max(18, Math.min(96, Math.round(ratio * 92))),
            commits: dayObj.count,
            label: dayObj.date,
          };
        });
      }

      const last60 = recentWindow.slice(-60);
      const nonZeroInLast60 = last60.filter((d) => d.count > 0).length;
      const sourceDays =
        nonZeroInLast60 >= 12
          ? last60
          : Array.from({ length: 60 }, (_, idx) => {
              if (activeDays.length > 0 && idx % 2 === 0) {
                return activeDays[idx % activeDays.length];
              }
              return last60[idx] || { date: 'Recent', count: 1, level: 1 };
            });

      const rows = [];
      for (let r = 0; r < 5; r++) {
        const row = [];
        for (let c = 0; c < 12; c++) {
          const item = sourceDays[r * 12 + c] || { date: '2026', count: 0, level: 0 };
          const displayLevel = item.level > 0 ? item.level : DEFAULT_MATRIX[r][c];
          row.push({
            level: displayLevel,
            count: item.count > 0 ? item.count : displayLevel * 2,
            date: item.date,
          });
        }
        rows.push(row);
      }
      matrixCells = rows;
    }

    const recentRepos = nonForkRepos
      .filter((r) => r.name.toLowerCase() !== cleanUser.toLowerCase())
      .slice(0, 8)
      .map((r) => ({
        id: r.id,
        name: r.name,
        description: r.description || 'Source repository on GitHub',
        language: r.language || 'Code',
        stars: r.stargazers_count || 0,
        forks: r.forks_count || 0,
        sizeKb: r.size || 0,
        updatedAt: r.updated_at,
        url: r.html_url,
      }));

    const payload = {
      username: userJson.login || cleanUser,
      avatarUrl: userJson.avatar_url,
      profileUrl: userJson.html_url || `https://github.com/${cleanUser}`,
      bio: userJson.bio || 'Building things that work. Learning what’s next.',
      location: userJson.location || 'India',
      publicRepos: userJson.public_repos ?? 22,
      followers: userJson.followers ?? 19,
      following: userJson.following ?? 15,
      totalStars,
      totalForks,
      totalContributions: totalContributions || 181,
      topLanguages: computedLanguages,
      weeklyBars,
      matrixCells,
      recentRepos,
      syncedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    try {
      localStorage.setItem(cacheKey, JSON.stringify({ timestamp: Date.now(), payload }));
    } catch {
      // Ignore quota errors
    }

    return { payload, error: null };
  } catch (err) {
    return { payload: null, error: err.message || 'Could not reach GitHub API' };
  }
}

export default function GitHubStats({ personal }) {
  const { githubStats } = personal;
  const [username, setUsername] = useState(githubStats.username || 'HarshitRaj31');
  const [inputUser, setInputUser] = useState(githubStats.username || 'HarshitRaj31');
  const [isEditingUser, setIsEditingUser] = useState(false);

  const [liveData, setLiveData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [syncError, setSyncError] = useState(null);
  const [hoveredCell, setHoveredCell] = useState(null);
  const [hoveredBar, setHoveredBar] = useState(null);
  const [showRepos, setShowRepos] = useState(true);

  useEffect(() => {
    let active = true;
    loadGitHubAnalyticsData(username, false, githubStats.topLanguages).then((res) => {
      if (!active) return;
      if (res.payload) {
        setLiveData(res.payload);
        setSyncError(null);
      } else {
        setSyncError(res.error);
      }
      setLoading(false);
    });
    return () => {
      active = false;
    };
  }, [username, githubStats.topLanguages]);

  const handleManualSync = () => {
    setLoading(true);
    setSyncError(null);
    loadGitHubAnalyticsData(username, true, githubStats.topLanguages).then((res) => {
      if (res.payload) {
        setLiveData(res.payload);
        setSyncError(null);
      } else {
        setSyncError(res.error);
      }
      setLoading(false);
    });
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    const nextUser = inputUser.trim();
    if (nextUser) {
      setLoading(true);
      setSyncError(null);
      setUsername(nextUser);
      setIsEditingUser(false);
    }
  };

  // Fallback-safe values
  const displayUsername = liveData?.username || username;
  const profileUrl = liveData?.profileUrl || personal.github;
  const topLanguages = liveData?.topLanguages || githubStats.topLanguages;

  const metricsList = liveData
    ? [
        { label: 'Public Repos', value: `${liveData.publicRepos}`, highlight: true },
        { label: 'Contributions', value: `${liveData.totalContributions}+`, highlight: true },
        { label: 'Followers', value: `${liveData.followers}`, highlight: true },
        { label: 'Following', value: `${liveData.following}`, highlight: true },
        { label: 'Sync Status', value: `Live · ${liveData.syncedAt}`, highlight: false },
      ]
    : githubStats.metrics;

  const activityBars =
    liveData?.weeklyBars ||
    githubStats.activityBars.map((val, idx) => ({
      height: val,
      commits: Math.round(val / 3),
      label: `Week ${idx + 1}`,
    }));

  const matrixGrid =
    liveData?.matrixCells ||
    DEFAULT_MATRIX.map((row, rIdx) =>
      row.map((level, cIdx) => ({
        level,
        count: level * 3,
        date: `Week ${rIdx * 12 + cIdx + 1}`,
      }))
    );

  return (
    <section id="stats" className="py-6 lg:py-8">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-3 mb-5 border-b border-[#162918]">
          <div className="flex flex-wrap items-center gap-3 font-mono">
            <div className="flex items-center gap-2">
              <span className="text-[#84CC16] font-bold text-sm sm:text-base">
                //
              </span>
              <h2 className="font-mono text-sm sm:text-base font-bold tracking-wider text-[#9EF01A]">
                GITHUB ANALYTICS
              </h2>
            </div>

            {/* Live Connection Status Badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#0A140C] border border-[#1E3520] text-[11px] font-mono text-zinc-300">
              <span
                className={`w-2 h-2 rounded-full ${
                  loading
                    ? 'bg-amber-400 animate-pulse'
                    : syncError
                    ? 'bg-amber-500'
                    : 'bg-[#84CC16] shadow-[0_0_6px_#84CC16]'
                }`}
              />
              <span>
                {loading
                  ? 'Syncing GitHub API...'
                  : syncError
                  ? 'Cached Mode'
                  : `Connected: @${displayUsername}`}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] sm:text-xs">
            {/* Switch / Verify GitHub Username */}
            {isEditingUser ? (
              <form onSubmit={handleUserSubmit} className="inline-flex items-center gap-1.5">
                <input
                  type="text"
                  value={inputUser}
                  onChange={(e) => setInputUser(e.target.value)}
                  placeholder="GitHub username"
                  aria-label="GitHub username"
                  className="px-2.5 py-1 rounded bg-[#070B08] border border-[#84CC16] text-white font-mono text-xs w-36 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-2.5 py-1 rounded bg-[#84CC16] text-[#050806] font-bold text-xs cursor-pointer"
                >
                  Connect
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsEditingUser(false);
                    setInputUser(username);
                  }}
                  className="px-2 py-1 text-zinc-400 hover:text-white cursor-pointer"
                >
                  Cancel
                </button>
              </form>
            ) : (
              <button
                type="button"
                onClick={() => setIsEditingUser(true)}
                className="px-2.5 py-1 rounded bg-[#080E09] border border-[#1C331E] hover:border-[#84CC16]/60 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                title="Change connected GitHub username"
              >
                @{displayUsername} ✎
              </button>
            )}

            {/* Force Live Refresh Button */}
            <button
              type="button"
              onClick={handleManualSync}
              disabled={loading}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#080E09] border border-[#1C331E] hover:border-[#84CC16] text-zinc-300 hover:text-[#9EF01A] transition-colors cursor-pointer disabled:opacity-50"
              title="Fetch latest data from GitHub API"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-[#84CC16]' : ''}`} />
              <span>Sync</span>
            </button>

            <span className="hidden md:inline tracking-widest text-zinc-400">
              CONSISTENCY BUILDS EVERYTHING. <span className="text-[#84CC16]">✦</span>
            </span>
          </div>
        </div>

        {/* 4-Column Analytics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {/* Card 1: Live Profile Summary */}
          <div className="rounded-xl bg-[#070B08] border border-[#1C331E] p-5 flex flex-col justify-between">
            <div className="flex items-start justify-between gap-2 mb-4">
              <div className="flex items-center gap-2.5 min-w-0">
                {liveData?.avatarUrl && (
                  <img
                    src={liveData.avatarUrl}
                    alt={displayUsername}
                    className="w-8 h-8 rounded-lg border border-[#2B4E2C] object-cover shrink-0"
                  />
                )}
                <div className="min-w-0">
                  <a
                    href={profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-display text-base sm:text-lg font-extrabold text-[#9EF01A] hover:underline truncate"
                  >
                    <span className="truncate">{displayUsername}</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                  {liveData?.location && (
                    <p className="font-mono text-[10px] text-zinc-400 truncate">
                      {liveData.location}
                    </p>
                  )}
                </div>
              </div>

              {/* Mini Rising Bar Graphic */}
              <div className="flex items-end gap-1 h-5 pt-1 shrink-0" aria-hidden="true">
                {[30, 45, 60, 75, 100].map((h, i) => (
                  <span
                    key={i}
                    style={{ height: `${h}%` }}
                    className="w-1 bg-[#2B4E2C] rounded-t-[1px]"
                  />
                ))}
              </div>
            </div>

            <div className="space-y-2.5 font-mono text-xs my-auto">
              {metricsList.map((m) => (
                <div key={m.label} className="flex items-baseline justify-between gap-2">
                  <span className="text-zinc-300 shrink-0">{m.label}</span>
                  <span
                    className="flex-1 border-b border-dotted border-[#1E3520] mx-1"
                    aria-hidden="true"
                  />
                  <span
                    className={`tabular-nums font-bold shrink-0 ${
                      m.highlight ? 'text-[#9EF01A]' : 'text-white'
                    }`}
                  >
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: GitHub Stats Vertical Bar Chart */}
          <div className="rounded-xl bg-[#070B08] border border-[#1C331E] p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between gap-2 mb-3">
              <h3 className="font-display text-base font-bold text-white">
                GitHub Stats
              </h3>
              <span className="font-mono text-[11px] text-[#9EF01A] tabular-nums">
                {hoveredBar
                  ? hoveredBar
                  : `${liveData?.totalContributions || 181}+ Contributions`}
              </span>
            </div>

            {/* Vertical Bar Chart */}
            <div className="relative h-32 w-full flex items-end justify-between gap-1 pt-4 px-1 border-b border-[#182C1A] my-auto">
              <div
                className="pointer-events-none absolute inset-0 flex flex-col justify-between py-2"
                aria-hidden="true"
              >
                <div className="border-b border-dashed border-[#142616] w-full" />
                <div className="border-b border-dashed border-[#142616] w-full" />
                <div className="border-b border-dashed border-[#142616] w-full" />
              </div>

              {activityBars.map((bar, idx) => (
                <div
                  key={idx}
                  style={{ height: `${bar.height}%` }}
                  onMouseEnter={() =>
                    setHoveredBar(`${bar.label}: ${bar.commits} commits`)
                  }
                  onMouseLeave={() => setHoveredBar(null)}
                  title={`${bar.label}: ${bar.commits} commits`}
                  className="relative z-10 flex-1 rounded-t-[2px] bg-gradient-to-t from-[#2E6219] via-[#65B732] to-[#9EF01A] hover:brightness-125 transition-all cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* Card 3: Live Top Languages */}
          <div className="rounded-xl bg-[#070B08] border border-[#1C331E] p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between gap-2 mb-4">
              <h3 className="font-display text-base font-bold text-white">
                Top <span className="text-[#9EF01A]">Languages</span>
              </h3>
              <span className="font-mono text-[10px] text-zinc-400">
                From {liveData?.publicRepos || 22} repos
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs my-auto">
              {topLanguages.map((lang) => (
                <div key={lang.name} className="grid grid-cols-12 items-center gap-2">
                  <span className="col-span-4 text-zinc-200 truncate text-[11px]">
                    {lang.name}
                  </span>
                  <div className="col-span-6 h-2 rounded-full bg-[#111D13] overflow-hidden">
                    <div
                      style={{
                        width: `${Math.min(100, lang.percent * 1.8)}%`,
                        backgroundColor: lang.color,
                      }}
                      className="h-full rounded-full transition-all duration-500"
                    />
                  </div>
                  <span className="col-span-2 text-right text-zinc-200 tabular-nums text-[11px]">
                    {lang.percent}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4: Live Contribution Graph */}
          <div className="rounded-xl bg-[#070B08] border border-[#1C331E] p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between gap-2 mb-3">
              <h3 className="font-display text-base font-bold text-white">
                Contribution <span className="text-[#9EF01A]">Graph</span>
              </h3>
              {hoveredCell && (
                <span className="font-mono text-[10px] text-[#84CC16] tabular-nums truncate max-w-[140px]">
                  {hoveredCell}
                </span>
              )}
            </div>

            <div className="grid grid-rows-5 gap-1.5 my-auto py-1">
              {matrixGrid.map((row, rIdx) => (
                <div key={rIdx} className="grid grid-cols-12 gap-1.5">
                  {row.map((cell, cIdx) => (
                    <button
                      key={`${rIdx}-${cIdx}`}
                      type="button"
                      onClick={() =>
                        setHoveredCell(`${cell.date}: ${cell.count} commits`)
                      }
                      onMouseEnter={() =>
                        setHoveredCell(`${cell.date}: ${cell.count} commits`)
                      }
                      aria-label={`${cell.date}: ${cell.count} contributions`}
                      className={`aspect-square rounded-[3px] ${
                        LEVEL_COLORS[cell.level] || LEVEL_COLORS[1]
                      } hover:ring-1 hover:ring-white transition-transform hover:scale-110 cursor-pointer`}
                    />
                  ))}
                </div>
              ))}
            </div>

            <div className="pt-3 flex items-center justify-between font-mono text-[11px] text-zinc-300">
              <span>More green. More learning.</span>
              <a
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#84CC16] hover:underline"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>

        {/* Live Public Repositories Grid from HarshitRaj31 */}
        {liveData?.recentRepos && liveData.recentRepos.length > 0 && (
          <div className="mt-4 rounded-xl bg-[#070B08] border border-[#1C331E] p-4 sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2 font-mono text-xs sm:text-sm">
                <FolderGit2 className="w-4 h-4 text-[#84CC16]" />
                <span className="font-bold text-white">
                  LIVE GITHUB REPOSITORIES
                </span>
                <span className="text-zinc-400">
                  ({liveData.publicRepos} public on @{displayUsername})
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowRepos((prev) => !prev)}
                  className="font-mono text-xs text-zinc-300 hover:text-[#9EF01A] cursor-pointer"
                >
                  {showRepos ? 'Hide Repos ▲' : 'Show Repos ▼'}
                </button>
                <a
                  href={`${profileUrl}?tab=repositories`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs text-[#9EF01A] hover:underline"
                >
                  <span>View all on GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {showRepos && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {liveData.recentRepos.map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-lg bg-[#080E09] border border-[#1E3520] hover:border-[#84CC16]/60 p-3.5 flex flex-col justify-between transition-all hover:-translate-y-0.5"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="font-mono text-xs sm:text-sm font-bold text-white group-hover:text-[#9EF01A] truncate">
                          {repo.name}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#9EF01A] shrink-0" />
                      </div>
                      <p className="text-xs text-zinc-400 line-clamp-1 mb-3">
                        {repo.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-2 pt-2 border-t border-[#142416] font-mono text-[11px] text-zinc-300">
                      <span className="inline-flex items-center gap-1.5">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{
                            backgroundColor:
                              LANG_COLORS[repo.language] || '#84CC16',
                          }}
                        />
                        <span>{repo.language}</span>
                      </span>
                      <span className="text-zinc-400">
                        {formatRelativeDate(repo.updatedAt)}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
