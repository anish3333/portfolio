import Image from "next/image";
import React from "react";
import { SocialLinks } from "@/constants/social";
const Footer = () => {
  return (
    <div className="text-center flex flex-col justify-between text-sm text-gray-400 font-light">
      <div className="mb-1">
        © 2024 Anish Awasthi. All rights reserved.
      </div>

      <div className="flex flex-wrap gap-x-2 gap-y-1 justify-center">
        {SocialLinks.map((s) => {
          return (
            <a
              key={s.name}
              target="_blank"
              href={s.link}
            >
            <div className="flex gap-1">
              <Image src={s.icon} alt={s.name} width={17} height={17}/>
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
