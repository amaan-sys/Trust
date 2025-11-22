import React from "react";

const NewsHeader = () => {
  return (
    <div className="w-full bg-white pt-12 pb-6">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&family=Open+Sans:wght@400;600;700&family=Noto+Sans+Gothic:wght@400;600;700&display=swap');
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#004a6b] text-center mb-6" style={{ fontFamily: "'Noto Sans Gothic', sans-serif" }}>
          Creditor Academy News
        </h1>

        {/* Text + Button */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <p className="text-lg leading-8 text-gray-700 text-center md:text-left md:max-w-3xl mx-auto md:mx-0" style={{ fontFamily: "'Nanum Gothic', sans-serif" }}>
            WE Trust continually evolves to better support our clients,
            colleagues, and community. One way we do this is by sharing
            meaningful and relevant content that informs and inspires you to
            make thoughtful decisions about your estate and your family's
            future.
          </p>

          <div className="flex justify-center md:justify-end">
            <button className="px-8 py-3 rounded-lg text-lg font-semibold bg-[#007dc5] text-white border-2 border-[#ff8a00] shadow-md hover:brightness-110 transition" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              Contact WE Trust Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsHeader;
