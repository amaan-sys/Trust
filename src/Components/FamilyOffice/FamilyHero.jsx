import React from "react";
import Familyoff from "../../assets/Familyoff.jpg";
import Familyadmin from "../../assets/Familysheet.jpg";

export default function FamilyOfficeSection() {
  return (
    <>
      {/* HERO BANNER IMAGE */}
      <div className="relative w-full h-[500px] mb-10">
        <img
          src={Familyoff}
          alt="Family office banner"
          className="w-full h-full object-cover object-top"
        />

        <div className="absolute inset-0 bg-white/20"></div>
      </div>


      <div className="w-full  sm:px-10 lg:px-10">
        {/* Google Fonts */}
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&family=Open+Sans:wght@400;600;700&family=Noto+Sans+Gothic:wght@400;600;700&display=swap');
      `}</style>




        {/* MAIN CONTENT SECTION */}
        <div className="w-full bg-white py-12 sm:py-5">
          <div className="w-full px-4 sm:px-8">

            {/* Title */}
            <h1
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003d5c] mb-8 sm:mb-12 text-center mx-auto"
              style={{ fontFamily: "'Noto Sans Gothic', sans-serif" }}
            >
              Family Office Administration
            </h1>

            {/* Paragraph Section */}
            <div className="w-full mb-12 sm:mb-16 max-w-4xl mx-auto">
              <p
                className="text-sm sm:text-base text-gray-700 leading-5 sm:leading-7 mb-6"
                style={{ fontFamily: "'Nanum Gothic', sans-serif" }}
              >
                Family Office Administration includes a variety of concierge services offered to individuals and families with complicated financial lives and significant net worth. We make the ordinary, as well as the complex, flow smoother, giving insight into your finances without requiring you to participate in the daily tasks of bill pay, cash tracking and budgeting.
              </p>

              <p
                className="text-sm sm:text-base text-gray-700 leading-5 sm:leading-7"
                style={{ fontFamily: "'Nanum Gothic', sans-serif" }}
              >
                Our Family Office Administration group has the experience and knowledge to provide custom solutions to address your unique circumstances. We have a demonstrated track record of success by providing transparent reporting and clear communication.
              </p>
            </div>

            {/* Two Column Layout */}
            <div className="max-w-6xl mx-auto ">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-26 items-start">

                {/* LEFT TEXT */}
                <div>
                  <h2
                    className="text-xl sm:text-2xl font-bold text-[#003d5c] mb-6 sm:mb-8"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    AS A FAMILY OFFICE ADMINISTRATOR, WE MAY:
                  </h2>

                  <ul
                    className="space-y-3 text-sm sm:text-base text-gray-700 leading-4 sm:leading-5 mb-10 sm:mb-12"
                    style={{ fontFamily: "'Nanum Gothic', sans-serif" }}
                  >
                    {[
                      "Pay bills and track financial records.",
                      "Assist with tax preparation and filing.",
                      "Pursue and resolve potential billing errors.",
                      "Manage and oversee household payroll.",
                      "Evaluate and forecast personal budgets.",
                      "Manage multiple households.",
                      "Support and track charitable giving and philanthropy.",
                      "Assist with personal projects as needed.",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-3">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Contact Button */}


                </div>


                {/* RIGHT IMAGE */}
                <div className="flex justify-center items-start">
                  <img
                    src={Familyadmin}
                    alt="Family office administration"
                    className="w-full sm:w-10/12 lg:w-full h-auto  object-cover"
                  />


                </div>


              </div>
            </div>

            {/* BOTTOM SECTION */}
            <div className="max-w-6xl mx-auto ">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mt-10 ">

                <div>

                  <a
                    href="/contact"
                    className="inline-block w-auto sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 sm:px-8 sm:ml-40 rounded-lg transition-colors md:ml-60"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    Contact WE Trust Today
                  </a>
                </div>

                <div className="flex justify-start text-center lg:text-left sm:ml-10">
                  <p
                    className="text-base sm:text-lg text-gray-800 font-semibold"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    Family Office Information Sheet (PDF)
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
