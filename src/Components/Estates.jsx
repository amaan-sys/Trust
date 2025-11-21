import React from 'react';  
import './EstateAdminLanding.css';

const EstateAdminLanding = () => {  
  return (  
    <div className="estate-landing">

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Estate Administration Services</h1>
          <p>
            Professional, diligent, and compassionate management of estates — ensuring a smooth, legally compliant, and transparent settlement.
          </p>
          <a href="#contact" className="cta-button">Request a Consultation</a>
        </div>
      </header>

      {/* Why Estate Administration Matters */}
      <section className="why-estate">
        <h2>Why Estate Administration Matters</h2>
        <div className="points">
          <div className="point">
            <h3>Legal Compliance</h3>
            <p>
              Our experts ensure that all assets are correctly inventoried, debts are settled, and distributions happen in line with legal requirements.  
            </p>
          </div>
          <div className="point">
            <h3>Fiduciary Responsibility</h3>
            <p>
              We act with the utmost integrity and transparency, fulfilling our duty to beneficiaries and executors alike.  
            </p>
          </div>
          <div className="point">
            <h3>Peace for Families</h3>
            <p>
              Dealing with loss is hard — we take care of the administrative burden so families can focus on what truly matters.  
            </p>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="services">
        <h2>Our Estate Administration Services</h2>
        <ul>
          <li><strong>Probate & Grant Application:</strong> Assistance with probate, letters of administration, and court filings.</li>
          <li><strong>Asset Inventory & Valuation:</strong> Identifying, cataloguing, and valuing estate assets. :contentReference[oaicite:0]{index=0}</li>
          <li><strong>Debt & Creditor Management:</strong> Paying off liabilities and ensuring all claims are resolved.</li>
          <li><strong>Tax Planning & Filings:</strong> Estate tax, income tax, and compliance with tax obligations. :contentReference[oaicite:1]{index=1}</li>
          <li><strong>Beneficiary Communication:</strong> Transparent reporting, regular updates, and clear communication. :contentReference[oaicite:2]{index=2}</li>
          <li><strong>Distribution & Closing:</strong> Distributing assets to beneficiaries and formally closing the estate. :contentReference[oaicite:3]{index=3}</li>
        </ul>
      </section>

      {/* Process / How It Works */}
      <section className="process">
        <h2>How Our Process Works</h2>
        <ol>
          <li><strong>Initial Meeting:</strong> Understand the estate, its size, and the wishes of the executor or family.</li>
          <li><strong>Legal Filings:</strong> We help apply for probate or letters of administration, depending on the situation. :contentReference[oaicite:4]{index=4}</li>
          <li><strong>Asset Collection & Valuation:</strong> Identify all assets, even hidden ones, and get proper valuations. :contentReference[oaicite:5]{index=5}</li>
          <li><strong>Debt Settlement:</strong> Settle creditor claims, taxes, and other obligations. :contentReference[oaicite:6]{index=6}</li>
          <li><strong>Reporting:</strong> Provide clear, regular updates to beneficiaries. :contentReference[oaicite:7]{index=7}</li>
          <li><strong>Distribution & Closure:</strong> Distribute assets, complete final accounts, and close the estate. :contentReference[oaicite:8]{index=8}</li>
        </ol>
      </section>

      {/* Trust & Credibility */}
      <section className="trust-signals">
        <h2>Why Trust Us With Estate Administration</h2>
        <p>
          As a professional trust company, we bring legal expertise, fiduciary duty, and a commitment to fairness. We ensure every step is handled with care and transparency. :contentReference[oaicite:9]{index=9}  
        </p>
        <div className="badges">
          <img src="/icons/legal.svg" alt="Legal Expertise" />
          <img src="/icons/fiduciary.svg" alt="Fiduciary Duty" />
          <img src="/icons/secure.svg" alt="Secure & Transparent" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>Client Feedback</h2>
        <div className="testimonial-cards">
          <div className="testimonial">
            <p>
              “WeTrustCo handled my father’s estate with such professionalism and empathy. Their updates kept us calm through the process.”  
            </p>
            <span>- T. Sen, Beneficiary</span>
          </div>
          <div className="testimonial">
            <p>
              “They took care of probate, taxes, and even helped resolve a dispute. Truly a relief for our family.”  
            </p>
            <span>- M. Desai, Executor</span>
          </div>
        </div>
      </section>

      {/* Contact / Lead Form */}
      <section className="contact" id="contact">
        <h2>Start Your Estate Administration</h2>
        <p>Get in touch to discuss how we can manage and settle your estate smoothly.</p>
        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Tell us about the estate or your role" required></textarea>
          <button type="submit" className="cta-button">Contact Us</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 WeTrustCo. All rights reserved.</p>
        <p>
          <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms & Conditions</a>
        </p>
      </footer>

    </div>
  );  
};

export default EstateAdminLanding;
