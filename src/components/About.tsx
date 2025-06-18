// src/components/About.tsx
import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaInstagram, FaTwitter } from "react-icons/fa";

export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16 flex flex-col sm:flex-row items-center gap-10">
      {/* Profile Image */}
      <div className="w-48 h-48 relative rounded-full overflow-hidden shadow-lg">
        <Image src="/me.jpg" alt="Your Photo" fill className="object-cover" />
      </div>

      {/* Text Content */}
      <div className="text-left space-y-4 max-w-xl">
        <h1 className="text-3xl font-bold">Amanuel HT</h1>
        <h2 className="text-lg text-gray-600 font-medium">
          Believer | Software Developer
        </h2>
        <p>
          Hello! I'm Amanuel and I enjoy solving real-world problems with code. My passion for software engineering began with curiosity and grew through university and freelance projects.
        </p>
        <p>
          Today, I’m focused on building modern, user-friendly digital products using full-stack JavaScript tools and DevOps practices. I love clean UI, efficient APIs, and meaningful impact.
        </p>

        {/* Social Links */}
        <div className="flex gap-4 pt-4 text-2xl text-gray-700">
          <a href="https://linkedin.com/in/yourprofile" target="_blank"><FaLinkedin /></a>
          <a href="https://github.com/yourgithub" target="_blank"><FaGithub /></a>
          <a href="mailto:youremail@example.com"><FaEnvelope /></a>
          <a href="tel:+1234567890"><FaPhone /></a>
          <a href="https://instagram.com/yourprofile" target="_blank"><FaInstagram /></a>
          <a href="https://twitter.com/yourprofile" target="_blank"><FaTwitter /></a>
        </div>
      </div>
    </section>
  );
}
