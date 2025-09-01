import React, { useEffect, useState } from "react";

interface RepoStats {
  stars: number;
  forks: number;
  latestRelease?: string;
  lastChecked: number; // epoch ms
}

interface GitHubRepoBadgeProps {
  owner: string;
  repo: string;
  refreshIntervalMs?: number;
  cacheTtlMs?: number;
  className?: string;
}

const STORAGE_KEY_PREFIX = "gh-repo-stats:";

export const GitHubRepoBadge: React.FC<GitHubRepoBadgeProps> = ({
  owner,
  repo,
  refreshIntervalMs = 30 * 60 * 1000,
  cacheTtlMs = 30 * 60 * 1000,
  className = "",
}) => {
  const [data, setData] = useState<RepoStats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const storageKey = `${STORAGE_KEY_PREFIX}${owner}/${repo}`;

  const fetchData = async (force = false) => {
    try {
      setError(null);
      const cachedRaw = localStorage.getItem(storageKey);
      if (!force && cachedRaw) {
        try {
          const cached: RepoStats = JSON.parse(cachedRaw);
          if (Date.now() - cached.lastChecked < cacheTtlMs) {
            setData(cached);
            setLoading(false);
            return;
          }
        } catch {
          /* ignore parse */
        }
      }

      const token = import.meta.env.VITE_GITHUB_TOKEN as string | undefined;
      const headers: Record<string, string> = {
        Accept: "application/vnd.github+json",
      };
      if (token) headers.Authorization = `Bearer ${token}`;

      const repoUrl = `https://api.github.com/repos/${owner}/${repo}`;
      const releaseUrl = `https://api.github.com/repos/${owner}/${repo}/releases/latest`;

      const [repoRes, releaseRes] = await Promise.all([
        fetch(repoUrl, { headers }),
        fetch(releaseUrl, { headers }),
      ]);

      if (!repoRes.ok)
        throw new Error(`Repo request failed: ${repoRes.status}`);

      let latestRelease: string | undefined;
      if (releaseRes.ok) {
        const releaseJson = await releaseRes.json();
        latestRelease = releaseJson.tag_name || releaseJson.name;
      } else if (releaseRes.status !== 404) {
        console.warn("Release request failed", releaseRes.status);
      }

      const repoJson = await repoRes.json();
      const newData: RepoStats = {
        stars: repoJson.stargazers_count ?? 0,
        forks: repoJson.forks_count ?? 0,
        latestRelease,
        lastChecked: Date.now(),
      };
      setData(newData);
      localStorage.setItem(storageKey, JSON.stringify(newData));
      setLoading(false);
    } catch (e: unknown) {
      console.error(e);
      let msg = "Failed to load";
      if (e instanceof Error) msg = e.message;
      setError(msg);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => fetchData(), refreshIntervalMs);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [owner, repo, refreshIntervalMs, cacheTtlMs]);

  if (loading && !data) {
    return (
      <div className={`flex gap-4 text-sm text-gray-300 ${className}`}>
        Loading repo stats...
      </div>
    );
  }
  if (error && !data) {
    return (
      <div className={`flex gap-2 text-xs text-red-400 ${className}`}>
        Failed to load stats
      </div>
    );
  }

  return (
    <div
      className={`flex flex-wrap items-center justify-center text-center md:justify-start md:text-left gap-4 md:gap-6 w-full text-base md:text-lg font-medium ${className}`}
    >
      <a
        href={`https://github.com/${owner}/${repo}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View stargazers on GitHub"
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-yellow-400/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/60 transition-colors cursor-pointer"
        title="GitHub Stars"
      >
        <span className="text-yellow-400 text-xl leading-none">★</span>
        <span className="text-gray-300">Stars:</span>
        <span className="text-white tabular-nums">
          {data?.stars.toLocaleString()}
        </span>
      </a>
      <a
        href={`https://github.com/${owner}/${repo}/fork`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View forks on GitHub"
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 transition-colors cursor-pointer"
        title="GitHub Forks"
      >
        <span className="text-blue-400 text-xl leading-none">⑂</span>
        <span className="text-gray-300">Forks:</span>
        <span className="text-white tabular-nums">
          {data?.forks.toLocaleString()}
        </span>
      </a>
      {data?.latestRelease && (
        <a
          href={`https://github.com/${owner}/${repo}/releases/latest`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View latest release on GitHub"
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-400/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400/60 transition-colors cursor-pointer"
          title="Latest Release"
        >
          <span className="text-green-400">Release:</span>
          <span className="text-white">{data.latestRelease}</span>
        </a>
      )}
    </div>
  );
};

export default GitHubRepoBadge;
