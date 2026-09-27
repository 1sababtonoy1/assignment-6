import React from 'react';
import Image from 'next/image';
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0d0e12] border-t border-[#222431] py-6 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left Section: Logo & Brand Name */}
        <div className="flex items-center gap-2.5">
          <Image
            src={logo}
            alt="FitLog Logo"
            width={24}
            height={24}
            className="w-6 h-6 object-contain"
          />
          <span className="text-white font-black text-lg tracking-wider uppercase">
            FITLOG
          </span>
        </div>

        {/* Right Section: Copyright & Tagline */}
        <p className="text-gray-400 text-xs sm:text-sm font-normal text-center sm:text-right">
          © {currentYear} FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;