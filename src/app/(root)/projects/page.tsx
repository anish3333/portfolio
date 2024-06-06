
import ProjectCard from "@/components/ProjectCard";
import { Projects } from "@/constants";
import React from "react";


const page = () => {
  return (
    <section className=" mt-8 flex flex-col gap-9">
      <div className="text-5xl max-w-[64rem] font-bold text-white-1">
        Projects
      </div>
      <hr />
      <div className=" text-white-1 font-semibold h-full w-full">
        <div className="mx-auto grid sm:grid-cols-2 md:max-w-[64rem] lg:grid-cols-3 gap-5  h-full w-full ">
          {Projects.map((exp) => {
            return <ProjectCard project={exp} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default page;
