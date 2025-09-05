import { FiPhone, FiMapPin, FiArrowRight } from "react-icons/fi";

const ContactCard = () => {
  return (
    <div
      className="
        w-[90%] sm:w-[400px] 
        rounded-lg overflow-hidden shadow-lg 
        relative mx-auto 
        lg:absolute lg:bottom-0 lg:left-1/4 lg:translate-y-8 lg:mx-0
      "
    >
      {/* Top section */}
      <div className="bg-gradient-to-b from-[#173E3F] to-[#1e4d4d] text-white p-6">
        <h3 className="text-base sm:text-lg font-semibold mb-2">
          Have a Challenge or an Idea?
        </h3>
        <p className="text-sm leading-relaxed">
          Fill out the form, and let’s talk about how we can support your
          business with tailored solutions.
        </p>
      </div>

      {/* Bottom contact section */}
      <div className="bg-[#f1f5f1]">
        {/* Call us */}
        <div className="flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-3">
            <div className="bg-[#E8F3F2] p-3 rounded-md">
              <FiPhone className="text-lg sm:text-xl text-[#173E3F]" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-700">Call us at:</p>
              <p className="text-sm sm:text-base font-semibold text-gray-900">
                +91 8097072126
              </p>
            </div>
          </div>
          <FiArrowRight className="text-lg sm:text-xl text-gray-400" />
        </div>

        <hr />

        {/* Visit us */}
        <div className="flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-3">
            <div className="bg-[#E8F3F2] p-3 rounded-md">
              <FiMapPin className="text-lg sm:text-xl text-[#173E3F]" />
            </div>
            <div className="max-w-[230px] sm:max-w-xs">
              <p className="text-xs sm:text-sm text-gray-700">Visit us at:</p>
              <p className="text-sm sm:text-base font-semibold text-gray-900">
                Shop No:03, Vithal Mandi Building, Station Road, Thane,
                Maharashtra - 400099
              </p>
            </div>
          </div>
          <FiArrowRight className="hidden sm:block text-xl text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
