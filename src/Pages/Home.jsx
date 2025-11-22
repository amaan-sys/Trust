import homeimg from "../assets/wetrustCompany.png";
import bgimg from "../assets/MatureAdult.jpg";
import c1 from "../assets/card1.jpg";
import c2 from "../assets/card2.jpg";
import c3 from "../assets/card3.jpg";
import c4 from "../assets/card4.jpg";
import news1 from "../assets/news1.png";
import news2 from "../assets/news2.png";
import news3 from "../assets/news3.png";


export default function Home() {
    return (
        <div className="w-full font-sans">

            {/* HERO SECTION */}
            <section
                className="relative w-full h-[70vh] bg-cover bg-center"
                style={{ backgroundImage: `url(${bgimg})` }}
            >
                <div className="absolute inset-0 bg-white/30"></div>
                <section
                    className="relative w-full h-[70vh] bg-cover bg-center"
                    style={{ backgroundImage: `url(${bgimg})` }}
                >
                    <div className="absolute inset-0 bg-black/25"></div>

                    {/* SLIDE-UP TEXT */}
                    <p
                        className="absolute bottom-6 w-full text-center text-xl md:text-3xl font-semibold text-[#ffffff] opacity-0 animate-slideUp"
                    >

                        integrity ∙ discretion ∙ compassion ∙ dedication ∙ expertise ∙ trust


                    </p>
                </section>

            </section>


            {/* TRUST SECTION */}
            <section className="px-6 py-16 max-w-6xl mx-auto text-center md:text-left grid md:grid-cols-2 pb-10">
                <img src={homeimg} alt="Trust Quote" className="mx-auto w-80 h-60 " />
                <div>
                    <p className="text-gray-700 leading-relaxed pb-5 text-center text-lg">
                        At <strong>WE Trust Company</strong>,  trust is the foundation of every client relationship. Our team of professional fiduciaries have extensive experience in trust and estate administration, family office management, and serving as an attorney-in-fact under a durable power of attorney.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-center text-lg">
                        Whether working directly with you or collaborating with your trusted advisors, we provide a comprehensive range of tailored services aimed at addressing your specific needs.
                    </p>
                </div>

            </section>
            <div className="px-6 max-w-6xl mx-auto text-center">
                <p className="text-gray-700 leading-relaxed px-30 text-lg">
                   <strong>We specialize</strong>  in managing life’s intricate yet essential details, solving problems and delivering results.
                    As your Personal Representative, Trustee, Attorney-in-Fact or Family Office Administrator, our commitment is to provide you with peace of mind by carrying out our duties with the utmost care, confidentiality, and discretion.


                </p>
                <button className="mt-6 bg-[#004A6D] text-white px-6 py-3 rounded shadow hover:bg-[#d66a0b] transition-all duration-300 ease-in-out hover:scale-110">
                    Employment Opportunities
                </button>
            </div>
            {/* SERVICES SECTION */}
            <section className="px-6 py-16 max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-10">WE Trust Company Services</h2>

                <div className="grid md:grid-cols-4 gap-6">
                    {[
                        { title: "Estates", img: c1 },
                        { title: "Trusts", img: c2 },
                        { title: "Attorney-In-Fact", img: c3},
                        { title: "Family Office", img: c4 },
                    ].map((card, i) => (
                        <div key={i} className="border shadow  overflow-hidden">
                            <img src={card.img} className="w-full h-40 object-cover p-2" />
                            <p className="text-xl font-semibold py-4 text-[#004A6D]">
                                {card.title}
                            </p>
                        </div>
                    ))}
                </div>

                <p className="mt-10 text-gray-600 leading-relaxed text-lg text-center">
                  <strong>WE Trust Company</strong>  was awarded trust powers by the Washington State Department of Financial Institutions (DFI) in 2016 and is now recognized and regulated as a Washington state trust company. We participate in regularly scheduled exams with the Department of Financial Institutions to maintain our trust company designation.
                </p>
            </section>




            

            {/* NEWS SECTION */}
            <section className="px-6 py-16 max-w-6xl mx-auto ">
                <h2 className="text-3xl font-semibold mb-10 text-center">Latest Articles</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="border rounded shadow">
                        <img src={news1} className="w-full h-52 object-cover" />
                        <div className="p-8">
                            <h3 className="text-xl text-[#2882ac] font-semibold">
                                Family Office Services Seamlessly Conducted
                            </h3>
                            <p className="text-gray-600 mt-2">What is Family Office? When people hear the term “family office,” they often picture the Rockefellers, Morgans, or today’s billionaires</p>
                            <a href="#" className="block mt-3 text-[#007C8A] font-semibold">
                                READ MORE »
                            </a>
                        </div>
                    </div>

                    <div className="border rounded shadow">
                        <img src={news2} className="w-full h-52 object-cover" />
                        <div className="p-8">
                            <h3 className="text-xl text-[#2882ac]  font-semibold">
                                Safeguarding Seniors Against Financial Exploitation: A Fiduciary’s Perspective
                            </h3>
                            <p className="text-gray-600 mt-2">At WE Trust Company in Seattle, we see undue influence and financial exploitation far too often. Both are serious threats</p>
                            <a href="#" className="block mt-3 text-[#007C8A] font-semibold">
                                READ MORE »
                            </a>
                        </div>
                    </div>

                    <div className="border rounded shadow">
                        <img src={news3} className="w-full h-52 object-cover" />
                        <div className="p-8">
                            <h3 className="text-xl text-[#2882ac]  font-semibold">
                                Peace of Mind Through Settlement Protection Trusts
                            </h3>
                            <p className="text-gray-600 mt-2">Recently, the Seattle Times reported on a large settlement involving families in Monroe, WA affected by chemical exposure. These types</p>
                            <a href="#" className="block mt-3 text-[#007C8A] font-semibold">
                                READ MORE »
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
