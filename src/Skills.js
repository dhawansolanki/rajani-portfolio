import React from "react";

const Skills = () => {
  return (
    <div
      id="skills"
      class="p-4 border-2 h-full border-gray-200 border-dashed rounded-lg dark:border-gray-700"
    >
      {/*
       <div class="py-8 px-4 mx-auto max-w-screen-xl  lg:py-16 lg:px-12">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-700 md:text-5xl lg:text-6xl dark:text-gray-700">
          Skills
        </h1>

        <section class="text-gray-600 body-font">
          <div class="container px-5  md:py-8 py-24 mx-auto">
            <div class="flex flex-wrap -m-2 cursor-pointer">
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-700 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">
                      Analytical Skills
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-700 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">
                      Intellectual property
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-700 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">
                      Business Analysis
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-700 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">
                      Intellectual Property
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-700 hover:shadow-lg transition duration-300 ease-in-out 
          "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">
                      Power Electronics
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-700 hover:shadow-lg transition duration-300 ease-in-out 
        "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">
                      FTO Analysis
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-700 hover:shadow-lg transition duration-300 ease-in-out 
      "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">
                      Freedom to Operate (FTO)
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-700 hover:shadow-lg transition duration-300 ease-in-out 
    "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">
                      Competitive Analysis
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-700 hover:shadow-lg transition duration-300 ease-in-out 
  "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">
                      Competitive Intelligence
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-700 hover:shadow-lg transition duration-300 ease-in-out 
"
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">
                      Due Diligence
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-700 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">
                      Innovation Management
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-700 hover:shadow-lg transition duration-300 ease-in-out 
          "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">
                      Patent Searching
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-700 hover:shadow-lg transition duration-300 ease-in-out 
        "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">
                      Prior Art Search
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-700 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">
                      Six Sigma
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-700 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">
                      Electrical Engineering
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-700 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">
                      Electronics
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-700 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">Energy</h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-700 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">
                      Joint Ventures
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-700 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">
                      Licensing
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-700 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">R&D</h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-700 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">
                      Technology Transfer
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-700 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">
                      Mergers & Acquisitions
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-700 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">IPIP</h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-700 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">
                      Patent Law
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-700 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">
                      Patent Litigation
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-700 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">
                      Patent Prosecution
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-700 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">
                      Product Development
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-700 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">
                      Prosecution
                    </h2>
                  </div>
                </div>
              </div>
              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-700 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">
                      Renewable Energy
                    </h2>
                  </div>
                </div>
              </div>

              <div
                class="p-2 lg:w-1/4 md:w-1/2 w-full hover:shadow-gray-700 hover:shadow-lg transition duration-300 ease-in-out 
            "
              >
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">
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
        <h1 class="text-2xl font-semibold leading-tight">
          Skills
        </h1>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-8 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <h1 class="sm:text-xl text-xl font-medium title-font mb-4 text-gray-700">Professional Skills</h1>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <h1 class="sm:text-xl text-xl font-medium title-font mb-12 text-gray-700">Analytics</h1>

              </div>

              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <h1 class="sm:text-xl text-xl font-medium title-font mb-4 text-gray-700">Soft skills</h1>
                
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  {/* <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98"/> */}
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">Portfolio Management</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  {/* <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98"/> */}
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">Data mining</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  {/* <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98"/> */}
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">Strategist</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  {/* <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98"/> */}
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">3rd party Analytics</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  {/* <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98"/> */}
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">Landscape analysis</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  {/* <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98"/> */}
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">Meticulous</h2>

                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  {/* <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/104x94"/> */}
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">Data Migration</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">Competitor Intelligence</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">Operational Excellence</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">IP Risk Mitigation</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">State of art</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">Collaborative</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">Software IP</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">Expert Searching</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">Empowering</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">Data Science (AI, ML)</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">Whitespace analysis</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">Integrity</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">Business Development</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">Patentability</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">visionary</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">IP Training</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">Novelty</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">Courageous</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">Idea Generation</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">Prior art</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">Humble</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">IP tool assessment</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">IP Clearance/ Risk assessment</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">Respectful</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">M&A support</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">Invalidity</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">Ambitious</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">Data Migration</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">Assertion</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">Inquisitive</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">Process Management</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">Patent to Product mapping</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">Committed</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">Due Diligence</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">Patent pruning</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center  p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium"></h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">Tech transfer</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">Patent Monetization</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center  p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium"></h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center  p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium"></h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border  p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">Licensing</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center  p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium"></h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center  p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium"></h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border  p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">New Product Introduction support</h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center  p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium"></h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center  p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium"></h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div class="flex-grow">
                    <h2 class="text-gray-700 title-font font-medium">SWOT analysis </h2>
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
