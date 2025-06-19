import { extraProjectsData } from "@/data/extraProjectsData";

export default function ExtraProjects() {
  return (
     <section id="education" className="education-timeline px-6 py-12 max-w-4xl mx-auto">
      <h2 className="text-1xl font-bold mb-4">Extra Projects</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 border p-4 rounded-lg bg-white shadow-sm">
        {extraProjectsData.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border px-4 py-2 rounded text-sm text-center hover:bg-gray-50 transition"
          >
            {project.title}
          </a>
        ))}
      </div>

      <div className="mt-4 text-sm text-blue-600 underline underline-offset-2 pl-3 border-l-2 border-dashed border-gray-400">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          More on GitHub ↗
        </a>
      </div>
    </section>
  );
}
