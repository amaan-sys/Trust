import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function AttorneyAdmin() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is an Attorney-in-Fact?",
      a: "An Attorney-in-Fact is appointed through a power of attorney document and is authorized to make legally binding financial decisions on behalf of another person.",
    },
    {
      q: "Do I lose the ability to act for myself if I name WE Trust Company?",
      a: "No. A power of attorney does NOT remove your authority. You may grant limited or broad authority, depending on your needs. It simply creates a protective framework should you need assistance.",
    },
    {
      q: "Why choose WE Trust Company as Attorney-in-Fact?",
      a: "WE Trust Company is impartial, neutral, and free from family conflicts. We make decisions solely in your best interest and often serve as a reliable successor to spouses, children, or trusted friends.",
    },
    {
      q: "How should I name WE Trust Company in my documents?",
      a: `Use this language: “WE Trust Company, a Washington chartered trust company, and its successor and assigns.”`,
    },
    {
      q: "How does WE Trust Company charge for Attorney-in-Fact work?",
      a: "We charge hourly only when called to serve. There is no fee to name us in your documents. A full fee schedule is available upon request.",
    },
  ];

  return (
    <section className="relative w-full py-20 px-6 bg-gradient-to-br from-[#F3F8FF] to-white overflow-hidden">

      {/* Soft background accents */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl" />

      {/* Google Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        `}
      </style>

      <div className="relative max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-[#007dc5] font-semibold">
            Attorney-in-Fact
          </p>

          <h2
            className="text-3xl sm:text-4xl font-bold text-[#003d5c] mt-3 drop-shadow-sm"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Frequently Asked Questions
          </h2>

          {/* animated divider */}
          <div className="w-36 h-1 mx-auto mt-6 bg-gradient-to-r from-[#004A6D] via-blue-400 to-[#004A6D] rounded-full animate-pulse" />
        </div>

        {/* FAQ CARDS */}
        <div className="space-y-4">

          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="
                  rounded-2xl bg-white/80 backdrop-blur-xl 
                  border border-slate-200 shadow-sm 
                  hover:shadow-xl transition-all duration-300
                "
              >
                {/* Question Row */}
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <h3
                    className="text-lg font-semibold text-[#003d5c]"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {item.q}
                  </h3>

                  <ChevronDown
                    size={22}
                    className={`text-[#003d5c] transition-transform ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`px-6 pb-4 overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p
                    className="text-slate-700 pt-2 leading-relaxed text-sm"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
