"use client";
import React from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-white py-8 min-h-[80px]">
      {/* Border line with responsive horizontal padding */}
      <div className=" mx-auto border-t border-gray-300 px-6 md:px-24" style={{ maxWidth: "1800px" }}/>

      {/* Footer content with responsive layout */}
      <div className=" mx-auto px-6 md:px-24 mt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-lg select-none gap-4 md:gap-0" style={{ maxWidth: "1800px" }}>
        <div className="text-center md:text-left">
          © 2025 Hichem Zorgani. All rights reserved.
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center space-x-2 hover:text-blue-600 focus:outline-none"
          aria-label="Back to top"
        >
          <span>Back to top</span>
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;

