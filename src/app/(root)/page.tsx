import Hero from "@/components/Hero";
import Contact from "@/components/pages/contact";
import Experience from "@/components/pages/experience";
import Project from "@/components/pages/projects";
import Skills from "@/components/pages/skills";
import React from "react";

const RootPage = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Project />
      <Experience />
      <Contact />
    </>
  );
};

export default RootPage;
