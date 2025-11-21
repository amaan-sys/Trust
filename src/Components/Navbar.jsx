import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/creditor_logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      
      {/* TOP BAR */}
      <div className="bg-[#004A6D] text-white text-sm px-6 py-3 flex flex-col md:flex-row items-center justify-between">
        <p className="text-center md:text-left">
          2303 W Commodore Way, Suite 304, Seattle, WA 98199
        </p>
        <p className="text-center">Call Us: (206) 781-6997</p>

        <button className="mt-2 md:mt-0 border border-white px-3 py-1 rounded hover:bg-[#0da1e6] transition">
          Contact WE Trust Today
        </button>
      </div>

      {/* MAIN NAV */}
      <div className="flex items-center justify-between px-6 py-4">
        <img
          src={Logo}
          alt="WE Trust Company"
          className="h-14 object-contain"
        />

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-lg text-gray-700">
          <a href="#home" className="hover:text-[#004A6D]">Home</a>
          <a href="#estates" className="hover:text-[#004A6D]">Estates</a>
          <a href="#trusts" className="hover:text-[#004A6D]">Trusts</a>
          <a href="#aif" className="hover:text-[#004A6D]">Attorney-in-Fact</a>
          <a href="#family" className="hover:text-[#004A6D]">Family Office</a>
          <a href="#news" className="hover:text-[#004A6D]">News</a>
          <a href="#about" className="hover:text-[#004A6D]">About</a>
          <a href="#contact" className="hover:text-[#004A6D]">Contact</a>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-white transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-start px-6 gap-4 text-gray-800 text-lg">
          {[
            "home",
            "estates",
            "trusts",
            "aif",
            "family",
            "news",
            "about",
            "contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setOpen(false)}
              className="hover:text-[#004A6D] capitalize"
            >
              {item.replace("aif", "Attorney-in-Fact")}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
