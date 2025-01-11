import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { ExternalLink } from 'lucide-react'

export function BlogPreviewCard() {
  return (
    <Card className="border-none p-6 transition-all h-full duration-300 shadow-xl bg-first-1 text-zinc-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Recent Blog Posts</h2>
        <Button variant="ghost" size="sm" className="flex items-center gap-1 text-third-1 hover:text-zinc-100">
          View All <ExternalLink className="w-4 h-4" />
        </Button>
      </div>
      <div className="space-y-4">
        <Skeleton className="h-4 w-3/4 bg-third-1" />
        <Skeleton className="h-4 w-1/2 bg-third-1" />
        <Skeleton className="h-4 w-2/3 bg-third-1" />
        <Skeleton className="h-4 w-1/3 bg-third-1" />
      </div>
      <p className="mt-4 text-sm text-third-1 italic">Coming soon...</p>
    </Card>
  )
}

