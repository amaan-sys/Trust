// FinancialPOA.jsx
import React from "react";

export default function FinancialPOA() {
  return (
    <div className="font-sans text-gray-900 leading-relaxed">
      {/* Hero */}
      <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url('/path-to-hero-image.jpg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-4xl font-semibold text-center px-4">
            Attorney-in-Fact / Financial Power of Attorney Services
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto mt-12 px-4">
        <p className="mb-6 text-lg">
          A financial power of attorney (POA) is a legally binding document that empowers an individual, known as the
          attorney-in-fact, to manage your finances on your behalf. It is essential if you are unable to act
          independently due to capacity issues or prefer someone else to handle your financial affairs. Whether
          due to prolonged disability or short-term situations, such as military deployment, a POA grants authority to
          manage bank accounts, pay bills, and conduct other financial transactions.  
        </p>

        <p className="mb-6 text-lg">
          Utilizing a financial POA can be a strategic tool for future planning, especially in scenarios involving
          potential incapacity due to conditions like dementia or traumatic brain injury. Typically, “durable” when
          used for advance planning, a POA remains effective even if you become incapacitated.  
        </p>

        <p className="mb-6 text-lg">
          WE Trust Company offers an optimal solution for individuals who are unable to manage their personal
          finances or prefer to delegate this responsibility to a trusted third-party professional.  
        </p>

        <p className="mb-6 text-lg">
          By appointing WE Trust Company as your agent under a financial power of attorney, you gain peace of mind
          knowing that, if needed, your financial matters are in capable and trustworthy hands. Our professional
          team possesses extensive experience and expertise in various financial aspects, including budgeting, bill
          payments, investment oversight with your financial advisor, tax planning with your CPA, and thorough
          record-keeping.  
        </p>

        <p className="mb-6 text-lg">
          We understand the importance of trust in managing personal finances. We take this responsibility seriously
          and uphold the highest standards of professionalism, ethics, and confidentiality. Your financial
          information and interests are treated with the utmost care and discretion.  
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          As an Attorney-in-Fact, We Will:
        </h2>
        <ul className="list-disc list-inside space-y-3 text-lg mb-12">
          <li>Walk alongside you to navigate financial matters.</li>
          <li>Pay bills and track financial records.</li>
          <li>Assist with tax preparation and filing.</li>
          <li>Manage and oversee household payroll if necessary.</li>
          <li>Provide regular updates and reports as needed.</li>
          <li>Advocate for you every step of the way.</li>
        </ul>

        <div className="text-center mb-12">
          <button className="bg-blue-900 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-800 transition">
            Contact WE Trust Today
          </button>
        </div>

        <div className="text-center mb-12">
          <p className="text-blue-900 font-medium underline cursor-pointer">
            Attorney-in-Fact Information Sheet (PDF)
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-4">Attorney-in-Fact Frequently Asked Questions</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">What is an Attorney-in-Fact?</h3>
            <p className="text-lg">
              An Attorney-in-Fact is named via a power of attorney document. This authorizes the attorney-in-fact to act
              on behalf of another person and to make legally binding decisions for that person.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Will I give up the power to act on my own behalf if I appoint WE Trust Company as my Attorney-In-Fact?
            </h3>
            <p className="text-lg">
              No. Activating a power of attorney does not mean relinquishing your ability to act independently. You can
              tailor the authority to a specific activity (e.g., selling your home) or grant your agent broader authority
              for various situations. You are not signing away your rights but, rather, creating a safety net should you
              require one.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              What are the advantages of naming WE Trust Company as an Attorney-in-Fact?
            </h3>
            <p className="text-lg">
              We are a completely impartial and unbiased advocate for our client. We have no perceived or potential conflict
              of interest in acting on behalf of someone. Our sole responsibility, in collaboration with our client, when
              possible, is to help navigate the most feasible financial and life decisions. We are often named in documents
              as the primary agent or as a successor to a spouse, child, or trusted friend.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">How should I name WE Trust Company in my Power of Attorney?</h3>
            <p className="text-lg">
              Please have the drafting attorney use the following language: “WE Trust Company, a Washington chartered trust
              company, and its successor and assigns.”
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">How do you charge for your work as Attorney-in-Fact?</h3>
            <p className="text-lg">
              WE Trust Company charges by the hour to serve as Attorney-in-Fact only when called to serve. There is no fee to
              name us in documents. A fee schedule is available upon request.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
