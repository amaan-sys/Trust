import React from "react";
import estateHeaderImage from "../../assets/Estatess.jpg";
import EstateAdmin from "../../assets/TrustAdmin.jpg";

export default function EstateHeroTop() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-900">
      {/* Background image + gradient */}
      <div className="absolute inset-0">
        <img
          src={estateHeaderImage}
          alt="Estate Administration"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001827]/95 via-[#003552]/85 to-[#005b88]/65" />
      </div>

      {/* Hero content */}
      <div className="relative max-w-6xl mx-auto px-6 lg:px-10 pt-14 pb-16 lg:pt-16 lg:pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* LEFT: Heading & intro */}
          <div className="w-full lg:w-1/2 text-left space-y-5">
            <p className="text-xs uppercase tracking-[0.25em] text-blue-200">
              Estate Administration
            </p>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Estate administration
              <span className="block text-blue-200 mt-1">
                handled with clarity, care, and professionalism.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-100/90 leading-relaxed max-w-xl">
              Choosing a Personal Representative (Executor) is one of the most
              important decisions in your estate plan. WE Trust Company provides
              experienced, neutral fiduciary support so your wishes are carried
              out smoothly and respectfully.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button className="inline-flex items-center justify-center rounded-full bg-[#00A4D8] px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg hover:bg-[#0082aa] hover:shadow-xl transition">
                Contact WE Trust Today
              </button>

              <button className="text-sm font-medium text-blue-100 underline underline-offset-4 hover:text-white transition">
                Estate Administration Information Sheet (PDF)
              </button>
            </div>
          </div>

          {/* RIGHT: Floating info card */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative max-w-md w-full">
              {/* Glow */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-sky-400/30 via-blue-300/25 to-cyan-200/30 blur-2xl opacity-80" />

              <div className="relative rounded-3xl bg-white/95 shadow-2xl border border-slate-100 overflow-hidden">
                <div className="h-44 w-full overflow-hidden">
                  <img
                    src={EstateAdmin}
                    alt="Estate administration team"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#004A6D] font-semibold">
                    Why choose a professional personal representative?
                  </p>

                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#007dc5]" />
                      <span>
                        <strong>Objectivity</strong> — Neutral administration that
                        avoids family conflicts and difficult dynamics.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#007dc5]" />
                      <span>
                        <strong>Experience</strong> — Familiarity with probate
                        procedures, tax filings, and asset management.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#007dc5]" />
                      <span>
                        <strong>Oversight</strong> — Regulated by the Washington State
                        Department of Financial Institutions.
                      </span>
                    </li>
                  </ul>

                  <div className="mt-2 rounded-2xl bg-slate-50 border border-slate-200 px-4 py-3 text-xs text-slate-600 leading-relaxed">
                    WE Trust Company is examined regularly as a Washington state
                    trust company, providing structure, accountability, and
                    reassurance for your beneficiaries.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
