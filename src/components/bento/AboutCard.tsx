import { Card } from "@/components/ui/card"

export function AboutCard() {
  return (
    <Card className="p-6 transition-all duration-300 hover:scale-[1.01] bg-first-1 text-zinc-100 border-none">
      <h2 className="text-xl font-semibold mb-4">About Me</h2>
      <p className="text-zinc-300">
        Passionate software engineer with 5+ years of experience in building scalable web applications.
        Specialized in React and Next.js, with a strong foundation in TypeScript and modern web technologies.
        Always eager to learn and contribute to innovative projects.
      </p>
    </Card>
  )
}

