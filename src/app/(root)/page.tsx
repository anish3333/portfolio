
import { SkillsCard } from "@/components/bento/SkillsCard"
import { LeetCodeCard } from "@/components/bento/LeetCodeCard"
import { GitHubStatsCard } from "@/components/bento/GitHubStatsCard"
import { ProfileCard } from "@/components/bento/ProfileCard"
import { AboutCard } from "@/components/bento/AboutCard"
import { ProjectCard } from "@/components/bento/ProjectCard"
import { AchievementsCard } from "@/components/bento/AchievementsCard"
import { ConnectCard } from "@/components/bento/ConnectCard"
import { BlogPreviewCard } from "@/components/bento/BlogPreviewCard"

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-900 text-zinc-100 border-none">
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row gap-4 max-w-7xl mx-auto">
          {/* Left Section */}
          <div className="flex-1 space-y-4">
            {/* Top Row - Small Boxes */}
            <div className="grid grid-cols-3 gap-4">
              <SkillsCard />
              <LeetCodeCard />
              <GitHubStatsCard />
            </div>

            <ProfileCard />
            <AboutCard />
          </div>

          {/* Right Section */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2">
                <ProjectCard />
              </div>
              <div>
                <AchievementsCard />
              </div>
            </div>

            <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4">
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
  )
}

