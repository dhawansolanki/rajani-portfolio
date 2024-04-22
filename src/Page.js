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
import { homeSection } from "./services";

const Page = () => {
  const [data, setData] = useState();

  useEffect(() => {
    getHomeData();
  }, []);

  const getHomeData = async () => {
    const res = await homeSection();
    setData(res);
    return;
  };
  return (
    <div class="p-4 sm:ml-64">
      <Home data={data?.homes[0]} />
      <div class="h-4"></div>
      <About />
      <div class="h-4"></div>
      {/* <Experience /> */}
      <Ees />
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
