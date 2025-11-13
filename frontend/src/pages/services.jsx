// pages/services.js
import { useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import Testimonials from "@/components/Testimonials";
import AwardsSection from "@/components/awardSection";

const servicesData = [
  {
    id: "business-consulting",
    title: "Corporate Bond Trading",
    description:
      "Invest in high-quality corporate bonds that offer higher returns compared to traditional savings instruments while maintaining stability and liquidity.",
    checkpoints: [
      "Earn steady interest income with predictable returns",
      "Diversify portfolio with investment-grade corporate bonds",
      "Trade seamlessly in the secondary market for liquidity",
    ],
    image: "/s4.jpg",
  },
  {
    id: "marketing-sales",
    title: "Government Securities",
    description:
      "Backed by the Government of India, these securities provide the highest level of safety with stable and assured returns for conservative investors.",
    checkpoints: [
      "Sovereign-backed instruments ensuring maximum safety",
      "Ideal for long-term, low-risk investment portfolios",
      "Regular interest payouts with assured maturity value",
    ],
    image: "/s2.jpg",
  },
  {
    id: "operations-management",
    title: "State Development Loans",
    description:
      "Issued by state governments to fund infrastructure and development projects, SDLs offer attractive yields with a similar safety profile as central government securities.",
    checkpoints: [
      "Issued and guaranteed by state governments",
      "Attractive yields compared to central government bonds",
      "Support state-level infrastructure and development projects",
    ],
    image: "/s3.jpg",
  },
  {
    id: "talent-acquisition",
    title: "Why Fixed Income?",
    description:
      "Fixed income instruments are essential for portfolio stability, offering predictable cash flows and protection against market volatility.",
    checkpoints: [
      "Stable and predictable income through interest payments",
      "Preserves capital with lower market risk exposure",
      "Balances portfolio diversification against equity fluctuations",
    ],
    image: "/s1.jpg",
  },
];

export default function Services() {
  const sectionRefs = useRef({});

  const handleScroll = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="min-h-screen">
        {/* Breadcrumb */}
        <div className="w-full bg-gray-100 py-10 px-6 sm:px-10 border-b border-gray-200">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4">
            Comprehensive Business Consulting
          </h1>
          <p className="text-gray-600 max-w-3xl text-sm sm:text-base">
            We help organizations redefine their direction, and improve
            performance. Our consultants bring deep industry knowledge and a
            results-oriented mindset.
          </p>
        </div>

        {/* Tabs */}
        <div className="sticky top-0 bg-white mt-2 border-gray-200 z-20 overflow-x-auto">
          <div className="max-w-6xl mx-auto flex flex-wrap sm:flex-nowrap whitespace-nowrap">
            {servicesData.map((service) => (
              <button
                key={service.id}
                className="relative flex-1 min-w-[180px] flex items-center justify-center gap-2 px-4 py-3 sm:py-4 text-gray-700 hover:text-green-600 transition-colors font-medium text-xs sm:text-sm md:text-base last:border-r-0 group"
                onClick={() => handleScroll(service.id)}
              >
                <AiOutlinePlus className="text-green-600 flex-shrink-0" />
                <span className="truncate">{service.title}</span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </button>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="max-w-6xl mx-auto px-4 py-12 space-y-16 sm:space-y-24">
          {servicesData.map((service, index) => {
            const isEven = index % 2 !== 0;
            return (
              <div
                key={service.id}
                ref={(el) => (sectionRefs.current[service.id] = el)}
                id={service.id}
                className={`flex flex-col md:flex-row gap-6 sm:gap-8 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="md:w-1/2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full rounded-lg object-cover shadow-sm max-h-[350px] sm:max-h-[450px]"
                  />
                </div>

                {/* Content */}
                <div className="md:w-1/2">
                  <span className="bg-gray-100 px-3 py-1 text-xs rounded">
                    {service.title}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-light mt-4 mb-3">
                    Transforming Insight into Impact
                  </h2>
                  <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>

                  {/* Checkpoints */}
                  <ul className="space-y-2 mb-6 text-sm sm:text-base">
                    {service.checkpoints.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <BsCheck2Circle className="text-green-500 text-lg" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <button className="bg-[#C8F8A9] text-green-900 px-5 py-2 rounded-md hover:bg-green-300 transition-colors text-sm sm:text-base">
                    Learn More →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* <AwardsSection /> */}
      </div>

      {/* Hero with Image */}
      {/* <div className="relative w-full h-[70vh] sm:h-screen overflow-hidden mb-10">
        <img
          src="/video.jpg"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 max-w-xl px-4 sm:px-0">
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-light mb-4 leading-snug">
            Driving Growth Through <br /> Strategic Clarity
          </h1>
          <button className="bg-[#C8F8A9] text-green-900 px-4 sm:px-5 py-2 rounded-md hover:bg-green-300 transition-colors flex items-center gap-2 text-sm sm:text-base">
            Contact Us →
          </button>
        </div>
      </div> */}

      {/* <Testimonials /> */}
    </>
  );
}
