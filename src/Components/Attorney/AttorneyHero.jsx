import React from "react";
import attorneyHeaderImage from "../../assets/Familyattorney.jpg";
import AttorneyAdmin from "../../assets/AttorneyAdmin.jpg";

export default function AttorneyHero() {
  return (
    <>
      {/* HERO BANNER IMAGE */}
      <div className="relative w-full h-[500px] mb-10">
        <img
          src={attorneyHeaderImage}
          alt="Attorney-in-Fact banner"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-white/20"></div>
      </div>

      <div className="w-full sm:px-10 lg:px-10">
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
              Attorney-in-Fact / Financial Power of Attorney Services
            </h1>

            {/* Paragraph Section */}
            <div className="w-full mb-12 sm:mb-16 max-w-4xl mx-auto">
              <p
                className="text-sm sm:text-base text-gray-700 leading-5 sm:leading-7 mb-6"
                style={{ fontFamily: "'Nanum Gothic', sans-serif" }}
              >
                A financial power of attorney (POA) is a legally binding document that empowers an individual, known as the attorney-in-fact, to manage your finances on your behalf. It is essential if you are unable to act independently due to capacity issues or prefer someone else to handle your financial affairs. Whether due to prolonged disability or short-term situations, such as military deployment, a POA grants authority to manage bank accounts, pay bills, and conduct other financial transactions.
              </p>

              <p
                className="text-sm sm:text-base text-gray-700 leading-5 sm:leading-7 mb-6"
                style={{ fontFamily: "'Nanum Gothic', sans-serif" }}
              >
                Utilizing a financial POA can be a strategic tool for future planning, especially in scenarios involving potential incapacity due to conditions like dementia or traumatic brain injury. Typically, "durable" when used for advance planning, a POA remains effective even if you become incapacitated.
              </p>

              <p
                className="text-sm sm:text-base text-gray-700 leading-5 sm:leading-7 mb-6"
                style={{ fontFamily: "'Nanum Gothic', sans-serif" }}
              >
                WE Trust Company offers an optimal solution for individuals who are unable to manage their personal finances or prefer to delegate this responsibility to a trusted third-party professional.
              </p>

              <p
                className="text-sm sm:text-base text-gray-700 leading-5 sm:leading-7 mb-6"
                style={{ fontFamily: "'Nanum Gothic', sans-serif" }}
              >
                By appointing WE Trust Company as your agent under a financial power of attorney, you gain peace of mind knowing that, if needed, your financial matters are in capable and trustworthy hands. Our professional team possesses extensive experience and expertise in various financial aspects, including budgeting, bill payments, investment oversight with your financial advisor, tax planning with your CPA, and thorough record-keeping.
              </p>

              <p
                className="text-sm sm:text-base text-gray-700 leading-5 sm:leading-7"
                style={{ fontFamily: "'Nanum Gothic', sans-serif" }}
              >
                We understand the importance of trust in managing personal finances. We take this responsibility seriously and uphold the highest standards of professionalism, ethics, and confidentiality. Your financial information and interests are treated with the utmost care and discretion.
              </p>
            </div>

            {/* Two Column Layout */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-26 items-start">

                {/* LEFT TEXT */}
                <div>
                  <h2
                    className="text-xl sm:text-2xl font-bold text-[#003d5c] mb-6 sm:mb-8"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    AS AN ATTORNEY-IN-FACT, WE WILL:
                  </h2>

                  <ul
                    className="space-y-3 text-sm sm:text-base text-gray-700 leading-4 sm:leading-5 mb-10 sm:mb-12"
                    style={{ fontFamily: "'Nanum Gothic', sans-serif" }}
                  >
                    {[
                      "Walk alongside you to navigate financial matters.",
                      "Pay bills and track financial records.",
                      "Assist with tax preparation and filing.",
                      "Manage and oversee household payroll if necessary.",
                      "Provide regular updates and reports as needed.",
                      "Advocate for you every step of the way.",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-3">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Contact Button */}
                  <button
                    className="bg-[#003d5c] hover:bg-[#002a42] text-white font-bold py-3 px-8 rounded-lg transition-colors mb-6"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    Contact WE Trust Today
                  </button>

                  <p
                    className="text-[#003d5c] font-medium underline cursor-pointer"
                    style={{ fontFamily: "'Nanum Gothic', sans-serif" }}
                  >
                    Attorney-in-Fact Information Sheet (PDF)
                  </p>
                </div>

                {/* RIGHT PLACEHOLDER */}
                <div className="flex justify-center items-start">
                  <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <img    
                      src={AttorneyAdmin}
                      alt="Attorney-in-Fact"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
