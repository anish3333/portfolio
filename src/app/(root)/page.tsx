"use client";

import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import SkillsCard from "@/components/SkillCard";
import ViewAllButton from "@/components/ViewAllButton";
import { frontPageSkills } from "@/constants";
import { featuredProjects } from "@/constants/projects";
import React from "react";

const RootPage = () => {
  return (
    <>
      <div className="flex flex-col gap-20 h-full">
        <div className="mx-auto max-w-[64rem] mb-10">
          <Hero />
        </div>
        <div className="text-xl text-white-1 font-semibold h-full w-full">
          <div className=" flex justify-center text-4xl mb-7 font-bold ">
            Skills
          </div>
          <SkillsCard skills={frontPageSkills} />
          <div className="flex mt-5 justify-center">
            <ViewAllButton href="/skills" />
          </div>
        </div>

        <div>
          <div className=" text-center text-4xl mb-7 font-bold text-white-1">
            Featured Projects
          </div>
          <section>
            <div className="mx-auto grid sm:grid-cols-2 md:max-w-[64rem] lg:grid-cols-3 gap-5  h-full w-full ">
              {featuredProjects.map((p) => {
                return <ProjectCard key={p.id} project={p} />;
              })}
            </div>
          </section>
          <div className="flex mt-5 justify-center">
            <ViewAllButton href="/projects" />
          </div>
        </div>

        <div>
          <div className=" text-center text-4xl mb-7 font-bold text-white-1">
            Contact Me
            <p className="text-sm font-normal mt-3 mb-10 text-gray-300">
              Please contact me directly at{" "}
              <a href="mailto:anishawasthi16@gmail.com" className="underline">
                anishawasthi16@gmail.com
              </a>{" "}
              or through this form.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default RootPage;
