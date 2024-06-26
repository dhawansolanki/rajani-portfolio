import React from 'react'

const Education = () => {
  return (
    <div id="education" class="p-4 border-2 h-full border-gray-200 border-dashed rounded-lg dark:border-gray-700">  
    <div class="py-8 px-4 mx-auto max-w-screen-xl  lg:py-16 lg:px-12">
        <h1 class="text-2xl font-semibold leading-tight">Education</h1>
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-8 mx-auto flex flex-wrap">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-full md:w-full">
        <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
          <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <img src="/great_lake_institute_of_management.jpeg" alt="great_lake_institute_of_management" />
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Great Lakes</h2>
            <h4 class="text-gray-700 font-serif  font-medium mb-3">The University of Texas at Austin</h4>
            <strong><p>2020 - 2021</p></strong>
            <br/>
            <p class="leading-relaxed text-base">Postgraduate Degree, Data Science and Business Analytics</p>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-full md:w-full">
        <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
          <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <img src="/bangalore_university_Logo.webp" alt="Bangalore University Logo" />
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">University of Visveswaraya College of Engineering</h2>
            <h4 class="text-gray-700 font-serif  font-medium mb-3">Bangalore University</h4>
            <strong><p>2005 - 2007</p></strong>
            <br/>
            <p class="leading-relaxed text-base">Master of Engineering, Power Electronics</p>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-full md:w-full">
        <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
          <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <img src='/VTU-Logo-250x250-1.webp' alt='VTU LOGO'/>
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Nagarjuna College of Engineering and technology</h2>
            <h4 class="text-gray-700 font-serif  font-medium mb-3">Visvesvaraya Technological University</h4>
            <strong><p>2001 - 2005</p></strong>
            <br/>
            <p class="leading-relaxed text-base">Bachelor of Engineering, Electronics and Communication</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    </div>
  )
}

export default Education