import React from "react";
import { projectData } from "../../../projectData";
import ProjectCard from "./ProjectCard";

function Project() {
  return (
<div
  id="projects"
  className="w-full flex flex-col items-center mt-16 text-center px-4 scroll-mt-32"
>
      <h2 className="font-montserrat text-[40px] text-custom-black font-semibold mb-2">
        What projects I have done?
      </h2>
      <p className="text-[#505050] font-inter text-[20px] mb-8">
        Explore my previous projects.
      </p>

      {/* Project Cards List */}
      <div className="flex flex-col items-center space-y-12">
        {projectData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}

        {/* Under Development Card */}
        <div className="w-full max-w-2xl bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md border border-gray-200 p-8 flex flex-col items-center justify-center hover:shadow-xl transition duration-300">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">
            New Projects in Progress
          </h3>
          <p className="text-xl text-gray-600">
            Stay tuned! More awesome projects are on the way.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
