import React, { useState } from "react";

export default function TrustAdmin() {
  const trustTypes = [
    {
      title: "Revocable Living Trust",
      desc: "Created during life and can be amended. Helps with smooth management and continuity of assets.",
    },
    {
      title: "Irrevocable Trust",
      desc: "Cannot be changed once created. Often used for estate tax efficiency or asset protection.",
    },
    {
      title: "Special Needs Trust",
      desc: "Provides supplemental support while preserving eligibility for government assistance.",
    },
    {
      title: "Testamentary Trust",
      desc: "Established through a Will and becomes effective after the grantor’s death.",
    },
    {
      title: "Credit Shelter Trust",
      desc: "Used by married couples to reduce estate taxes and protect long-term family wealth.",
    },
    {
      title: "Settlement Trust",
      desc: "Designed to protect and grow funds received from legal or injury settlements.",
    },
  ];

  const faqs = [
    {
      q: "What is a Professional Trustee?",
      a: "A professional trustee manages and administers trusts with expertise in law, finance, compliance, and beneficiary relations. They act as a neutral, experienced party focused on carrying out the terms of the trust.",
    },
    {
      q: "What is a Trust Agreement?",
      a: "A Trust Agreement is the legal document that establishes the trust. It outlines how assets are managed, invested, and distributed, and defines the roles of the trustee and the rights of the beneficiaries.",
    },
    {
      q: "Why select WE Trust Company?",
      a: "WE Trust Company is regulated, impartial, and audited. Our team provides structure, consistency, and professional oversight, with a fiduciary duty to act solely in the best interests of beneficiaries.",
    },
    {
      q: "How do I name WE Trust in my documents?",
      a: "Use this language: “WE Trust Company, a Washington chartered trust company, and its successor and assigns.” Your estate planning attorney can include this in your documents.",
    },
    {
      q: "How are trustee fees charged?",
      a: "We typically charge fees based on assets held in trust. A transparent fee schedule is available upon request, and we are happy to review it with you and your advisors.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0); // first FAQ open by default

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative w-full py-24 px-6 bg-gradient-to-b from-[#EAF4FF] via-[#F7FAFF] to-white overflow-hidden">
      {/* Soft background accents */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/30 blur-[110px] rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-300/20 blur-[120px] rounded-full animate-pulse delay-200" />

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
      `}</style>

      <div className="relative max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-[#007dc5] font-semibold">
            Trust Administration
          </p>

          <h1
            className="text-4xl sm:text-5xl font-bold text-[#003d5c] mt-3 drop-shadow-sm"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Trust Types & Frequently Asked Questions
          </h1>

          <div className="w-40 h-1 mx-auto mt-6 bg-gradient-to-r from-[#004A6D] via-blue-400 to-[#004A6D] rounded-full animate-pulse" />
        </div>

        {/* TRUST TYPES BLOCK (slightly darker panel) */}
        <section className="mb-16">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2
              className="text-2xl sm:text-3xl font-semibold text-[#003d5c]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Trusts We Professionally Manage
            </h2>
          </div>

          <div className="rounded-3xl bg-[#E1EDF9]/80 border border-[#C5D7EE] shadow-md p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-7">
              {trustTypes.map((item, i) => (
                <div
                  key={i}
                  className={`p-5 rounded-2xl border shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    i % 2 === 0
                      ? "bg-white/90 border-slate-200"
                      : "bg-[#F3F7FF]/90 border-[#D0DDF3]"
                  }`}
                >
                  <h3
                    className="text-lg font-semibold text-[#003d5c] mb-2"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-slate-700 text-sm leading-relaxed"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ BLOCK (lighter panel, interactive accordion) */}
        <section className="mt-4">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#003d5c]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="rounded-3xl bg-white/90 border border-slate-200 shadow-md p-4 sm:p-6 space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-[#F3F8FF] border-[#BFD5F5] shadow-sm"
                      : "bg-white border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  {/* Question row */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(i)}
                    className="w-full flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 text-left"
                  >
                    <span
                      className="text-sm sm:text-base font-semibold text-[#003d5c]"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {faq.q}
                    </span>
                    <span
                      className={`ml-3 text-[#007dc5] transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`px-4 sm:px-5 pb-4 sm:pb-5 text-sm text-slate-700 leading-relaxed transition-all duration-300 ${
                      isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                    style={{
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    {faq.a}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
}
