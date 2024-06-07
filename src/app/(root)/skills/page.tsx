import SkillsCard from "@/components/SkillCard";
import { skillsSorted } from "@/constants";
import React from "react";

const page = () => {
  return (
    <section className=" mt-8 flex flex-col gap-9">
      <div className="text-5xl max-w-[64rem] font-bold text-white-1">Skills</div>
      <hr />
      <div className="text-xl text-white-1 font-semibold h-full w-full">
        <SkillsCard skills={skillsSorted} />
      </div>
    </section>
  );
};

export default page;
