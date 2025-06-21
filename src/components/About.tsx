'use client';

import SectionWrapper from './SectionWrapper';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import useScrollFadeIn from '@/hooks/useScrollFadeIn';

export default function About() {
  const fadeIn = useScrollFadeIn();

  return (
    <SectionWrapper id="about">
      <div
        {...fadeIn}
        className="flex flex-col sm:flex-row items-center gap-10"
      >
        {/* Profile Image */}
        <div className="w-48 h-48 relative rounded-full overflow-hidden shadow-lg">
          <Image
            src="/me.jpg"
            alt="Amanuel HT"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="text-left space-y-4 max-w-xl">
          <h1 className="text-3xl font-bold">Amanuel HT</h1>
          <h2 className="text-blue-600 font-medium">
            Believer | Software Developer
          </h2>
          <p>
            Hello! I'm Amanuel and I enjoy solving real-world problems with code.
            My passion for software engineering began with curiosity and grew
            through university and freelance projects.
          </p>
          <p>
            Today, I’m focused on building modern, user-friendly digital products
            using full-stack JavaScript tools and DevOps practices. I love clean UI,
            efficient APIs, and meaningful impact.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 pt-4 text-xl text-gray-600 dark:text-gray-300">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-gray-800 dark:hover:text-white transition"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:youremail@example.com"
              aria-label="Email"
              className="hover:text-rose-500 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
