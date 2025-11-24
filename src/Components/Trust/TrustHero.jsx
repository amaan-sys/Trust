import React from "react";
import trustHeaderImage from "../../assets/Trusttt.jpg";
import TrustAdmin from "../../assets/TrustAdmin.jpg";

export default function TrustHero() {
  return (
    <>
      {/* HERO BANNER IMAGE */}
      <div className="relative w-full h-[500px] mb-10">
        <img
          src={trustHeaderImage}
          alt="Trust Administration banner"
          className="w-full h-full object-cover object-[0px_-100px]"
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
              Trust Administration Services
            </h1>

            {/* PARAGRAPH SECTION */}
            <div className="w-full mb-12 sm:mb-16 max-w-4xl mx-auto">
              <p
                className="text-sm sm:text-base text-gray-700 leading-6 sm:leading-7 mb-6"
                style={{ fontFamily: "'Nanum Gothic', sans-serif" }}
              >
                As a Washington State chartered trust company, WE Trust Company
                is committed to complying with all legal requirements and
                regulations associated with trust administration. We are
                chartered, regulated, and participate in regularly scheduled
                exams with the Washington State Department of Financial
                Institutions.
              </p>

              <p
                className="text-sm sm:text-base text-gray-700 leading-6 sm:leading-7"
                style={{ fontFamily: "'Nanum Gothic', sans-serif" }}
              >
                Dedicated to ensuring that your wishes and the financial
                well-being of your loved ones are safeguarded, we go beyond the
                numbers, providing a personalized approach to trust
                administration. We understand the intricacies of trust
                management and value the relationships built along the way. Our
                fiduciary obligation is to manage assets put in trust for the
                best interest of the beneficiaries.
              </p>
            </div>

            {/* TWO COLUMN LAYOUT */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* LEFT COLUMN */}
                <div>
                  <h2
                    className="text-xl sm:text-2xl font-bold text-[#003d5c] mb-6"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    AS THE TRUSTEE OF YOUR TRUST, WE WILL:
                  </h2>

                  <ul
                    className="space-y-3 text-sm sm:text-base text-gray-700 leading-6 mb-10"
                    style={{ fontFamily: "'Nanum Gothic', sans-serif" }}
                  >
                    {[
                      "Manage and monitor trust assets held with a registered investment advisor.",
                      "Facilitate and oversee the distribution of assets according to the trust terms.",
                      "Foster open communication with beneficiaries.",
                      "Maintain meticulous records of all transactions.",
                      "File required trust tax returns and any required court trust reports.",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-3">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* RIGHT COLUMN — IMAGE + BUTTON + PDF */}
                <div className="flex flex-col items-center gap-6">

                  {/* IMAGE */}
                  <div className="w-full h-72 bg-gray-200 rounded-lg overflow-hidden shadow">
                    <img
                      src={TrustAdmin}
                      alt="Trust Administration"
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
                    Trust Administration Information Sheet (PDF)
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
