import { Card } from "@/components/ui/card"

export function GitHubStatsCard() {
  return (
    <Card className="p-4 border-none transition-all duration-300 hover:scale-105 bg-zinc-800 text-zinc-100">
      <h3 className="font-semibold mb-2">GitHub</h3>
      <div className="text-sm">
        <p>Repos: 25</p>
        <p>Stars: 45</p>
        <p>Commits: 1.2k</p>
      </div>
    </Card>
  )
}

