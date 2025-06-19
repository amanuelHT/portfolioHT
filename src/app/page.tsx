import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import ExtraProjects from "@/components/ExtraProjects";
import Remarks from "@/components/Remarks";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* <Hero /> */}
      <About />
      <Education />
      
      <Projects /> 
      
      <Experience />
       <Remarks />
       {/* <ExtraProjects />  */}
    </main>
  );
}
