import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiry: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="w-full bg-white">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&family=Open+Sans:wght@400;600;700&family=Noto+Sans+Gothic:wght@400;600;700&display=swap');
      `}</style>

      {/* HEADER SECTION */}
      <div className="bg-gray-50 py-16 px-8">
        <h1 className="text-5xl font-bold text-[#003d5c] text-center mb-12" style={{ fontFamily: "'Noto Sans Gothic', sans-serif" }}>
          Contact Creditor Academy
        </h1>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* LEFT SECTION - Info & Map */}
            <div className="flex flex-col">
              {/* Description */}
              <p className="text-lg text-gray-700 text-center mb-12" style={{ fontFamily: "'Nanum Gothic', sans-serif" }}>
                Please submit our online form to receive information and to schedule a complimentary consultation.
              </p>

              {/* Contact Info */}
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                  Creditor Academy
                </h2>
                <p className="text-lg text-gray-700 mb-2" style={{ fontFamily: "'Nanum Gothic', sans-serif" }}>
                  2303 W Commodore Way, Suite 304
                </p>
                <p className="text-lg text-gray-700 mb-6" style={{ fontFamily: "'Nanum Gothic', sans-serif" }}>
                  Seattle, WA 98199
                </p>
                <p className="text-lg font-semibold text-gray-800" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                  Phone: (206) 781-6997
                </p>
              </div>

              {/* Google Map Placeholder */}
              <div className="w-full h-72 bg-gray-300 rounded-lg overflow-hidden shadow-md">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.7437255255717!2d-122.40479!3d47.63706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490181c5f5f5f5f%3A0x1234567890!2s2303%20W%20Commodore%20Way%2C%20Seattle%2C%20WA%2098199!5e0!3m2!1sen!2sus!4v1234567890"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="WE Trust Company Location"
                ></iframe>
              </div>
            </div>

            {/* RIGHT SECTION - Contact Form */}
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold text-[#ff8a00] mb-8" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                Connect With Us
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* First Name */}
                <div>
                  <label className="block text-base text-gray-700 mb-2" style={{ fontFamily: "'Nanum Gothic', sans-serif" }}>
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#ff8a00]"
                    style={{ fontFamily: "'Nanum Gothic', sans-serif" }}
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-base text-gray-700 mb-2" style={{ fontFamily: "'Nanum Gothic', sans-serif" }}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#ff8a00]"
                    style={{ fontFamily: "'Nanum Gothic', sans-serif" }}
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-base text-gray-700 mb-2" style={{ fontFamily: "'Nanum Gothic', sans-serif" }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#ff8a00]"
                    style={{ fontFamily: "'Nanum Gothic', sans-serif" }}
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-base text-gray-700 mb-2" style={{ fontFamily: "'Nanum Gothic', sans-serif" }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#ff8a00]"
                    style={{ fontFamily: "'Nanum Gothic', sans-serif" }}
                  />
                </div>

                {/* Inquiry Description */}
                <div>
                  <label className="block text-base text-gray-700 mb-2" style={{ fontFamily: "'Nanum Gothic', sans-serif" }}>
                    Please provide a description of your inquiry.
                  </label>
                  <textarea
                    name="inquiry"
                    value={formData.inquiry}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#ff8a00] resize-none"
                    style={{ fontFamily: "'Nanum Gothic', sans-serif" }}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-[#003d5c] hover:bg-[#002a42] text-white font-bold py-3 px-8 rounded-lg transition-colors self-start"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  Submit Request
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
