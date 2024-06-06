import Hero from "@/components/Hero";
import SkillsCard from "@/components/SkillCard";
import Contact from "@/components/pages/contact";
import Project from "@/components/pages/projects";
import { Button } from "@/components/ui/button";
import { frontPageSkills} from "@/constants";
import Link from "next/link";
import React from "react";

const RootPage = () => {
  return (
    <>
      <div className="flex flex-col gap-20 h-full">
        <div className="mx-auto max-w-[64rem] mb-10">
          <Hero />
        </div>
        <div className="text-xl text-white-1 font-semibold h-full w-full">
          <div className=" flex justify-center text-5xl mb-7 font-bold ">
            Skills
          </div>
          <SkillsCard skills={frontPageSkills} />
          <div className="flex mt-5 justify-center">
            <Button
              asChild
              className="font-medium px-4 py-4 bg-[#1A2130] hover:bg-white-1 hover:text-black rounded-lg border border-white-1 text-white-1"
            >
              <Link href="/skills">
                <p>View All</p>
              </Link>
            </Button>
          </div>
        </div>

        <div>
          <div className=" text-center text-5xl mb-7 font-bold text-white-1">
            Featured Projects
          </div>
          <Project />
          <div className="flex mt-5 justify-center">
            <Button
              asChild
              className="font-medium px-4 py-4 bg-[#1A2130] hover:bg-white-1 hover:text-black rounded-lg border border-white-1 text-white-1"
            >
              <Link href="/projects">
                <p>View All</p>
              </Link>
            </Button>
          </div>
        </div>


        <div>
          <Contact />
        </div>
      </div>
    </>
  );
};

export default RootPage;
