import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import c1 from "../../assets/Estatess.jpg";
import c2 from "../../assets/Trusttt.jpg";
import c3 from "../../assets/Attorney.jpg";
import c4 from "../../assets/card4.jpg";

const services = [
  {
    title: "Estates",
    img: c1,
    route: "/estate",
    desc: "Guiding executors and families with clarity and care.",
  },
  {
    title: "Trusts",
    img: c2,
    route: "/trust",
    desc: "Thoughtful trust management for long-term stability.",
  },
  {
    title: "Attorney-In-Fact",
    img: c3,
    route: "/attorney",
    desc: "Reliable representation under durable powers of attorney.",
  },
  {
    title: "Family Office",
    img: c4,
    route: "/family",
    desc: "Complete oversight of multi-generational family affairs.",
  },
];

export default function Services() {
  return (
    <section className="relative py-24 px-6 lg:px-10">

      {/* Dark Blue Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001B2E] via-[#00345A] to-[#005A99] opacity-95"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-[0.05]"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-5xl font-bold text-white tracking-tight drop-shadow-lg"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Our Core Services
          </h2>

          <p
            className="mt-5 text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Tailored fiduciary solutions delivered with trust, clarity, and expertise.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {services.map((card, i) => (
            <Link
              key={i}
              to={card.route}
              className="
                group relative rounded-2xl overflow-hidden 
                bg-white/90 backdrop-blur-xl border border-white/20
                shadow-[0_12px_35px_rgba(0,0,0,0.4)]
                hover:shadow-[0_20px_55px_rgba(0,0,0,0.55)]
                transition-all duration-500 
                hover:-translate-y-2 hover:scale-[1.02]
                flex flex-col
              "
            >

              {/* IMAGE */}
              <div className="relative h-56 rounded-t-2xl overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent"></div>

                {/* Card Title */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <p
                    className="text-white text-xl font-semibold drop-shadow-md"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {card.title}
                  </p>

                  <span
                    className="h-10 w-10 rounded-full bg-white/95 text-slate-900 shadow-md
                    flex items-center justify-center transition-all group-hover:bg-blue-100 group-hover:shadow-lg"
                  >
                    <ArrowRight size={20} />
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="p-5 flex-1 flex items-start">
                <p
                  className="text-[15px] text-slate-700 leading-relaxed"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {card.desc}
                </p>
              </div>

            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}
