import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const resources = [
  {
    title: "React Docs",
    description: "Comprehensive guide to learn React.",
    url: "https://react.dev",
  },
  {
    title: "Tailwind CSS",
    description: "Utility-first CSS framework for rapid UI development.",
    url: "https://tailwindcss.com",
  },
  {
    title: "JavaScript Info",
    description: "Detailed information and tutorials on JavaScript.",
    url: "https://javascript.info",
  },
];

export function ResourceLinksCard() {
  return (
    <Card className="rounded-xl p-4 transition-all duration-300 border-none hover:scale-[1.01] bg-zinc-800 text-zinc-100 h-full">
      <span className="text-2xl font-bold text-zinc-100">
          Resources 
        </span>
      <div className="flex flex-col h-full space-y-4 mt-1">
        {resources.map((resource, index) => (
          <a
            key={index}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col p-4 rounded-xl bg-opacity-20 bg-slate-400 hover:bg-opacity-30 transition-all duration-300"
          >
            <div className="flex items-center space-x-2">
              <ExternalLink className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
              <h3 className="text-sm font-semibold tracking-wide">{resource.title}</h3>
            </div>
            <p className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
              {resource.description}
            </p>
          </a>
        ))}
      </div>
    </Card>
  );
}
