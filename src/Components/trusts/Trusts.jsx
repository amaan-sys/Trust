// TrustAdministration.jsx
import React from "react";

export default function TrustAdministration() {
  return (
    <div className="font-sans text-gray-900 leading-relaxed">
      {/* Hero / Header */}
      <div className="relative h-64 bg-gray-200 flex items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-center px-4">
          Trust Administration Services
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto mt-12 px-4 space-y-6">
        <p>
          As a Washington State chartered trust company, WE Trust Company is
          committed to complying with all legal requirements and regulations
          associated with trust administration. We are chartered, regulated, and
          participate in regularly scheduled exams with the Washington State
          Department of Financial Institutions. :contentReference[oaicite:1]{index=1}
        </p>

        <p>
          Dedicated to ensuring that your wishes and the financial well-being of
          your loved ones are safeguarded, we go beyond the numbers, providing a
          personalized approach to trust administration. We understand the
          intricacies of trust management and value the relationships built
          along the way. Our fiduciary obligation is to manage assets put in
          trust for the best interest of the beneficiaries. :contentReference[oaicite:2]{index=2}
        </p>

        <h2 className="text-2xl font-semibold mt-8">Trust Types We Manage</h2>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>
            <strong>Revocable Living Trust:</strong> Created during one’s
            lifetime and effective immediately upon signing. The grantor retains
            ownership and control of the property in the trust and can change
            the trust terms, including the trustees and beneficiaries. :contentReference[oaicite:3]{index=3}
          </li>
          <li>
            <strong>Irrevocable Trust:</strong> A trust where the grantor cannot
            change the trust after its creation. Grantors may choose such trust
            to limit estate taxes or to shield assets from creditors. :contentReference[oaicite:4]{index=4}
          </li>
          <li>
            <strong>Special Needs Trust:</strong> A trust created for an
            individual with special needs. This trust can provide supplemental
            income for a person with special needs who may also qualify for
            governmental support. :contentReference[oaicite:5]{index=5}
          </li>
          <li>
            <strong>Testamentary Trust:</strong> A trust created within a Will,
            that is funded and effective after the grantor has died. :contentReference[oaicite:6]{index=6}
          </li>
          <li>
            <strong>Credit Shelter Trust:</strong> A tax planning tool often used
            by married couples to minimize or avoid estate tax liabilities. Also
            known as AB or Bypass Trusts. :contentReference[oaicite:7]{index=7}
          </li>
          <li>
            <strong>Settlement Trust:</strong> A trust typically established to
            preserve funds awarded to a personal injury plaintiff. Designed to
            grow assets and act as a spendthrift tool. :contentReference[oaicite:8]{index=8}
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">As the Trustee of Your Trust, We Will:</h2>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>
            Manage and monitor trust assets held with a registered investment
            advisor, optimizing investment strategies for the benefit of the
            trust beneficiaries. :contentReference[oaicite:9]{index=9}
          </li>
          <li>
            Facilitate and oversee the distribution of assets according to the
            trust terms, ensuring accuracy and adherence to the grantor’s
            intentions. :contentReference[oaicite:10]{index=10}
          </li>
          <li>
            Foster open communication with beneficiaries, offering guidance and
            support throughout the trust administration process. :contentReference[oaicite:11]{index=11}
          </li>
          <li>
            Maintain meticulous records of all transactions, to guarantee
            transparency and accountability in trust management. :contentReference[oaicite:12]{index=12}
          </li>
          <li>
            File required trust tax returns and any required court trust reports.
            :contentReference[oaicite:13]{index=13}
          </li>
        </ul>

        <div className="text-center mt-10">
          <button className="bg-blue-900 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-800 transition">
            Contact WE Trust Today
          </button>
        </div>

        <div className="text-center mt-6">
          <p className="text-blue-900 font-medium underline cursor-pointer">
            Trust Administration Information Sheet (PDF)
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-12">Trust Administration Frequently Asked Questions</h2>

        <div className="space-y-8 mt-6">
          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              What is a Professional Trustee?
            </h3>
            <p>
              An individual or company appointed and compensated to manage and
              administer trusts on behalf of individuals or families. Professional
              trustees have expertise in trust administration, legal compliance,
              and financial management. A trustee holds legal title to the property
              in trust for the benefit of the ultimate recipient. :contentReference[oaicite:14]{index=14}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              What is a Trust Agreement?
            </h3>
            <p>
              A contract formally expressing the understanding between the grantor
              and trustee. It typically contains instructions on how the trust
              property should be held and invested, the purposes for which its
              benefits are used, and the duration of the trust. :contentReference[oaicite:15]{index=15}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              What are the advantages of naming WE Trust Company as a Trustee?
            </h3>
            <p>
              Trusts managed by professional trustees are supervised and reviewed
              by internal and external auditors from regulatory authorities and
              audit firms. WE Trust Company is institutionally objective, impartial
              and has a duty of loyalty solely to trust beneficiaries. :contentReference[oaicite:16]{index=16}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              How should I name WE Trust Company in my Trust?
            </h3>
            <p>
              Please have the drafting attorney use the following language: “WE Trust
              Company, a Washington chartered trust company, and its successor and
              assigns.” :contentReference[oaicite:17]{index=17}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              How do you charge for your work as a Trustee?
            </h3>
            <p>
              WE Trust Company charges a fee based upon assets held in the trust.
              A fee schedule is available upon request. :contentReference[oaicite:18]{index=18}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
