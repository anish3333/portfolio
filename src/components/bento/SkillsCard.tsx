import { Card } from "@/components/ui/card"
import { skills } from "@/constants"

export function SkillsCard() {
  const highlights = skills.slice(0, 10) 
  return (
    <Card className="rounded-2xl p-4 border-none transition-all duration-300 hover:scale-[1.01] bg-zinc-800 text-zinc-100">
      <h3 className="font-semibold mb-2">Skills</h3>
      <div className="flex flex-wrap gap-2">
        {highlights.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center bg-zinc-700 px-3 py-1 rounded-lg text-xs hover:bg-zinc-600 transition-colors duration-300"
          >
            <skill.icon className="mr-1 text-sm" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </Card>
  )
}
