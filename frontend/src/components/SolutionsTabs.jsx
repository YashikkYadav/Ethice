// src/components/SolutionsTabs.jsx
import React, { useState } from "react";
import Image from "next/image"; // If using Next.js, else replace with <img>

const SolutionsTabs = () => {
  const tabs = [
    { id: "revenue", label: "Revenue Has Stalled" },
    { id: "scaling", label: "Scaling My Business" },
    { id: "competitors", label: "Understanding My Competitors" },
  ];

  const content = {
    revenue: {
      title: "Quickly identify and resolve revenue blockers with a comprehensive business audit. We uncover hidden challenges and provide strategic solutions to restore growth.",
      strategies: [
        { heading: "Revenue Optimization Strategies", text: "Quickly identify and resolve revenue blockers with a comprehensive business audit." },
        { heading: "Pricing & Profitability Analysis", text: "Quickly identify and resolve revenue blockers with a comprehensive business audit." },
        { heading: "Revenue Optimization Strategies", text: "Quickly identify and resolve revenue blockers with a comprehensive business audit." },
      ],
      image: "/right1.jpg", // Place in public/images
    },
    scaling: {
      title: "Quickly identify and resolve revenue blockers with a comprehensive business audit. We uncover hidden challenges and provide strategic solutions to restore growth.",
      strategies: [
        { heading: "Revenue Optimization Strategies", text: "Quickly identify and resolve revenue blockers with a comprehensive business audit." },
        { heading: "Pricing & Profitability Analysis", text: "Quickly identify and resolve revenue blockers with a comprehensive business audit." },
        { heading: "Revenue Optimization Strategies", text: "Quickly identify and resolve revenue blockers with a comprehensive business audit." },
      ],
      image: "/right1.jpg",
    },
    competitors: {
      title: "Quickly identify and resolve revenue blockers with a comprehensive business audit. We uncover hidden challenges and provide strategic solutions to restore growth.",
      strategies: [
        { heading: "Revenue Optimization Strategies", text: "Quickly identify and resolve revenue blockers with a comprehensive business audit." },
        { heading: "Pricing & Profitability Analysis", text: "Quickly identify and resolve revenue blockers with a comprehensive business audit." },
        { heading: "Revenue Optimization Strategies", text: "Quickly identify and resolve revenue blockers with a comprehensive business audit." },
      ],
      image: "/images/strategy.jpg",
    },
  };

  const [activeTab, setActiveTab] = useState("revenue");

  return (
    <div className="bg-white">
<div className="bg-[url('/right.jpg')]  bg-center flex items-center justify-center text-white text-5xl h-64">

        Find the Right Solution
      </div>

      {/* Tabs */}
      <div className="flex justify-center   mt-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 text-lg ${
              activeTab === tab.id
                ? "border-b-2 border-green-900 text-black"
                : "text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-lg mb-6">{content[activeTab].title}</p>
          <div className="space-y-6">
            {content[activeTab].strategies.map((item, idx) => (
              <div key={idx} className="border-l-2 border-gray-400 pl-4">
                <h3 className="font-semibold text-lg">{item.heading}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative rounded-lg overflow-hidden shadow-lg">
          {/* If using Next.js */}
          <Image
            src={content[activeTab].image}
            alt="Strategy"
            width={600}
            height={400}
            className="object-cover"
          />
          {/* If not using Next.js, replace with: 
            <img src={content[activeTab].image} alt="Strategy" className="w-full h-auto" />
          */}
          <a
            href="#"
            className="absolute bottom-4 left-4 bg-[#C8F8A9] text-black px-5 py-2 rounded-md"
          >
            Book A Free Strategy Call →
          </a>
        </div>
      </div>
    </div>
  );
};

export default SolutionsTabs;
