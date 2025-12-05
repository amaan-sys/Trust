import React from "react";

export default function AttorneyContent() {
  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-[#F4F8FF] to-white overflow-hidden">

      {/* Soft background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-200/30 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-300/20 blur-[110px] rounded-full" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-12">

        {/* Section intro */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#003d5c] mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Financial Power of Attorney — Simplified
          </h2>

          <p
            className="text-slate-600 leading-relaxed text-base md:text-lg"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            A power of attorney ensures your financial life continues smoothly  
            if you need help—temporarily or long-term.
          </p>

          {/* Accent Divider */}
          <div className="w-28 h-1 mx-auto mt-5 bg-gradient-to-r from-[#004A6D] via-blue-400 to-[#004A6D] rounded-full" />
        </div>

        {/* Highlight Box */}
        <div className="
          bg-white/80 backdrop-blur-xl border border-slate-200 
          shadow-md rounded-3xl p-8 mb-12
        ">
          <p
            className="text-slate-700 text-base md:text-lg leading-relaxed text-center"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            WE Trust Company serves as a steady, impartial financial steward—  
            providing structure, accountability, and calm decision-making  
            when you or your family need it most.
          </p>
        </div>

        {/* 3-column highlights */}
        <div className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 
          text-center
        ">
          {[
            {
              title: "Clear Oversight",
              desc: "We manage payments, records, and financial tasks with predictable consistency."
            },
            {
              title: "Trusted Support",
              desc: "Professional fiduciaries remove pressure from families and avoid conflict."
            },
            {
              title: "Peace of Mind",
              desc: "You remain in control, while gaining a reliable safety net if needs change."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="
                p-6 rounded-2xl bg-white/70 backdrop-blur-xl 
                border border-slate-200 shadow-sm
                hover:shadow-xl hover:-translate-y-2 transition-all duration-300
              "
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
  );
}
