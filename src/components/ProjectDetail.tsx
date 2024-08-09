"use client";

import React from "react";
import Link from "next/link";
import { ProjectInterface } from "@/constants/projects";
import DisplayProjectCategory from "./DisplayProjectCategory";
import { Icons } from "./Icons";
import ImageModal from "./ImageModal";
import ShineBorder from "./magicui/shine-border";

const ProjectDetail = ({
  id,
  category,
  shortDescription,
  websiteLink,
  githubLink,
  techStack,
  startDate,
  endDate,
  descriptionDetails = { paragraphs: [], bullets: [] },
  pagesInfoArr,
}: ProjectInterface) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [image, setImage] = React.useState("");

  const handleClick = (e: any) => {
    setIsOpen((prev) => !prev);
    setImage(e.target.getAttribute("src"));
  };

  return (
    <div className="min-h-screen mt-5 text-white-1">
      <div className="mx-auto md:max-w-[64rem] max-sm:px-2 px-4">
        <Link href="/projects">
          <div className="flex items-center mb-5 ">
            <span className="text-2xl hover:animate-spin mr-2">
              <Icons.chevronLeft className="w-5" />
            </span>
            <span className="mr-2">Back to Projects</span>
          </div>
        </Link>

        <div className=" flex flex-col gap-12 rounded-lg">
          <div className="flex flex-col gap-5">
            <div className="flex gap-y-2 gap-4 items-center flex-wrap mb-3">
              <h1 className="text-2xl sm:text-3xl text-blue-1 md:text-4xl font-bold capitalize">
                {id.replace(/-/g, " ")}
              </h1>
              <div className="flex justify-center items-center gap-x-4 gap-y-1 flex-wrap">
                {websiteLink && (
                  <a
                    href={websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ShineBorder
                      className="text-white-1 h-[45px] w-[45px] flex items-center justify-center"
                      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                    >
                      <Icons.link size={25} />
                    </ShineBorder>
                  </a>
                )}

                {githubLink && (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fdffe2"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-github"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
            <div className="mb-4">
              <DisplayProjectCategory category={category} />
            </div>
            <p className="text-gray-300">{shortDescription}</p>
          </div>

          <div>
            <div className="font-semibold mb-3 text-blue-1">Tech Stack:</div>
            <div className="flex flex-wrap gap-2 text-sm font-semibold">
              {techStack.map((tech, index) => (
                <span
                  className="rounded-md border border-white-1 text-white-1 px-3 py-1 text-sm"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {startDate && endDate && (
            <div className="mb-6">
              <span className="font-semibold">Duration:</span>
              {startDate?.toDateString()} to {endDate?.toDateString()}
            </div>
          )}
          <div className="mb-6">
            {descriptionDetails.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-300 mb-4">
                {paragraph}
              </p>
            ))}
            <ul className="list-disc list-inside text-gray-300">
              {descriptionDetails.bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          </div>
          {pagesInfoArr.map((page, index) => (
            <div key={index} className="mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold capitalize mb-2 text-blue-1">
                {page.title}
              </h2>
              <p className="text-gray-300 mb-4">{page.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {page.imgArr.map((imgSrc, imgIndex) => (
                  <img
                    onClick={handleClick}
                    key={imgIndex}
                    src={imgSrc}
                    alt={`${page.title} ${imgIndex + 1}`}
                    className="rounded-lg shadow-gray-800 shadow-lg w-full h-full object-cover hover:cursor-pointer"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <ImageModal
        image={image}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default ProjectDetail;
