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
    <Card className="rounded-xl p-4 transition-all duration-300 border-none hover:scale-[1.01] bg-first-1 text-third-1 h-full shadow-xl">
      <span className="text-2xl font-bold text-third-1">Resources</span>
      <div className="flex flex-col h-full space-y-4 mt-2">
        {resources.map((resource, index) => (
          <div key={index} >
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col p-4 rounded-xl  bg-third-1 hover:bg-second-1 text-first-1 hover:text-third-1"
            >
              <div className="flex items-center justify-end space-y-2 mb-1">
                <ExternalLink className="w-5 h-5  " />
              </div>
              <p className="lg:text-xs max-lg:text-sm transition-colors ">
                {resource.description}
              </p>
            </a>
          </div>
        ))}
      </div>
    </Card>
  );
}
