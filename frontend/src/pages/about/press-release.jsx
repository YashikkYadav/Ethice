import { HiOutlineMail } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import { pressReleasesData } from "@/data/pressReleasesData";

export default function PressRelease() {
  return (
    <>
      {/* Header Section */}
      <div className="bg-[#f4f8f4] py-16 px-4 mb-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif mb-4">Press Release</h1>
          <p className="text-gray-700 mb-10 max-w-3xl text-sm md:text-base">
            Our industry experts, cutting–edge research, and strategic business
            insights are regularly featured in leading global news outlets.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 md:px-8 py-10 bg-white min-h-screen">
        {/* Contact Section */}
        <div className="mb-10">
          <p className="text-base md:text-lg mb-6">
            For media inquiries or more information, please contact us:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Contact Card 1 */}
            <a
              href="mailto:media@execor.com"
              className="flex items-center justify-between p-6 rounded-lg bg-[#f4f8f4] border border-gray-200 hover:bg-[#C8F8A9] transition-colors duration-300"
            >
              <div className="flex items-center gap-4 w-full max-w-[300px]">
                <div className="bg-white rounded-md p-2">
                  <HiOutlineMail className="text-2xl text-gray-700" />
                </div>
                <div>
                  <p className="font-semibold">Daniel Lopes</p>
                  <p className="text-gray-600 text-sm">Media Coordinator</p>
                </div>
              </div>
              <FaArrowRight className="text-gray-700 flex-shrink-0" />
            </a>

            {/* Contact Card 2 */}
            <a
              href="mailto:media@execor.com"
              className="flex items-center justify-between p-6 rounded-lg bg-[#f4f8f4] border border-gray-200 hover:bg-[#C8F8A9] transition-colors duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="bg-white rounded-md p-2">
                  <HiOutlineMail className="text-2xl text-gray-700" />
                </div>
                <div>
                  <p className="font-semibold">Email us at:</p>
                  <p className="text-gray-600 text-sm">media@execor.com</p>
                </div>
              </div>
              <FaArrowRight className="text-green-700 flex-shrink-0" />
            </a>
          </div>
        </div>

        {/* Press Release List */}
        <div className="bg-white p-2 rounded-lg">
          {pressReleasesData.map((item, index) => (
            <div key={index}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                {/* Left Content */}
                <div className="flex gap-4 md:gap-6">
                  <span className="inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded self-start md:self-center">
                    Press Release
                  </span>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">{item.date}</p>
                    <h3 className="text-lg md:text-2xl hover:underline cursor-pointer">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Right Arrow Button */}
                <button className="flex items-center justify-center w-10 h-10 rounded-md bg-gray-100 hover:bg-[#C8F8A9] transition-colors">
                  <FaArrowRight className="text-gray-700" />
                </button>
              </div>

              {/* Divider */}
              {index < pressReleasesData.length - 1 && (
                <hr className="my-4 border-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
