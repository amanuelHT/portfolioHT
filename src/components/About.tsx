import SectionWrapper from "./SectionWrapper";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="flex flex-col sm:flex-row items-center gap-10">
        {/* Profile Image */}
        <div className="w-48 h-48 relative rounded-full overflow-hidden shadow-lg">
          <Image src="/me.jpg" alt="Amanuel HT" fill className="object-cover" />
        </div>

        {/* Text Content */}
        <div className="text-left space-y-4 max-w-xl">
          <h1 className="text-3xl font-bold">Amanuel HT</h1>
          <h2 className="text-blue-600 font-medium mt-1">Believer | Software Developer</h2>
          <p>
            Hello! I'm Amanuel and I enjoy solving real-world problems with code...
          </p>
          <p>
            Today, I’m focused on building modern, user-friendly digital products...
          </p>

          {/* Social Links */}
          <div className="flex gap-4 pt-4 text-2xl text-gray-700">
            <a href="https://linkedin.com/in/yourprofile" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com/yourgithub" target="_blank"><FaGithub /></a>
            <a href="mailto:youremail@example.com"><FaEnvelope /></a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
