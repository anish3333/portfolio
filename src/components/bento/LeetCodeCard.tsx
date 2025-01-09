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
        // console.log(profileData);

        setStats({
          username: username,
          ranking: profileData.ranking,
          totalSolved: profileData?.totalSolved,
          rating: contestData?.contestRating,
        });
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
      <Card className="p-4 bg-zinc-800 text-white min-h-[160px] flex items-center justify-center">
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
    <Card className="p-5 bg-zinc-800 text-white hover:scale-105 border-none transition-all duration-300">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-1.5 bg-zinc-700 rounded-md">
          <Code className="w-4 h-4 text-zinc-300" />
        </div>
        <h3 className="font-semibold text-sm">LeetCode Stats</h3>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Target className="w-4 h-4 text-zinc-400" />
          <span className="text-sm">{stats?.totalSolved} problems solved</span>
        </div>

        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-zinc-400" />
          <span className="text-sm">Rank #{stats?.ranking}</span>
        </div>

        <div className="flex items-center gap-2">
          <Flame className="w-4 h-4 text-zinc-400" />
          <span className="text-sm">Rating: {stats?.rating}</span>
        </div>
      </div>
    </Card>
  );
};

export default LeetCodeCard;
