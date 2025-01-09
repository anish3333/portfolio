"use client";
import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Github, Loader2 } from "lucide-react";

export const GitHubStatsCard = () => {
  const [stats, setStats] = useState<any>({
    repos: 0,
    commits: 0,
  });
  const [loading, setLoading] = useState(true);
  const username = "anish3333"; // Replace with your GitHub username
  const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  useEffect(() => {
    const fetchGitHubStats = async () => {
      const localStats = JSON.parse(localStorage.getItem("gitStats") || "{}");
      if (localStats?.timestamp) {
        const prevFetch = localStats.timestamp;
        const currentFetch = Date.now();
        const diff = currentFetch - prevFetch;
        if (diff < 1000 * 60 * 60 * 24 * 7) {
          // Use cached stats if within 7 days
          setStats(localStats);
          setLoading(false);
          return;
        }
      }

      try {
        const query = `
          query ($username: String!) {
            user(login: $username) {
              repositories(first: 100, ownerAffiliations: OWNER) {
                totalCount
                nodes {
                  defaultBranchRef {
                    target {
                      ... on Commit {
                        history(first: 0) {
                          totalCount
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `;

        const response = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query, variables: { username } }),
        });

        const data = await response.json();
        console.log(data)
        const repos = data.data.user.repositories.nodes;

        const totalCommits = repos.reduce((acc: number, repo: any) => {
          return (
            acc + (repo.defaultBranchRef?.target?.history?.totalCount || 0)
          );
        }, 0);

        const newStats = {
          repos: data.data.user.repositories.totalCount,
          commits: totalCommits,
          timestamp: Date.now(),
        };

        // Update state and localStorage
        setStats(newStats);
        localStorage.setItem("gitStats", JSON.stringify(newStats));
        console.log("Updated stats:", newStats);
      } catch (error) {
        console.error("Failed to fetch GitHub stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  if (loading) {
    return (
      <Card className="p-4 border-none transition-all duration-300 bg-zinc-800 text-zinc-100 min-h-[160px] flex items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin" />
      </Card>
    );
  }

  return (
    
    <Card className="p-6 border-none rounded-2xl transition-all duration-300 bg-zinc-50 hover:shadow-xl relative">
      <div className="absolute top-4 right-4 ">
        <Github className="w-5 h-5 text-zinc-600" />
      </div>
      <div className="flex flex-col gap-4">
        {/* Total Repositories */}
        <div className="p-4 rounded-lg bg-white">
          <h3 className="text-sm text-zinc-600">Total Repositories</h3>
          <p className="text-2xl font-bold">{stats.repos || 0}</p>
        </div>

        {/* Total Commits */}
        <div className="p-4 rounded-lg bg-green-100">
          <h3 className="text-sm text-zinc-600">Total Commits</h3>
          <p className="text-2xl font-bold">{stats.commits || "N/A"}</p>
        </div>

        {/* GitHub Profile */}
        <div className="p-4 rounded-lg bg-white">
          <h3 className="text-sm text-zinc-600">GitHub Profile</h3>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
            className="text-2xl font-bold"
          >
            {username}
          </a>
        </div>
      </div>
    </Card>
  );
};
