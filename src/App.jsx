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
import Contact from "./Pages/Contact";
import Attorney from "./Pages/Attorney/Attorney";
import Trust from "./Pages/Trusts/Trust";
import Estate from "./Pages/Estate/Estate";

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

            {/* Contact page */}
            <Route path="/contact" element={<Contact />} />

            {/* Attorney page */}
            <Route path="/attorney" element={<Attorney />} />

            {/* Trust page */}
            <Route path="/trust" element={<Trust />} />

            {/* Estate page */}
            <Route path="/estate" element={<Estate />} />

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