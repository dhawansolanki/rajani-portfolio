import React from "react";

const Skills = () => {
  return (
    <div
      id="skills"
      class="p-4 border-2 h-full border-gray-200 border-dashed rounded-lg dark:border-gray-700"
    >
      {/*
       <div class="py-8 px-4 mx-auto max-w-screen-xl  lg:py-16 lg:px-12">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-900">
          Skills
        </h1>

        <section class="text-gray-600 body-font">
          <div class="container px-5  md:py-8 py-24 mx-auto">
            <div class="flex flex-wrap -m-2 cursor-pointer">
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-900 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Analytical Skills
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-900 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Intellectual property
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-900 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Business Analysis
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-900 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Intellectual Property
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-900 hover:shadow-lg transition duration-300 ease-in-out 
          "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Power Electronics
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-900 hover:shadow-lg transition duration-300 ease-in-out 
        "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      FTO Analysis
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-900 hover:shadow-lg transition duration-300 ease-in-out 
      "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Freedom to Operate (FTO)
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-900 hover:shadow-lg transition duration-300 ease-in-out 
    "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Competitive Analysis
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-900 hover:shadow-lg transition duration-300 ease-in-out 
  "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Competitive Intelligence
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-900 hover:shadow-lg transition duration-300 ease-in-out 
"
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Due Diligence
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-900 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Innovation Management
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-900 hover:shadow-lg transition duration-300 ease-in-out 
          "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Patent Searching
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-900 hover:shadow-lg transition duration-300 ease-in-out 
        "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Prior Art Search
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-900 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Six Sigma
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-900 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Electrical Engineering
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-900 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Electronics
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-900 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">Energy</h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-900 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Joint Ventures
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-900 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Licensing
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-900 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">R&D</h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-900 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Technology Transfer
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-900 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Mergers & Acquisitions
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-900 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">IPIP</h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-900 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Patent Law
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-900 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Patent Litigation
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-900 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Patent Prosecution
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-900 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Product Development
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-900 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Prosecution
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-900 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Renewable Energy
                    </h2>
                  </div>
                </div>
              </div>

              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-900 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      UPSIntellectual property
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div> */}

<div class="py-8 px-4 mx-auto max-w-screen-xl  lg:px-12">
        <h1 class=" text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-900">
          Skills
        </h1>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-2">
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Professional Skills</h1>
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        {/* <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98"/> */}
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Holden Caulfield</h2>
            <p class="text-gray-500">UI Designer</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Analytics</h1>
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        {/* <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98"/> */}
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Henry Letham</h2>
            <p class="text-gray-500">CTO</p>
          </div>
        </div>
      </div>

      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Soft skills</h1>
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        {/* <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98"/> */}
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Oskar Blinde</h2>
            <p class="text-gray-500">Founder</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        {/* <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98"/> */}
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">John Doe</h2>
            <p class="text-gray-500">DevOps</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        {/* <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98"/> */}
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Martin Eden</h2>
            <p class="text-gray-500">Software Engineer</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        {/* <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98"/> */}
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Boris Kitua</h2>
            <p class="text-gray-500">UX Researcher</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        {/* <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98"/> */}
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Atticus Finch</h2>
            <p class="text-gray-500">QA Engineer</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          {/* <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/104x94"/> */}
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Alper Kamu</h2>
            <p class="text-gray-500">System</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          {/* <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98"/> */}
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Rodrigo Monchi</h2>
            <p class="text-gray-500">Product Manager</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
    </div>
  );
};

export default Skills;
