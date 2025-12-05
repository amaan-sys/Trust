import React from "react";

export default function IntroStrip() {
  return (
    <section className="relative w-full bg-white border-y border-slate-200 py-14">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent" />
              {/* Animated divider */}
        <div className="w-28 h-1 mx-auto bg-gradient-to-r from-[#004A6D] via-blue-400 to-[#004A6D] rounded-full animate-pulse mb-6" />
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#004A6D] drop-shadow-sm">
          Trusted support when it matters most.
        </h2>
      </div>
    </section>
  );
}
