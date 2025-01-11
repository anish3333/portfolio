
import Navbar from "@/components/Navbar";
import PopoverNav from "@/components/PopoverNav";
import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="p-6 bg-first-1">{children}</div>
    </div>
  );
};

export default RootLayout;
