import Image from "next/image";
import React from "react";
import { SocialLinks } from "@/constants/social";

const Footer = () => {
  return (
    <div className="text-center flex flex-wrap gap-3 mx-auto justify-center items-centertext-sm text-gray-400 font-light">

      <div className="flex flex-wrap gap-x-2 gap-y-1 justify-center">
        {SocialLinks.map((s) => {
          return (
            <a
              key={s.name}
              target="_blank"
              href={s.link}
              className="transition-transform transform hover:scale-125"
            >
              <div className="flex gap-2 items-center">
                <Image src={s.icon} alt={s.name} width={25} height={25} />
                {/* <p>{s.username}</p> */}
              </div>
            </a>
          );
        })}
      </div>
      <div className="mb-1">
        © 2024 Anish Awasthi. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
