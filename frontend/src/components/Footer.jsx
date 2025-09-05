import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaXTwitter,
  FaYelp,
} from "react-icons/fa6";
import { FiArrowUp } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#043c3a] text-white pt-16 pb-8 px-6 mt-0 relative z-10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        {/* Logo + Tagline */}
        <div>
          <h2 className="text-white text-2xl font-semibold mb-2">
            <span className="text-green-400">E</span>thice
          </h2>
          <p className="text-gray-400">
            Strategic <span className="text-green-400">Insights.</span> Lasting{" "}
            <span className="text-green-400">Impact.</span>
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-gray-400 mb-2 font-medium">Company</h4>
          <ul className="space-y-2 text-white">
            <li>Services</li>
            <li>Case Studies</li>
            <li>Blog</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* More Links */}
        <div>
          <h4 className="text-gray-400 mb-2 font-medium">About</h4>
          <ul className="space-y-2 text-white">
            <li>Team</li>
            <li>Careers</li>
            <li>Press Release</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-gray-400 mb-2 font-medium">Contact</h4>
          <p className="mb-2">P: +91 80970 72126</p>
          <p className="mb-4">E: info@execor.com</p>
          <h4 className="mb-2 font-medium">Address</h4>
          <p>
            shop No:03, Vithal Mandi Building, Station Road, Thane, Maharashtra
            - 400 099
          </p>
        </div>
      </div>

      {/* Divider + Social + Scroll */}
      <div className="mt-10 border-b border-white/10 pb-6 text-sm flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-4 px-2">
        {/* Scroll to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-white border border-white p-2 rounded-full hover:bg-white hover:text-black transition"
        >
          <FiArrowUp />
        </button>

        {/* Socials */}
        <div className="flex gap-4 text-lg flex-wrap justify-center">
          <FaLinkedinIn />
          <FaXTwitter />
          <FaYoutube />
          <FaFacebookF />
          <FaYelp />
        </div>
      </div>

      {/* Legal */}
      <div className="mt-6 text-gray-500 text-xs flex flex-col sm:flex-row justify-between max-w-7xl mx-auto px-2 gap-2 text-center sm:text-left">
        <p>2025 © Ethice. All rights reserved.</p>
        <div className="space-x-4">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
