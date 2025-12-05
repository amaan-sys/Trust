import React from "react";
import attorneyHeaderImage from "../../assets/Attorney.jpg";

export default function AttorneyHeroSection() {
  return (
    <section className="relative w-full h-[420px] overflow-hidden">
      <img
        src={attorneyHeaderImage}
        alt="Attorney in Fact"
        className="w-full h-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001827]/90 via-[#00304c]/75 to-[#00547a]/50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-md"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Financial Power of Attorney  
            <span className="block text-blue-200 mt-2">
              Support you can trust—when it matters most.
            </span>
          </h1>

          <p
            className="mt-4 text-lg text-slate-100 max-w-xl leading-relaxed"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            When managing personal finances becomes difficult, WE Trust Company
            provides clarity, structure, and reliable fiduciary support.
          </p>
        </div>
      </div>
    </section>
  );
}
