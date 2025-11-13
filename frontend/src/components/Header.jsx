import React, { useState } from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // const navLinks = [
  //   { name: "Services", href: "/services" },
  //   {
  //     name: "About",
  //     href: "/about",
  //     dropdown: [
  //       { name: "Who We Are", href: "/about" },
  //       // { name: "Our Team", href: "/about/team" },
  //       // { name: "Careers", href: "/about/careers" },
  //       // { name: "Testimonials", href: "/about/testimonials" },
  //       // { name: "Press Release", href: "/about/press-release" },
  //     ],
  //   },
  //   // { name: "Case Studies", href: "/case-studies" },
  //   { name: "Blog", href: "/blogs" },
  //   { name: "Contact", href: "/contact-us" },
  // ];

  return (
    <header className="sticky top-0 bg-[#0F3D3A] z-10 border-b border-white/10">
      <div className="flex items-center justify-between px-8 py-4 w-full">
        <div className="flex-1"></div> {/* Empty div for spacing */}
        
        {/* Logo centered */}
        <div className="flex-shrink-0 mx-4">
          <Link href="/" className="block">
            <div className="w-36">
              <img src="../Ethic Capital LOGO (1).png" alt="header logo" />
            </div>
          </Link>
        </div>
        
        <div className="flex-1 flex justify-end">
          {/* Contact Us button on the right */}
          <Link href="/contact-us" className="block">
            <button className="bg-[#C8F8A9] hover:bg-green-900 hover:text-white text-black text-[14px] px-5 py-2 rounded-md shadow-md flex justify-between items-center gap-2">
              Contact Us <FiArrowRight />
            </button>
          </Link>
        </div>
      </div>

    </header>
  );
};

export default Header;
