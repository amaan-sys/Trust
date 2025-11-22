import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
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

        <Link to="/contact" className="mt-2 md:mt-0 inline-block border border-white px-3 py-1 rounded hover:bg-[#0da1e6] transition text-white">
          Contact WE Trust Today
        </Link>
      </div>

      {/* MAIN NAV */}
      <div className="flex items-center justify-between px-6 py-4">
        <Link to="/">
          <img
            src={Logo}
            alt="WE Trust Company"
            className="h-14 object-contain"
          />
        </Link>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-lg text-gray-700">
          <Link to="/" className="hover:text-[#004A6D]">Home</Link>
          <Link to="/estates" className="hover:text-[#004A6D]">Estates</Link>
          <Link to="/trusts" className="hover:text-[#004A6D]">Trusts</Link>
          <Link to="/attorney-in-fact" className="hover:text-[#004A6D]">Attorney-in-Fact</Link>
          <Link to="/family" className="hover:text-[#004A6D]">Family Office</Link>
          <Link to="/news" className="hover:text-[#004A6D]">News</Link>
          <Link to="/about" className="hover:text-[#004A6D]">About</Link>
          <Link to="/contact" className="hover:text-[#004A6D]">Contact</Link>
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
            { name: "Home", to: "/" },
            { name: "Estates", to: "/estates" },
            { name: "Trusts", to: "/trusts" },
            { name: "Attorney-in-Fact", to: "/attorney-in-fact" },
            { name: "Family Office", to: "/family" },
            { name: "News", to: "/news" },
            { name: "About", to: "/about" },
            { name: "Contact", to: "/contact" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="hover:text-[#004A6D]"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
