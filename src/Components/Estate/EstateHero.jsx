import React from "react";
import estateHeaderImage from "../../assets/card1.jpg";
import EstateAdmin from "../../assets/EstateAdmin.jpg";
export default function EstateHero() {
  return (
    <>
      {/* HERO BANNER IMAGE */}
      <div className="relative w-full h-[500px] mb-10">
        <img
          src={estateHeaderImage}
          alt="Estate Administration banner"
          className="w-full h-full object-cover object-center"
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
              Estate Administration Services
            </h1>

            {/* Paragraph Section */}
            <div className="w-full mb-12 sm:mb-16 max-w-4xl mx-auto">
              <p
                className="text-sm sm:text-base text-gray-700 leading-5 sm:leading-7 mb-6"
                style={{ fontFamily: "'Nanum Gothic', sans-serif" }}
              >
                Selecting a Personal Representative, also known as an Executor, to oversee your affairs after you pass is a crucial aspect of estate planning. Many individuals opt to appoint a professional fiduciary for various reasons.
              </p>

              <h3
                className="text-lg sm:text-xl font-bold text-[#003d5c] mb-4"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                Reasons Might Include:
              </h3>

              <ul
                className="space-y-3 mb-6 text-sm sm:text-base text-gray-700 leading-6"
                style={{ fontFamily: "'Nanum Gothic', sans-serif" }}
              >
                {[
                  { title: "Objectivity", desc: "Choosing a professional fiduciary eliminates potential conflicts of interest among family members. Entrusting these responsibilities to a professional ensures that estate assets are managed and distributed according to your plan." },
                  { title: "Expertise", desc: "The role of a Personal Representative requires knowledge of estate and tax law. Our team of seasoned professionals has years of experience in estate administration, ensuring a thorough understanding of the complexities involved in carrying out your final wishes." },
                  { title: "Oversight", desc: "As a Washington chartered trust company, our business activities are periodically reviewed and examined by the Washington State Department of Financial Institutions, providing an additional layer of oversight and accountability." },
                ].map((reason, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3">•</span>
                    <div>
                      <strong>{reason.title}:</strong> {reason.desc}
                    </div>
                  </li>
                ))}
              </ul>
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
                    AS THE PERSONAL REPRESENTATIVE OF YOUR ESTATE, WE WILL:
                  </h2>

                  <ul
                    className="space-y-3 text-sm sm:text-base text-gray-700 leading-4 sm:leading-5 mb-10 sm:mb-12"
                    style={{ fontFamily: "'Nanum Gothic', sans-serif" }}
                  >
                    {[
                      "Work with an attorney to open a probate in court.",
                      "Communicate with beneficiaries.",
                      "Furnish each beneficiary with a copy of the Will.",
                      "Notify potential creditors and settle all valid debts.",
                      "Marshal, inventory and manage estate assets.",
                      "Facilitate the sale of real property or other assets.",
                      "File required income tax returns.",
                      "File required state and federal estate tax return.",
                      "Distribute estate assets to beneficiaries.",
                      "Provide a detailed accounting to beneficiaries and/or the probate court.",
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
                    Estate Administration Information Sheet (PDF)
                  </p>
                </div>

                {/* RIGHT PLACEHOLDER */}
                <div className="flex justify-center items-start">
                  <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <img
                      src={EstateAdmin}
                      alt="Estate Administration"
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
