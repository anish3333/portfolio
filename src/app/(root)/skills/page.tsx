import ElasticLine from "@/components/fancy/elastic-line";
import SkillsCard from "@/components/SkillCard";
import { skillsSorted } from "@/constants";
import React from "react";

const page = () => {
  return (
    <section className="mt-8 flex flex-col">
      <div className="text-5xl max-w-[64rem] font-bold text-third-1">
        Skills
      </div>

      <div className="w-full mt-2 mb-4 text-third-1">
        <ElasticLine
          releaseThreshold={50}
          strokeWidth={1.5}
          animateInTransition={{
            type: "spring",
            stiffness: 100,
            damping: 40,
            delay: 0.5,
          }}
        />
      </div>

      <div className="mt-2 text-xl text-white-1 font-semibold w-full">
        <SkillsCard skills={skillsSorted} />
      </div>
    </section>
  );
};

export default page;