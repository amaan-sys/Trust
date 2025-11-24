import React from "react";
import estateHeaderImage from "../../assets/Estatess.jpg";
import EstateAdmin from "../../assets/EstateAdmin.jpg";

export default function EstateHero() {
  return (
    <>
      {/* HERO BANNER */}
      <div className="relative w-full h-[420px] mb-10">
        <img
          src={estateHeaderImage}
          alt="Estate Administration banner"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/20"></div>
      </div>

      <div className="w-full bg-white">
        {/* Google Fonts */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&family=Open+Sans:wght@400;600;700&family=Noto+Sans+Gothic:wght@400;600;700&display=swap');
        `}</style>

        {/* MAIN CONTENT */}
        <div className="py-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Centered Title */}
            <h1
              className="text-3xl sm:text-4xl font-bold text-[#003d5c] text-center mb-10"
              style={{ fontFamily: "'Noto Sans Gothic', sans-serif" }}
            >
              Estate Administration Services
            </h1>

            {/* Paragraph Block */}
            <div className="max-w-4xl mx-auto mb-14 text-center lg:text-left">
              <p
                className="text-base text-gray-700 leading-7 mb-6"
                style={{ fontFamily: "'Nanum Gothic', sans-serif" }}
              >
                Selecting a Personal Representative, also known as an Executor,
                to oversee your affairs after you pass is a crucial aspect of
                estate planning. Many individuals opt to appoint a professional
                fiduciary for various reasons.
              </p>

              <h3
                className="text-xl font-bold text-[#003d5c] mb-4"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                Reasons Might Include:
              </h3>

              <ul
                className="space-y-3 text-gray-700 leading-7"
                style={{ fontFamily: "'Nanum Gothic', sans-serif" }}
              >
                {[
                  {
                    title: "Objectivity",
                    desc: "A professional fiduciary eliminates conflicts of interest and ensures neutral handling of assets.",
                  },
                  {
                    title: "Expertise",
                    desc: "Our team has years of experience and understands the complexities of estate and tax law.",
                  },
                  {
                    title: "Oversight",
                    desc: "We are examined by the Washington State DFI, ensuring accountability and compliance.",
                  },
                ].map((reason, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <div>
                      <strong>{reason.title}:</strong> {reason.desc}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

              {/* LEFT CONTENT */}
              <div>
                <h2
                  className="text-2xl font-bold text-[#003d5c] mb-6"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  AS THE PERSONAL REPRESENTATIVE OF YOUR ESTATE, WE WILL:
                </h2>

                <ul
                  className="space-y-3 text-gray-700 leading-7"
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
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* RIGHT IMAGE + BUTTONS */}
              <div className="flex flex-col items-center lg:items-end gap-6">
                {/* Image */}
                <div className="w-full max-w-md h-80 bg-gray-100 rounded-lg overflow-hidden shadow-md">
                  <img
                    src={EstateAdmin}
                    alt="Estate Administration"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Button + PDF — BELOW IMAGE */}
                <button
                  className="bg-[#003d5c] hover:bg-[#002a42] text-white font-bold py-3 px-8 rounded-lg transition-all"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  Contact WE Trust Today
                </button>

                <p
                  className="text-[#003d5c] underline cursor-pointer font-medium"
                  style={{ fontFamily: "'Nanum Gothic', sans-serif" }}
                >
                  Estate Administration Information Sheet (PDF)
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
