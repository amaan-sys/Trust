import React from "react";
import Family from "../../assets/FamilyPic.jpg";
import Safeguard from "../../assets/Safe.jpg";
import Peace from "../../assets/Peace.png";
import Franklin from "../../assets/Franklin.png";
import Tangible from "../../assets/Tangible.png";
import Beneficiary from "../../assets/Benefit.png";
import Trust from "../../assets/Trust.png";
import Answer from "../../assets/Answering.png";
import Tree from "../../assets/TreeAtSunset.png";


const cards = [
  {
    id: 1,
    image: Family,
    title: "Family Office Services Seamlessly Conducted",
    excerpt:
      "What is Family Office? When people hear the term “family office,” they often picture the Rockefellers, Morgans, or today’s billionaires like Jeff Bezos or Bill Gates – families with vast",
    date: "November 6, 2025",
  },
  {
    id: 2,
    image: Safeguard,
    title:
      "Safeguarding Seniors Against Financial Exploitation: A Fiduciary’s Perspective",
    excerpt:
      "At WE Trust Company in Seattle, we see undue influence and financial exploitation far too often. Both are serious threats to vulnerable adults, especially seniors, but they are not the",
    date: "October 8, 2025",
  },
  {
    id: 3,
    image: Peace,
    title: "Peace of Mind Through Settlement Protection Trusts",
    excerpt:
      "Recently, the Seattle Times reported on a large settlement involving families in Monroe, WA affected by chemical exposure. These types of cases often result in funds being placed into settlement",
    date: "September 10, 2025",
  },
  {
    id: 4,
    image: Franklin,
    title: "Washington’s New Estate Tax Law: What You Need to Know",
    excerpt:
      "Recent legislative changes in Washington’s estate tax law may impact your long-term planning. Understanding the thresholds and exemptions can help you structure your estate more efficiently.",
    date: "July 2, 2025",
  },
  {
    id: 5,
    image: Tangible,
    title: "Tangible Personal Property: What Are Your Top Five?",
    excerpt:
      "A Will often disposes of everything you own, but some items carry more emotional weight than financial value. Identifying the tangible personal property that matters most can reduce conflict later.",
    date: "May 30, 2025",
  },
  {
    id: 6,
    image: Beneficiary,
    title:
      "Why Your Beneficiary Designations Might Be Undermining Your Estate Plan",
    excerpt:
      "Out-of-date or inconsistent beneficiary designations can override even the best-drafted estate plan. Reviewing them regularly helps ensure your assets pass according to your wishes.",
    date: "May 2, 2025",
  },
  {
    id: 7,
    image: Trust,
    title:
      "Trusts – Not Just for the Wealthy: Real Stories, Real Impact",
    excerpt:
      "Trusts are powerful tools for many families, not only the ultra-wealthy. Real client stories demonstrate how trusts can provide structure, protection, and peace of mind across generations.",
    date: "April 1, 2025",
  },
  {
    id: 8,
    image: Answer,
    title:
      "Answering the Call: How a Professional Fiduciary Can Preserve Family Harmony",
    excerpt:
      "Choosing a neutral, professional fiduciary can minimize conflict among heirs and keep administration focused on your goals instead of disagreements between family members.",
    date: "March 2, 2025",
  },
  {
    id: 9,
    image: Tree,
    title: "WE Trust Delivers Peace of Mind",
    excerpt:
      "From thoughtful planning to attentive administration, WE Trust works to provide families with confidence and clarity, so they can focus on what matters most.",
    date: "January 31, 2025",
  },
];

const NewsCards = () => {
  return (
    <div className="w-full bg-white pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {cards.map((card) => (
            <article
              key={card.id}
              className="bg-white rounded shadow-lg overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="w-full h-40 sm:h-48 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-xl sm:text-2xl font-semibold text-[#007dc5] mb-4 leading-snug">
                  {card.title}
                </h2>
                <p className="text-sm sm:text-base leading-7 text-gray-700 mb-6">
                  {card.excerpt}
                </p>
                <button className="mt-auto text-sm font-semibold text-[#00a6b4] uppercase tracking-wide self-start">
                  READ MORE »
                </button>
              </div>

              {/* Date */}
              <div className="border-t border-gray-200 px-6 py-3 text-xs sm:text-sm text-gray-500">
                {card.date}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCards;
