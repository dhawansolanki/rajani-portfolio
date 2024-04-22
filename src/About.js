import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const About = ({ data }) => {
  return (
    <div
      id="about"
      class="p-4  border-2 h-full border-gray-200 border-dashed rounded-lg dark:border-gray-700"
    >
      <div class="py-8 px-4 mx-auto max-w-screen-xl  lg:py-16 lg:px-12">
        <h1 class="text-2xl font-semibold leading-tight">
          {data?.aboutHeading}
        </h1>
        <br />
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl   dark:text-gray-700 text-left">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {data?.aboutContent}
          </ReactMarkdown>
        </p>
      </div>
    </div>
  );
};

export default About;
