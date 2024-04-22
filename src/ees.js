import React from "react";

const Ees = ({ data }) => {
  const renderHtml = (htmlString) => {
    return { __html: htmlString };
  };

  return (
    <div
      id="experience-education-skills"
      className="p-4 border-2 h-full border-gray-200 border-dashed rounded-lg dark:border-gray-700"
    >
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div>
            <h2 className="text-2xl font-semibold leading-tight">
              {data?.experienceTitle}
            </h2>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Duration
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Organization
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Highlights
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.experienceDuration.map((duration, index) => (
                    <tr key={index}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex">
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {duration}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {data?.experienceRole[index]}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {data?.experienceOrganization[index]}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span className="relative inline-block px-3 py-1 leading-tight">
                          <span
                            aria-hidden
                            className="absolute inset-0 opacity-50 rounded-full"
                          ></span>
                          <span
                            className="relative"
                            dangerouslySetInnerHTML={renderHtml(
                              data?.experienceHighlights[index]
                            )}
                          ></span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <br />
          <div
            dangerouslySetInnerHTML={renderHtml(
              data?.experienceAchievement.html
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Ees;
