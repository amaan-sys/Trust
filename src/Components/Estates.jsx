import React from "react";
import "./Estates.css";

export default function Estates() {
  return (
    <div className="estate-page">
      {/* HEADER */}
      <header className="header">
        <div className="header-inner">
          <div className="logo">WT</div>
          <div className="header-right">
            <p className="header-address">408 Main Street, Boonton, NJ</p>
            <a href="#contact" className="header-cta">Contact Us</a>
          </div>
        </div>
      </header>

      {/* MAIN SECTION */}
      <section className="max-container section">
        <div className="grid">
          {/* LEFT CONTENT */}
          <div className="content">
            <h2>Estate Administration Services</h2>
            <p>
              Managing a loved one's estate can be overwhelming—emotionally and
              administratively. Our estate administration support ensures that
              the transition is handled with clarity, professionalism, and care.
            </p>
            <p>
              We guide families and executors through every required step,
              helping minimize delays, reduce stress, and ensure full legal and
              financial compliance.
            </p>

            <h3>What We Handle for You</h3>
            <ul>
              <li>Locating, organizing, and valuing assets</li>
              <li>Coordinating with beneficiaries, attorneys, and institutions</li>
              <li>Managing outstanding debts, taxes, and claims</li>
              <li>Maintaining financial records and court‑required filings</li>
              <li>Overseeing distribution of assets to heirs</li>
            </ul>

            <h3>Executor Assistance</h3>
            <p>
              Acting as an executor comes with significant responsibility. Our
              team provides structured guidance, ensuring all duties are
              completed accurately and on time.
            </p>

            <h3>Transparent, Organized Process</h3>
            <p>
              Estate matters can move slowly without proper oversight. Our
              process keeps everything organized—from communication to
              documentation—so families can stay informed and confident.
            </p>

            {/* PDF DOWNLOAD BOX */}
            <div className="pdf-box">
              <div className="pdf-icon">📄</div>
              <div>
                <h4>Estate Administration Overview</h4>
                <p>Download a simplified guide to our services and process.</p>
                <a href="#" className="pdf-btn">Download PDF</a>
              </div>
            </div>

            {/* FAQ */}
            <div className="faq-section">
              <details className="faq-box">
                <summary>How long does estate administration typically take?</summary>
                <div>
                  Timelines vary based on the estate's complexity, but most
                  estates take several months to a year to settle fully.
                </div>
              </details>

              <details className="faq-box">
                <summary>Can your team work alongside my attorney?</summary>
                <div>
                  Yes. We frequently collaborate with legal counsel to streamline
                  the administrative process.
                </div>
              </details>

              <details className="faq-box">
                <summary>Do you assist with tax filings?</summary>
                <div>
                  We help gather documentation, organize records, and work with
                  tax professionals to ensure all required filings are
                  completed.
                </div>
              </details>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="sidebar">
            <div className="sidebar-card">
              <h4>Speak With a Specialist</h4>
              <p>Our estate administration advisors are available to help.</p>
              <a href="#contact" className="sidebar-btn">Schedule Consultation</a>
            </div>

            <div className="sidebar-hours">
              <h4>Office Hours</h4>
              <p>Mon – Fri: 9:00am – 5:00pm</p>
              <p>Sat – Sun: Closed</p>
            </div>
          </aside>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner max-container">
          <p>© {new Date().getFullYear()} WE Trust Co.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
