import React, { useState } from "react";
import { FaCheck, FaPlus, FaMinus, FaArrowRight } from "react-icons/fa6";

const accordionData = [
  {
    title: "Experienced Strategists",
    content: `Our team of seasoned strategists brings decades of combined experience across industries and markets. We don’t just advise—we partner with you to uncover opportunities, navigate complexity, and drive meaningful results.

With a deep understanding of business dynamics, we transform challenges into growth strategies tailored to your goals.`,
    points: [
      "Proven track record in multiple industries",
      "Expertise in both startups and large enterprises",
      "Strategic guidance for overcoming complex challenges",
    ],
  },
  {
    title: "Tailored Solutions",
    content: `We don’t believe in one-size-fits-all. Every business is different, and we craft strategies that align with your unique goals and challenges.`,
    points: [],
  },
  {
    title: "Data-Driven Approach",
    content: `We harness the power of data analytics to drive strategic insights that inform every step of the planning process.`,
    points: [],
  },
  {
    title: "Commitment to Your Success",
    content: `We work as your partners, dedicated to helping you achieve sustainable success through actionable strategies and ongoing support.`,
    points: [],
  },
];

const AboutUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="py-20 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Row 1: About Us Button */}
        <div className="mb-4">
          <button className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded">
            About Us
          </button>
        </div>

        {/* Row 2: Heading and Right Text */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <h2 className="text-4xl font-serif font-semibold leading-snug">
            Driving success through strategy.
          </h2>
          <p className="text-gray-600 text-sm max-w-md">
            We specialize in helping small businesses thrive by providing expert
            guidance in business planning and growth strategy.
          </p>
        </div>

        {/* Row 3: Image + Card and Accordion */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Image and Floating Card */}
          <div className="relative">
            <img
              src="/aboutus.webp"
              alt="About Us"
              className="rounded-md w-[500px] h-auto object-cover"
            />

            {/* Floating Card */}
            <div className="absolute bottom-1 right-1 translate-y-7 transform bg-[#C8F8A9] rounded-md shadow-lg w-[240px] md:w-[250px] p-6">
              <div className="mb-3">
                <img
                  src="/waves.png"
                  alt="wave"
                  className="w-[250px] h-26 object-contain"
                />
              </div>
              <h4 className="text-lg font-semibold mb-3">Data-driven Insights</h4>
              <ul className="space-y-2 text-sm text-gray-800 mb-4">
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-600 mt-1" />
                  Proven Track record in
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-600 mt-1" />
                  Expertise in both startups
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-600 mt-1" />
                  Strategic guidance for 
                </li>
              </ul>
              <button className="bg-green-900 hover:bg-green-800 text-white text-sm px-4 py-2 rounded flex items-center justify-between w-full transition">
                Learn More <FaArrowRight size={12} />
              </button>
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="divide-y border border-gray-200 rounded-md overflow-hidden">
            {accordionData.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left px-4 py-4 hover:bg-gray-50 transition"
                >
                  <span className="font-medium text-gray-800">{item.title}</span>
                  {activeIndex === index ? (
                    <FaMinus className="text-gray-600" />
                  ) : (
                    <FaPlus className="text-gray-600" />
                  )}
                </button>
                <div
                  className={`px-4 pb-4 text-sm text-gray-600 space-y-3 transition-all duration-500 ease-in-out ${
                    activeIndex === index
                      ? "max-h-screen opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <p>{item.content}</p>
                  {item.points?.length > 0 && (
                    <ul className="space-y-2">
                      {item.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <FaCheck className="text-green-500 mt-1" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
      <div className="mt-10">
          <button className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded">
            About Us
          </button>
        </div>
    </section>
  );
};

export default AboutUs;
