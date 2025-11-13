import Image from "next/image";

const HeroDupe = () => {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[700px]">
      {/* Background Image */}
      <Image
        src="/nonchinese.png" // 👈 put your image in /public as image.png
        alt="Hero Image"
        fill
        className="object-cover"
        priority
      />

      {/* Left Text */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-10 md:left-10">
        <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-light leading-tight">
          Your Time is Valuable.
          <br />
          We Make Every Second Count.
        </h1>
      </div>

      {/* Mission and Vision Section */}
      <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 md:bottom-10 md:left-10 md:right-10 md:w-2/5 bg-black/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 text-white">
        <div className="mb-2 sm:mb-3 md:mb-4">
          <h2 className="text-base sm:text-lg md:text-xl font-bold mb-1">Mission</h2>
          <p className="text-[10px] sm:text-xs md:text-sm">
            To Trade in Transparent, Secure, and Tailored Fixed-Income Products, Enriching our portfolio through deep expertise and disciplined credit analysis
          </p>
        </div>
        <div>
          <h2 className="text-base sm:text-lg md:text-xl font-bold mb-1">Vision</h2>
          <p className="text-[10px] sm:text-xs md:text-sm">
            Setting new standards in Reliability, Transparency and Value Creation
          </p>
        </div>
      </div>

      {/* Right Card */}
      {/* <div className="absolute bottom-0 translate-y-8 right-10 z-10 w-80 rounded-md overflow-hidden">
        <div className="bg-transparent backdrop-blur-xl text-white p-6">
          <p className="text-sm">Up to</p>
          <p className="text-5xl font-light">40%</p>
          <p className="text-sm mt-2">of leaders' time goes to strategy.</p>
        </div>
        <button className="w-full bg-lime-300 hover:bg-green-900 hover:text-white text-black text-sm py-3 px-4 flex justify-between items-center  transition">
          Let us optimize it for you
          <span className="ml-2">→</span>
        </button>
      </div> */}
    </div>
  );
};

export default HeroDupe;