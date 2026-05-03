"use client";

import { useState } from "react";

const TABS = [
  { id: "details", label: "Product Details" },
  { id: "reviews", label: "Rating & Reviews" },
  { id: "faqs", label: "FAQs" },
];

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("reviews");

  return (
    <div className="w-full mt-10 md:mt-16 font-satoshi">
      {/* Tab Headers */}
      <div className="flex items-center justify-between border-b border-black/10">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 pb-4 md:pb-6 text-[14px] md:text-[20px] transition-all duration-300 relative ${
              activeTab === tab.id
                ? "text-black font-medium"
                : "text-black/60 hover:text-black/80"
            }`}
          >
            {tab.label}
            {/* Active Indicator Line */}
            <div
              className={`absolute bottom-0 left-0 w-full h-[2px] transition-all duration-300 ${
                activeTab === tab.id ? "bg-black opacity-100" : "bg-transparent opacity-0"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Tab Content Placeholder */}
      <div className="mt-8">
        {activeTab === "reviews" && (
          <div className="flex flex-col gap-6">
            {/* Yorumlar buraya gelecek */}
          </div>
        )}
        {activeTab === "details" && (
          <div className="text-black/60">Product details content...</div>
        )}
        {activeTab === "faqs" && (
          <div className="text-black/60">Frequently asked questions...</div>
        )}
      </div>
    </div>
  );
}
