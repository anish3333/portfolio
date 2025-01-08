import { Card } from "@/components/ui/card"

export function SkillsCard() {
  return (
    <Card className="p-4 border-none transition-all duration-300 hover:scale-105 bg-zinc-800 text-zinc-100">
      <h3 className="font-semibold mb-2">Skills</h3>
      <div className="flex flex-wrap gap-2">
        <span className="bg-zinc-700 px-2 py-1 rounded text-xs">React</span>
        <span className="bg-zinc-700 px-2 py-1 rounded text-xs">Next.js</span>
        <span className="bg-zinc-700 px-2 py-1 rounded text-xs">TypeScript</span>
      </div>
    </Card>
  )
}

