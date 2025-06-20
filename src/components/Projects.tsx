// src/components/Projects.tsx
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import { projectsData } from "@/data/projectsData";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <h2 className="text-3xl font-bold mb-12">Projects</h2>

      <div className="space-y-16">
        {projectsData.map((project, idx) => (
          <div key={idx} className="grid md:grid-cols-2 gap-8 items-start">
            {/* Project Text */}
            <div>
              <h3 className="text-xl font-semibold">
                {project.icon && <span className="mr-2">{project.icon}</span>}
                {project.title}
              </h3>

              <p className="text-blue-600 font-medium mt-1">
                <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                {" • "}
                {project.tech}
              </p>

              <p className="mt-2 text-gray-700 text-sm">{project.description}</p>
            </div>

            {/* Project Image */}
            <div className="w-full h-auto rounded overflow-hidden shadow">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={340}
                className="rounded object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
