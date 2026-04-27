'use client';

import SectionWrapper from '../common/SectionWrapper';
import Image from 'next/image';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import useScrollFadeIn from '@/hooks/useScrollFadeIn';


export default function About() {
  const fadeIn = useScrollFadeIn();

  return (
    <SectionWrapper id="about">
      <div
        {...fadeIn}
        className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-10 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-900 shadow-md"
      >
        {/* Profile Image */}
        <div className="w-30 h-50 relative rounded-xl overflow-hidden  ">
          <Image
            src="/logos/A.png"
            alt="Amanuel HT"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left space-y-4 max-w-2xl">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Amanuel Hayele
            </h1>
           <p className="text-sm text-gray-500 dark:text-gray-400 tracking-tight">
  Software Developer <span className="mx-1">|</span> DevOps <span className="mx-1">|</span> Application Operations
</p>
          </div>
<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
  My interest in technology started when I worked at an internet café, where I became curious about how computers work. Since then, I’ve developed that curiosity into practical experience in software development and application operations.<br />
  I have experience working on projects using React Native, .NET, Firebase, and DevOps tools like Docker, Kubernetes, and CI/CD pipelines.
</p>


          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-5 pt-1 text-3xl text-gray-800 dark:text-gray-300">
           
            <a
              href="https://github.com/amanuelHT"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-gray-800 dark:hover:text-white transition"
            >
              <FaGithub />
            </a>
             <a
              href="https://www.linkedin.com/in/amanuelht"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>

          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
