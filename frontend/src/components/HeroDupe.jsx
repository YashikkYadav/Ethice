import Image from "next/image";

const HeroDupe= () => {
  return (
    <div className="relative w-full h-[600px]">
      {/* Background Image */}
      <Image
        src="/dupe.jpg" // 👈 put your image in /public as image.png
        alt="Hero Image"
        fill
        className="object-cover"
        priority
      />

      {/* Left Text */}
      <div className="absolute top-3 left-10 ">
        <h1 className="text-white text-5xl font-light leading-snug">
          Your Time is Valuable.
          <br />
          We Make Every Second Count.
        </h1>
      </div>

      {/* Right Card */}
      <div className="absolute bottom-0 translate-y-8 right-10 z-10 w-80 rounded-md overflow-hidden">
        <div className="bg-transparent backdrop-blur-xl text-white p-6">
          <p className="text-sm">Up to</p>
          <p className="text-5xl font-light">40%</p>
          <p className="text-sm mt-2">
            of leaders’ time goes to strategy.
          </p>
        </div>
        <button className="w-full bg-lime-300 hover:bg-green-900 hover:text-white text-black text-sm py-3 px-4 flex justify-between items-center  transition">
          Let us optimize it for you
          <span className="ml-2">→</span>
        </button>
      </div>
    </div>
  );
};

export default HeroDupe;
