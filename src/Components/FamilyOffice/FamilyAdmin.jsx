// src/pages/FamilyOffice/FamilyAdmin.jsx
import React from "react";

export default function FamilyAdmin() {
  return (
    <div className="w-full bg-white py-20 px-8">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&family=Open+Sans:wght@400;600;700&family=Noto+Sans+Gothic:wght@400;600;700&display=swap');
      `}</style>

      <div className="max-w-6xl mx-auto">

        {/* Title - Centered */}
        <h3 className="text-2xl font-bold text-center text-[#003d5c] mb-10 tracking-wide" style={{ fontFamily: "'Noto Sans Gothic', sans-serif" }}>
          FAMILY OFFICE ADMINISTRATION FREQUENTLY ASKED QUESTIONS
        </h3>

        {/* FAQ LIST - Left Aligned */}
        <div className="space-y-2">

          <div className="text-left">
            <h3 className="text-lg font-bold text-gray-800 mb-2" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600 }}>
              What is a Family Office Administrator?
            </h3>
            <p className="text-base text-gray-700 leading-7" style={{ fontFamily: "'Nanum Gothic', sans-serif", fontWeight: 400 }}>
              WE Trust Company's family office administrators provide a comprehensive suite of services, including financial tracking and record keeping, tax preparation, philanthropic assistance, and risk management. We serve as the gatekeeper of family financial management, interacting with and reporting on the details that help your household run smoothly.
            </p>
          </div>

          <div className="text-left">
            <h3 className="text-lg font-bold text-gray-800 mb-2" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600 }}>
              What is the difference between wealth management and family office?
            </h3>
            <p className="text-base text-gray-700 leading-7" style={{ fontFamily: "'Nanum Gothic', sans-serif", fontWeight: 400 }}>
              Family office administration offers a wide range of customized solutions for day-to-day financial details, while investment advisors focus primarily on investment management and financial planning.
            </p>
          </div>

          <div className="text-left">
            <h3 className="text-lg font-bold text-gray-800 mb-2" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600 }}>
              What are the advantages of hiring WE Trust Company as your Family Office?
            </h3>
            <p className="text-base text-gray-700 leading-7" style={{ fontFamily: "'Nanum Gothic', sans-serif", fontWeight: 400 }}>
              Affluent individuals and families who want to have control over their finances can trust that our team will manage the details. We listen carefully and offer options for easing your burden. Delegating these details allows you to focus on enjoying life.
            </p>
          </div>

          <div className="text-left">
            <h3 className="text-lg font-bold text-gray-800 mb-2" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600 }}>
              How do I engage WE Trust Company as my Family Office?
            </h3>
            <p className="text-base text-gray-700 leading-7" style={{ fontFamily: "'Nanum Gothic', sans-serif", fontWeight: 400 }}>
              We are hired through a letter of engagement that defines the scope of our services and clearly details the mutual understanding of our role.
            </p>
          </div>

          <div className="text-left">
            <h3 className="text-lg font-bold text-gray-800 mb-2" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600 }}>
              How do you charge for your work as a Family Office Administrator?
            </h3>
            <p className="text-base text-gray-700 leading-7" style={{ fontFamily: "'Nanum Gothic', sans-serif", fontWeight: 400 }}>
              WE Trust Company charges by the hour for Family Office Administration. A fee schedule is available upon request.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
