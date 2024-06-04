"use client";

import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { navbarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <nav className="flex justify-between z-50 w-full px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <p className="text-[26px] font-extrabold text-white max-sm:text-[16px]">
          Anish Awasthi
        </p>
      </Link>
      <div className="flex items-center">
        <div className="flex gap-5 align-middle max-sm:hidden ">
          {navbarLinks.map((link) => {

            const isActive =
            link.route === pathName ||
            pathName.startsWith(`${link.route}/`);

            return (
              <Link href={link.route} key={link.label}>
                <p className={cn("text-[15px] font-extrabold text-white max-sm:hidden", {
                  "text-blue-600": isActive
                })}>
                  {link.label}
                </p>
              </Link>
            );
          })}
        </div>

        <div className="flex justify-between gap-5">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
