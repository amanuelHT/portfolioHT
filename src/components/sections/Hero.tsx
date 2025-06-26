// src/components/Hero.tsx
export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-800">
        Amanuel Tekleab
      </h1>
      <h2 className="text-xl md:text-2xl font-medium text-gray-600 mb-6">
        Software Developer | DevOps Enthusiast
      </h2>
      <div className="flex gap-4">
        <a
          href="/cv.pdf"
          target="_blank"
          className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition"
        >
          Download CV
        </a>
        <a
          href="#contact"
          className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-blue-50 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  )
}
