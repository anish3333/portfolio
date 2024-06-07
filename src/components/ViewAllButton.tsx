import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const ViewAllButton = ({href} : {href:string}) => {
  return (
    <Button
      asChild
      className="font-medium px-4 py-4 bg-[#1A2130] hover:bg-white-1 hover:text-black rounded-lg border border-white-1 text-white-1"
    >
      <Link href={href}>
        <p>View All</p>
      </Link>
    </Button>
  );
};

export default ViewAllButton;
