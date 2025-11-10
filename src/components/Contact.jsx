import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 text-center bg-gray-900">
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
        Let’s Connect
      </h2>

      <p className="text-gray-400 max-w-2xl mx-auto mb-10">
        I'm always open to connecting about new opportunities, backend projects, or collaborations in{" "}
        <span className="text-indigo-400 font-semibold">Java Spring Boot</span> and{" "}
        <span className="text-indigo-400 font-semibold">AI-driven systems</span>.
        Reach out via email or connect with me on LinkedIn and GitHub!
      </p>

      {/* ==== Social Buttons ==== */}
      <div className="flex justify-center gap-6 flex-wrap">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/goutam-heer-software-dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 bg-indigo-600 rounded-lg text-white hover:bg-indigo-700 transition"
        >
          <FaLinkedin className="text-xl" />
          LinkedIn
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/heergoutam"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 border border-indigo-600 text-indigo-400 rounded-lg hover:bg-indigo-600 hover:text-white transition"
        >
          <FaGithub className="text-xl" />
          GitHub
        </a>

        {/* Email */}
        <a
          href="mailto:goutamheer1702@gmail.com"
          className="flex items-center gap-2 px-5 py-3 bg-gray-800 rounded-lg text-gray-300 hover:bg-indigo-700 hover:text-white transition"
        >
          <FaEnvelope className="text-xl" />
          Email
        </a>
      </div>
    </section>
  );
}
