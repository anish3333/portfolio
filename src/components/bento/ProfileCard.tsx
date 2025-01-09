import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, MapPin, School, MessageCircle, Globe, TrophyIcon } from "lucide-react";
import Link from "next/link";

const tags = [
  { icon: MapPin, label: "Mumbai, India" },
  { icon: Globe, label: "Web Developer" },
  { icon: TrophyIcon, label: "SIH 2024" },
  { icon: School, label: "TSEC 2026" },
  { icon: School, label: "English, Hindi & Marathi" },
  { icon: School, label: "Mumbai University" },
  { icon: School, label: "Third Year CSE" },
];

export function ProfileCard() {
  return (
    <Card className="bg-zinc-800 border-none transition-all p-6 rounded-2xl hover:scale-[1.01] h-full text-zinc-100">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-4">
          {/* Profile Image */}
          <div className="w-16 h-16 rounded-2xl overflow-hidden bg-purple-600 flex-shrink-0">
            <img
              src="./images/anish.png"
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
              I'm a <span className="text-purple-400">Software Engineer</span>{" "}
            </p>
          </div>
        </div>

        {/* Resume Button */}
        <div >
          <Link href="/pdfs/resume.pdf" target="_blank"
          className="hover:text-zinc-100 hover:bg-zinc-700 p-1 flex items-center gap-2">
            <span className="text-zinc-400">Resume</span>
              <Download className="w-4 h-4 text-zinc-400" />
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag, index) => (
        <div
          key={index}
          className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-600"
        >
          <tag.icon className="w-4 h-4" />
          <span className="text-sm">{tag.label}</span>
        </div>
      ))}
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
