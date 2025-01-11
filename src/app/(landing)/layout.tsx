import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PopoverNav from "@/components/PopoverNav";
import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-third-1">
      <div>{children}</div>
    </div>
  );
};

export default RootLayout;
