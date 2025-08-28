import React from "react";
import {
  SiJavascript,
  SiGit,
  SiGithub,
  SiPostman,
  SiReact,
  SiNextdotjs,
  SiNestjs,
  SiNodedotjs,
  SiPrisma,
  SiTypeorm,
} from "react-icons/si";

const techStack = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Postman", icon: SiPostman },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "NestJS", icon: SiNestjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Prisma", icon: SiPrisma },
  { name: "TypeORM", icon: SiTypeorm },
];

function Technologies() {
  // Duplicate the list for smooth looping
  const items = [...techStack, ...techStack];

  return (
    <div className="overflow-hidden py-12 bg-[#efefef]">
      <div className="whitespace-nowrap scroll-left flex gap-6">
        {items.map(({ name, icon: Icon }, index) => (
          <div
            key={`${name}-${index}`}
            className="min-w-[180px] flex flex-col items-center justify-center bg-white rounded-lg shadow-md px-6 py-4 hover:scale-105 transition-transform"
          >
            <Icon className="text-black" size={40} />
            <p className="mt-2 text-sm font-semibold text-black">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;
