// src/components/HeroSection.jsx
import Image from "next/image";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-[#043c3a] overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-stripes z-0 opacity-20" />

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto px-6">
        {/* Left (Text Section) */}
        <div className="flex flex-col justify-center order-2 md:order-1">
          <p className="text-gray-100 text-lg md:text-2xl mb-10 leading-relaxed font-light">
            <span className="font-semibold text-white">Ethice Capital</span> is
            a <strong className="text-green-300">BSE (ICCL)</strong> &{" "}
            <strong className="text-green-300">NSE CBRICS</strong> registered
            participant, specializing in trading of{" "}
            <span className="text-green-400 font-semibold">
              Corporate Bonds, Government Securities and State Development Loans
            </span>
            .
          </p>

          {/* <div className="flex items-center space-x-4">
            <button className="bg-green-300 hover:bg-green-900 hover:text-white text-black font-semibold text-[15px] px-6 py-3 rounded-lg shadow-lg flex justify-between items-center gap-2 transition-all duration-300">
              Book a Free Strategy Call <FiArrowRight className="text-lg" />
            </button>
          </div> */}
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
