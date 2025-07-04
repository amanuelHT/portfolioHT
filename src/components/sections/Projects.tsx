'use client';

import Image from 'next/image';
import SectionWrapper from '../common/SectionWrapper';
import { projectsData } from '@/data/projectsData';
import useScrollFadeIn from '@/hooks/useScrollFadeIn';
import { FaCode } from 'react-icons/fa';

type ProjectItemProps = {
  project: {
    title: string;
    description: string;
    github: string;
    logo: string;
    tech: string[];
  };
  delay: number;
};

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <h2 className="text-3xl font-bold mb-12">Projects</h2>

      <div className="relative ml-6 border-l-2 pt-12 border-dotted border-gray-300 dark:border-gray-600 space-y-10">
        {projectsData.map((project, idx) => (
          <ProjectItem key={idx} project={project} delay={idx * 0.2} />
        ))}
      </div>
    </SectionWrapper>
  );
}

function ProjectItem({ project, delay }: ProjectItemProps) {
  const fadeIn = useScrollFadeIn(delay);

  return (
    <div
      {...fadeIn}
      className="relative flex flex-col md:flex-row items-start gap-4"
    >
      {/* Project Info Card (right) */}
      <div className="ml-8 w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap items-center gap-3 mt-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-1.5 border rounded-full text-sm text-gray-800 dark:text-white border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <FaCode /> Source Code
          </a>

          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Timeline Logo or Title */}
      <div className="flex-shrink-0 w-full md:w-[250px] h-[250px] flex items-center justify-center border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-md bg-white dark:bg-zinc-900 text-sm text-center px-2">
        {project.logo ? (
          <Image
            src={project.logo}
            alt={`${project.title} logo`}
            width={500}
            height={250}
            className="object-contain"
          />
        ) : (
          <span className="text-xs font-medium text-gray-800 dark:text-white leading-snug">
            {project.title}
          </span>
        )}
      </div>
    </div>
  );
}
