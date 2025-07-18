import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Remarks from "@/components/sections/Remarks";
//import ExtraProjects from "@/components/sections/ExtraProjects";

export default function Home() {
  return (
    <main className="max-w-screen-lg mx-auto px-4 sm:px-10 py-10 space-y-8">
      <About />
      <Education />
        <Projects />
      <Experience />
      <Remarks />
    </main>
  );
}
