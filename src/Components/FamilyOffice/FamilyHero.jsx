import React from "react";
import Familyoff from "../../assets/Familyoff.jpg";
import Familyadmin from "../../assets/Familysheet.jpg";

export default function FamilyOfficeSection() {
  return (
    <div className="w-full">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&family=Open+Sans:wght@400;600;700&family=Noto+Sans+Gothic:wght@400;600;700&display=swap');
      `}</style>

      {/* HERO BANNER IMAGE - Full width and tall */}
      <div className="w-full h-96 overflow-hidden flex items-end">
        <img 
          src={Familyoff} 
          alt="Family office banner" 
          className="w-full h-auto object-contain"
        />
      </div>

      {/* MAIN CONTENT SECTION */}
      <div className="w-full bg-white py-20">
        <div className="w-full px-8">
          {/* Title centered */}
          <h1 className="text-4xl font-bold text-[#003d5c] mb-12 text-center max-w-6xl mx-auto" style={{ fontFamily: "'Noto Sans Gothic', sans-serif" }}>
            Family Office Administration
          </h1>

          {/* Paragraphs - Full width stretched */}
          <div className="w-full mb-16 max-w-6xl">
            <p className="text-base text-gray-700 leading-8 mb-6" style={{ fontFamily: "'Nanum Gothic', sans-serif" }}>
              Family Office Administration includes a variety of concierge services offered to individuals and families with complicated financial lives and significant net worth. We make the ordinary, as well as the complex, flow smoother, giving insight into your finances without requiring you to participate in the daily tasks of bill pay, cash tracking and budgeting.
            </p>

            <p className="text-base text-gray-700 leading-8" style={{ fontFamily: "'Nanum Gothic', sans-serif" }}>
              Our Family Office Administration group has the experience and knowledge to provide custom solutions to address your unique circumstances. We have a demonstrated track record of success by providing transparent reporting and clear communication.
            </p>
          </div>

          {/* Two column layout - Key points on left, Image on right */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* LEFT TEXT SECTION - Key Points */}
              <div>
                <h2 className="text-2xl font-bold text-[#003d5c] mb-8" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700 }}>
                  AS A FAMILY OFFICE ADMINISTRATOR, WE MAY:
                </h2>

                <ul className="space-y-3 text-base text-gray-700 leading-8 mb-12" style={{ fontFamily: "'Nanum Gothic', sans-serif" }}>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>Pay bills and track financial records.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>Assist with tax preparation and filing.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>Pursue and resolve potential billing errors.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>Manage and oversee household payroll.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>Evaluate and forecast personal budgets.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>Manage multiple households.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>Support and track charitable giving and philanthropy.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>Assist with personal projects as needed.</span>
                  </li>
                </ul>

                {/* Contact Button */}
                <a href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                  Contact WE Trust Today
                </a>
              </div>

              {/* RIGHT SIDE - Image */}
              <div className="flex justify-center items-start">
                <div className="w-full">
                  <img 
                    src={Familyadmin} 
                    alt="Family office administration" 
                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Bottom section - Below the grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-12">
              {/* Empty space on left */}
              <div></div>
              
              {/* Family Office Information Sheet on right */}
              <div className="flex justify-start">
                <p className="text-lg text-gray-800 font-semibold" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                  Family Office Information Sheet (PDF)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
