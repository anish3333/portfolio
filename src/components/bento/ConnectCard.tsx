import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export function ConnectCard() {
  return (
    <Card className="p-6 border-none transition-all duration-300 hover:scale-105 bg-zinc-800 text-zinc-100">
      <h2 className="text-xl font-semibold mb-4">Connect</h2>
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Direct Contact</h3>
          <a href="mailto:john@example.com" className="flex items-center gap-2 text-sm hover:text-purple-400">
            <Mail className="w-4 h-4" />
            john@example.com
          </a>
          <a href="tel:+1234567890" className="flex items-center gap-2 text-sm hover:text-purple-400">
            <Phone className="w-4 h-4" />
            (123) 456-7890
          </a>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Social Links</h3>
          <a href="https://linkedin.com" className="flex items-center gap-2 text-sm hover:text-purple-400">
            <Linkedin className="w-4 h-4" />
            LinkedIn Profile
          </a>
          <a href="https://github.com" className="flex items-center gap-2 text-sm hover:text-purple-400">
            <Github className="w-4 h-4" />
            GitHub Profile
          </a>
        </div>
      </div>
    </Card>
  )
}

