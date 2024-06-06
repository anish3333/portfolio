import { featuredProjects } from "@/constants";
import React from "react";
import ProjectCard from "../ProjectCard";

const Projects = () => {
  return (
    <section>
      <div className="mx-auto grid sm:grid-cols-2 md:max-w-[64rem] lg:grid-cols-3 gap-5  h-full w-full ">
        {featuredProjects.map((exp) => {
          return <ProjectCard project={exp} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
