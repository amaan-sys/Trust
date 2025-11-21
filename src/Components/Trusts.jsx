import React from 'react';
import '../trust.css';
// trust.jsx
// Replica of the Estate Administration page UI from WE Trust Company (layout + content structure)
// You'll need Tailwind CSS available in your project for the classes below to render correctly.

export default function Trust() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center text-white font-semibold">WE</div>
            <div>
              <h1 className="text-lg font-semibold">WE Trust Company</h1>
              <p className="text-sm text-gray-500">2303 W Commodore Way, Suite 304, Seattle, WA 98199</p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-sm">Call Us: <span className="font-medium">(206) 781-6997</span></p>
            <a href="/contact" className="inline-block mt-2 text-sm px-3 py-1 border rounded-md border-blue-900 text-blue-900">Contact WE Trust Today</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <main className="lg:col-span-2">
            <h2 className="text-3xl font-extrabold mb-4">Estate Administration</h2>

            <p className="text-gray-700 mb-4">Selecting a Personal Representative, also known as an Executor, to oversee your affairs after you pass is a crucial aspect of estate planning. Many individuals opt to appoint a professional fiduciary for various reasons.</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">Reasons Might Include:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Objectivity:</strong> Choosing a professional fiduciary eliminates potential conflicts of interest among family members. Entrusting these responsibilities to a professional ensures that estate assets are managed and distributed according to your plan.</li>
              <li><strong>Expertise:</strong> The role of a Personal Representative requires knowledge of estate and tax law. Our team of seasoned professionals has years of experience in estate administration, ensuring a thorough understanding of the complexities involved in carrying out your final wishes.</li>
              <li><strong>Oversight:</strong> As a Washington chartered trust company, our business activities are periodically reviewed and examined by the Washington State Department of Financial Institutions, providing an additional layer of oversight and accountability.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">As the Personal Representative of your Estate, we will:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
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

            {/* PDF info sheet callout */}
            <div className="mt-8 p-6 bg-blue-50 border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-md bg-white border flex items-center justify-center">📄</div>
                <div>
                  <h4 className="text-lg font-semibold">Estate Administration Information Sheet</h4>
                  <p className="text-sm text-gray-600">Download the PDF for a concise overview of our estate administration services.</p>
                  <a className="mt-3 inline-block text-sm" href="https://www.wetrustco.com/wp-content/uploads/2024/07/Estate-Administration-Info-Sheet.pdf" target="_blank" rel="noreferrer">Download PDF</a>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <section className="mt-10">
              <h3 className="text-2xl font-semibold mb-4">Estate Administration Frequently Asked Questions</h3>

              <div className="space-y-4">
                <details className="p-4 bg-white border rounded">
                  <summary className="cursor-pointer font-medium">What is a Personal Representative?</summary>
                  <div className="mt-2 text-gray-700">Sometimes called an Executor, a Personal Representative is the individual or company appointed by a Will to administer an estate for someone who has died. Responsibilities include marshaling all assets, paying outstanding debts, filing final tax returns, and distributing remaining estate assets to the named beneficiaries.</div>
                </details>

                <details className="p-4 bg-white border rounded">
                  <summary className="cursor-pointer font-medium">What are the advantages of naming WE Trust Company as a Personal Representative?</summary>
                  <div className="mt-2 text-gray-700">We do this work every day and have expertise with probate law, required tax filings, beneficiary communication, and we have a wealth of resources to assist with estate settlement. We are neutral, impartial, and objective. Our sole duty is to carry out the wishes of the decedent.</div>
                </details>

                <details className="p-4 bg-white border rounded">
                  <summary className="cursor-pointer font-medium">Will WE Trust Company serve as a Personal Representative if named in estate planning documents I have prepared myself?</summary>
                  <div className="mt-2 text-gray-700">Our policy is to serve as the sole Personal Representative in estate planning documents prepared by a licensed attorney only. We do not serve as co-Personal Representative, and we reserve the right to decline appointments at any time.</div>
                </details>

                <details className="p-4 bg-white border rounded">
                  <summary className="cursor-pointer font-medium">How should I name WE Trust Company in my Will?</summary>
                  <div className="mt-2 text-gray-700">Please have the drafting attorney use the following language: “WE Trust Company, a Washington chartered trust company, and its successor and assigns.”</div>
                </details>

                <details className="p-4 bg-white border rounded">
                  <summary className="cursor-pointer font-medium">How do you charge for your work as a Personal Representative?</summary>
                  <div className="mt-2 text-gray-700">WE Trust Company charges by the hour for estate administration only when called to serve. There is no fee to name us in documents. A fee schedule is available upon request.</div>
                </details>
              </div>
            </section>

          </main>

          {/* Sidebar / Contact block */}
          <aside className="space-y-6">
            <div className="p-6 bg-white border rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold mb-2">Contact</h4>
              <p className="text-sm text-gray-600">2303 W Commodore Way, Suite 304<br/>Seattle, WA 98199</p>
              <p className="mt-3 text-sm">Phone: <a href="tel:+12067816997" className="text-blue-600">(206) 781-6997</a></p>
              <a href="/contact" className="mt-4 inline-block text-sm px-4 py-2 border rounded border-blue-900">Contact WE Trust Today</a>
            </div>

            <div className="p-4 bg-white border rounded-lg text-sm">
              <h5 className="font-medium">Office Hours</h5>
              <p className="text-gray-600 mt-1">Monday - Friday 8AM to 5PM</p>
              <div className="mt-3">
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-sm">LinkedIn</a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <footer className="mt-12 bg-white border-t">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-600 flex items-center justify-between">
          <div>Copyright © 2025 ~ WE Trust Company ~ All Rights Reserved.</div>
          <div className="space-x-4">
            <a href="/privacy">Privacy Policy</a>
            <a href="/sitemap">Sitemap</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
