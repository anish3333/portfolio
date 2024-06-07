import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { Icons } from "./Icons";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse md:justify-between py-8 md:py-0  text-white-1 min-h-full mt-4">
      <div className="flex max-w-lg mb-8 md:mb-0 md:p-4 justify-center">
        <Image
          src="/images/anish.png"
          alt="Anish"
          className="w-48 h-48 md:w-80 md:h-80 rounded-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-8 max-w-lg mb-8 md:mb-0 mr-5 max-md:mx-auto">
        <div>
          <h1 className="text-5xl font-bold mb-4">
            Hello!
            <br />
          </h1>
          <p className="text-md leading-relaxed mb-8">
            I&apos;m Anish Awasthi, a passionate Web Developer, currently in my
            second year of computer Engineering and I Love creating impactful
            digital solutions.Currently, I am expanding my skill set to include machine learning
            to create smarter and more intuitive applications.
          </p>
        </div>
        <div className="flex max-sm:flex-col items-center justify-center gap-8 max-sm:gap-6">
          <div>
            <Button
              asChild
              className="text-xl font-medium px-6 py-6 rounded-sm bg-white-1 text-black hover:bg-white-1 transition duration-300 ease-in-out"
            >
              <a
                href="https://github.com/anish3333"
                target="_blank"
                className="hover:invert "
              >
                <Image
                  src="/icons/github.svg"
                  alt="github icon"
                  width={19}
                  height={19}
                />
                &nbsp;
                <p>GitHub</p>
              </a>
            </Button>
          </div>
          <div>
            <Button
              asChild
              className="text-xl font-medium px-8 py-6 text-white-1 rounded-sm bg-[#83B4FF] hover:bg-white-1 hover:text-[#1A2130]"
            >
              <Link href="/pdfs/resume.pdf" target="_blank">
                <p className="drop-shadow-lg">Resume</p>
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex items-center pt-5">
          <span className="text-lg">SCROLL FOR MORE</span>
          <span className="text-2xl mt-2 ml-2 animate-bounce">
            <Icons.chevronDown className="w-5 ml-1" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
