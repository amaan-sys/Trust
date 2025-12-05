import React from "react";
import EstateAdmin from "../../assets/EstateAdmin.jpg";

export default function EstateResponsibilities() {
  const responsibilities = [
    "Work with an attorney to open a probate in court.",
    "Communicate clearly and consistently with beneficiaries.",
    "Provide each beneficiary with a copy of the Will.",
    "Notify potential creditors and settle all valid debts.",
    "Marshal, inventory, and manage estate assets.",
    "Facilitate the sale of real property or other assets.",
    "File required income tax returns.",
    "File required state and federal estate tax returns.",
    "Distribute estate assets to beneficiaries.",
    "Provide detailed accounting to beneficiaries and/or the probate court.",
  ];

  return (
    <section className="w-full bg-[#F4F7FB] py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        {/* LEFT: Responsibilities list */}
        <div>
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#003d5c] mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            As the Personal Representative of your estate, WE Trust will:
          </h2>

          <p className="text-sm text-slate-600 mb-5 max-w-xl">
            From opening probate to final distributions, our team coordinates
            each step with care and transparency.
          </p>

          <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6">
            <ul className="space-y-3 text-sm text-slate-700 leading-relaxed">
              {responsibilities.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#00A4D8]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT: Summary + image block */}
        <div className="flex flex-col gap-6">
          <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6">
            <h3
              className="text-lg font-semibold text-[#003d5c] mb-3"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              A calm, structured approach to estate settlement.
            </h3>

            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              Settling an estate can be overwhelming for grieving family members.
              Appointing WE Trust Company as your Personal Representative lifts
              that burden, ensuring that every legal and financial obligation is
              met with precision.
            </p>

            <p className="text-sm text-slate-700 leading-relaxed">
              We coordinate closely with your attorney, CPA, and other advisors,
              keeping beneficiaries informed while safeguarding your legacy.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 h-64">
            <img
              src={EstateAdmin}
              alt="Estate administration in progress"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
