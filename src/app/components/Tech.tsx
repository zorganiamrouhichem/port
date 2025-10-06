import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNestjs,
  SiTailwindcss,
  SiPostgresql,
  SiPostman,
  SiTypeorm,
} from "react-icons/si";

const techStack = [
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "NestJS", Icon: SiNestjs },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Postgresql", Icon: SiPostgresql },
  { name: "Postman", Icon: SiPostman },
  { name: "TypeOrm", Icon: SiTypeorm },


];

function Tech() {
  return (
    <section className="w-full bg-white py-9 px-6 overflow-hidden">
      <div className="mx-auto w-full relative" style={{ maxWidth: "1800px" }}>
        {/* Fade-out left */}
        <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white to-transparent z-10" />

        {/* Fade-out right */}
        <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Marquee Container */}
        <div className="relative overflow-hidden w-full">
          {/* Marquee track */}
          <div className="flex w-max animate-marquee gap-6">
            {[...techStack, ...techStack].map((tech, index) => {
              const IconComponent = tech.Icon;
              return (
                <div
                  key={index}
                  className="flex items-center justify-center gap-3 bg-indigo-50 border border-indigo-200 rounded-xl shadow-md p-4 min-w-[250px] transition "
                >
                  <IconComponent className="w-10 h-10 text-black" />
                  <span className="text-xl text-black font-medium">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tech;
