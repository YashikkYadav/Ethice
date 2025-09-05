import { FaEnvelope, FaArrowRight, FaUsers, FaHandshake, FaTasks } from "react-icons/fa";

const benefits = [
  {
    title: "Collaborate & Learn Across Expertise",
    description:
      "Gain insight from colleagues from all disciplines and specializations",
    icon: <FaUsers className="text-black text-lg" />,
  },
  {
    title: "Professional Relationships",
    description:
      "Cultivate professional relationships around the globe, both internally and externally",
    icon: <FaHandshake className="text-black text-lg" />,
  },
  {
    title: "Team Development Activities",
    description:
      "Enjoy team development activities, including seasonal activities and parties",
    icon: <FaTasks className="text-black text-lg" />,
  },
];

export default function BenefitsSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
      {/* Left Side */}
      <div>
        <span className="inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded mb-4">
          Benefits
        </span>
        <h2 className="text-4xl font-serif mb-6">Our Benefits</h2>
        <p className="text-gray-700 mb-8">
          Execor offers a competitive benefits program that includes personal
          development and wellness resources. In addition, all Execor employees
          have the opportunity to:
        </p>

        <div className="space-y-8">
          {benefits.map((item, idx) => (
            <div key={idx} className="flex items-start">
              {/* Vertical Line with Icon */}
              <div className="flex flex-col items-center mr-4">
                <div className="w-[2px] h-12 relative">
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-black"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gray-300"></div>
                </div>
                <div className="mt-2">{item.icon}</div>
              </div>
              <div>
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div className="rounded-lg overflow-hidden relative">
        {/* Image */}
        <img
          src="/benefit.webp"
          alt="Team discussion"
          className="w-full h-[450px] object-cover"
        />

        {/* Green Section - Overlay */}
        <div className="absolute bottom-20 left-0 right-0 bg-transparent bg-opacity-90 backdrop-blur-lg text-white p-6">
          <h3 className="text-lg font-medium mb-2">
            Do You Want To Be Part of Our Team?
          </h3>
          <p className="text-sm opacity-90">
            We believe in equality of opportunity. To live. To succeed. To grow.
            To be more than.
          </p>
        </div>

        {/* Gray Footer */}
        <div className="bg-gray-50 p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded">
              <FaEnvelope className="text-gray-700" />
            </div>
            <p className="text-sm text-gray-700">
              For career inquiries, please email <br />
              <span className="text-gray-900">careers@execor.com</span>
            </p>
          </div>
          <FaArrowRight className="text-gray-700 text-lg" />
        </div>
      </div>
    </div>
  );
}
