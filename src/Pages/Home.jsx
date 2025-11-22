import React from "react";
import homeimg from "../assets/company.png";
import hero1 from "../assets/mature.jpg";
import hero2 from "../assets/elderlycouplehome.jpg";
import hero3 from "../assets/happymultiracialhome.jpg";

import c1 from "../assets/card1.jpg";
import c2 from "../assets/card2.jpg";
import c3 from "../assets/card3.jpg";
import c4 from "../assets/card4.jpg";

import Family from "../assets/Familyoffice.png";
import Safeguard from "../assets/Safeguard.png";
import Peace from "../assets/Peace.png";

// import Tetimonial from "../Components/Testimonial/Testimonial";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const feedbacks = [
    {
        text: "WE Trust did a great job at moving the process forward with minimal effort on our part. It also relieved a lot of stress and pressure. I sing your praises to anyone who will listen!",
        name: "Laura F.",
        location: "Seattle",
    },
    {
        text: "I feel good that I have found them, enjoy working with them and am relaxed that we have a compassionate team of experienced fiduciaries that can smartly take care of everything for us.",
        name: "Gennie T.",
        location: "Seattle",
    },
    {
        text: "You are not only a great bill payment / record keeping organization, but a wonderful counselor and listener. ",
        name: "Gwen B.",
        location: "Seattle",
    },
];

const cards = [
    {
        id: 1,
        image: Family,
        title: "Family Office Services Seamlessly Conducted",
        excerpt:
            "What is Family Office? When people hear the term “family office,” they often picture the Rockefellers, Morgans, or today’s billionaires like Jeff Bezos or Bill Gates – families with vast",
        date: "November 6, 2025",
    },
    {
        id: 2,
        image: Safeguard,
        title:
            "Safeguarding Seniors Against Financial Exploitation: A Fiduciary’s Perspective",
        excerpt:
            "At WE Trust Company in Seattle, we see undue influence and financial exploitation far too often. Both are serious threats to vulnerable adults, especially seniors, but they are not the",
        date: "October 8, 2025",
    },
    {
        id: 3,
        image: Peace,
        title: "Peace of Mind Through Settlement Protection Trusts",
        excerpt:
            "Recently, the Seattle Times reported on a large settlement involving families in Monroe, WA affected by chemical exposure. These types of cases often result in funds being placed into settlement",
        date: "September 10, 2025",
    },
];





export default function Home() {
    const images = [hero1, hero2, hero3];
    const [index, setIndex] = React.useState(0);
    const [indexy, setIndexy] = useState(0);

    // Auto Slide (5 seconds)
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(timer);
    }, [indexy]);

    const nextSlide = () => {
        setIndexy((prev) => (prev + 1) % feedbacks.length);
    };

    const prevSlide = () => {
        setIndexy((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
    };



    React.useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000); // 5 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full font-sans">

            {/* HERO SLIDER SECTION */}
            <section
                className="relative w-full h-[70vh] bg-cover bg-center transition-all duration-700"
                style={{ backgroundImage: `url(${images[index]})` }}
            >
                <div className="absolute inset-0 bg-white/20"></div>

                {/* SLIDE-UP TEXT */}
                <p className="absolute bottom-6 w-full text-center text-xl md:text-3xl font-semibold text-white opacity-0 animate-slideUp">
                    integrity ∙ discretion ∙ compassion ∙ dedication ∙ expertise ∙ trust
                </p>
            </section>

            {/* TRUST SECTION */}
            <section className="px-6 py-16 max-w-6xl mx-auto text-center md:text-left grid md:grid-cols-2 pb-10">
                <img src={homeimg} alt="Trust Quote" className="mx-auto w-80 h-60 " />
                <div>
                    <p className="text-gray-700 leading-relaxed pb-5 text-center text-lg">
                        At <strong>WE Trust Company</strong>, trust is the foundation of every client relationship.
                        Our team of professional fiduciaries have extensive experience in trust and estate
                        administration, family office management, and serving as an attorney-in-fact under a
                        durable power of attorney.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-center text-lg">
                        Whether working directly with you or collaborating with your trusted advisors, we provide a
                        comprehensive range of tailored services aimed at addressing your specific needs.
                    </p>
                </div>
            </section>

            <div className="px-6 max-w-6xl mx-auto text-center">
                <p className="text-gray-700 leading-relaxed text-lg px-4 sm:px-10 md:px-20 lg:px-32">
                    <strong>We specialize</strong> in managing life’s intricate yet essential details,
                    solving problems and delivering results. As your Personal Representative,
                    Trustee, Attorney-in-Fact or Family Office Administrator, our commitment is to
                    provide you with peace of mind by carrying out our duties with the utmost care,
                    confidentiality, and discretion.
                </p>


                <Link to="/employment" className="mt-6 inline-block bg-[#004A6D] text-white px-6 py-3 rounded shadow hover:bg-[#d66a0b] transition-all duration-300 ease-in-out hover:scale-110">
                    Employment Opportunities
                </Link>

            </div>

            {/* SERVICES SECTION */}
            <section className="px-6 py-16 max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-10">WE Trust Company Services</h2>

                <div className="grid md:grid-cols-4 gap-6">
                    {[
                        { title: "Estates", img: c1, route: "/estate" },
                        { title: "Trusts", img: c2, route: "/trust" },
                        { title: "Attorney-In-Fact", img: c3, route: "/attorney" },
                        { title: "Family Office", img: c4, route: "/family" },
                    ].map((card, i) => (
                        <Link key={i} to={card.route} className="border shadow overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                            <img
                                src={card.img}
                                className="w-full h-40 object-cover p-2 transition-transform duration-300 hover:scale-95"
                            />
                            <p className="text-xl font-semibold py-4 text-[#004A6D]">
                                {card.title}
                            </p>
                        </Link>
                    ))}
                </div>

                <p className="mt-10 text-gray-600 leading-relaxed text-lg text-center">
                    <strong>WE Trust Company</strong> was awarded trust powers by the Washington State Department of
                    Financial Institutions (DFI) in 2016 and is now recognized and regulated as a Washington state trust
                    company. We participate in regularly scheduled exams to maintain our trust company designation.
                </p>
                {/* <Tetimonial /> */}
            </section>


            {/* Feedback SECTION */}
            <section className="w-full flex justify-center items-center gap-4 pb-9 ">

                {/* Center Container (Wider Now) */}
                <div className="relative w-full max-w-6xl flex items-center justify-center  ">

                    {/* Left Arrow */}
                    <button
                        onClick={prevSlide}
                        className="text-blue-600"
                    >
                        <ChevronLeft size={40} />
                    </button>

                    {/* Feedback Box */}
                    <div className="border border-blue-800 bg-gray-100 rounded-3xl py-7 px-10 shadow-sm text-center w-full max-w-4xl ">
                        <p className="text-xl text-gray-600 italic leading-relaxed">
                            {feedbacks[indexy].text}
                        </p>

                        <p className="mt-6 font-semibold text-gray-700">
                            {feedbacks[indexy].name}
                        </p>

                        <p className="text-blue-900 text-sm">
                            {feedbacks[indexy].location}
                        </p>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={nextSlide}
                        className="text-blue-600"
                    >
                        <ChevronRight size={40} />
                    </button>
                </div>


            </section>


            {/* NEWS SECTION */}
            <div className="w-full bg-white pb-7 ">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 ">
                        {cards.map((card) => (
                            <article
                                key={card.id}
                                className="bg-white rounded shadow-lg overflow-hidden flex flex-col border border-black"
                            >
                                {/* Image */}
                                <div className="w-full h-40 sm:h-48 overflow-hidden">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <h2 className="text-xl sm:text-2xl font-semibold text-[#007dc5] mb-4 leading-7">
                                        {card.title}
                                    </h2>
                                    <p className="text-sm sm:text-base leading-5 text-gray-600 mb-6">
                                        {card.excerpt}
                                    </p>
                                    <button className="mt-auto text-sm font-semibold text-[#00a6b4] uppercase tracking-wide self-start">
                                        READ MORE »
                                    </button>
                                </div>

                                {/* Date */}
                                <div className="border-t border-gray-200 px-6 py-3 text-xs sm:text-sm text-gray-400">
                                    {card.date}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
            {/* Buttons SECTION */}
            <section className="px-6 md:px-16 lg:px-40 max-w-6xl mx-auto text-center md:text-left grid grid-cols-1 md:grid-cols-2 gap-60 pb-10">
                <a href="/about">
                <button className="w-full mt-4 bg-[#004A6D] text-white px-6 py-3 rounded shadow hover:scale-110 transition-all duration-300">
                    Meet the People at WE Trust
                </button>
                </a>

                <Link to="/testimonials">
                <button className="w-full mt-4 bg-[#004A6D] text-white px-6 py-3 rounded shadow hover:scale-110 transition-all duration-300">
                    See Our Client Testimonials
                </button>   
                </Link>
            </section>



        </div>
    );
}
