// src/components/Education.tsx
import SectionWrapper from "./SectionWrapper";
import { educationData } from "@/data/educationData";

export default function Education() {
  return (
    <SectionWrapper id="education">
      <h2 className="text-3xl font-bold mb-12">Education</h2>

      <div className="relative border-l-2 border-gray-300 ml-6">
        {educationData.map((item, index) => (
          <div key={index} className="relative pl-10 pb-12">
            {/* Timeline dot */}
            <div className="absolute top-0 -left-3 w-6 h-6 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center text-xs font-semibold text-blue-500">
              {item.date.split(" - ")[0]}
            </div>

            {/* Vertical line */}
            {index !== educationData.length - 1 && (
              <div className="absolute left-0 top-6 w-0.5 h-full bg-gray-300" />
            )}

            {/* Content */}
            <div className="mb-1 text-sm font-medium text-gray-500">{item.date}</div>
            <h3 className="text-xl font-bold text-gray-800">{item.institution}</h3>
            <p className="text-sm font-semibold text-gray-600">{item.title}</p>
            <p className="text-sm mt-1 text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
