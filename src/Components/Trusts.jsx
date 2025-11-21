import React from 'react';
import './TrustAdminLanding.css';

const TrustAdminLanding = () => {
  return (
    <div className="trust-landing">

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Trust Administration Services</h1>
          <p>
            Expert, reliable, and transparent administration of your trust to ensure long-term value,
            compliance, and peace of mind.
          </p>
          <a href="#contact" className="cta-button">Get in Touch</a>
        </div>
      </header>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="features">
          <div className="feature">
            <h3>Professional Expertise</h3>
            <p>
              Our team has deep experience in trust law, accounting, and fiduciary management,
              ensuring your trust is handled with precision and care.
            </p>
          </div>
          <div className="feature">
            <h3>Full Trust Lifecycle Management</h3>
            <p>
              From setting up trust instruments to asset allocation, accounting, and
              eventual distribution — we manage it all.
            </p>
          </div>
          <div className="feature">
            <h3>Transparent & Compliant</h3>
            <p>
              We maintain clear records, provide regular reporting, and ensure all legal
              and regulatory requirements are met.
            </p>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="services">
        <h2>Our Services</h2>
        <ul>
          <li><strong>Trust Accounting & Reporting:</strong> Preparation of trust accounts & financial reporting.</li>
          <li><strong>Trust Document Preparation:</strong> Drafting and review of trust deeds and instruments.</li>
          <li><strong>Asset Management:</strong> Investment, transfer, and disposal of trust assets.</li>
          <li><strong>Distribution Services:</strong> Managing distributions to beneficiaries as per trust instructions.</li>
          <li><strong>Administrative Support:</strong> Paying expenses, trustee meetings, record keeping.</li>
        </ul>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial">
            <p>
              “They handled everything so professionally — the regular reports, the
              communication, it gave me total confidence.”  
            </p>
            <span>- A. Sharma, Beneficiary</span>
          </div>
          <div className="testimonial">
            <p>
              “Their expertise in trust law saved us time and ensured full compliance.
              Highly recommend their team.”  
            </p>
            <span>- R. Kapoor, Trustee</span>
          </div>
        </div>
      </section>

      {/* Process / How It Works */}
      <section className="process">
        <h2>How It Works</h2>
        <ol>
          <li><strong>Consultation:</strong> We begin with understanding your trust structure and goals.</li>
          <li><strong>Plan & Setup:</strong> We draft the necessary documents and establish governance.</li>
          <li><strong>Manage:</strong> Ongoing accounting, investing, and administration.</li>
          <li><strong>Report:</strong> Regular reporting to trustees and beneficiaries.</li>
          <li><strong>Distribute / Wind Up:</strong> Distributions as specified in trust terms.</li>
        </ol>
      </section>

      {/* Trust Signals / Credibility */}
      <section className="trust-signals">
        <h2>Trust & Security</h2>
        <p>
          We prioritise security, compliance, and transparency. Our systems are audited regularly
          and we follow best practices for data protection.  
        </p>
        <div className="badges">
          <img src="/icons/compliance.svg" alt="Compliance Certified" />
          <img src="/icons/secure.svg" alt="Secure Systems" />
          <img src="/icons/transparent.svg" alt="Transparent Reporting" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="contact" id="contact">
        <h2>Ready to Secure Your Trust's Future?</h2>
        <p>Contact us for a personalised consultation.</p>
        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Tell us about your trust" required></textarea>
          <button type="submit" className="cta-button">Send Message</button>
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

export default TrustAdminLanding;
