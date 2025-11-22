import React, { useState } from "react";

export default function AttorneyAdmin() {
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
          Attorney-in-Fact Frequently Asked Questions
        </h2>

        {/* FAQ Items */}
        <div className="space-y-8">
          {[
            {
              question: "What is an Attorney-in-Fact?",
              answer: "An Attorney-in-Fact is named via a power of attorney document. This authorizes the attorney-in-fact to act on behalf of another person and to make legally binding decisions for that person."
            },
            {
              question: "Will I give up the power to act on my own behalf if I appoint WE Trust Company as my Attorney-In-Fact?",
              answer: "No. Activating a power of attorney does not mean relinquishing your ability to act independently. You can tailor the authority to a specific activity (e.g., selling your home) or grant your agent broader authority for various situations. You are not signing away your rights but, rather, creating a safety net should you require one."
            },
            {
              question: "What are the advantages of naming WE Trust Company as an Attorney-in-Fact?",
              answer: "We are a completely impartial and unbiased advocate for our client. We have no perceived or potential conflict of interest in acting on behalf of someone. Our sole responsibility, in collaboration with our client, when possible, is to help navigate the most feasible financial and life decisions. We are often named in documents as the primary agent or as a successor to a spouse, child, or trusted friend."
            },
            {
              question: "How should I name WE Trust Company in my Power of Attorney?",
              answer: 'Please have the drafting attorney use the following language: "WE Trust Company, a Washington chartered trust company, and its successor and assigns."'
            },
            {
              question: "How do you charge for your work as Attorney-in-Fact?",
              answer: "WE Trust Company charges by the hour to serve as Attorney-in-Fact only when called to serve. There is no fee to name us in documents. A fee schedule is available upon request."
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
