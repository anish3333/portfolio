import React from "react";
import Rating from "@/components/Rating";
import BlurFade from "./magicui/blur-fade";



interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

interface SkillsCardProps {
    skills: skillsInterface[];
}


export default function SkillsCard({ skills }: SkillsCardProps) {
    return (
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] lg:grid-cols-3">
            {skills.map((skill, id) => (
                <BlurFade key={skill.description} delay={0.25 + id * 0.05} inView>
                <div
                    key={id}
                    className="relative bg-third-1 text-first-1 overflow-hidden rounded-lg border-none bg-background p-2"
                >
                    <div className="flex h-[230px] flex-col justify-between rounded-md p-6 sm:h-[230px]">
                        <skill.icon size={50} classname="hover:text-second-1"/>
                        <div className="space-y-2">
                            <h3 className="font-bold">{skill.name}</h3>
                            <p className="text-sm text-muted-foreground">
                                {skill.description}
                            </p>
                            <Rating stars={skill.rating} />
                        </div>
                    </div>
                </div>
                </BlurFade>
            ))}
        </div>
    );
}





