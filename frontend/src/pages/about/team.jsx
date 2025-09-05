// pages/team.jsx
import { teamData } from "@/data/teamData";
import Link from "next/link";

export default function TeamPage() {
  return (
    <>
      {/* Header Section */}
      <div className="bg-[#f7faf7] py-16 px-6 mb-10">
        <div className="max-w-6xl mx-auto">
     
          <h1 className="text-5xl font-serif mb-4">Meet Our Leaders</h1>
          <p className="text-gray-600 max-w-3xl">
            A skilled blend of management and a team of experts, we deliver
            strategic insights and innovative solutions to drive business success.
          </p>
        </div>
      </div>
    {/* Leader Spotlight Section */}
<div className="max-w-6xl mx-auto px-6 mb-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
  {/* Left: Image */}
  <div className="relative">
    <img
      src="/old.webp"
      alt="Daniel Brila"
      className="rounded-lg w-full object-cover"
    />
    <p className="absolute bottom-6 left-6 text-white text-sm">
      Success is built on vision, strategy and people!
    </p>
    <span className="absolute bottom-2 left-6 text-green-400 font-signature">
      B. Plim
    </span>
  </div>

  {/* Right: Content */}
  <div>
    <button className="bg-gray-100 py-1 px-2 rounded-md mb-4">
      Meet Our Team
    </button>
    <h2 className="text-[46px] font-serif leading-tight mb-6">
      Top-Rated Business Consultant
    </h2>
    <p className="text-gray-600 mb-6">
      Execor Consulting Solutions for Businesses is a top-rated business
      consultant in New York. We work with small business owners on their
      small business puzzle, including business planning, processes, retention,
      lead generation, social media, websites, and more. Comprehensive
      Consulting has a few employees and works with contractors to outsource
      projects based on our client’s needs. We have a talented team with
      expertise in complementing areas – we work together to deliver real
      results for your small business.
    </p>

    <ul className="space-y-3 text-gray-700">
      <li className="flex items-center">
        <span className="text-green-500 mr-2">✔</span>
        Qualified in business strategy, IT solutions, and marketing
      </li>
      <li className="flex items-center">
        <span className="text-green-500 mr-2">✔</span>
        Industry professionals with years of experience
      </li>
      <li className="flex items-center">
        <span className="text-green-500 mr-2">✔</span>
        Experts in complementary areas
      </li>
      <li className="flex items-center">
        <span className="text-green-500 mr-2">✔</span>
        Awards, certifications, and industry recognition
      </li>
    </ul>
  </div>
</div>
{/* Why Hire Section */}
<div className="bg-[#f4f8f4] rounded-xl py-16 px-6 md:px-12">
  <button className="bg-gray-100 py-1 px-2 rounded-md mb-4">
    Accreditation
  </button>
  <h2 className="text-[46px] font-serif leading-tight mb-12">
    Why Hire Execor Consulting Solutions?
  </h2>

  {/* Cards */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
    {[
      "A+ Rated & Accredited with the BBB + Top-Rated Consultancy",
      "Accredited Small Business Consultant and Financial Services Certified",
      "Fayetteville’s Businessperson of the Year",
      "Rated Top Social Media Agency by Expertise and UpCity"
    ].map((text, index) => (
      <div
        key={index}
        className={`rounded-lg border border-gray-200 p-6 transition-all duration-300 
          hover:bg-[#ccf6c8] hover:shadow-md cursor-pointer bg-white`}
      >
        <div className="text-green-500 text-3xl mb-4">✔</div>
        <p className="text-gray-800 font-medium">{text}</p>
      </div>
    ))}
  </div>
</div>


      {/* Meet Some of Our Team */}
      <div className="max-w-6xl mt-6 mx-auto px-6 mb-16">
        <button className="bg-gray-100 py-1 px-2 rounded-md mb-4">
          Meet Our Team
        </button>
        <div className="flex justify-between">
        <h2 className="text-[46px] font-serif mb-8">Meet Some of Our Team</h2>
        <button></button>
        </div>
        {/* Team Member Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.map((member) => (
            <Link
              key={member.id}
              href={`/team/${member.id}`}
              className="bg-gray-100 rounded-lg overflow-hidden transition-colors duration-300 hover:bg-green-100 cursor-pointer"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
