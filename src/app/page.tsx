import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Remarks from "@/components/Remarks";

export default function Home() {
  return (
    <main className="max-w-screen-lg mx-auto px-4 sm:px-8 py-10 space-y-8">
      <About />
      <Education />
      <Projects />
      <Experience />
      <Remarks />
    </main>
  );
}
