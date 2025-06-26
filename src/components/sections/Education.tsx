'use client';

import SectionWrapper from '../common/SectionWrapper';
import { educationData } from '@/data/educationData';
import useScrollFadeIn from '@/hooks/useScrollFadeIn';
import Image from 'next/image';

export default function Education() {
  return (
    <SectionWrapper id="education">
      <h2 className="text-3xl font-bold mb-12 ">Education</h2>

      <div className="relative border-l-2 border-dotted border-gray-300 pt-12 dark:border-gray-700 ml-6 ">
        {educationData.map((item, index) => {
          const fadeIn = useScrollFadeIn(index * 0.2);

          return (
            <div
              key={index}
              {...fadeIn}
              className="relative pl-10 pb-12 transition-all duration-700 ease-out"
            >
              {/* Date Badge */}
              <div className="absolute -left-[64px] top-0 text-sm bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-full px-3 py-0.5 font-semibold shadow-md">
                {item.date}
              </div>

              {/* Card-style block */}
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-5 space-y-1">
                <div className="flex items-center gap-3">
                  {/* Logo */}
                  {item.logo && (
                    <Image
                      src={item.logo}
                      alt={`${item.institution} logo`}
                      width={32}
                      height={32}
                      className="rounded-md"
                    />
                  )}

                  {/* Title & School */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.institution}
                    </h3>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {item.title}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-snug">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
