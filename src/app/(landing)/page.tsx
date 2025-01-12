"use client";

import {
  LeetCodeCard,
  GitHubStatsCard,
  ProfileCard,
  SkillsCard,
  ResourceLinksCard,
  ConnectCard,
  BlogPreviewCard,
  ProjectCarousel,
} from "@/components/bento";
import { useEffect } from "react";

export default function Page() {
  async function fetchData() {
    const response = await fetch("/api/");
    const data = await response.json();
    console.log(data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main className="min-h-screen text-zinc-100 flex items-center justify-center">
      <div className="container flex flex-col justify-center items-center p-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-7xl mx-auto">
          {/* Left Section */}
          <div className="grid lg:grid-rows-5 gap-4">
            {/* ProfileCard with 1/3 rowspan */}
            <div className="row-span-2">
              <ProfileCard />
            </div>

            {/* Below grid with 2/3 rowspan */}
            <div className="max-lg:hidden row-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <LeetCodeCard />
              <GitHubStatsCard />
              <SkillsCard />
            </div>

            <div className="lg:hidden row-span-3 grid grid-cols-1 sm:grid-cols-2  gap-4">
              <LeetCodeCard />
              <GitHubStatsCard />
            </div>
            <div className="lg:hidden">
              <SkillsCard />
            </div>
          </div>

          {/* Right Section */}
          <div className="grid lg:grid-rows-5 gap-4">
            {/* Top row with 2/3 rowspan */}
            <div className="row-span-3 grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2">
                {/* <ProjectCard /> */}
                <ProjectCarousel />
              </div>
              <div>
                <ResourceLinksCard />
              </div>
            </div>

            {/* Bottom row */}
            <div className="row-span-2 grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div>
                <ConnectCard />
              </div>
              <div className="lg:col-span-2">
                <BlogPreviewCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
