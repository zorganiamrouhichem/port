"use client";
import React, { useEffect, useState } from "react";
import { Code, Server, Wrench } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNestjs,
  SiTypeorm,
  SiPrisma,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";

const frontend = [
  { icon: SiReact, name: "React", desc: "UI library for dynamic interfaces" },
  { icon: SiNextdotjs, name: "Next.js", desc: "React framework with SSR" },
  { icon: SiTailwindcss, name: "Tailwind", desc: "Utility-first CSS framework" },
];

const backend = [
  { icon: SiNestjs, name: "NestJS", desc: "Scalable backend framework" },
  { icon: SiTypeorm, name: "TypeORM", desc: "ORM for TypeScript & JS" },
  { icon: SiPrisma, name: "Prisma", desc: "Next-gen database toolkit" },
  { icon: SiPostgresql, name: "PostgreSQL", desc: "Advanced SQL database" },
  { icon: SiMysql, name: "MySQL", desc: "Reliable relational DBMS" },
];

const tools = [
  { icon: SiGit, name: "Git", desc: "Version control system" },
  { icon: SiGithub, name: "GitHub", desc: "Code hosting & collaboration" },
  { icon: SiPostman, name: "Postman", desc: "API testing tool" },
];


type Tech = {
  icon: React.ElementType;
  name: string;
  desc: string;
};

type SectionProps = {
  title: string;
  techs: Tech[];
};

const iconMap: Record<string, React.ElementType> = {
  Frontend: Code,
  Backend: Server,
  Tools: Wrench,
};
const Section = ({ title, techs }: SectionProps) => {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const cycleTech = () => {
      setAnimating(true);
      setPrevIndex(index);
      const nextIndex = (index + 1) % techs.length;
      setIndex(nextIndex);

      timeout = setTimeout(cycleTech, getRandomInterval());
    };

    timeout = setTimeout(cycleTech, getRandomInterval());

    return () => clearTimeout(timeout);
  }, [index, techs.length]);

  useEffect(() => {
    if (animating) {
      const animTimeout = setTimeout(() => {
        setPrevIndex(null);
        setAnimating(false);
      }, 500); // animation duration
      return () => clearTimeout(animTimeout);
    }
  }, [animating]);

  const getRandomInterval = () => {
    return Math.floor(Math.random() * 2000) + 2000; // between 2s and 4s
  };

  const CurrentIcon = techs[index].icon;
  const PrevIcon = prevIndex !== null ? techs[prevIndex].icon : null;
  const BgIcon = iconMap[title];

  return (
    <div className="bg-white rounded-xl shadow-md px-6 py-8 w-full max-w-sm flex flex-col items-center justify-center overflow-hidden relative">
      {/* Background Icon */}
      {BgIcon && (
        <BgIcon
          className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-gray-300 opacity-20 select-none pointer-events-none"
          size={120}
          aria-hidden="true"
        />
      )}

      {/* Title */}
      <h3 className="text-xl font-bold text-center mb-6 relative z-10">{title}</h3>

      {/* Animated Tech Box */}
      <div className="w-48 h-48 relative overflow-hidden border border-black rounded-md bg-[#efefef] shadow-inner px-4 z-10">
        {/* Previous Tech (slides out) */}
        {PrevIcon && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center transition-transform duration-500 transform translate-x-0 animate-slide-out">
            <PrevIcon size={36} className="text-black mb-2" />
            <p className="font-semibold text-black">{techs[prevIndex!].name}</p>
            <p className="text-sm text-gray-600 mt-1">{techs[prevIndex!].desc}</p>
          </div>
        )}

        {/* Current Tech (slides in) */}
        <div
          key={index}
          className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-transform duration-500 transform ${
            animating ? "translate-x-full animate-slide-in" : "translate-x-0"
          }`}
        >
          <CurrentIcon size={36} className="text-black mb-2" />
          <p className="font-semibold text-black">{techs[index].name}</p>
          <p className="text-sm text-gray-600 mt-1">{techs[index].desc}</p>
        </div>
      </div>
    </div>
  );
};

function Tech() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-[#efefef]">
      {/* Title + Intro */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-black mb-4">What I Use</h2>
        <p className="text-gray-800 max-w-2xl">
          Here are the tools and technologies I work with to bring ideas to life. From frontend frameworks to backend services, these are my go-to choices for building modern applications.
        </p>
      </div>

      {/* Sections: Frontend, Backend, Tools */}
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">
        <Section title="Frontend" techs={frontend} />
        <Section title="Backend" techs={backend} />
        <Section title="Tools" techs={tools} />
      </div>
    </div>
  );
}

export default Tech;
