"use client"
import React, { useState } from "react";

function Navbar() {
  const [lang, setLang] = useState("EN");

  return (
    <nav className="w-full py-4">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Left - Logo */}
        <div className="text-lg font-bold">Logo</div>

        {/* Center - Navigation Links */}
        <div className="bg-[#fefefe] rounded-full px-6 py-2 flex gap-6 border-2 border-black">
          {["About", "Projects", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-black font-bold rounded-full px-3 py-1 hover:bg-black hover:text-white transition"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right - Language Switch as a toggle */}
        <div className="relative inline-flex bg-[#fefefe] border-2 border-black rounded-full p-1 cursor-pointer select-none">
          {["EN", "FR"].map((language) => {
            const active = lang === language;
            return (
              <button
                key={language}
                onClick={() => setLang(language)}
                className={`
                  relative z-10 px-4 py-1 rounded-full text-sm font-medium
                  transition-colors duration-300
                  ${active ? "text-white" : "text-black"}
                  flex-1
                  ${active ? "" : "hover:text-white"}
                `}
                aria-pressed={active}
              >
                {language}
              </button>
            );
          })}
          {/* Sliding background */}
          <span
            className={`
              absolute top-1 bottom-1 left-1 rounded-full bg-black transition-all duration-300
              ${lang === "EN" ? "w-12 left-1" : "w-12 left-[calc(100%-3rem)]"}
            `}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
