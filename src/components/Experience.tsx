// src/components/Experience.tsx
'use client';
import { experienceData } from "@/data/ExperienceData";
import Image from "next/image";

export default function Experience() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-12">Experience</h2>
      <div className="relative border-l-2 border-dotted border-gray-300 ml-6">
        {experienceData.map((item, index) => (
          <div key={index} className="relative pl-10 pb-12">
            <div className="absolute -left-[94px] top-0 text-sm bg-gray-100 border border-gray-300 rounded-full px-3 py-0.5 font-semibold shadow-sm">
              {item.date}
            </div>
            <Image
              src={item.logo}
              alt={`${item.company} logo`}
              width={32}
              height={32}
              className="mb-2"
            />
           <h3 className="text-lg font-semibold">{item.title}</h3>
<p className="text-sm font-medium text-gray-700">{item.company}</p>
<p className="text-sm text-gray-600 mt-1 leading-snug">{item.description}</p>
            <ul className="list-disc list-inside mt-2 text-sm text-gray-800 space-y-1">
              {item.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
