// EstateAdministration.jsx
import React from "react";

export default function EstateAdministration() {
  return (
    <div className="font-sans text-gray-900 leading-relaxed">
      {/* Hero / Header */}
      <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url('/path-to-estate-hero.jpg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-4xl font-semibold text-center px-4">
            Estate Administration Services
          </h1>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-3xl mx-auto mt-12 px-4 space-y-6">
        <p className="text-lg">
          Selecting a Personal Representative, also known as an Executor, to oversee your affairs after you pass is a crucial aspect of estate planning. Many individuals opt to appoint a professional fiduciary for various reasons. :contentReference[oaicite:1]{index=1}  
        </p>

        <h2 className="text-2xl font-semibold mt-8">Reasons Might Include:</h2>
        <ul className="list-disc list-inside space-y-3 text-lg pl-4">
          <li>
            <strong>Objectivity:</strong> Choosing a professional fiduciary eliminates potential conflicts of interest among family members. Entrusting these responsibilities to a professional ensures that estate assets are managed and distributed according to your plan. :contentReference[oaicite:2]{index=2}  
          </li>
          <li>
            <strong>Expertise:</strong> The role of a Personal Representative requires knowledge of estate and tax law. Our team of seasoned professionals has years of experience in estate administration, ensuring a thorough understanding of the complexities involved in carrying out your final wishes. :contentReference[oaicite:3]{index=3}  
          </li>
          <li>
            <strong>Oversight:</strong> As a Washington chartered trust company, our business activities are periodically reviewed and examined by the Washington State Department of Financial Institutions, providing an additional layer of oversight and accountability. :contentReference[oaicite:4]{index=4}  
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">As the Personal Representative of Your Estate, We Will:</h2>
        <ul className="list-disc list-inside space-y-3 text-lg pl-4">
          <li>Work with an attorney to open a probate in court.</li>
          <li>Communicate with beneficiaries.</li>
          <li>Furnish each beneficiary with a copy of the Will.</li>
          <li>Notify potential creditors and settle all valid debts.</li>
          <li>Marshal, inventory and manage estate assets.</li>
          <li>Facilitate the sale of real property or other assets.</li>
          <li>File required income tax returns.</li>
          <li>File required state and federal estate tax return.</li>
          <li>Distribute estate assets to beneficiaries.</li>
          <li>Provide a detailed accounting to beneficiaries and/or the probate court.</li>
        </ul>

        <div className="text-center mt-10">
          <button className="bg-blue-900 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-800 transition">
            Contact WE Trust Today
          </button>
        </div>

        <div className="text-center mt-6">
          <p className="text-blue-900 font-medium underline cursor-pointer">
            <a href="/path-to-estate-info-sheet.pdf" className="text-blue-900 font-medium underline">
                   Estate Administration Information Sheet (PDF)
           </a>

            
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-12">Estate Administration Frequently Asked Questions</h2>
        <div className="space-y-8 mt-6 text-lg">
          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">What is a Personal Representative?</h3>
            <p>
              Sometimes called an Executor, a Personal Representative is the individual or company appointed by a Will to administer an estate for someone who has died. Responsibilities include marshaling all assets, paying outstanding debts, filing final tax returns, and distributing remaining estate assets to the named beneficiaries. :contentReference[oaicite:5]{index=5}  
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              What are the advantages of naming WE Trust Company as a Personal Representative?
            </h3>
            <p>
              We do this work every day and have expertise with probate law, required tax filings, beneficiary communication, and we have a wealth of resources to assist with estate settlement. We are neutral, impartial, and objective. Our sole duty is to carry out the wishes of the decedent. :contentReference[oaicite:6]{index=6}  
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Will WE Trust Company serve as a Personal Representative if named in estate planning documents I have prepared myself or downloaded from the Internet?
            </h3>
            <p>
              Our policy is to serve as the sole Personal Representative in estate planning documents prepared by a licensed attorney only. We do not serve as co-Personal Representative, and we reserve the right to decline appointments at any time. :contentReference[oaicite:7]{index=7}  
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">How should I name WE Trust Company in my Will?</h3>
            <p>
              Please have the drafting attorney use the following language: “WE Trust Company, a Washington chartered trust company, and its successor and assigns.” :contentReference[oaicite:8]{index=8}  
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">How do you charge for your work as a Personal Representative?</h3>
            <p>
              WE Trust Company charges by the hour for estate administration only when called to serve. There is no fee to name us in documents. A fee schedule is available upon request. :contentReference[oaicite:9]{index=9}  
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
