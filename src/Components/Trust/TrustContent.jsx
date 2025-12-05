import React from "react";
import TrustAdmin from "../../assets/TrustAdmin.jpg";
import { ArrowRight } from "lucide-react";

export default function TrustContent() {
  return (
    <section className="w-full bg-gradient-to-b from-[#F7FAFF] to-[#EDF4FA] py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        {/* INTRO TEXT */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[#007dc5] font-semibold">
            Trust Administration
          </p>

          <h2
            className="text-3xl sm:text-4xl font-bold text-[#003d5c] mt-2"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Professional Oversight for Every Trust
          </h2>

          {/* Divider */}
          <div className="w-28 h-1 mx-auto mt-4 bg-gradient-to-r from-[#004A6D] via-blue-400 to-[#004A6D] rounded-full" />

          <p
            className="mt-6 text-lg text-slate-700 leading-relaxed"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            WE Trust Company is a Washington State–chartered trust company,
            regulated and examined regularly to ensure the highest fiduciary
            standards. We manage every trust with precision, transparency, and
            care.
          </p>
        </div>

        {/* MAIN 2-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* LEFT COLUMN — LIST CARD */}
          <div>
            <h3
              className="text-2xl font-bold text-[#003d5c] mb-5"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              As your Trustee, WE Trust will:
            </h3>

            <div className="rounded-2xl bg-white shadow-md border border-slate-200 p-7">
              <ul className="space-y-4">
                {[
                  "Manage and oversee trust assets alongside a registered investment advisor.",
                  "Make distributions according to the trust document.",
                  "Communicate regularly with beneficiaries.",
                  "Maintain accurate, transparent financial records.",
                  "Prepare all required trust tax returns and reports."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#00A4D8]" />
                    <p
                      className="text-[15px] text-slate-700 leading-relaxed"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN — IMAGE + BUTTONS */}
          <div className="flex flex-col gap-8 lg:items-end">

            {/* IMAGE CARD */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md w-full h-80">
              <img
                src={TrustAdmin}
                alt="Trust Administration"
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTACT BUTTON */}
            <button
              className="bg-[#003d5c] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-[#002a42] transition"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Contact WE Trust Today
            </button>

            {/* PDF LINK */}
            <button
              className="text-[#003d5c] underline font-medium hover:text-[#001f33]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Trust Administration Information Sheet (PDF)
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
