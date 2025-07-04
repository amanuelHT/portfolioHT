'use client';
import { FaExternalLinkAlt } from 'react-icons/fa';
import SectionWrapper from '../common/SectionWrapper';
import { educationData } from '@/data/educationData';
import useScrollFadeIn from '@/hooks/useScrollFadeIn';
import Image from 'next/image';

type EducationItemProps = {
  item: {
    date: string;
    logo: string;
    institution: string;
    title: string;
    description: string;
    link: string;
  };
  delay: number;
};

export default function Education() {
  return (
    <SectionWrapper id="education">
      <h2 className="text-3xl font-bold mb-12">Education</h2>

      <div className="relative border-l-2 border-dotted border-gray-300 pt-12 dark:border-gray-700 ml-6">
        {educationData.map((item, index) => (
          <EducationItem key={index} item={item} delay={index * 0.2} />
        ))}
      </div>
    </SectionWrapper>
  );
}

function EducationItem({ item, delay }: EducationItemProps) {
  const fadeIn = useScrollFadeIn(delay);

  return (
    <div
      {...fadeIn}
      className="relative pl-10 pb-12 transition-all duration-700 ease-out"
    >
      {/* Date Badge */}
      <div className="absolute -left-[54px] top-0 text-sm bg-gray-20 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-full px-1 py-0.1 font-semibold shadow-md">
        {item.date}
      </div>

      {/* Card-style block */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4 space-y-1">
        <div className="flex items-center gap-8">
          {item.logo && (
            <Image
              src={item.logo}
              alt={`${item.institution} logo`}
              width={150}
              height={50}
              className="rounded-md"
            />
          )}

          <div>
            <h3 className="text-base font-medium text-gray-800 dark:text-gray-200 tracking-normal">
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

        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 mt-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
        >
          View Program Curriculum <FaExternalLinkAlt className="inline-block" size={12} />
        </a>
      </div>
    </div>
  );
}
