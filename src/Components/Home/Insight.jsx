import React, { useState } from "react";
import { ArrowRight, X, Calendar, User, Clock, BookOpen } from "lucide-react";

import Family from "../../assets/FamilyPic.jpg";
import Safeguard from "../../assets/Safe.jpg";
import Peace from "../../assets/Peace.png";

const cards = [
  {
    id: 1,
    image: Family,
    title: "Family Office Services Seamlessly Conducted",
    excerpt: "What is Family Office? When people hear the term 'family office,' they often picture iconic wealthy families—but modern solutions support a diverse range of needs.",
    date: "November 6, 2025",
    category: "Family Wealth Management",
    author: "Sarah Johnson",
    readTime: "5 min read",
    fullContent: `
      <h2>Understanding Family Office Services</h2>
      <p>In today's complex financial landscape, family offices have evolved far beyond their traditional roles. What began as a service exclusively for ultra-high-net-worth families has transformed into a comprehensive solution for managing wealth, legacy, and family governance across various financial levels.</p>
      
      <h3>What Modern Family Offices Offer</h3>
      <p>Contemporary family offices provide integrated services including:</p>
      <ul>
        <li><strong>Investment Management:</strong> Strategic portfolio management tailored to family goals</li>
        <li><strong>Concierge Services:</strong> Day-to-day financial administration and bill payment</li>
        <li><strong>Wealth Transfer Planning:</strong> Multi-generational legacy planning</li>
        <li><strong>Family Governance:</strong> Structures for family decision-making and education</li>
        <li><strong>Risk Management:</strong> Comprehensive insurance and liability protection</li>
      </ul>
      
      <h3>Who Benefits from Family Office Services?</h3>
      <p>Contrary to popular belief, family offices aren't just for billionaires. They serve:</p>
      <ul>
        <li>Business owners preparing for succession</li>
        <li>Families with complex asset structures</li>
        <li>Individuals seeking integrated financial management</li>
        <li>Families wanting to preserve wealth across generations</li>
      </ul>
      
      <p>At WE Trust, we believe every family deserves professional, personalized attention to their financial affairs, regardless of their wealth level.</p>
    `
  },
  {
    id: 2,
    image: Safeguard,
    title: "Safeguarding Seniors Against Financial Exploitation",
    excerpt: "We routinely see cases of undue influence and exploitation. Learn how fiduciary oversight adds a crucial layer of protection.",
    date: "October 8, 2025",
    category: "Senior Protection",
    author: "Michael Chen",
    readTime: "7 min read",
    fullContent: `
      <h2>Protecting Our Seniors: A Growing Concern</h2>
      <p>Financial exploitation of seniors represents one of the fastest-growing forms of abuse, with billions lost annually. As trusted fiduciaries, we've seen firsthand how devastating these situations can be and the importance of proactive protection measures.</p>
      
      <h3>Common Exploitation Tactics</h3>
      <p>Senior financial exploitation often occurs through:</p>
      <ul>
        <li><strong>Undue Influence:</strong> Caregivers or family members manipulating decisions</li>
        <li><strong>Scams & Fraud:</strong> Phone, email, and internet scams targeting seniors</li>
        <li><strong>Misuse of Authority:</strong> Power of attorney or guardianship abuse</li>
        <li><strong>Isolation Tactics:</strong> Cutting off seniors from trusted advisors</li>
      </ul>
      
      <h3>The Fiduciary Difference</h3>
      <p>Professional fiduciary services provide critical protection through:</p>
      <ul>
        <li><strong>Independent Oversight:</strong> Unbiased management of financial affairs</li>
        <li><strong>Regular Auditing:</strong> Comprehensive transaction monitoring</li>
        <li><strong>Documentation:</strong> Detailed records of all financial decisions</li>
        <li><strong>Professional Boundaries:</strong> Clear ethical guidelines and accountability</li>
      </ul>
      
      <h3>Preventative Measures We Recommend</h3>
      <p>Families can take proactive steps including:</p>
      <ul>
        <li>Establishing co-trustees or professional fiduciaries early</li>
        <li>Implementing regular financial check-ins</li>
        <li>Creating clear communication channels with all family members</li>
        <li>Documenting wishes and boundaries in legal instruments</li>
      </ul>
      
      <p>Protection begins with awareness and continues with professional oversight.</p>
    `
  },
  {
    id: 3,
    image: Peace,
    title: "Peace of Mind Through Settlement Protection Trusts",
    excerpt: "Large settlements often require structured oversight to ensure long-term security and proper fund distribution.",
    date: "September 10, 2025",
    category: "Settlement Management",
    author: "Robert Williams",
    readTime: "6 min read",
    fullContent: `
      <h2>Structured Protection for Settlement Funds</h2>
      <p>Receiving a substantial settlement can be life-changing, but without proper management, it can quickly become overwhelming. Settlement Protection Trusts provide the structure and professional management needed to ensure funds serve their intended purpose long-term.</p>
      
      <h3>Why Settlement Protection Trusts Are Essential</h3>
      <p>Without proper planning, settlement recipients face risks including:</p>
      <ul>
        <li><strong>Rapid Depletion:</strong> Lack of financial experience leading to quick spending</li>
        <li><strong>Exploitation:</strong> Targeting by unscrupulous individuals or organizations</li>
        <li><strong>Poor Investment Decisions:</strong> Inappropriate or risky investments</li>
        <li><strong>Benefit Loss:</strong> Disqualification from government assistance programs</li>
      </ul>
      
      <h3>How Settlement Protection Trusts Work</h3>
      <p>These specialized trusts provide:</p>
      <ul>
        <li><strong>Professional Management:</strong> Expert handling of investment and distribution</li>
        <li><strong>Structured Distributions:</strong> Scheduled payments aligned with needs</li>
        <li><strong>Creditor Protection:</strong> Safeguarding assets from future claims</li>
        <li><strong>Benefit Preservation:</strong> Maintaining eligibility for necessary assistance</li>
        <li><strong>Tax Efficiency:</strong> Strategic planning to minimize tax consequences</li>
      </ul>
      
      <h3>Real-Life Application</h3>
      <p>Consider a medical malpractice settlement:</p>
      <ul>
        <li>Immediate needs: Medical equipment, home modifications</li>
        <li>Ongoing expenses: Caregiver costs, therapy, medications</li>
        <li>Future security: Long-term care funding, quality of life expenses</li>
        <li>Family support: Education funds for children, spouse support</li>
      </ul>
      
      <p>A well-structured trust ensures each need is met appropriately over time, providing true peace of mind for recipients and their families.</p>
    `
  },
];

export default function NewsSection() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadMore = (card) => {
    setSelectedArticle(card);
    setIsModalOpen(true);
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Re-enable background scrolling
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section className="w-full bg-[#F5F8FC] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* HEADER */}
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <p className="text-sm font-semibold text-[#007dc5] tracking-wider">
                INSIGHTS & UPDATES
              </p>
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#003A55] mt-3 leading-tight"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Recent Articles from{" "}
              <span className="relative inline-block">
                <span className="relative z-10">WE Trust</span>
                <div className="absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-blue-200/50 to-cyan-200/50 -rotate-1" />
              </span>
            </h2>

            <p
              className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Explore perspectives on supporting families, protecting seniors, and managing
              complex financial responsibilities with expert guidance.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card) => (
              <article
                key={card.id}
                className="group relative bg-white rounded-3xl overflow-hidden 
                         border border-slate-200 shadow-lg hover:shadow-2xl
                         hover:-translate-y-2 transition-all duration-500
                         flex flex-col h-full cursor-pointer"
                onClick={() => handleReadMore(card)}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-56">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover 
                             transition-transform duration-700 
                             group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full 
                                    text-xs font-semibold text-[#007dc5]">
                      {card.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <Calendar size={14} />
                      <span className="text-xs font-medium">{card.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <Clock size={14} />
                      <span className="text-xs font-medium">{card.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl font-bold text-[#003A55] leading-7 mb-4 
                             group-hover:text-[#005b8f] transition-colors"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {card.title}
                  </h3>

                  {/* Excerpt */}
                  <p
                    className="text-slate-600 leading-relaxed mb-6 flex-1"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {card.excerpt}
                  </p>

                  {/* Read More Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <User size={14} />
                      <span>By {card.author}</span>
                    </div>
                    <button
                      className="flex items-center gap-2 text-sm font-semibold text-[#007dc5]
                               hover:text-[#005b8f] transition-colors group/btn"
                    >
                      READ MORE
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      {isModalOpen && selectedArticle && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={handleCloseModal}
          />
          
          {/* Modal Container */}
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="fixed inset-y-0 right-0 flex max-w-full">
                {/* Modal Panel */}
                <div className="relative w-screen max-w-3xl">
                  <div className="h-full flex flex-col bg-white shadow-xl overflow-y-auto">
                    {/* Modal Header */}
                    <div className="sticky top-0 z-10 bg-white border-b border-slate-200">
                      <div className="flex items-center justify-between p-6">
                        <div>
                          <span className="px-3 py-1.5 bg-blue-50 text-[#007dc5] rounded-full 
                                         text-xs font-semibold">
                            {selectedArticle.category}
                          </span>
                        </div>
                        <button
                          onClick={handleCloseModal}
                          className="p-2 rounded-full hover:bg-slate-100 transition-colors"
                        >
                          <X size={24} className="text-slate-600" />
                        </button>
                      </div>
                    </div>

                    {/* Modal Content */}
                    <div className="flex-1">
                      {/* Article Image */}
                      <div className="relative h-64 md:h-80">
                        <img
                          src={selectedArticle.image}
                          alt={selectedArticle.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      </div>

                      <div className="p-6 md:p-8">
                        {/* Article Meta */}
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-[#007dc5]" />
                            <span className="text-sm font-medium text-slate-700">
                              {selectedArticle.date}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <User size={16} className="text-[#007dc5]" />
                            <span className="text-sm font-medium text-slate-700">
                              {selectedArticle.author}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock size={16} className="text-[#007dc5]" />
                            <span className="text-sm font-medium text-slate-700">
                              {selectedArticle.readTime}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <BookOpen size={16} className="text-[#007dc5]" />
                            <span className="text-sm font-medium text-slate-700">
                              Detailed Insight
                            </span>
                          </div>
                        </div>

                        {/* Article Title */}
                        <h2
                          className="text-3xl md:text-4xl font-bold text-[#003A55] mb-6"
                          style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          {selectedArticle.title}
                        </h2>

                        {/* Article Content */}
                        <div
                          className="prose prose-lg max-w-none"
                          style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          <div 
                            className="text-slate-700 leading-relaxed space-y-4"
                            dangerouslySetInnerHTML={{ __html: selectedArticle.fullContent }}
                          />
                        </div>

                        {/* Key Takeaways */}
                        <div className="mt-10 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
                          <h3 className="text-lg font-semibold text-[#003A55] mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full" />
                            Key Takeaways
                          </h3>
                          <ul className="space-y-2">
                            {selectedArticle.id === 1 && (
                              <>
                                <li className="flex items-start gap-2">
                                  <span className="text-[#007dc5] mt-1">•</span>
                                  <span>Family offices serve diverse wealth levels, not just ultra-high-net-worth families</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-[#007dc5] mt-1">•</span>
                                  <span>Integrated services include investment management, concierge services, and family governance</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-[#007dc5] mt-1">•</span>
                                  <span>Professional management ensures long-term wealth preservation across generations</span>
                                </li>
                              </>
                            )}
                            {selectedArticle.id === 2 && (
                              <>
                                <li className="flex items-start gap-2">
                                  <span className="text-[#007dc5] mt-1">•</span>
                                  <span>Senior financial exploitation is a growing concern requiring proactive measures</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-[#007dc5] mt-1">•</span>
                                  <span>Professional fiduciaries provide independent oversight and protection</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-[#007dc5] mt-1">•</span>
                                  <span>Early establishment of trusted oversight prevents exploitation</span>
                                </li>
                              </>
                            )}
                            {selectedArticle.id === 3 && (
                              <>
                                <li className="flex items-start gap-2">
                                  <span className="text-[#007dc5] mt-1">•</span>
                                  <span>Settlement Protection Trusts ensure long-term security of funds</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-[#007dc5] mt-1">•</span>
                                  <span>Professional management prevents rapid depletion and exploitation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-[#007dc5] mt-1">•</span>
                                  <span>Structured distributions align with immediate and future needs</span>
                                </li>
                              </>
                            )}
                          </ul>
                        </div>

                        {/* CTA */}
                        <div className="mt-10 pt-8 border-t border-slate-200">
                          <p className="text-lg font-semibold text-[#003A55] mb-4">
                            Need personalized guidance on this topic?
                          </p>
                          <button className="px-6 py-3 bg-gradient-to-r from-[#007dc5] to-[#0066A4] text-white 
                                         font-semibold rounded-full hover:shadow-lg transition-all 
                                         hover:-translate-y-0.5">
                            Schedule a Consultation
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}