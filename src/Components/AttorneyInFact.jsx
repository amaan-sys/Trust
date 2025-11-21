import React from 'react';  
import './FinancialPOALanding.css';

const FinancialPOALanding = () => {  
  return (  
    <div className="fpoa-landing">

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Financial Power of Attorney Services</h1>
          <p>
            Grant trusted individuals the legal authority to manage your financial affairs — securely, reliably, and on your terms.
          </p>
          <a href="#contact" className="cta-button">Book a Free Consultation</a>
        </div>
      </header>

      {/* Why You Need a Financial POA */}
      <section className="why-poa">
        <h2>Why a Financial Power of Attorney Matters</h2>
        <div className="points">
          <div className="point">
            <h3>Peace of Mind</h3>
            <p>
              Ensure that someone you trust can manage your bank accounts, investments, and bills if you’re unable to do so.
            </p>
          </div>
          <div className="point">
            <h3>Legal & Financial Protection</h3>
            <p>
              Avoid legal complications by clearly defining the scope and limits of the authority granted.
            </p>
          </div>
          <div className="point">
            <h3>Flexible & Customisable</h3>
            <p>
              Tailor the Power of Attorney to your specific needs — durable, limited, or conditional powers.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="services">
        <h2>Our Financial POA Services</h2>
        <ul>
          <li><strong>Consultation & Planning:</strong> We help you decide who should be your agent and what powers to grant.</li>
          <li><strong>Document Preparation:</strong> Durable power of attorney, limited POA, or contingent POA — drafted professionally.</li>
          <li><strong>Legal Review:</strong> Ensure POA documents are compliant with local laws and enforceable.</li>
          <li><strong>Agent Training:</strong> Guide your appointed agent on how to act responsibly and ethically.</li>
          <li><strong>Periodic Review:</strong> Update or revoke POA if your circumstances change.</li>
        </ul>
      </section>

      {/* Process / How It Works */}
      <section className="process">
        <h2>How It Works</h2>
        <ol>
          <li><strong>Initial Consultation:</strong> We assess your needs and financial situation.</li>
          <li><strong>Design the POA:</strong> Choose the right type (durable, limited, etc.) and define powers.</li>
          <li><strong>Drafting Documents:</strong> Our legal team prepares legally sound POA documents.</li>
          <li><strong>Signing & Notarizing:</strong> We ensure the documents are properly signed and witnessed.</li>
          <li><strong>Agent Onboarding:</strong> We provide your chosen agent with clear instructions and resources.</li>
        </ol>
      </section>

      {/* Trust & Security */}
      <section className="trust-signals">
        <h2>Trust & Legal Assurance</h2>
        <p>
          We maintain the highest standards of legal rigor and client confidentiality. Your POA documents are securely managed and stored.
        </p>
        <div className="badges">
          <img src="/icons/legal.svg" alt="Legal Expertise" />
          <img src="/icons/security.svg" alt="Secure & Confidential" />
          <img src="/icons/trust.svg" alt="Trusted Advisors" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial">
            <p>
              “Creating a financial POA was a big decision, but their team made it simple, clear, and legally sound.”  
            </p>
            <span>- S. Verma, Client</span>
          </div>
          <div className="testimonial">
            <p>
              “They helped me appoint an agent and trained them. Now I feel secure about the future.”  
            </p>
            <span>- R. Gupta, Principal</span>
          </div>
        </div>
      </section>

      {/* Contact / Lead Form */}
      <section className="contact" id="contact">
        <h2>Set Up Your Financial Power of Attorney</h2>
        <p>Get in touch for a free, no-obligation consultation.</p>
        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Briefly describe your situation" required></textarea>
          <button type="submit" className="cta-button">Request Consultation</button>
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

export default FinancialPOALanding;
