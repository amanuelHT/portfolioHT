'use client';

import { experienceData } from '@/data/ExperienceData';
import Image from 'next/image';
import SectionWrapper from './SectionWrapper';
import useScrollFadeIn from '@/hooks/useScrollFadeIn';

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <h2 className="text-3xl font-bold mb-12">Experience</h2>

      <div className="relative border-l-2 border-dotted border-gray-300 dark:border-gray-700 ml-6">
        {experienceData.map((item, index) => {
          const fadeIn = useScrollFadeIn(index * 0.2); // stagger delay

          return (
            <div
              key={index}
              {...fadeIn}
              className="relative pl-10 pb-12 transition-all"
            >
              {/* Date */}
              <div className="absolute -left-[94px] top-0 text-sm bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-full px-3 py-0.5 font-semibold shadow-sm">
                {item.date}
              </div>

              {/* Logo */}
              <Image
                src={item.logo}
                alt={`${item.company} logo`}
                width={32}
                height={32}
                className="mb-2"
              />

              {/* Title & Info */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {item.company}
              </p>

              {item.description && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-snug">
                  {item.description}
                </p>
              )}

              {/* Highlights */}
              <ul className="list-disc list-inside mt-2 text-sm text-gray-800 dark:text-gray-200 space-y-1">
                {item.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
