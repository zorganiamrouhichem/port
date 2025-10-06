"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Icon library (optional, can replace with SVG)
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="top-0 left-0 w-full bg-white shadow-sm z-50">
<div className=" mx-auto px-4 flex items-center justify-between" style={{ maxWidth: "1800px" }}>        {/* Logo */}
        <div className="flex items-center">
<Image
  src="/z.png"
  alt="Logo"
  width={100}
  height={100}
/>

        </div>

        {/* Desktop Navigation */}
       <ul className="hidden md:flex space-x-8 text-[#0b0b0b] font-medium">
  <li className="font-inter text-xl">
    <Link href="/" className="hover:text-blue-600">
      Home
    </Link>
  </li>
  <li className="font-inter text-xl">
    <Link href="/#projects" className="hover:text-blue-600">
      Projects
    </Link>
  </li>
  <li className="font-inter text-xl">
    <Link href="/#contact" className="hover:text-blue-600">
      Contact
    </Link>
  </li>
</ul>

        {/* Language Switcher + Mobile Toggle */}
        <div className="flex items-center space-x-4">

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[#0b0b0b]"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
  <div className="md:hidden px-6 pb-4 flex flex-col items-center space-y-4">
    <ul className="flex flex-col items-center space-y-4 text-[#0b0b0b] font-medium">
  <li>
    <Link href="/" className="hover:text-blue-600" onClick={toggleMobileMenu}>
      Home
    </Link>
  </li>
  <li>
    <Link href="/#projects" className="hover:text-blue-600" onClick={toggleMobileMenu}>
      Projects
    </Link>
  </li>
  <li>
    <Link href="/#contact" className="hover:text-blue-600" onClick={toggleMobileMenu}>
      Contact
    </Link>
  </li>
</ul>


    {/* Language label below menu items */}
   
  </div>
)}

    </nav>
  );
}

export default Navbar;
