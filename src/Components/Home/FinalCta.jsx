import React from "react";
import { Link } from "react-router-dom";

export default function FinalCta() {
  return (
    <section className="px-6 lg:px-10 py-14 max-w-6xl mx-auto">
      <div className="rounded-3xl bg-gradient-to-r from-black via-slate-900 to-[#004A6D] px-6 sm:px-10 py-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1 text-center md:text-left space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-blue-200">
            Ready to start the conversation?
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            Partner with a fiduciary team invested in your peace of mind.
          </h2>
          <p className="text-sm sm:text-base text-slate-200 max-w-xl">
            Learn more about the people behind WE Trust or hear directly from our
            clients.
          </p>
        </div>

        <div className="flex-1 flex flex-col sm:flex-row gap-4 w-full">
          <Link to="/about" className="w-full">
            <button className="w-full inline-flex justify-center items-center gap-2 rounded-full bg-white text-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-wide shadow-md hover:shadow-lg hover:-translate-y-[1px] transition-all">
              Meet the People at WE Trust
            </button>
          </Link>

          <Link to="/testimonials" className="w-full">
            <button className="w-full inline-flex justify-center items-center gap-2 rounded-full border border-blue-100 bg-transparent text-white px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-white/10 transition-all">
              See Our Client Testimonials
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
