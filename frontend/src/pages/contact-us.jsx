import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import ContactForm from "../components/ContactForm"; // adjust import path

export default function ContactUs() {
  const contactCards = [
    {
      icon: <FaMapMarkerAlt size={22} />,
      title: "Visit us at:",
      description:
        "shop No:03, Vithal Mandi Building, Station Road, Thane, Maharashtra,- 400 099",
    },
    {
      icon: <FaPhoneAlt size={22} />,
      title: "Call us at:",
      description: "+91 80970 72126",
    },
    {
      icon: <FaEnvelope size={22} />,
      title: "Email us at:",
      description: "bonds@ethice.in",
    },
  ];

  return (
    <div className="bg-white">
      {/* Heading */}
      <section className="bg-[#f5f8f5] py-14 px-6">
        <h1 className="text-[56px] text-center font-serif text-gray-900 mb-2">
          Get In Touch
        </h1>
        <p className="text-gray-600 text-center">
          We Look Forward to Connecting With You
        </p>
      </section>

      {/* Contact Cards */}
      <section className="py-10 px-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {contactCards.map((card, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-6 bg-[#f5f8f5] rounded-lg transition-all duration-300 hover:bg-[#c8f8a9] cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="bg-white/70 text-gray-600 p-3 rounded-lg  transition-all">
                {card.icon}
              </div>
              <div>
                <p className="font-medium">{card.title}</p>
                <p className="text-sm">{card.description}</p>
              </div>
            </div>
            <div className="text-gray-500  transition-all">
              <FaArrowRight />
            </div>
          </div>
        ))}
      </section>

      {/* Form Section */}
      <section className="py-10 px-6 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Content */}

        {/* Right Form */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-[#0F3D3A] text-white px-6 py-4 flex items-center justify-between">
            <h3 className="text-lg font-medium">Contact Form</h3>
            <span className="bg-green-700 p-2 rounded-full">
              <FaPaperPlane />
            </span>
          </div>
          <div className="p-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
