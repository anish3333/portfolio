import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import { ProjectInterface} from "@/constants";


interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative p-6 bg-[#5A72A0]  rounded-lg ">
      <div className="flex flex-col gap-3 space-y-3">
        <h5 className="text-2xl font-bold tracking-tight  text-white-1">
          {project.companyName}
        </h5>
        <p className="line-clamp-3 font-normal  text-gray-200">
          {project.shortDescription}
        </p>
        <div className="flex gap-2 flex-wrap">
          {project.category.map((cat : string) => {
            return (
              <span
                key={cat}
                className="inline-block bg-white-1 rounded-full px-3 py-1 text-sm font-semibold text-gray-600"
              >
                {cat}
              </span>
            );
          })}
        </div>

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
