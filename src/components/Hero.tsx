import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse md:justify-between py-8 md:py-0  text-white-1 min-h-full mt-4">
      <div className="flex max-w-lg mb-8 md:mb-0 md:p-4 justify-center">
        <img
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </p>
        </div>  
        <div className="flex max-sm:flex-col items-center justify-center gap-8 max-sm:gap-6">
          <div>
            <Button
              asChild
              className="text-xl font-medium px-6 py-6 rounded-sm bg-white-1 text-black"
            >
              <Link href="https://github.com/anish3333" target="_blank">
                <Image
                  src="/icons/github.svg"
                  alt="github icon"
                  width={19}
                  height={19}
                />
                &nbsp;
                <p>GitHub</p>
              </Link>
            </Button>
          </div>
          <div>
            <Button
              asChild
              className="text-xl font-medium px-8 py-6 text-white-1 rounded-sm bg-[#5A72A0] hover:bg-white-1 hover:text-[#1A2130]"
            >
              <Link href="/pdfs/resume.pdf" target="_blank">
                <p className="drop-shadow-lg">Resume</p>
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex items-center pt-5">
          <span className="text-lg">SCROLL FOR MORE</span>
          <span className="text-2xl mt-2 ml-2 animate-bounce">↓</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
