import React, { useState } from "react";

export default function EstateAdmin() {
  const faqs = [
    {
      question: "What is a Personal Representative?",
      answer:
        "A Personal Representative—sometimes called an Executor—is the individual or organization appointed in a Will to administer an estate. Duties include gathering assets, paying debts, filing tax returns, and distributing property to beneficiaries according to the Will."
    },
    {
      question: "Why appoint WE Trust Company as Personal Representative?",
      answer:
        "We bring professional, neutral expertise to the estate administration process. Our team understands probate requirements, communicates clearly with beneficiaries, and handles every detail with accuracy and care. We act solely in accordance with the decedent’s wishes."
    },
    {
      question: "Will WE Trust Company serve if my documents were not prepared by an attorney?",
      answer:
        "We only accept appointments when estate planning documents were drafted by a licensed attorney. WE Trust Company does not serve as co-Personal Representative and reserves the right to decline appointments at any time."
    },
    {
      question: "How should WE Trust Company be listed in my Will?",
      answer:
        'Your attorney should use the following wording: “WE Trust Company, a Washington chartered trust company, and its successor and assigns.”'
    },
    {
      question: "How does WE Trust Company charge for estate administration?",
      answer:
        "We charge hourly only when called upon to serve as Personal Representative. There is no fee to name us in your estate documents. A detailed fee schedule is available upon request."
    }
  ];

  return (
    <section className="relative w-full py-20 px-6 bg-gradient-to-b from-[#F0F7FF] to-white">
      {/* Soft background accents */}
      <div className="absolute top-0 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-[#007dc5] font-semibold">
            Estate Administration
          </p>

          <h2
            className="text-4xl sm:text-5xl font-bold text-[#003d5c] mt-3 tracking-tight"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Frequently Asked Questions
          </h2>

          <div className="w-28 h-1 mx-auto mt-4 bg-gradient-to-r from-[#007dc5] via-blue-300 to-[#007dc5] rounded-full" />
        </div>

        {/* FAQ List */}
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="
                rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200
                shadow-[0_8px_25px_rgba(0,0,0,0.08)]
                hover:shadow-[0_15px_35px_rgba(0,0,0,0.12)]
                transition-all duration-300 p-6
              "
            >
              <h3
                className="text-xl font-semibold text-[#003d5c] mb-3"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {faq.question}
              </h3>

              <p
                className="text-[15px] text-slate-700 leading-relaxed"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
