"use client";

import React from "react";
import Link from "next/link";
import { ProjectInterface } from "@/constants/projects";
import DisplayProjectCategory from "./DisplayProjectCategory";
import { Icons } from "./Icons";
import Image from "next/image";
import ImageModal from "./ImageModal";

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
    setIsOpen(prev => !prev);
    setImage(e.target.getAttribute("src"));
  };

  return (
    <div className="min-h-screen mt-5 text-white-1">
      <div className="mx-auto md:max-w-[64rem] max-sm:px-2 px-4">
        <Link href="/projects">
          <div className="text-blue-1 mb-5 inline-block hover:underline">
            &larr; Back to Projects
          </div>
        </Link>

        <div className=" flex flex-col gap-10 rounded-lg">

          <div>
            <div className="flex gap-x-4 gap-y-1 items-center flex-wrap mb-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold capitalize mb-2">
                {id.replace(/-/g, " ")}
              </h1>
              <div className="flex justify-center items-center gap-x-4 gap-y-1 flex-wrap">
                {websiteLink && (
                  <a
                    href={websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white-1"
                  >
                    <Icons.link size={25} />
                  </a>
                )}

                {githubLink && (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" filter: invert"
                  >
                    <Image
                    src="/icons/github.svg"
                    alt="Github"
                    width={25}
                    height={25}
                    />
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
            <div className="font-semibold mb-3">Tech Stack:</div>
            <div className="flex flex-wrap gap-2 text-sm font-semibold">
            {techStack.map((tech, index) => (
              <span className="rounded-md border border-white-1 text-white-1 px-3 py-1 text-sm" key={index}>
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold capitalize mb-2">
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

      <ImageModal image={image} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default ProjectDetail;
