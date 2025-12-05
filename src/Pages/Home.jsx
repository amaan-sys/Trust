import React from "react";
import Hero from "../Components/Home/Hero";
import IntroStrip from "../Components/Home/IntroStrip";
import Services from "../Components/Home/Service";
import Testimonials from "../Components/Home/Testimonial";
import NewsSection from "../Components/Home/Insight";
import FinalCta from "../Components/Home/FinalCta";

export default function Home() {
  return (
    <div className="w-full font-sans bg-slate-50 text-slate-900">
      <Hero />
      <IntroStrip />
      <Services />
      <NewsSection />
        <Testimonials />
      <FinalCta />
    </div>
  );
}
