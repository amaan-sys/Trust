import React from "react";
import trustHeaderImage from "../../assets/Trusttt.jpg";

export default function TrustHero() {
  return (
    <section className="relative w-full h-[460px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={trustHeaderImage}
          alt="Trust Administration"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001A2A]/90 via-[#003f62]/80 to-[#006c9d]/60" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 lg:px-10 h-full flex items-center">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-blue-200">
            Trust Administration
          </p>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mt-3"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Trust Administration  
            <span className="block text-blue-200 mt-1">
              carried out with precision and care.
            </span>
          </h1>

          <p className="mt-5 text-slate-100/90 text-lg leading-relaxed">
            As a Washington chartered trust company, WE Trust Company manages  
            assets responsibly and transparently—ensuring your intentions  
            are honored and your beneficiaries are supported.
          </p>
        </div>
      </div>
    </section>
  );
}
