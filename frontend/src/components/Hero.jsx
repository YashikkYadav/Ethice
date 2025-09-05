// src/components/HeroSection.jsx
import Image from 'next/image';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-[#043c3a] overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-stripes z-0 opacity-20" />

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto px-6">
        {/* Left (Text Section) */}
        <div className="flex flex-col justify-center order-2 md:order-1">
          <h1 className="text-white text-4xl md:text-6xl font-light leading-tight mb-6">
            Transforming Businesses for a{' '}
            <span className="text-green-300 font-medium">Stronger Future.</span>
          </h1>
          <p className="text-gray-200 text-lg mb-8">
            Guiding businesses at every stage toward strategic success.
          </p>
          <div className="flex items-center space-x-4">
            <button className="bg-[#C8F8A9] hover:bg-green-900 hover:text-white text-black text-[14px] px-5 py-3 rounded-md shadow-md flex justify-between items-center gap-2">
              Book a Free Strategy Call <FiArrowRight />
            </button>
          </div>
        </div>

        {/* Right (Image Section) */}
        <div className="relative order-1 md:order-2">
          <img
            src="/bman.webp"
            alt="Business Person"
            className="rounded-md object-cover w-full h-[500px] mt-5"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
