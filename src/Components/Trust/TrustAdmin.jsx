import React, { useState } from "react";

export default function TrustAdmin() {
  return (
    <div className="w-full bg-white py-12 px-4 sm:px-8">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&family=Open+Sans:wght@400;600;700&family=Noto+Sans+Gothic:wght@400;600;700&display=swap');
      `}</style>

      <div className="max-w-4xl mx-auto">
        {/* Trust Types Section */}
        <div className="mb-12">
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#003d5c] mb-8"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            Trust Types We Manage
          </h2>

          <ul
            className="space-y-4 text-sm sm:text-base text-gray-700 leading-6"
            style={{ fontFamily: "'Nanum Gothic', sans-serif" }}
          >
            {[
              { title: "Revocable Living Trust", desc: "Created during one's lifetime and effective immediately upon signing. The grantor retains ownership and control of the property in the trust and can change the trust terms, including the trustees and beneficiaries." },
              { title: "Irrevocable Trust", desc: "A trust where the grantor cannot change the trust after its creation. Grantors may choose such trust to limit estate taxes or to shield assets from creditors." },
              { title: "Special Needs Trust", desc: "A trust created for an individual with special needs. This trust can provide supplemental income for a person with special needs who may also qualify for governmental support." },
              { title: "Testamentary Trust", desc: "A trust created within a Will, that is funded and effective after the grantor has died." },
              { title: "Credit Shelter Trust", desc: "A tax planning tool often used by married couples to minimize or avoid estate tax liabilities. Also known as AB or Bypass Trusts." },
              { title: "Settlement Trust", desc: "A trust typically established to preserve funds awarded to a personal injury plaintiff. Designed to grow assets and act as a spendthrift tool." },
            ].map((trust, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-3 font-bold">•</span>
                <div>
                  <strong>{trust.title}:</strong> {trust.desc}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ Section */}
        <div>
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#003d5c] mb-8"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            Trust Administration Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            {[
              {
                question: "What is a Professional Trustee?",
                answer: "An individual or company appointed and compensated to manage and administer trusts on behalf of individuals or families. Professional trustees have expertise in trust administration, legal compliance, and financial management. A trustee holds legal title to the property in trust for the benefit of the ultimate recipient."
              },
              {
                question: "What is a Trust Agreement?",
                answer: "A contract formally expressing the understanding between the grantor and trustee. It typically contains instructions on how the trust property should be held and invested, the purposes for which its benefits are used, and the duration of the trust."
              },
              {
                question: "What are the advantages of naming WE Trust Company as a Trustee?",
                answer: "Trusts managed by professional trustees are supervised and reviewed by internal and external auditors from regulatory authorities and audit firms. WE Trust Company is institutionally objective, impartial and has a duty of loyalty solely to trust beneficiaries."
              },
              {
                question: "How should I name WE Trust Company in my Trust?",
                answer: 'Please have the drafting attorney use the following language: "WE Trust Company, a Washington chartered trust company, and its successor and assigns."'
              },
              {
                question: "How do you charge for your work as a Trustee?",
                answer: "WE Trust Company charges a fee based upon assets held in the trust. A fee schedule is available upon request."
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
    </div>
  );
}
