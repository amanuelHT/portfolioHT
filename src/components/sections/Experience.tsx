'use client';

import { experienceData } from '@/data/ExperienceData';
import Image from 'next/image';
import SectionWrapper from '../common/SectionWrapper';
import useScrollFadeIn from '@/hooks/useScrollFadeIn';

type ExperienceItemProps = {
  item: {
    date: string;
    logo: string;
    title: string;
    company: string[];
    description?: string;
    highlights: string[];
  };
  delay: number;
};

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <h2 className="text-3xl font-bold mb-12">Experience</h2>

      <div className="relative border-l-2 pt-12 border-dotted border-gray-300 dark:border-gray-700 ml-6">
        {experienceData.map((item, index) => (
          <ExperienceItem key={index} item={item} delay={index * 0.2} />
        ))}
      </div>
    </SectionWrapper>
  );
}

function ExperienceItem({ item, delay }: ExperienceItemProps) {
  const fadeIn = useScrollFadeIn(delay);

  return (
    <div
      {...fadeIn}
      className="relative pl-10 pb-12 transition-all duration-700 ease-out"
    >
      {/* Date */}
      <div className="absolute -left-[54px] top-0 text-sm bg-gray-20 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-full px-1 py-0.1 font-semibold shadow-md">
        {item.date}
      </div>

      {/* Card */}
      <div className="flex items-center gap-4 mb-2">
        <Image
          src={item.logo}
          alt={`${item.company[0]} logo`}
          width={32}
          height={32}
          className="flex-shrink-0"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {item.title}
          </h3>
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {item.company.map((line, i) => (
              <span key={i}>{line}<br/></span>
            ))}
          </p>
        </div>
      </div>

      {item.description && (
        <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
          {item.description}
        </p>
      )}

      <ul className="list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1">
        {item.highlights.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
