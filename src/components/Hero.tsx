import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { Icons } from "./Icons";
import WordFadeIn from "./magicui/word-fade-in";

const Hero = () => {
  return (
    <div className="flex flex-col flex-1 min-h-[calc(100vh-71px)] justify-center lg:w-[calc(100vw-20rem)]">
      <div className="flex flex-col md:flex-row-reverse justify-center py-8 md:py-0 w-full text-white-1 gap-10">
        {/* <div className=""> */}
        <div className="flex justify-center items-center">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src="/images/anish.png"
            alt="Anish"
            className="min-w-40 w-48 h-48 md:w-80 md:h-96 rounded-full object-cover"
          />
        </div>

        <div className="flex flex-col p-4 gap-8 max-w-lg mb-8 md:mb-0 mr-5 max-md:mx-auto flex-grow">
          <div>
            <WordFadeIn
              words="Hello!"
              delay={0.2}
              className="text-5xl font-bold mb-4 text-blue-1"
            />

            <p className="text-md leading-relaxed mb-8">
              I am Anish Awasthi, a Full Stack Web Developer and aspiring Software
              Engineer from Mumbai, India, currently in my Third Year of
              Computer Engineering. I excel in backend development with Node.js,
              Express.js, and SQL, NoSql and PostGreSQL databases. On the frontend, I
              work with Next.js, React.js and Tailwind CSS to create responsive and
              dynamic websites. I also have a strong interest in Generative AI
              and have been exploring its applications alongside my foundational
              knowledge of app development.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 max-sm:gap-6">
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
        {/* </div> */}
      </div>
    </div>
  );
};

export default Hero;
