import React from "react";
import { Quote } from "lucide-react";

const feedbacks = [
  {
    text:
      "WE Trust made the entire process smooth and stress-free. Their attention to detail and care truly stand out.",
    name: "Laura F.",
    location: "Seattle",
  },
  {
    text:
      "Professional, compassionate, and extremely capable. We always feel supported and secure with their guidance.",
    name: "Gennie T.",
    location: "Seattle",
  },
  {
    text:
      "A trustworthy team that goes above and beyond — consistently reliable and always understanding.",
    name: "Gwen B.",
    location: "Seattle",
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-[#EAF5FF] to-white overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute -top-20 left-10 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl animate-pulse delay-300" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-[#007dc5] font-semibold">
            Testimonials
          </p>

          <h2
            className="text-4xl md:text-5xl font-bold text-[#003859] mt-3 tracking-tight"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            What Our Clients Say
          </h2>

          <div className="w-32 h-1 mx-auto mt-5 bg-gradient-to-r from-[#007dc5] via-blue-300 to-[#007dc5] rounded-full" />
        </div>

        {/* 3-Column Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {feedbacks.map((item, i) => (
            <div
              key={i}
              className="
                relative rounded-3xl bg-white/80 backdrop-blur-xl border border-blue-100
                shadow-xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl
              "
            >
              {/* Quote icon */}
              <Quote size={32} className="text-[#007dc5] mb-4 opacity-90" />

              {/* Feedback text */}
              <p
                className="text-lg text-slate-700 italic leading-relaxed"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                “{item.text}”
              </p>

              {/* Name + location */}
              <div className="mt-6">
                <p className="text-sm font-semibold text-[#003859]">
                  {item.name}
                </p>
                <p className="text-xs text-slate-500">{item.location}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
