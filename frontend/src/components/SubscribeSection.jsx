import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const SubscribeSection = () => {
  return (
    <section className="bg-[#f1f5f1] text-center py-16 px-4">
      <h2 className="font-serif text-3xl md:text-5xl font-light text-black mb-8">
        Stay Ahead. Subscribe for{" "}
        <span className="italic">Expert Insights.</span>
      </h2>

      <form className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-white md:w-2/3 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <button
          type="submit"
          className="flex justify-between group items-center gap-2 bg-[#C8F8A9] hover:bg-green-900 hover:text-white text-black font-medium px-6 py-2 rounded-md transition"
        >
          Subscribe
          <FaPaperPlane className="text-lg text-green-900 group-hover:text-white" />
        </button>
      </form>

      <p className="text-xs text-gray-500 mt-4 max-w-lg mx-auto">
        You can unsubscribe at any time using the link in the footer of our emails.
        View our{" "}
        <span className="underline text-blue-900 cursor-pointer">
          Privacy Policy
        </span>
        .
      </p>
    </section>
  );
};

export default SubscribeSection;
