import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="z-10 pb-18">
        <Navbar />
      </nav>
      <main className="flex-grow px-6 lg:px-10">{children}</main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default RootLayout;
