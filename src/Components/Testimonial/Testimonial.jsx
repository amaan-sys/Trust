import React, { useState, useEffect } from "react";
import "../Testimonial/Testimonial.css";

const TESTIMONIALS = [
  {
    quote:
      "You are not only a great bill payment / record keeping organization, but a wonderful counselor and listener.",
    name: "Gwen B.",
    location: "Seattle",
  },
  {
    quote:
      "Your team has lifted such a burden from my shoulders. I finally feel like my finances are organized and under control.",
    name: "Michael R.",
    location: "Tacoma",
  },
  {
    quote:
      "Professional, patient, and always kind. I trust you completely with my accounts and records.",
    name: "Linda K.",
    location: "Spokane",
  },
  {
    quote:
      "I feel good that I have found them, enjoy working with them and am relaxed that we have a compassionate team of experienced fiduciaries that can smartly take care of everything for us.",
    name: "Gennie T.",
    location: "Seattle",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  const goNext = () => {
    setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const goPrev = () => {
    setIndex((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  // optional auto-slide (every 8s). Remove if you don't want it.
  useEffect(() => {
    const id = setInterval(goNext, 8000);
    return () => clearInterval(id);
  }, []);

  const current = TESTIMONIALS[index];

  return (
    <section className="testimonial-section">
      <div className="testimonial-wrapper">
        {/* Left Arrow */}
        <button
          className="testimonial-arrow testimonial-arrow-left"
          onClick={goPrev}
          aria-label="Previous testimonial"
        >
          ‹
        </button>

        {/* Card */}
        <div className="testimonial-card">
          <p className="testimonial-quote">
            {current.quote}
          </p>
          <p className="testimonial-name">{current.name}</p>
          <p className="testimonial-location">
            {current.location}
          </p>
        </div>

        {/* Right Arrow */}
        <button
          className="testimonial-arrow testimonial-arrow-right"
          onClick={goNext}
          aria-label="Next testimonial"
        >
          ›
        </button>
      </div>
    </section>
  );
}
