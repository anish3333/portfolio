import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import { ProjectInterface } from "@/constants/projects";
import DisplayProjectCategory from "./DisplayProjectCategory";

interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative p-6 bg-third-1 text-first-1  rounded-lg h-full">
      <div className="h-full flex flex-col justify-evenly flex-grow gap-3  space-y-3">
        <div>
        <h5 className="flex-start text-2xl font-bold capitalize tracking-tight ">
          {project.id.replace(/-/g, " ")}
        </h5>
        </div>
        <p className="line-clamp-3 font-normal">
          {project.shortDescription}
        </p>
        
        <DisplayProjectCategory category={project.category} />

        <Link href={`/projects/${project.id}`}>
          <Button variant={"default"} className=" bg-first-1 ">
            Read More
            <Icons.chevronRight className="w-4 ml-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
