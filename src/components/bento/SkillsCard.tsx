import { Card } from "@/components/ui/card";
import { skills, skillsInterface } from "@/constants";
import { BentoSkills } from "@/constants/bento";
import Marquee from "../magicui/marquee";

function NormalSkillCard() {
  return (
    <div>
      <h3 className="font-semibold mb-2">Skills</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center bg-zinc-700 px-3 py-2 rounded-lg text-md hover:bg-zinc-600 transition-colors duration-300"
          >
            <skill.icon className="mr-1 text-sm" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MarqueeSkill({
  skills,
  reverse,
}: {
  skills: skillsInterface[];
  reverse?: boolean;
}) {
  return (
    <Marquee reverse={reverse} pauseOnHover className="w-full rounded-md p-0 cursor-pointer">
      <div className="flex flex-wrap overflow-hidden space-x-[10px] items-center">
        {skills.map((skill, id) => (
          <div
            key={id}
            className="flex items-center w-fit  text-third-1 px-3 py-[5px] rounded-lg text-md hover:bg-second-1 hover:text-third-1 transition-colors duration-300"
          >
            <skill.icon className="mr-1 text-sm" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </Marquee>
  );
}

export function SkillsCard() {
  return (
    <Card className="rounded-2xl p-4 border-none shadow-xl bg-first-1 text-zinc-100">
      <div className="max-lg:hidden">
        <h3 className="font-bold text-2xl mb-2">Skills</h3>
        <div className="flex flex-wrap gap-1">
          {BentoSkills.map((line, id) => (
            <div className="p-2 overflow-hidden" key={id}>

              <MarqueeSkill key={id}skills={line} reverse={id % 2 === 0} />
            </div>
          ))}
        </div>
      </div>
      <div className="hidden max-lg:block">
        <NormalSkillCard />
      </div>
    </Card>
  );
}
