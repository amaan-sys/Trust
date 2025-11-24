import React from "react";
import attorneyHeaderImage from "../../assets/Attorney.jpg";
import AttorneyAdmin from "../../assets/Attorneyadmin.jpg";

export default function AttorneyHero() {
  return (
    <>
      {/* HERO BANNER IMAGE */}
      <div className="relative w-full h-[500px] mb-10">
        <img
          src={attorneyHeaderImage}
          alt="Attorney-in-Fact banner"
                className="w-full h-full object-cover object-[0px_-230px]"
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
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003d5c] mb-10 text-center"
              style={{ fontFamily: "'Noto Sans Gothic', sans-serif" }}
            >
              Attorney-in-Fact / Financial Power of Attorney Services
            </h1>

            {/* Paragraph Section */}
            <div className="w-full mb-14 max-w-4xl mx-auto">
              {[
                "A financial power of attorney (POA) is a legally binding document that empowers an individual, known as the attorney-in-fact, to manage your finances on your behalf...",
                "Utilizing a financial POA can be a strategic tool for future planning...",
                "WE Trust Company offers an optimal solution for individuals who are unable to manage their personal finances...",
                "By appointing WE Trust Company as your agent under a financial power of attorney, you gain peace of mind...",
                "We understand the importance of trust in managing personal finances. We take this responsibility seriously...",
              ].map((txt, i) => (
                <p
                  key={i}
                  className="text-sm sm:text-base text-gray-700 leading-6 sm:leading-7 mb-6"
                  style={{ fontFamily: "'Nanum Gothic', sans-serif" }}
                >
                  {txt}
                </p>
              ))}
            </div>

            {/* TWO COLUMN LAYOUT */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* LEFT COLUMN – TEXT ONLY */}
                <div>
                  <h2
                    className="text-xl sm:text-2xl font-bold text-[#003d5c] mb-6"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    AS AN ATTORNEY-IN-FACT, WE WILL:
                  </h2>

                  <ul
                    className="space-y-3 text-sm sm:text-base text-gray-700 leading-6 mb-10"
                    style={{ fontFamily: "'Nanum Gothic', sans-serif" }}
                  >
                    {[
                      "Walk alongside you to navigate financial matters.",
                      "Pay bills and track financial records.",
                      "Assist with tax preparation and filing.",
                      "Manage and oversee household payroll if necessary.",
                      "Provide regular updates and reports as needed.",
                      "Advocate for you every step of the way.",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-3">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* RIGHT COLUMN – IMAGE + BUTTON + PDF */}
                <div className="flex flex-col items-center gap-6">

                  {/* IMAGE */}
                  <div className="w-full h-72 bg-gray-200 rounded-lg overflow-hidden shadow">
                    <img
                      src={AttorneyAdmin}
                      alt="Attorney-in-Fact"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* BUTTON */}
                  <button
                    className="bg-[#003d5c] hover:bg-[#002a42] text-white font-bold py-3 px-8 rounded-lg transition-colors"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    Contact WE Trust Today
                  </button>

                  {/* PDF LINK */}
                  <p
                    className="text-[#003d5c] font-medium underline cursor-pointer"
                    style={{ fontFamily: "'Nanum Gothic', sans-serif" }}
                  >
                    Attorney-in-Fact Information Sheet (PDF)
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
