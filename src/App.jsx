// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// layout components (common on all pages)
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// page components
import Home from "./Pages/Home";                 
import Family from "./Pages/FamilyOffice/Family";
import News from "./Pages/News/News";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Common navigation on all pages */}
        <Navbar />

        {/* Page content changes with route */}
        <main className="flex-1">
          <Routes>
            {/* Home page */}
            <Route path="/" element={<Home />} />

            {/* Family Office page */}
            <Route path="/family" element={<Family />} />

            {/* News page */}
            <Route path="/news" element={<News />} />

            {/* About page */}
            <Route path="/about" element={<About />} />

            {/* Contact page */}
            <Route path="/contact" element={<Contact />} />

            {/* Optional 404 route
            <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>

        {/* Common footer on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
