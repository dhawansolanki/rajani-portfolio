import React from "react";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";
import Contact from "./Contact";

const Page = () => {
  return (
    <div class="p-4 sm:ml-64">
      <Home />
      <div class="h-4"></div>
      <About />
      <div class="h-4"></div>
      <Experience />
      <div class="h-4"></div>
      <Projects />
      <div class="h-4"></div>
      <Skills />
      <div class="h-4"></div>
      <Education />
      <div class="h-4"></div>
      <Contact />
    </div>
  );
};

export default Page;
