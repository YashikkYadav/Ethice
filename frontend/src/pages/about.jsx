import React from "react";
import { FaCheck, FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { teamData } from "@/data/teamData";
import Link from "next/link";

const people = [
  {
    name: "Johnatan Moralle",
    role: "Founder",
    image: "/images/johnatan.jpg",
  },
  {
    name: "Sarah Williams",
    role: "CTO",
    image: "/images/sarah.jpg",
  },
  {
    name: "David Lee",
    role: "Lead Designer",
    image: "/images/david.jpg",
  },];

const About = () => {
  return (
    <section className="pb-12">
      <div className="bg-[#f7faf7] py-16 px-4 mb-10 pl-10">
        <div className="max-w-4xl">
          {/* Title */}
          <h1 className="text-[56px] font-serif mb-6">Who We Are</h1>

          {/* Subtitle */}
          <p className="text-gray-600 max-w-3xl">
            With years of experience and a results-focused approach, we empower
            businesses to navigate complexity and achieve their goals.
          </p>
        </div>
      </div>

      <section className="py-20 px-4 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Row 1: About Us Button */}
          <div className="mb-4">
            <button className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded">
              Who We Are
            </button>
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
            <div className="flex flex-col justify-between items-start gap-6 mb-10 ml-3">
              <h2 className="text-[56px] font-serif leading-snug">
                Driving success through strategy.
              </h2>

              <p className="text-gray-600 text-md max-w-md">
                We specialize in helping small businesses thrive by providing
                expert guidance in business planning and growth strategy.
              </p>

              <p className="text-gray-600 text-md max-w-md">
                Our team understands the intricacies of small business
                operations—how all the pieces fit together to create a
                successful enterprise. Whether you’re looking to enhance
                efficiency, seize new growth opportunities, or overcome
                operational challenges, we’re here to help. We offer tailored
                solutions in:
              </p>

              {/* Three points with check icons */}
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

          <div className="mt-10">
            <button className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded">
              Who We Are
            </button>
          </div>
        </div>
      </section>

      <section>
  <div className="p-6 sm:p-9">
    {/* Mission Tag */}
    <div className="mb-4">
      <button className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded">
        Our Mission
      </button>
    </div>

    {/* Row 2: Heading + Text */}
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
      <h2 className="text-3xl sm:text-4xl font-serif leading-snug md:w-1/2">
        Empowering Clients to Create Lasting Value
      </h2>
      <p className="text-gray-600 text-sm md:text-base md:max-w-md">
        Our mission is to empower our clients to create lasting value by
        providing strategic guidance, innovative solutions, and expert support.
        We are dedicated to helping businesses unlock their full potential,
        optimize performance, and achieve sustainable growth.
      </p>
    </div>
  </div>

  {/* Insights Section */}
  <div className="bg-[#f4f8f4] rounded-xl p-6 sm:p-8 mt-10">
    {/* Two columns */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      {/* Left */}
      <div className="border-l-2 border-gray-300 pl-4">
        <h3 className="text-lg font-semibold mb-2">
          Higher return on investment
        </h3>
        <p className="text-gray-600 text-sm">
          We help financial sponsors drive higher return on their investments
          through strategic analysis of target companies.
        </p>
      </div>

      {/* Right */}
      <div className="border-l-2 border-gray-300 pl-4">
        <h3 className="text-lg font-semibold mb-2">
          Greater shareholder value
        </h3>
        <p className="text-gray-600 text-sm">
          We help corporate management teams increase shareholder value through
          tactical and strategic planning.
        </p>
      </div>
    </div>

    {/* Image with button */}
    <div className="relative rounded-lg overflow-hidden">
      <img
        src="/insight3.webp"
        alt="Team collaboration"
        className="w-full h-56 sm:h-72 md:h-[400px] object-cover"
      />
      <button className="absolute bottom-4 left-4 bg-[#C8F8A9] text-green-900 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-200 transition text-sm sm:text-base">
        Explore Our Services <span className="text-lg sm:text-xl">→</span>
      </button>
    </div>
  </div>

  {/* Team Section */}
  <div className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12 gap-6">
        <div className="max-w-2xl">
          <span className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded mb-4">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold leading-tight mb-4">
            A Team With Proven Expertise and Excellence
          </h2>
        </div>
        <p className="text-gray-600 max-w-lg text-sm sm:text-base">
          At Ethice, our team is a powerful blend of management and IT consulting
          experts passionate about solving complex business challenges. With
          years of proven experience, we provide strategic insights, innovative
          technology solutions, and hands-on support to help businesses grow and
          thrive.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap gap-6">
        {/* First Card */}
        <div className="bg-[#0c5149] text-white rounded-lg p-6 flex flex-col justify-between w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
          <p className="italic mb-6">
            “Legacy of success can power your future!”
          </p>
          <div className="flex-grow"></div>
          <svg width="80" height="40" className="mb-6 text-green-300">
            <line x1="0" y1="20" x2="80" y2="20" stroke="currentColor" />
          </svg>
          <button className="bg-green-200 text-green-900 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-300 transition text-sm sm:text-base">
            Learn More <span className="text-lg sm:text-xl">→</span>
          </button>
        </div>

        {/* Team Member Cards */}
        {teamData.map((person) => (
          <Link
            key={person.id}
            href={`/team/${person.id}`}
            className="bg-gray-100 rounded-lg overflow-hidden transition-colors duration-300 hover:bg-green-100 cursor-pointer w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-56 sm:h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{person.name}</h3>
              <p className="text-sm text-gray-600">{person.role}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
</section>

      <section className="flex flex-col md:flex-row items-center md:items-start md:justify-between py-16 px-6 md:px-20 bg-white">
      {/* Left Image Section */}
      <div className="relative md:w-1/2 w-full">
        <img
          src="/insight3.webp" // replace with your image path
          alt="Building"
          className="w-full h-[500px] object-cover"
        />

        {/* Overlay Card */}
        <div className="absolute bottom-0 right-0 bg-gradient-to-r from-gray-700 to-gray-500 text-white p-6 rounded-md max-w-xs">
          <p className="text-sm mb-2">Execor</p>
          <h2 className="text-4xl font-bold">10+</h2>
          <p className="text-sm mb-4">Years of Tradition &amp; Innovation</p>
          <button className="bg-green-300 text-gray-800 px-4 py-2 rounded flex items-center">
            Contact Us <span className="ml-2">→</span>
          </button>
        </div>
      </div>

      {/* Right Content Section */}
      <div className="md:w-1/2 w-full mt-8 md:mt-0 md:pl-12">
        <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded">
          Company With Traditions
        </span>
        <h1 className="mt-4 text-4xl font-serif font-semibold leading-snug">
          Building on Tradition,<br /> Driving Innovation
        </h1>
        <p className="mt-6 text-gray-600 text-md max-w-md">
          At Execor, we combine decades of experience with forward–thinking
          technology to deliver comprehensive management and IT consulting
          solutions. With a rich tradition of excellence, we’ve helped
          organizations navigate change, improve efficiency, and achieve
          long–term success. Our team brings deep industry knowledge,
          innovative strategies, and a personal commitment to understanding
          each client’s unique needs. Whether optimizing business processes,
          streamlining IT systems, or driving digital transformation, Execor is
          your trusted partner in achieving sustainable growth.
        </p>
      </div>
    </section>
    </section>
  );
};

export default About;
