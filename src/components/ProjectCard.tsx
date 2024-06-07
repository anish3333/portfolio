import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import { ProjectInterface } from "@/constants";
import DisplayProjectCategory from "./DisplayProjectCategory";

interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative p-6 bg-[#5A72A0]  rounded-lg ">
      <div className="h-full flex flex-col justify-end flex-grow gap-3  space-y-3">
        <div>
        <h5 className="text-2xl font-bold capitalize tracking-tight text-white-1">
          {project.id.replace(/-/g, " ")}
        </h5>
        </div>
        <p className="line-clamp-3 font-normal  text-gray-200">
          {project.shortDescription}
        </p>
        
        <DisplayProjectCategory category={project.category} />

        <Link href={`/projects/${project.id}`}>
          <Button variant={"default"} className=" bg-[#1A2130] text-white-1">
            Read More
            <Icons.chevronRight className="w-4 ml-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
