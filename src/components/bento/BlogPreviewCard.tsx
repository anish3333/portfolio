import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ExternalLink, Clock, BookOpen } from "lucide-react"

export function BlogPreviewCard() {
  const posts = [
    {
      title: "Building Scalable React Applications",
      date: "2 days ago",
      readTime: "5 min read"
    },
    {
      title: "The Future of Web Development",
      date: "1 week ago",
      readTime: "8 min read"
    }
  ]

  return (
    <Card className="border-none p-6 transition-all h-full duration-300 hover:scale-[1.02] bg-zinc-800 text-zinc-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Recent Blog Posts</h2>
        <Button variant="ghost" size="sm" className="flex items-center gap-1 text-zinc-300 hover:text-zinc-100">
          View All <ExternalLink className="w-4 h-4" />
        </Button>
      </div>
      <div className="space-y-4">
        {posts.map((post, i) => (
          <div key={i} className="group cursor-pointer">
            <h3 className="font-medium group-hover:text-purple-400 transition-colors">
              {post.title}
            </h3>
            <div className="flex items-center gap-4 text-sm text-zinc-400 mt-1">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <BookOpen className="w-3 h-3" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

