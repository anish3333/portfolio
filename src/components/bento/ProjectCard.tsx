import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function ProjectCard() {
  return (
    <Card className="p-6 border-none transition-all duration-300 hover:scale-[1.02] bg-zinc-800 text-zinc-100">
      <h2 className="text-xl font-semibold mb-4">Featured Projects</h2>
      <div className="space-y-4">
        <div className="relative h-40 rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg"
            alt="Project 1"
            fill
            className="object-cover"
          />
        </div>
        <h3 className="font-semibold">E-commerce Platform</h3>
        <p className="text-sm text-zinc-300">
          A full-stack e-commerce solution built with Next.js and Stripe
        </p>
        <Button variant="outline" size="sm" className="text-zinc-100 border-zinc-600 hover:bg-zinc-700">Read More</Button>
      </div>
    </Card>
  )
}

