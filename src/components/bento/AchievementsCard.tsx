import { Card } from "@/components/ui/card"

export function AchievementsCard() {
  return (
    <Card className="p-6 transition-all duration-300 border-none hover:scale-[1.01] bg-zinc-800 text-zinc-100 h-full">
      <h2 className="text-xl font-semibold mb-4">Achievements</h2>
      <ul className="space-y-2 text-sm">
        <li>🏆 1st Place Hackathon 2023</li>
        <li>📜 AWS Certified Developer</li>
        <li>🌟 Open Source Contributor</li>
      </ul>
    </Card>
  )
}

