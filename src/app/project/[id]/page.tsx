import Image from "next/image";
import { projectData } from "../../../../projectData";
export async function generateStaticParams() {
  return projectData.map((project) => ({
    id: project.id.toString(),
  }));
}
type Props = {
  params: Promise<{ id: string }>
};

export default async function ProjectDetail(  { params }: Props,) {
const { id } = await params  
  const project = projectData.find((p) => p.id === Number(id));

  if (!project) {
    return <div className="text-center mt-20 text-red-500">Project not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 text-center flex flex-col items-center">
     <div className="flex flex-col items-center mb-8">
  {/* Date and Title aligned horizontally */}
  <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
   

    <h1 className="text-5xl font-bold text-custom-black text-center">
      {project.projectName}
      <span className="text-gray-500 text-3xl"> (Full Stack)</span>
    </h1>
  </div>

  {/* Technologies centered below */}
  <div className="flex flex-wrap justify-center gap-2">
    {project.technologies.map((tech, index) => (
      <span
        key={index}
        className="px-3 py-1 text-xl bg-gray-100 text-gray-700 rounded-full whitespace-nowrap"
      >
        {tech}
      </span>
    ))}
  </div>
</div>



      {/* Description */}
   <div className="space-y-6 text-xl text-gray-800 leading-relaxed max-w-4xl text-left">
  {project.description.map((para, idx) => (
    <p key={idx}>{para}</p>
  ))}
</div>

      {/* Primary Image */}
     <Image
  src={project.imagePrimary}
  alt={project.projectName}
  width={1200}
  height={800}
  className="w-full max-w-4xl mt-6 h-auto object-cover rounded-lg shadow mb-8"
/>


      {/* Other Images */}
      <div className="flex flex-wrap justify-center gap-4">
       {project.imageUrls.map((img, idx) => (
  <Image
    key={idx}
    src={img}
    alt={`${project.projectName} screenshot ${idx + 1}`}
    width={1200}
    height={800}
    className="w-full max-w-4xl h-auto object-cover rounded-lg shadow"
/>
))}

      </div>
    </div>
  );
}
