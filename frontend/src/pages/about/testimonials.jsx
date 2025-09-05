// pages/team.jsx
import { teamData } from "@/data/teamData";
import Link from "next/link";
import Testimonials from "@/components/Testimonials";
import HeroDupe from "@/components/HeroDupe";
import Image from "next/image";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import testimonialsData from "@/data/testimonialdummyData"; // adjust path if needed

export default function testimonials() {
  return (
    <>
      {/* Header Section */}
      <div className="bg-[#f4f8f4] py-16 px-6 mb-10">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-5xl font-serif mb-4">Trusted Company</h1>
          <p className="text-gray-600 max-w-3xl">
            Here are some of our reviews. To view more, check out our Google, Facebook, and Alignable profiles.
          </p>
          
        </div>
        
      </div>
      <Testimonials showFooter={false}/>
    <div className="flex flex-wrap gap-6 p-6">
  {testimonialsData.map(({ name, role, image, quote, stat, statLabel }, idx) => (
    <div
      key={idx}
      className="bg-[#f1f5f1] flex flex-col justify-between rounded-xl p-6 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
    >
      {/* Top (Quote Section) */}
      <div className="flex-1">
        <FaQuoteLeft className="text-green-900 text-3xl mb-4" />
        <p className="text-gray-800 leading-relaxed">{quote}</p>
        
      </div>

      {/* Bottom (Image + Name) */}
      <div className="flex  mt-6">
        <img src={image} alt={name} className="w-20 h-20 rounded-full mb-4" />
        <div className="flex flex-col justify-center">
        <h3 className="text-md ml-3">{name}</h3>
        <p className="text-sm text-gray-600 bg-white px-3 py-1 rounded-md ml-1 mt-1">{role}</p>
        </div>
      </div>
    </div>
  ))}
</div>


 <div className="relative w-full h-[600px] mb-4">
      {/* Background Image */}
      <Image
        src="/count.jpg" // 👈 put your image in /public as image.png
        alt="Hero Image"
        fill
        className="object-cover"
        priority
      />

      {/* Left Text */}
      <div className="absolute top-5 left-10 ">
        <h1 className="text-white text-[46px] font-serif leading-snug">
          Your Time is Valuable.
          <br />
          We Make Every Second Count.
        </h1>
      </div>

      {/* Right Card */}
      <div className="absolute bottom-15 translate-y-8 left-10 z-10 w-80 rounded-md overflow-hidden">
      
        <button className="w-auto bg-[#C8F8A9] hover:bg-green-900 hover:text-white text-black text-sm py-3 px-4 flex justify-between items-center  transition">
          Book a Free Strategy Call
          <span className="ml-2">→</span>
        </button>
    </div>
    </div>

    </>
  );
}
