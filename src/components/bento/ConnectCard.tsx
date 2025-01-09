import { Card } from "@/components/ui/card";
import { Twitter, Instagram, Linkedin, Github } from "lucide-react";

const socialLinks = [
  {
    platform: "Twitter",
    handle: "@anish__awasthi",
    url: "https://x.com/anish__awasthi",
    icon: Twitter,
  },
  {
    platform: "Instagram",
    handle: "@anish_awasthi",
    url: "https://www.instagram.com/anish_awasthi",
    icon: Instagram,
  },
  {
    platform: "LinkedIn",
    handle: "@anish3333",
    url: "https://linkedin.com/in/anish3333",
    icon: Linkedin,
  },
  {
    platform: "LinkedIn",
    handle: "@anish3333",
    url: "https://github.com/anish3333",
    icon: Github,
  },
];

export function ConnectCard() {
  return (
    <Card className="p-6 border-none transition-all duration-300 hover:scale-[1.01] bg-zinc-800 text-zinc-100 h-full">
      <h2 className="font-semibold mb-4">Follow Me</h2>
      <div className="space-y-3 flex lg:flex-col md:flex-row md:flex-wrap">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.platform}
              href={link.url}
              className="flex items-center justify-start gap-2 text-sm hover:text-purple-400 bg-zinc-700 rounded-lg p-[6px]"
            >
              <Icon className="w-6 h-6 bg-zinc-800 p-1 rounded-md" />
              <span className="lg:hidden">{link.handle}</span>
              <span className="max-lg:hidden">{link.platform}</span>

            </a>
          );
        })}
      </div>
    </Card>
  );
}