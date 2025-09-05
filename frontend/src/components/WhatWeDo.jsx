import React from "react";
import { FaArrowRight, FaCheck } from "react-icons/fa6";

const services = [
  {
    title: "Corporate Bond Trading",
    description: null,
    image: "/s1.svg",
    list: ["Income Generation", "Capital Preservation", "Hedge Against Economic Slowdown"],
  },
  {
    title: "Government Securities",
    description: null,
    image: "/s2.svg",
    list: ["Income Generation", "Capital Preservation", "Hedge Against Economic Slowdown"],
  },
  {
    title: "State Development Loans",
    description: null,
    image: "/s3.svg",
    list: ["Income Generation", "Capital Preservation", "Hedge Against Economic Slowdown"],
  },
  {
    title: "Why Fixed Income?",
    description: null,
    image: "/s1.svg",
    list: ["Income Generation", "Capital Preservation", "Hedge Against Economic Slowdown"],
  },
];

const WhatWeDo = () => {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Tag */}
        <button className="text-xs sm:text-sm bg-gray-100 px-3 py-1.5 text-black rounded-md mb-4">
          Our Services
        </button>

        {/* Heading + Description */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-black">
            What We Do!
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl">
            We specialize in fixed-income securities to help you grow and preserve
            your wealth strategically.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group border border-gray-200 hover:border-green-300 hover:shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col"
            >
              {/* Image Section */}
              <div className="h-28 flex items-center justify-center bg-white">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-16 object-contain"
                />
              </div>

              {/* Title */}
              <div className="px-6 pt-4 text-left">
                <h3 className="text-lg sm:text-xl font-semibold text-black mb-4">
                  {service.title}
                </h3>
              </div>

              {/* Bottom Section */}
              <div className="bg-gray-50 group-hover:bg-green-100 transition-all duration-300 p-6 text-left flex flex-col flex-grow">
                {service.description && (
                  <p className="text-sm text-gray-600 group-hover:text-black mb-4">
                    {service.description}
                  </p>
                )}

                {service.list && (
                  <ul className="space-y-2 mb-6">
                    {service.list.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-600 group-hover:text-black"
                      >
                        <FaCheck className="text-green-500 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <button className="mt-auto w-full bg-white hover:bg-green-900 hover:text-white border border-gray-200 text-sm text-black py-2 px-4 rounded-md flex justify-between items-center transition">
                  Learn More <FaArrowRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
