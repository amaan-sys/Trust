import React from "react";
import "./AttorneyInFact.css";


export default function AttorneyInFact() {
  return (
    <div className="wtc-page">
      <header className="wtc-header">
        <div className="wtc-container header-inner">
          <div className="brand">
            <div className="logo-badge">WE</div>
            <div className="brand-text">
              <h1>WE Trust Company</h1>
              <p className="subtext">2303 W Commodore Way, Suite 304, Seattle, WA 98199</p>
            </div>
          </div>
          <div className="header-actions">
            <div className="phone">Call (206) 781-6997</div>
            <a href="/contact" className="cta-btn">Contact WE Trust</a>
          </div>
        </div>
      </header>

      <main className="wtc-container main-grid section-padding">
        <section className="main-col">
          <h2 className="page-title">Attorney-In-Fact / Financial Power of Attorney</h2>
          <p className="lead">
            A financial Power of Attorney (POA) is a legally binding document in which you authorize a trusted person — known as your “attorney-in-fact” — to manage financial matters on your behalf. This agent may act for you if you cannot manage things on your own.
          </p>
          <p className="lead">
            Whether due to illness, disability, or other incapacity (for example, long-term health decline), a durable POA remains active even if you become incapacitated.
          </p>
          <p className="lead">
            At WE Trust Company, we offer to serve as your professional attorney-in-fact — giving you peace of mind that your financial affairs are in capable, discreet, and ethical hands.
          </p>

          <h3>As your Attorney-In-Fact, we will:</h3>
          <ul className="content-list">
            <li>Provide ongoing financial oversight, including budgeting and bill payment.</li>
            <li>Handle recording of financial transactions.</li>
            <li>Assist with tax preparation and filing in collaboration with your CPA.</li>
            <li>Manage household payroll if needed.</li>
            <li>Give you regular updates and reports according to your preferences.</li>
            <li>Act as your advocate, working in your best interest in all financial decisions.</li>
          </ul>

          <div className="pdf-card" role="region" aria-label="Attorney-In-Fact Information">
            <div className="icon">📄</div>
            <div>
              <h4>Attorney-In-Fact Information Sheet</h4>
              <p className="small">Download a detailed PDF to understand our role, responsibilities, and service model.</p>
              <a href="#" className="download-link" onClick={e => e.preventDefault()}>Download PDF</a>
            </div>
          </div>

          <section className="faq">
            <h3 className="section-heading">Frequently Asked Questions</h3>
            <div className="faq-list">
              <details className="item">
                <summary>What is an Attorney-In-Fact?</summary>
                <div className="desc">
                  An Attorney-In-Fact is someone named under a Power of Attorney document, authorized to act legally on your behalf in financial matters.
                </div>
              </details>

              <details className="item">
                <summary>If I appoint WE Trust as my Attorney-In-Fact, do I lose control?</summary>
                <div className="desc">
                  No — appointing a POA does not strip you of your own authority. You can define the powers you give, limiting them as you like, or allow broad authority; you retain rights so long as you are able to act.
                </div>
              </details>

              <details className="item">
                <summary>Why choose WE Trust for this role?</summary>
                <div className="desc">
                  We serve as a neutral, independent fiduciary, with no conflicting interests. Our only duty is to act in your best interest, helping with financial planning, decisions, and ongoing management.
                </div>
              </details>

              <details className="item">
                <summary>How should my lawyer name WE Trust in the POA document?</summary>
                <div className="desc">
                  Ask your attorney to use precise language, such as: “WE Trust Company, a Washington-chartered trust company, and its successors and assigns.”
                </div>
              </details>

              <details className="item">
                <summary>How do you charge for your Attorney-In-Fact services?</summary>
                <div className="desc">
                  We bill hourly only when called upon to act. There is no cost to name us in your documents, and a fee schedule can be provided by request.
                </div>
              </details>
            </div>
          </section>
        </section>

        <aside className="side-col sidebar">
          <div className="card">
            <h4>Contact</h4>
            <address className="address">
              2303 W Commodore Way<br/>
              Suite 304<br/>
              Seattle, WA 98199
            </address>
            <div className="phone-small">Phone: <a href="tel:+12067816997">(206) 781-6997</a></div>
            <a href="/contact" className="small-cta">Contact WE Trust</a>
          </div>

          <div className="card hours">
            <h5>Office Hours</h5>
            <div className="subtitle">Monday – Friday, 8 AM – 5 PM</div>
            <div className="mt-medium">
              <a href="#" onClick={e => e.preventDefault()}>LinkedIn</a>
            </div>
          </div>
        </aside>
      </main>

      <footer className="wtc-footer">
        <div className="wtc-container footer-inner">
          <div>© {new Date().getFullYear()} WE Trust Company – All Rights Reserved.</div>
          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/sitemap">Sitemap</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
