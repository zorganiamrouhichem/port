"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type ProjectCardProps = {
  id: number;
  projectName: string;
  shortDescription: string; // 👈 New
  technologies: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  imagePrimary: string;
};


const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  imagePrimary,
  projectName,
    shortDescription,
  
  technologies,
  githubUrl,
  liveDemoUrl,
  
}) => {
  const router = useRouter();

  // Navigate to project detail page on card click
  const handleCardClick = () => {
    router.push(`/project/${id}`);
  };

  return (
   <div
  onClick={handleCardClick}
  className="cursor-pointer w-full sm:max-w-md md:max-w-xl bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-md border border-gray-200 hover:shadow-xl transition duration-300"
>
  {/* Project Image */}
  <Image
    src={imagePrimary}
    alt={projectName}
    width={800}
    height={400}
    className="w-full h-48 sm:h-56 md:h-64 object-cover"
  />

  {/* Card Content */}
  <div className="relative px-4 sm:px-6 pt-8 pb-6">
    {/* Floating Name + Icons */}
    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-3 bg-white rounded-full shadow-md px-4 py-2 whitespace-nowrap max-w-full overflow-x-auto scrollbar-hide">
      <span className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
        {projectName}
      </span>

      {/* Icons */}
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black"
          onClick={(e) => e.stopPropagation()}
        >
          <FaGithub size={24} />
        </a>
      )}
      {liveDemoUrl && (
        <a
          href={liveDemoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600"
          onClick={(e) => e.stopPropagation()}
        >
          <FaExternalLinkAlt size={20} />
        </a>
      )}
    </div>

    <p className="mt-8 text-gray-700 text-base sm:text-lg leading-relaxed">
      {shortDescription}
    </p>

    {/* Technologies */}
    <div className="mt-4 flex flex-wrap justify-center gap-2">
      {technologies.map((tech, index) => (
        <span
          key={index}
          className="px-4 py-1 text-sm sm:text-base bg-gray-100 text-gray-700 rounded-full whitespace-nowrap"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
</div>

  );
};

export default ProjectCard;
