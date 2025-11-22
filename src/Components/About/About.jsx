import img from "../../assets/news1.png";
import bgImg from "../../assets/about.jpg";


export default function AboutCompany() {
  return (

    <>
      <section
        className="relative w-full h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-black/10"></div>

        {/* SLIDE-UP TEXT */}
        <p className="absolute bottom-6 w-full text-center text-xl md:text-3xl font-semibold text-white opacity-0 animate-slideUp">
          integrity ∙ discretion ∙ compassion ∙ dedication ∙ expertise ∙ trust
        </p>
      </section>
      <section className="font-serif bg-white text-gray-800 pb-24 " style={{ fontFamily: "'Noto Sans Gothic', sans-serif" }}>

        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&family=Open+Sans:wght@400;600;700&family=Noto+Sans+Gothic:wght@400;600;700&display=swap');
      `}</style>

        {/* HEADER SECTION */}
        <div className="text-center py-8 px-6">
          <h1 className="text-4xl md:text-4xl font-bold text-[#003366] mb-6">
            About WE Trust Company
          </h1>

          <p className="max-w-4xl mx-auto text-md leading-relaxed mb-6">
            <strong>WE Trust Company</strong> was founded by Cherie Ware in 1997
            with a primary focus on estate administration and organization. Over
            time, the company’s services expanded to include being named Personal
            Representative, Trustee, Attorney-in-Fact and Family Office Administrator.
          </p>

          <p className="max-w-4xl mx-auto text-md leading-relaxed">
            We have administered and settled hundreds of estates and trusts and
            served tirelessly as financial advocates for our clients. Relationships
            are at the core of our business and bringing clients peace of mind is
            our singular mission.
          </p>
        </div>

        {/* TEAM GRID SECTION */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-6">

          {/* Team Member 1 */}
          <div className="text-center">
            <div className="w-full h-[320px] overflow-hidden">
              <img
                src={img}
                alt="Team Member"
                className="w-full h-full object-cover rounded"
              />
            </div>
            <p className="mt-3 italic text-md">
              Alexandra Brown, <span className="not-italic">Associate</span>
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="text-center">
            <div className="w-full h-[320px] overflow-hidden">
              <img
                src={img}
                alt="Team Member"
                className="w-full h-full object-cover rounded"
              />
            </div>
            <p className="mt-3 italic text-md">
              Lora Campbell, CDMM®,{" "}
              <span className="not-italic">Senior Associate</span>
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="text-center">
            <div className="w-full h-[320px] overflow-hidden">
              <img
                src={img}
                alt="Team Member"
                className="w-full h-full object-cover rounded"
              />
            </div>
            <p className="mt-3 italic text-md">
              Suzanne Cayton, <span className="not-italic">Senior Associate</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
