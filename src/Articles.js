import React from 'react';
import { Link } from 'react-router-dom';
import articlesData from './articlesData.json';
const Articles = ({  }) => {
  return (
    <div id="articles" className="p-4 border-2 h-full border-gray-200 border-dashed rounded-lg dark:border-gray-700">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12">
        <h1 class="text-2xl font-semibold leading-tight">Articles/Blogs</h1>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-8 mx-auto">
            <div className="flex flex-wrap -m-4">
              {articlesData.map((article) => (
                <div key={article.id} className="p-4 md:w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={article.image}
                      alt={article.title}
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        {article.category}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{article.title}</h1>
                      <p className="leading-relaxed mb-3">{article.description}</p>
                      <Link
                        to={`/article/${article.id}`}
                        className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        Read More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Articles;
