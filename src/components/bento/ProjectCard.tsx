import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
}

export function ProjectCard({ title, image, description }: ProjectCardProps) {
  return (
    <Card className="border-none bg-transparent text-third-1 h-full">
      <div className="space-y-4">
        <div className="relative h-48 rounded-lg overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-third-1">{description}</p>
        {/* <Button
          variant="outline"
          size="sm"
          className="text-zinc-100 border-zinc-600 hover:bg-zinc-700"
        >
          Read More
        </Button> */}
      </div>
    </Card>
  );
}
