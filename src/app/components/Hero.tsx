import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdDescription } from "react-icons/md";

function Hero() {
  const icons = [
    { Icon: MdEmail, label: "Email" },
    { Icon: FaGithub, label: "GitHub" },
    { Icon: FaLinkedin, label: "LinkedIn" },
    { Icon: MdDescription, label: "Paper" },
  ];

  return (
    <div className="flex max-w-7xl mx-auto px-4 py-12 gap-20">
      {/* Left Section */}
      <div className="flex flex-col justify-center flex-1 space-y-4">
        <h1 className="text-black text-3xl font-normal">
          Hi, I&apos;m Amrou Hichem Zorgani
        </h1>
        <div>
          <p className="text-black font-bold text-5xl leading-tight">Software</p>
          <p className="text-black font-bold text-5xl leading-tight">Developer</p>
        </div>
        <div className="mt-6 flex justify-between max-w-md">
          {icons.map(({ Icon, label }) => (
            <div
              key={label}
              className="bg-black w-14 h-14 flex items-center justify-center rounded-md cursor-pointer hover:bg-gray-800 transition"
              aria-label={label}
              title={label}
            >
              <Icon className="text-white" size={24} />
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col justify-center text-gray-800 text-lg leading-relaxed">
        <p>
          I&apos;m a software engineer who enjoys turning ideas into web apps that actually work (and look good doing it). I&apos;ve spent the last few years building projects with modern stacks like React, TypeScript, and Node.js, always aiming for that sweet spot between clean code and a smooth user experience.
        </p>
        <p className="mt-6">
          I like making things that are useful, intuitive, and sometimes just for fun (because why not?). Whether it&apos;s a SaaS platform, a mobile app, or a little side project that got out of hand, I love bringing concepts to life and learning something new along the way. Currently exploring backend architecture, system design, and a bit of mobile development too.
        </p>
      </div>
    </div>
  );
}

export default Hero;
