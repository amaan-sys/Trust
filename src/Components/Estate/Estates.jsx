import React from "react";
import "./Estates.css";
import  Trust from "../../assets/Trust.png";
import estatesImage from "../../assets/Council.jpg";

export default function Estates() {
  return (
    <div className="estate-page">

      {/* HERO */}
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${Trust})` }}
      >
        <div className="hero-overlay">
          <h1 className="hero-title">Estate Administration Services</h1>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="content-container">

        <p className="intro-text">
          Selecting a Personal Representative, also known as an Executor, to oversee your affairs after
          you pass is a crucial aspect of estate planning. Many individuals opt to appoint a professional
          fiduciary for various reasons.
        </p>

        <h2 className="section-title">Reasons Might Include:</h2>

        <ul className="reasons-list">
          <li>
            <strong>Objectivity:</strong> Choosing a professional fiduciary eliminates potential conflicts
            of interest among family members. Entrusting these responsibilities to a professional ensures
            that estate assets are managed and distributed according to your plan.
          </li>
          <li>
            <strong>Expertise:</strong> The role of a Personal Representative requires knowledge of estate
            and tax law. Our seasoned team ensures a thorough understanding of the complexities involved in
            carrying out your final wishes.
          </li>
          <li>
            <strong>Oversight:</strong> As a Washington chartered trust company, our business activities are
            periodically reviewed and examined by the Washington State Department of Financial Institutions.
          </li>
        </ul>

        <h2 className="section-title">
          As the Personal Representative of Your Estate, We Will:
        </h2>

        <div className="services-section">
          <ul className="services-list">
            <li>Work with an attorney to open a probate in court.</li>
            <li>Communicate with beneficiaries.</li>
            <li>Furnish each beneficiary with a copy of the Will.</li>
            <li>Notify potential creditors and settle all valid debts.</li>
            <li>Marshal, inventory and manage estate assets.</li>
            <li>Facilitate the sale of real property or other assets.</li>
            <li>File required income tax returns.</li>
            <li>File required state and federal estate tax returns.</li>
            <li>Distribute estate assets to beneficiaries.</li>
            <li>Provide a detailed accounting to beneficiaries or the probate court.</li>
          </ul>

          <div className="services-image-box">
            <img src={estatesImage} alt="Estate Administration" className="services-image"/>
            <p className="pdf-text">Estate Administration Information Sheet (PDF)</p>
          </div>
        </div>

        <div className="cta-section">
          <button className="cta-button">Contact WE Trust Today</button>
        </div>

        <h2 className="faq-title">Estate Administration Frequently Asked Questions</h2>

        <div className="faq-list">

          <div className="faq-item">
            <h3 className="faq-question">What is a Personal Representative?</h3>
            <p className="faq-answer">
              Sometimes called an Executor, a Personal Representative is appointed by a Will to administer
              an estate. Duties include gathering assets, paying debts, filing tax returns, and distributing
              assets to beneficiaries.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">What are the advantages of naming WE Trust Company?</h3>
            <p className="faq-answer">
              We have deep experience with probate law, tax filings, and estate settlement. We are neutral,
              objective, and focused solely on carrying out the wishes of the decedent.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">Will WE Trust Company serve if I used a self‑prepared Will?</h3>
            <p className="faq-answer">
              We serve only when documents are prepared by a licensed attorney. We do not serve as
              co‑Personal Representative and may decline appointments at our discretion.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">How should I name WE Trust Company in my Will?</h3>
            <p className="faq-answer">
              Please ask your attorney to use: “WE Trust Company, a Washington chartered trust company,
              and its successor and assigns.”
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">How do you charge for your work?</h3>
            <p className="faq-answer">
              WE Trust Company charges hourly for estate administration only when called to serve. There is
              no fee to name us in your documents. A fee schedule is available upon request.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
