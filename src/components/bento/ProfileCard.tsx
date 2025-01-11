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
    <Card className="bg-first-1 border-none p-6 rounded-2xl transition-all shadow-xl duration-300 h-full text-zinc-100">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-4">
          {/* Profile Image */}
          <div className="w-20 h-20 rounded-2xl overflow-hidden bg-second-1 flex-shrink-0">
            <img
              src="./images/anish-purple.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name and Status */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
            </div>
            <h1 className="text-zinc-100 text-3xl font-semibold">
              Anish Awasthi
            </h1>
            <p className="text-zinc-400 text-sm">
              I'm a <span className="text-second-1">Software Engineer</span>{" "}
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
          className="flex items-center gap-2 px-3 py-1 rounded-full bg-second-1 text-third-1"
        >
          <tag.icon className="w-4 h-4"/>
          <span className="text-sm">{tag.label}</span>
        </div>
      ))}
    </div>

      {/* Contact Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <Button
          variant="secondary"
          className="w-full bg-third-1 text-first-1 hover:scale-[1.02] duration-200 transition-all"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Telegram Me
        </Button>
        <Button
          variant="secondary"
          className="w-full bg-third-1 hover:scale-[1.02] duration-200 transition-all text-first-1"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          WhatsApp Me
        </Button>
      </div>
    </Card>
  );
}
