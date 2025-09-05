import React from "react";
import { FaCheck, FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { teamData } from "@/data/teamData";
import Link from "next/link";
import BenefitsSection from "@/components/BenefitsSection";
import OpportunitiesTable from "@/components/opportunitiesTable";

const valuesData = [
  {
    icon: "🏔️",
    title: "People Who Join us Want a Career, Not Just a Job",
    description:
      "If you have big ideas that you want to bring to life, we give you the tools, technology and training to get ahead. Help redefine the culture, not just of our firm, but of global businesses.",
  },
  {
    icon: "🖼️",
    title: "Do You Care About The Bigger Picture?",
    description:
      "For us, this isn’t just business. We care about what we do and how we do it. That’s why we sponsor initiatives that improve the way we work and live.",
  },
  {
    icon: "🛤️",
    title: "We’re United by What We Do, Not Where We Came From",
    description:
      "Our teams bring together a wide variety of backgrounds, cultures, ethnicities, genders, orientations, and religious beliefs. Our diversity makes us stronger, so we think bigger.",
  },
  {
    icon: "🌱",
    title: "We Care About Helping People",
    description:
      "We care about helping people and organizations achieve more than they ever thought possible. We do it by bringing together the science of what motivates us to do one better.",
  },
];

const Careers = () => {
  return (
    <section className="pb-12">
      {/* Hero Section */}
      <div className="bg-[#f7faf7] py-12 px-4 mb-10 md:pl-10">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-[56px] font-serif mb-6 leading-tight">
            We Cultivate an Atmosphere
          </h1>
          <p className="text-gray-600 max-w-3xl text-base md:text-lg">
            We provide customized, highly analytical solutions, bringing a fresh
            perspective and a creative, resourceful approach to our clients’ most
            challenging diligence.
          </p>
        </div>
      </div>

      {/* Image + Content Section */}
      <section className="py-12 px-4 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Image + Floating Card */}
          <div className="relative flex justify-center md:justify-start">
            <img
              src="/mam.jpg"
              alt="About Us"
              className="rounded-md w-full max-w-[500px] h-auto object-cover"
            />

            {/* Floating Card */}
           <div className="absolute bottom-0 right-0 md:translate-y-7 bg-[#C8F8A9] rounded-md shadow-lg w-[95%] xs:w-[55%] sm:w-[240px] md:w-[150px] p-4 sm:p-6">
  <div className="mb-3">
    <img
      src="/waves.png"
      alt="wave"
      className="w-full h-auto max-h-[100px] object-contain"
    />
  </div>
  <h4 className="text-base sm:text-lg font-semibold mb-3">
    Data-driven Insights
  </h4>
  <ul className="space-y-2 text-xs sm:text-sm text-gray-800 mb-4">
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
  <button className="bg-green-900 hover:bg-green-800 text-white text-xs sm:text-sm px-3 sm:px-4 py-2 rounded flex items-center justify-between w-full transition">
    Learn More <FaArrowRight size={12} />
  </button>
</div>

          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-6">
            <button className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded self-start">
              Opportunities
            </button>
            <h2 className="text-3xl md:text-[56px] font-serif leading-snug">
              Driving success through strategy.
            </h2>
            <p className="text-gray-600 text-md max-w-md">
              We specialize in helping small businesses thrive by providing
              expert guidance in business planning and growth strategy.
            </p>
            <p className="text-gray-600 text-md max-w-md">
              Our team understands the intricacies of small business
              operations—how all the pieces fit together to create a successful
              enterprise.
            </p>

            {/* Bullet Points */}
            <div className="flex flex-col gap-2">
              <p className="flex items-center text-gray-700">
                <FaCheckCircle className="text-green-500 mr-2" />
                Business strategy &amp; planning
              </p>
              <p className="flex items-center text-gray-700">
                <FaCheckCircle className="text-green-500 mr-2" />
                Marketing strategy &amp; execution
              </p>
              <p className="flex items-center text-gray-700">
                <FaCheckCircle className="text-green-500 mr-2" />
                Process efficiency &amp; workflow improvement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section>
        <div className="p-6 md:p-9">
          <div className="mb-4">
            <button className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded">
              Who We Look For
            </button>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
            <h2 className="text-3xl md:text-4xl font-serif leading-snug md:w-[500px]">
              Creating a Culture For Success
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-md">
              We’re always learning. If you are too, you’ll fit right in.
            </p>
          </div>
        </div>

        {/* Values Cards */}
        <div className="bg-[#f4f8f4] p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {valuesData.map((item, index) => (
              <div
                key={index}
                className="bg-white hover:bg-[#C8F8A9] transition duration-300 rounded-lg p-6 shadow-sm border border-gray-200"
              >
                <div className="text-green-800 text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-medium mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <BenefitsSection />
      </section>

      <OpportunitiesTable />
    </section>
  );
};

export default Careers;
