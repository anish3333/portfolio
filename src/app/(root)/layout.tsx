import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PopoverNav from "@/components/PopoverNav";
import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <nav className="z-10 pb-18">
        <Navbar />
      </nav>
      <main className="flex-grow px-6 lg:px-10">{children}</main>
      <footer className="mt-36 mx-2 mb-7">
        <Footer/>
      </footer> */}

      <div className=" fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50">
        <PopoverNav />
      </div>
      {children}
    </div>
  );
};

export default RootLayout;
