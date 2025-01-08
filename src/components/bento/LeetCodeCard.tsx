import { Card } from "@/components/ui/card"

export function LeetCodeCard() {
  return (
    <Card className="p-4 border-none transition-all duration-300 hover:scale-105 bg-zinc-800 text-zinc-100">
      <h3 className="font-semibold mb-2">LeetCode</h3>
      <div className="text-sm">
        <p>Problems: 150</p>
        <p>Rank: 45,234</p>
        <p>Streak: 7 days</p>
      </div>
    </Card>
  )
}

