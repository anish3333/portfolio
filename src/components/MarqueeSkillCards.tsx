import React from "react";
import Rating from "@/components/Rating";
import Marquee from "./magicui/marquee";



interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

interface SkillsCardProps {
    skills: skillsInterface[];
}


export default function MarqueeSkillCards({ skills }: SkillsCardProps) {
    return (
        <div className="mx-auto  md:max-w-[64rem] ">
            <Marquee speed={100} className="w-full rounded-[19px]">
            {skills.map((skill, id) => (
                <div
                    key={id}
                    className="relative bg-[#5A72A0] overflow-hidden rounded-lg border-none bg-background p-2 w-[300px]"
                >
                    <div className="flex h-[230px] flex-col justify-between rounded-md p-6 sm:h-[230px]">
                        <skill.icon size={50} />
                        <div className="space-y-2">
                            <h3 className="font-bold">{skill.name}</h3>
                            <p className="text-sm text-muted-foreground">
                                {skill.description}
                            </p>
                            <Rating stars={skill.rating} />
                        </div>
                    </div>
                </div>
            ))}
        </Marquee>
        </div>
    );
}





