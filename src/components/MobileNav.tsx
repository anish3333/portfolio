"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navbarLinks } from "@/constants";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const pathName = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            alt="hamburger icon"
            width={36}
            height={36}
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="border-none bg-black bg-opacity-65"
        >
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <div className="flex justify-end p-4">
              <SheetClose asChild>
                <button className="text-white-1">
                  <p className="text-xl">𝘅</p>
                </button>
              </SheetClose>
            </div>

            <SheetClose asChild>
              <section className="flex flex-col h-full gap-6 pt-10 text-white-1">
                {navbarLinks.map((link) => {
                  const isActive =
                    link.route === pathName ||
                    pathName.startsWith(`${link.route}/`);
                  return (
                    <SheetClose asChild key={link.label}>
                      <Link
                        href={link.route}
                        key={link.label}
                        className={cn(
                          "flex gap-4 items-center p-4 rounded-lg w-full max-w-60",
                          {
                            "bg-blue-1": isActive,
                          }
                        )}
                      >
                        <Image
                          className="filter invert"
                          src={link.imageURL}
                          alt={link.label}
                          width={20}
                          height={20}
                        />
                        <p className="font-semibold">{link.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
