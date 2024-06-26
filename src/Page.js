import React from "react";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Articles from "./Articles";
import Skills from "./Skills";
import Education from "./Education";
import Contact from "./Contact";
import Ees from "./ees";
import { useState, useEffect } from "react";
import { aboutSection, experienceSection, homeSection } from "./services";

const Page = () => {
  const [homeData, setHomeData] = useState();
  const [aboutData, setAboutData] = useState();
  const [experienceData, setExperienceData] = useState();
  useEffect(() => {
    getHomeData();
    getAboutData();
    getExperienceData();
  }, []);

  const getHomeData = async () => {
    const res = await homeSection();
    setHomeData(res);
    return;
  };
  const getAboutData = async () => {
    const res = await aboutSection();
    setAboutData(res);
    return;
  };
  const getExperienceData = async () => {
    const res = await experienceSection();
    setExperienceData(res);
    return;
  };
  return (
    <div class="p-4 sm:ml-64">
      <Home data={homeData?.homes[0]} />
      <div class="h-4"></div>
      <About data={aboutData?.abouts[0]} />
      <div class="h-4"></div>
      {/* <Experience /> */}
      <Ees data={experienceData?.experiences[0]} />
      <div class="h-4"></div>
      <Articles />
      <div class="h-4"></div>
      <Education />
      <div class="h-4"></div>
      <Skills />
      <div class="h-4"></div>
      <Contact />
    </div>
  );
};

export default Page;
