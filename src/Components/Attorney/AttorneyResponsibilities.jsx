import React from "react";
import { CheckCircle } from "lucide-react";
import AttorneyAdmin from "../../assets/Attorneyadmin.jpg";

export default function AttorneyResponsibilities() {
  const items = [
    "Walk alongside you to navigate financial matters.",
    "Pay bills and maintain organized financial records.",
    "Assist with tax preparation and filing.",
    "Manage household payroll when needed.",
    "Provide consistent updates and clear reports.",
    "Advocate for your financial well-being every step of the way."
  ];

  return (
    <section className="relative w-full py-24 bg-gradient-to-br from-[#001B2E] via-[#003355] to-[#004A6D] overflow-hidden">

      {/* Soft Glows */}
      <div className="absolute top-10 left-0 w-80 h-80 bg-blue-300/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/20 blur-[140px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-14">

        {/* LEFT SIDE */}
        <div>
          <h2
            className="text-3xl font-bold text-white mb-6"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            As Your Attorney-in-Fact,  
            <span className="text-blue-200"> WE Trust Will:</span>
          </h2>

          <div className="
            rounded-2xl bg-white/10 backdrop-blur-xl 
            border border-white/20 shadow-xl p-8
          ">
            <ul className="space-y-4">
              {items.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <CheckCircle className="text-blue-300 mt-1" size={22} />
                  <span
                    className="text-blue-50 text-[15px] leading-relaxed"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6 items-center lg:items-end">

          {/* Image Card */}
          <div className="
            rounded-2xl overflow-hidden border border-white/20 
            shadow-2xl w-full h-72 bg-white/10 backdrop-blur-xl
          ">
            <img
              src={AttorneyAdmin}
              alt="Attorney in Fact Services"
              className="w-full h-full object-cover opacity-90"
            />
          </div>

          {/* Button */}
          <button className="
            bg-blue-400 hover:bg-blue-300 text-[#003d5c] 
            px-8 py-3 rounded-lg font-semibold shadow-lg 
            transition duration-300
          ">
            Contact WE Trust Today
          </button>

          {/* PDF Link */}
          <button className="text-blue-200 underline font-medium hover:text-blue-100 transition">
            Attorney-in-Fact Information Sheet (PDF)
          </button>
        </div>
      </div>
    </section>
  );
}
