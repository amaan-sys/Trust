import React, { useState } from "react";

export default function EstateAdmin() {
  return (
    <div className="w-full bg-white py-12 px-4 sm:px-8">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&family=Open+Sans:wght@400;600;700&family=Noto+Sans+Gothic:wght@400;600;700&display=swap');
      `}</style>

      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2
          className="text-2xl sm:text-3xl font-bold text-[#003d5c] mb-12 text-center"
          style={{ fontFamily: "'Open Sans', sans-serif" }}
        >
          Estate Administration Frequently Asked Questions
        </h2>

        {/* FAQ Items */}
        <div className="space-y-8">
          {[
            {
              question: "What is a Personal Representative?",
              answer: "Sometimes called an Executor, a Personal Representative is the individual or company appointed by a Will to administer an estate for someone who has died. Responsibilities include marshaling all assets, paying outstanding debts, filing final tax returns, and distributing remaining estate assets to the named beneficiaries."
            },
            {
              question: "What are the advantages of naming WE Trust Company as a Personal Representative?",
              answer: "We do this work every day and have expertise with probate law, required tax filings, beneficiary communication, and we have a wealth of resources to assist with estate settlement. We are neutral, impartial, and objective. Our sole duty is to carry out the wishes of the decedent."
            },
            {
              question: "Will WE Trust Company serve as a Personal Representative if named in estate planning documents I have prepared myself or downloaded from the Internet?",
              answer: "Our policy is to serve as the sole Personal Representative in estate planning documents prepared by a licensed attorney only. We do not serve as co-Personal Representative, and we reserve the right to decline appointments at any time."
            },
            {
              question: "How should I name WE Trust Company in my Will?",
              answer: 'Please have the drafting attorney use the following language: "WE Trust Company, a Washington chartered trust company, and its successor and assigns."'
            },
            {
              question: "How do you charge for your work as a Personal Representative?",
              answer: "WE Trust Company charges by the hour for estate administration only when called to serve. There is no fee to name us in documents. A fee schedule is available upon request."
            },
          ].map((faq, index) => (
            <div key={index}>
              <h3
                className="text-lg sm:text-xl font-bold text-[#003d5c] mb-2"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                {faq.question}
              </h3>
              <p
                className="text-sm sm:text-base text-gray-700 leading-6"
                style={{ fontFamily: "'Nanum Gothic', sans-serif" }}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
