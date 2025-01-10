import { Card } from "@/components/ui/card";
import { skillsInterface } from "@/constants";
import { BentoSkills as skills } from "@/constants/bento";
import Marquee from "../magicui/marquee";

export function MarqueeSkill({ skills, reverse }: { skills: skillsInterface[]; reverse?: boolean }) {
  return (
    <Marquee reverse={reverse} pauseOnHover className="w-full rounded-[19px]">
      <div className="flex flex-wrap overflow-hidden space-x-[14px]">
        {skills.map((skill, id) => (
          <div
            key={skill.name}
            className="flex items-center w-fit bg-zinc-700 px-3 py-[5px] rounded-lg text-sm hover:bg-zinc-600 transition-colors duration-300"
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
    <Card className="rounded-2xl p-4 border-none  bg-zinc-800 text-zinc-100">
      <h3 className="font-semibold mb-2">Skills</h3>
      <div className="flex flex-wrap gap-1">
        {skills.map((line, id) => (
            <MarqueeSkill skills={line} reverse={id % 2 === 0} />
        ))}
      </div>
    </Card>
  );
}
