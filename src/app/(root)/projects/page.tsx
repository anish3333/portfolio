import BlurFade from "@/components/magicui/blur-fade";
import ProjectCard from "@/components/ProjectCard";
import { Projects } from "@/constants/projects";
import React from "react";

const page = () => {
  return (
    <section className=" mt-8 flex flex-col gap-9 h-full">
      <div className="text-5xl max-w-[64rem] font-bold text-white-1">
        Projects
      </div>
      <hr />
      <div className=" text-white-1 font-semibold h-full w-full">
        <div className="mx-auto grid sm:grid-cols-2 md:max-w-[64rem] lg:grid-cols-3 gap-5  h-full w-full ">
          {Projects.map((exp, id) => {
            return (
              <BlurFade key={exp.id} delay={0.25 + id * 0.05} inView>
                <div className="h-full">
                  <ProjectCard key={exp.id} project={exp} />
                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default page;
