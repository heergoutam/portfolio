import React from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Syn-Info",
      description:
        "A Spring Boot–based web platform that automates student and course information management with REST APIs, authentication, and MySQL integration.",
      tech: ["Java", "Spring Boot", "MySQL", "REST API"],
      link: "https://github.com/heergoutam/Syn-Info",
    },
    {
      title: "Emo Musify",
      description:
        "An AI-powered music recommendation system that detects user emotion through facial expressions and suggests personalized playlists accordingly.",
      tech: ["Python", "Flask", "OpenCV", "Machine Learning"],
      link: "https://github.com/heergoutam/Emo-Musify",
    },
    {
      title: "Fastor CRM",
      description:
        "A backend CRM platform built using Node.js, Express.js, and MongoDB Atlas, featuring JWT authentication, lead management, and secure client tracking APIs.",
      tech: ["Node.js", "Express.js", "MongoDB Atlas", "Mongoose", "JWT"],
      link: "https://github.com/heergoutam/fastor-crm",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-center">
      <h2 className="text-4xl font-bold mb-10 text-indigo-400">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-indigo-500/30 transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-3 text-white">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4">{project.description}</p>

            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-indigo-600/30 text-indigo-300 px-3 py-1 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300"
            >
              <FaGithub /> View on GitHub
            </a>
          </motion.div>
        ))}
      </div>

      <div className="mt-12">
        <a
          href="https://github.com/heergoutam"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-indigo-400 rounded-lg text-indigo-300 hover:bg-indigo-600 hover:text-white transition"
        >
          View More Projects →
        </a>
      </div>
    </section>
  );
}
