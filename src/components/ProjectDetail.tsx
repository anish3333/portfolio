import React from "react";
import Link from "next/link";

interface PageInfo {
  title: string;
  description: string;
  imgArr: string[];
}

interface Project {
  id: string;
  category: string[];
  shortDescription: string;
  websiteLink: string;
  techStack: string[];
  startDate: Date;
  endDate: Date;
  pagesInfoArr: PageInfo[];
}

const ProjectDetail = ({
  id,
  category,
  shortDescription,
  websiteLink,
  techStack,
  startDate,
  endDate,
  pagesInfoArr,
}: Project) => {
  return (
    <div className="min-h-scree mt-5 text-white-1">
      <div className="container mx-auto">
        <Link href="/projects">
          <div className="text-blue-1 mb-5 inline-block hover:underline">
            &larr; Back to Projects
          </div>
        </Link>
        <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
            <div>
              <h1 className="text-4xl font-bold capitalize mb-2">
                {id.replace(/-/g, " ")}
              </h1>
              <p className="text-gray-300">{shortDescription}</p>
            </div>
          </div>
          <div className="mb-4">
            <span className="font-semibold">Categories:</span>{" "}
            {category.join(", ")}
          </div>
          <div className="mb-4">
            <a
              href={websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-300"
            >
              Visit Website
            </a>
          </div>
          <div className="mb-4">
            <span className="font-semibold">Tech Stack:</span>{" "}
            {techStack.join(", ")}
          </div>
          <div className="mb-6">
            <span className="font-semibold">Duration:</span>{" "}
            {startDate.toDateString()} to{" "}
            {endDate.toDateString()}
          </div>
          {pagesInfoArr.map((page, index) => (
            <div key={index} className="mb-10">
              <h2 className="text-3xl font-bold mb-2">{page.title}</h2>
              <p className="text-gray-300 mb-4">{page.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {page.imgArr.map((imgSrc, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={imgSrc}
                    alt={`${page.title} ${imgIndex + 1}`}
                    className="rounded-lg shadow-lg"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
