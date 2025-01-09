"use client";
import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import {
  Trophy,
  Target,
  Flame,
  Code,
  Loader2,
  AlertCircle,
} from "lucide-react";

interface LeetCodeUserProfile {
  username: string;
  ranking: number;
  totalSolved: number;
  rating: number;
}

interface ApiError {
  message: string;
}

export const LeetCodeCard = () => {
  const [stats, setStats] = useState<LeetCodeUserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const username = "anish-awasthi";
  const API_BASE_URL = "https://alfa-leetcode-api.onrender.com";

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      const localStats = JSON.parse(localStorage.getItem("lcStats") || "{}");
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
        const [profileRes, contestRes] = await Promise.all([
          fetch(`${API_BASE_URL}/userProfile/${username}`),
          fetch(`${API_BASE_URL}/${username}/contest`),
        ]);

        if (!profileRes.ok || !contestRes.ok) {
          throw new Error("Failed to fetch LeetCode stats");
        }

        const profileData = await profileRes.json();
        const contestData = await contestRes.json();
        // console.log(contestData);
        console.log(profileData);
        const newStats = {
          username: username,
          ranking: profileData.ranking,
          totalSolved: profileData?.totalSolved,
          rating: contestData?.contestRating,
        };

        setStats(newStats);
        localStorage.setItem(
          "lcStats",
          JSON.stringify({
            ...newStats,
            timestamp: Date.now(),
          })
        );
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch stats");
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeStats();
  }, [username]);

  if (loading) {
    return (
      <Card className="p-4 bg-zinc-800 border-none text-white min-h-[160px] flex items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin text-zinc-400" />
      </Card>
    );
  }

  if (error || !stats) {
    return (
      <Card className="p-4 bg-zinc-800 text-white min-h-[160px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <AlertCircle className="w-6 h-6 text-red-400" />
          <span className="text-sm text-red-400">Failed to load stats</span>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 border-none rounded-2xl transition-all duration-300 bg-zinc-50 hover:shadow-xl relative">
      {/* Logo in the top-right corner */}
      <div className="absolute top-4 right-4">
        <Code className="w-5 h-5 text-zinc-600" />
      </div>

      <div className="flex flex-col gap-4">
        {/* Total Problems Solved */}
        <div className="p-4 rounded-lg bg-white">
          <h3 className="text-sm text-zinc-600">Problems Solved</h3>
          <p className="text-2xl font-bold">{stats.totalSolved || 0}</p>
        </div>

        {/* Ranking */}
        <div className="p-4 rounded-lg bg-yellow-100">
          <h3 className="text-sm text-zinc-600">Ranking</h3>
          <p className="text-2xl font-bold">#{stats.ranking || "N/A"}</p>
        </div>

        {/* Rating */}
        <div className="p-4 rounded-lg bg-white">
          <h3 className="text-sm text-zinc-600">Rating</h3>
          <p className="text-2xl font-bold">{stats.rating || "N/A"}</p>
        </div>
      </div>
    </Card>
  );
};

export default LeetCodeCard;
