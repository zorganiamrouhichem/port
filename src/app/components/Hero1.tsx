import { ArrowDown, ArrowUpRight } from "lucide-react";
import React from "react";

function Hero1() {
  return (
    <div className="relative w-full h-full flex flex-col items-center  bg-gradient-to-r from-indigo-20 via-white to-indigo-50 py-12">
      <div className=" grid grid-cols-1 md:grid-cols-2  items-start relative z-10" style={{ maxWidth: "1400px" }}>
        {/* Left Side */}
        {/* Left Side */}
<div className="text-center md:text-left flex flex-col items-center md:items-start">
 <h1 className="text-3xl text-black mb-2">
  Hello, I&rsquo;m Hichem Zorgani
</h1>

  <h2 className="text-4xl font-bold mt-10 text-black leading-tight">
    <span>Full Stack Developer</span>
    <br className="hidden sm:block" />
    <span className="block mt-1">(Next.js/Nest.js)</span>
  </h2>

  <div className="mt-10 w-full flex justify-center md:justify-start">
   <a
  href="/resume.pdf"
  download="Hichem-Zorgani-Resume.pdf"
  className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded-full text-2xl font-medium hover:bg-gray-800 transition"
>
  View Resume
  <ArrowUpRight className="w-6 h-6" />
</a>

  </div>
</div>


        {/* Right Side */}
       {/* Right Side */}
<div className="text-black text-xl leading-relaxed space-y-4 text-center md:text-left flex flex-col items-center md:items-start">
  <p>
  As a full-stack developer, I do more than just code: I structure, advise, and anticipate. I work with tools like Next.js, NestJS, TypeORM, and the modern JavaScript ecosystem. But my real stack is built on listening, clarity, stability, and scalability.
</p>

<p>
  Before writing a single line of code, I always ask the same question: What does the user really need? A great app isn&rsquo;t just a sleek UI or a fast backend — it&rsquo;s a smooth, purpose-driven experience that solves a real problem without friction.
</p>

<p>
  I don&rsquo;t just deliver code — I build real, usable solutions.
</p>


</div>

      </div>

      {/* Down Arrow */}
      <div
        className="mt-12 flex justify-center w-full cursor-pointer relative z-10"
        onClick={() => {
          const projectsSection = document.getElementById("projects");
          if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <ArrowDown className="w-8 h-8 text-black animate-bounce" />
      </div>

      {/* Gradient fade at bottom */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white"
        aria-hidden="true"
      />
    </div>
  );
}

export default Hero1;
