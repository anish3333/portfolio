import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { ExternalLink } from 'lucide-react'

export function BlogPreviewCard() {
  return (
    <Card className="border-none p-6 transition-all h-full duration-300 hover:scale-[1.01] bg-zinc-800 text-zinc-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Recent Blog Posts</h2>
        <Button variant="ghost" size="sm" className="flex items-center gap-1 text-zinc-300 hover:text-zinc-100">
          View All <ExternalLink className="w-4 h-4" />
        </Button>
      </div>
      <div className="space-y-4">
        <Skeleton className="h-4 w-3/4 bg-zinc-700" />
        <Skeleton className="h-4 w-1/2 bg-zinc-700" />
        <Skeleton className="h-4 w-2/3 bg-zinc-700" />
        <Skeleton className="h-4 w-1/3 bg-zinc-700" />
      </div>
      <p className="mt-4 text-sm text-zinc-400 italic">Coming soon...</p>
    </Card>
  )
}

