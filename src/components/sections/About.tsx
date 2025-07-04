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
        <div className="w-40 h-60 relative rounded-xl overflow-hidden  ">
          <Image
            src="/assets/am1.png"
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
              Amanuel HT
            </h1>
            <p className="text-sm  font-gray text-gray-500 dark:text-gray-400 tracking-tight">
             Creative <span className="mx-1">|</span>  Developer
            </p>
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Hello! I&apos;m Amanuel, and I enjoy solving real-world problems with code.
            My passion for software engineering
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-5 pt-12 text-xl text-gray-800 dark:text-gray-300">
            <a
              href="https://linkedin.com/in/amanuel-hayele-19b6882a1"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/amanuelHT"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-gray-800 dark:hover:text-white transition"
            >
              <FaGithub />
            </a>
            
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
