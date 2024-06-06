import Image from "next/image";
import React from "react";
import { SocialLinks } from "@/constants/social";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="text-center flex flex-col justify-between text-sm text-gray-400 font-light">
      <div className="">
        © 2024 Anish Awasthi. All rights reserved.
      </div>

      <div className="flex gap-4 justify-center">
        {SocialLinks.map((s) => {
          return (

            <a
              target="_blank"
              href={s.link}
            >
            <div className="flex gap-2">
              <Image src={s.icon} alt={s.name} width={15} height={15} className="filter grayscale-0"/>
              <p>{s.username}</p>
            </div>
            </a>
          );
        })}
      </div>
      
    </div>
  );
};

export default Footer;
