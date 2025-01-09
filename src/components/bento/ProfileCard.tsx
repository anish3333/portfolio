import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, MapPin, School, MessageCircle, Globe } from "lucide-react";

export function ProfileCard() {
  return (
    <Card className="bg-zinc-800 border-none transition-all p-6 rounded-xl hover:scale-[1.02] h-fit text-zinc-100">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-4">
          {/* Profile Image */}
          <div className="w-16 h-16 rounded-2xl overflow-hidden bg-purple-600 flex-shrink-0">
            <img
              src="/placeholder.svg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name and Status */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-zinc-400 text-sm">Available To Work</span>
            </div>
            <h1 className="text-zinc-100 text-xl font-semibold">
              Anish Awasthi
            </h1>
            <p className="text-zinc-400 text-sm">
              I'm a <span className="text-purple-400">Designer</span>
            </p>
          </div>
        </div>

        {/* Resume Button */}
        <div className="flex items-center gap-2">
          <span className="text-zinc-400">Resume</span>
          <Button
            variant="ghost"
            size="icon"
            className="text-zinc-400 hover:text-zinc-100 hover:bg-zinc-700"
          >
            <Download className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-600">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">India</span>
        </div>

        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-600">
          <Globe className="w-4 h-4" />
          <span className="text-sm">English & Tamil</span>
        </div>

        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-600">
          <MessageCircle className="w-4 h-4" />
          <span className="text-sm">Software Engineer</span>
        </div>

        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-600">
          <School className="w-4 h-4" />
          <span className="text-sm">MIT University</span>
        </div>
      </div>

      {/* Contact Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <Button
          variant="secondary"
          className="w-full bg-zinc-700 hover:bg-zinc-600 text-zinc-100"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Telegram Me
        </Button>
        <Button
          variant="secondary"
          className="w-full bg-zinc-700 hover:bg-zinc-600 text-zinc-100"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          WhatsApp Me
        </Button>
      </div>
    </Card>
  );
}
