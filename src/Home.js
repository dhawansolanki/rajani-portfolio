/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import TypeIt from "typeit-react";
const Home = () => {
  return (
    <div id="home" class="p-4  h-screen bg-greentheme ">
      <section class="">
        <div class="py-8 px-4 mx-auto max-w-screen-xl  lg:py-16 lg:px-12">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-900">
            {/* <TypeIt> Rajani G Narayanaswamy</TypeIt> */}
            Rajani G Narayanaswamy
          </h1>
          <a
            href="#"
            class="transition duration-300 ease-in-out  inline-flex border-2 justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            role="alert"
          >
            {/* <span class="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">New</span>  */}
            <span class="text-sm font-medium px-4 py-1.5 mr-3">
            Intellectual property - Innovation - Strategic Partner
            </span>
            <svg
              class="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl   dark:text-gray-700 text-left">
            Connecting dots with integrated Analytics with Patent, Market, and
            Literature data to serve the business strategy. Driving Innovation
            culture through IP Training, e-Learning modules, Idea
            Generation/Ideation, World IP Day events, and by having Strategic
            partnerships with R&D Teams.
          </p>
          {/*
          <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-left sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              class="transition duration-300 ease-in-out border-2 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-700 hover:text-white rounded-lg bg-white hover:bg-gray-700 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Know more about me
              <svg
                class="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>

            <a
              href="#"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <svg
                class="mr-2 -ml-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
              </svg>
              Contact me
            </a>
          </div>
          */}
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <a
                class="w-full flex items-center bg-gray-200 text-gray-900 transition duration-300 ease-in-out justify-center px-8 py-3 text-base leading-6 font-medium rounded-md   hover:bg-gray-700 hover:text-gray-100 focus:ring ring-offset-2 ring-pink-400 focus:outline-none  md:py-4 md:text-lg md:px-10"
                href="#about"
              >
                Know more about me
                <svg
                  class="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <a
                class="w-full flex items-center justify-center px-8 py-3 text-base leading-6 font-medium rounded-md text-gray-900 hover:text-gray-100 bg-gray-400 hover:bg-gray-700  focus:ring ring-offset-2 ring-purple-100 focus:outline-none transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                href="#contact"
                rel="noopener"
                // target="_blank"
              >
                Contact <div class="w-4"></div>
                <svg
                  class="mr-2 -ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                </svg>
              </a>
            </div>
          </div>
          {/* <div class="  md:max-w-screen-md lg:max-w-screen-lg ">
            <span class="font-semibold text-gray-700 uppercase">Connect on Social</span>
            <div class="flex flex-wrap  mt-8 text-gray-700 ">
            
            </div>
        </div>  */}
        </div>
      </section>
    </div>
  );
};

export default Home;
