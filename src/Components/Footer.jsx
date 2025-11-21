import React from "react";
import { FaLinkedin } from "react-icons/fa";
import Logo from "../assets/creditorlogo.png";
import Banner from "./Banner";

export default function Footer() {
  return (
    <>
      <Banner />
      <footer className="w-full text-white">
      {/* TOP BAR */}
      <div className="bg-[#0d3d56]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          
          {/* LEFT – LOGO PLACEHOLDER */}
          <div className="flex flex-col items-center md:items-start">
            <div className="w-56 h-28 bg-white rounded-md flex items-center justify-center shadow-md">
              {/* Replace this with your logo <img src={Logo} alt="Logo" /> */}
              <img src={Logo} alt="Logo" className="max-w-full max-h-full" />
            </div>
            <p className="mt-4 text-xs tracking-[0.16em] uppercase text-gray-200">
              Professional Fiduciary Services
            </p>
          </div>

          {/* CENTER – ADDRESS & PHONE */}
          <div className="flex flex-col items-center text-center">
            <p className="text-lg font-semibold">
              2303 W Commodore Way, Suite 304
            </p>
            <p className="text-lg mt-1">Seattle, WA 98199</p>
            <p className="text-lg mt-1">Monday – Friday 8AM to 5PM</p>
            <p className="text-lg mt-1 font-semibold">
              Phone: (206) 781-6997
            </p>

            {/* LinkedIn icon */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#0a66c2] hover:bg-[#0b70d8] transition-colors shadow-md"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={26} />
            </a>
          </div>

          {/* RIGHT – NAV LINKS */}
          <div className="flex flex-col items-center md:items-end">
            <nav className="space-y-1 text-base text-centre">
              <a href="/estates" className="block hover:text-gray-200 transition-colors">
                Estates
              </a>
              <a href="/trusts" className="block hover:text-gray-200 transition-colors">
                Trusts
              </a>
              <a href="/attorney-in-fact" className="block hover:text-gray-200 transition-colors">
                Attorney-In-Fact
              </a>
              <a href="/family-office" className="block hover:text-gray-200 transition-colors">
                Family Office
              </a>
              <a href="/news" className="block hover:text-gray-200 transition-colors">
                News
              </a>
              <a href="/about" className="block hover:text-gray-200 transition-colors">
                About Us
              </a>
              <a href="/contact" className="block hover:text-gray-200 transition-colors">
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-[#0088cf]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
          <p className="text-center md:text-left">
            Copyright © 2025 ~ WE Trust Company ~ All Rights Reserved.
          </p>

          <div className="flex items-center gap-3">
            <a href="/privacy-policy" className="hover:text-gray-100 transition-colors">
              Privacy Policy
            </a>
            <span className="opacity-70">|</span>
            <a href="/sitemap" className="hover:text-gray-100 transition-colors">
              Sitemap
            </a>
          </div>

          <p className="text-center md:text-right">
            Website By All Seattle Web Design
          </p>
        </div>
      </div>
    </footer>
    </>
  );
}
