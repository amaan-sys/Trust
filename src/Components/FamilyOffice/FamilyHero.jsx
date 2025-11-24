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
          className="w-full h-full object-cover object-[1px_-150px]"
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
              Family Office Administration
            </h1>

            {/* Paragraph Section */}
            <div className="w-full mb-14 max-w-4xl mx-auto">
              <p
                className="text-sm sm:text-base text-gray-700 leading-7 mb-6"
                style={{ fontFamily: "'Nanum Gothic', sans-serif" }}
              >
                Family Office Administration includes a variety of concierge services
                offered to individuals and families with complicated financial lives
                and significant net worth. We make the ordinary, as well as the
                complex, flow smoother…
              </p>

              <p
                className="text-sm sm:text-base text-gray-700 leading-7"
                style={{ fontFamily: "'Nanum Gothic', sans-serif" }}
              >
                Our Family Office Administration group has the experience and
                knowledge to provide custom solutions…
              </p>
            </div>

            {/* TWO COLUMN LAYOUT */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* LEFT COLUMN – TEXT ONLY */}
                <div>
                  <h2
                    className="text-xl sm:text-2xl font-bold text-[#003d5c] mb-8"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    AS A FAMILY OFFICE ADMINISTRATOR, WE MAY:
                  </h2>

                  <ul
                    className="space-y-3 text-sm sm:text-base text-gray-700 leading-6 mb-12"
                    style={{ fontFamily: "'Nanum Gothic', sans-serif" }}
                  >
                    {[
                      "Pay bills and track financial records.",
                      "Assist with tax preparation and filing.",
                      "Pursue and resolve potential billing errors.",
                      "Manage and oversee household payroll.",
                      "Evaluate and forecast personal budgets.",
                      "Manage multiple households.",
                      "Support charitable giving and philanthropy.",
                      "Assist with personal projects as needed.",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
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
                      src={Familyadmin}
                      alt="Family office administration"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* BUTTON */}
                 <a
  href="/contact"
  className="bg-[#003d5c] hover:bg-[#002a42] text-white font-semibold py-3 px-8 rounded-lg transition-colors"
  style={{ fontFamily: "'Open Sans', sans-serif" }}
>
  Contact WE Trust Today
</a>


                  {/* PDF LINK */}
                  <p
                    className="text-[#003d5c] font-medium underline cursor-pointer"
                    style={{ fontFamily: "'Nanum Gothic', sans-serif" }}
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
