import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import homeimg from "../../assets/company.png";
import hero1 from "../../assets/mature.jpg";
import hero2 from "../../assets/Hero.jpg";
import hero3 from "../../assets/happymultiracialhome.jpg";

const images = [hero1, hero2, hero3];

export default function Hero() {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setHeroIndex((prev) => (prev + 1) % images.length),
      6000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen md:h-[90vh] overflow-hidden"> 
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${images[heroIndex]})` }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-[#004A6D]/85 to-[#004A6D]/55" />

      {/* Content wrapper */}
      <div className="relative w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex h-full items-center pt-4 md:pt-10 lg:pt-12"> 

          <div className="flex w-full flex-col lg:flex-row justify-between gap-6 md:gap-10 lg:gap-16 xl:gap-20 py-4 md:py-0">
            
            {/* LEFT SIDE - MOBILE OPTIMIZED */}
            <div className="w-full lg:w-[55%] text-left space-y-4 md:space-y-6 lg:-mt-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-black/40 px-3 py-1 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.25em] text-blue-100 shadow">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
                Washington State Chartered Trust Company
              </span>

              <h1 className="text-[1.9rem] xs:text-[2.2rem] sm:text-[2.7rem] md:text-[3.2rem] lg:text-[3.8rem] font-semibold tracking-tight text-white leading-tight">
                Compassionate
                <span className="block text-[1.8rem] xs:text-[2.1rem] sm:text-[2.6rem] md:text-[3.1rem] lg:text-[3.7rem]">fiduciary services</span>
                <span className="block text-[#7cc4ff] text-[1.8rem] xs:text-[2.1rem] sm:text-[2.6rem] md:text-[3.1rem] lg:text-[3.7rem] mt-1 md:mt-2">
                  grounded in trust and discretion.
                </span>
              </h1>

              <p className="text-sm xs:text-base sm:text-lg md:text-xl text-slate-100/95 leading-relaxed max-w-xl">
                At <strong>WE Trust Company</strong>, we handle life's most
                sensitive personal and financial matters with integrity and care—
                so you and your family can focus on what matters most.
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
                <Link
                  to="/trust"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#007dc5] px-5 sm:px-7 md:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold uppercase tracking-wide text-white shadow-lg hover:bg-[#005f98] hover:scale-105 transition-transform"
                >
                  Our Services
                  <ArrowRight size={16} />
                </Link>

                <Link
                  to="/employment"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 bg-transparent px-5 sm:px-7 md:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold uppercase tracking-wide text-white hover:bg-white/10 transition"
                >
                  Employment
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE CARD - MOBILE OPTIMIZED */}
            <div className="w-full lg:w-[45%] flex flex-col items-center gap-3 md:gap-4 mt-4 md:mt-2">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
                <div className="absolute -inset-2 sm:-inset-3 rounded-3xl bg-gradient-to-tr from-[#007dc5]/30 via-sky-400/25 to-blue-100/35 blur-xl sm:blur-2xl opacity-70" />

                <div className="relative rounded-3xl bg-white shadow-2xl border border-slate-100 px-5 sm:px-7 md:px-8 py-6 sm:py-8 space-y-4 md:space-y-5">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-xl sm:rounded-2xl overflow-hidden flex-shrink-0 bg-white p-1">
                      <img
                        src={homeimg}
                        alt="WE Trust Company"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#004A6D] font-semibold">
                        Who we are
                      </p>
                      <p className="text-base sm:text-lg md:text-xl font-semibold text-slate-900 leading-tight">
                        Trusted fiduciaries in Washington
                      </p>
                    </div>
                  </div>

                  <p className="text-sm sm:text-[15px] md:text-[16px] text-slate-700 leading-relaxed">
                    We provide trust and estate administration, family office oversight,
                    and attorney-in-fact services tailored to each client.
                  </p>

                  <p className="text-xs sm:text-[12px] md:text-[13px] text-slate-500 border-t border-slate-200 pt-2 sm:pt-3">
                    Granted trust powers by the WA State Department of Financial
                    Institutions in 2016.
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-2 sm:pt-0 gap-3 sm:gap-0">
                    <div>
                      <p className="text-[10px] sm:text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                        Based in Seattle
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700">Serving individuals & families</p>
                    </div>

                    <Link
                      to="/about"
                      className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#007dc5] hover:text-[#005f98] self-start sm:self-center"
                    >
                      Meet the Team
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Integrity line - Mobile optimized */}
              <p className="text-[11px] xs:text-xs sm:text-sm font-semibold text-blue-100/95 tracking-wide text-center px-2 sm:px-4 mt-1">
                integrity · discretion · compassion · dedication · expertise · trust
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}