// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// layout components (common on all pages)
// import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// page components
import Family from "./Pages/FamilyOffice/Family";
import News from "./Pages/News/News";
import Contact from "./Pages/Contact";
function App() {
  return (
    <Router>
      {/* Overall app layout */}
      <div className="min-h-screen flex flex-col">
        {/* Common navigation on all pages */}
        {/* <Navbar /> */}

        {/* Page content */}
        <main className="flex-1">
          <Routes>
            {/* You can point home to Family, or keep a separate home page later */}
            <Route path="/" element={<Family />} />

            {/* /family route */}
            <Route path="/family" element={<Family />} />

            {/* /news route */}
            <Route path="/news" element={<News />} />

            {/* /contact route */}
            <Route path="/contact" element={<Contact />} />
            
            {/* Optional: 404 route */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>

        {/* Common footer on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
