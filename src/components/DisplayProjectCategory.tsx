import { ProjectInterface, ValidCategory } from "@/constants/projects";
import React from "react";

interface DisplayProjectCategoryProps {
  project: ProjectInterface;
}

const DisplayProjectCategory = ({category} : {category :  ValidCategory[]}) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {category.map((cat: string) => {
        return (
          <span
            key={cat}
            className="inline-block bg-white-1 rounded-full px-3 py-1 text-sm font-semibold text-gray-600"
          >
            {cat}
          </span>
        );
      })}
    </div>
  );
};

export default DisplayProjectCategory;
