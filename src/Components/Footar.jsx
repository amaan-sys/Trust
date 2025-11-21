import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#004A6D] text-white py-10 mt-20 text-center">
      <div className="max-w-6xl mx-auto">
        <img src="/logo.png" alt="WE Trust Logo" className="h-14 mx-auto mb-4" />

        <p>2303 W Commodore Way, Suite 304</p>
        <p>Seattle, WA 98199</p>
        <p>Monday - Friday 8AM to 5PM</p>
        <p>Phone: (206) 781-6997</p>

        <div className="mt-4">
          <button className="bg-white text-[#004A6D] px-4 py-2 rounded-full font-semibold">
            LinkedIn
          </button>
        </div>

        <hr className="border-white/30 my-6" />

        <div className="flex flex-col md:flex-row justify-between text-sm opacity-80">
          <p>Copyright © 2025 – WE Trust Company – All Rights Reserved.</p>
          <div className="flex items-center gap-4 justify-center md:justify-end">
            <a href="#privacy">Privacy Policy</a>
            <span>|</span>
            <a href="#sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
