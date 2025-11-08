import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Backend Developer Intern",
      company: "Synpulse",
      duration: "Aug 2024 – Oct 2024",
      description:
        "Worked on backend development using Java and Spring Boot to build scalable APIs and microservices. Integrated RESTful services, optimized database operations, and contributed to real-world client solutions in an agile environment.",
      tech: ["Java", "Spring Boot", "REST API", "Microservices", "MySQL"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-950 text-center">
      <h2 className="text-4xl font-bold mb-10 text-indigo-400">Experience</h2>

      <div className="max-w-4xl mx-auto px-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-800 hover:border-indigo-500/40 transition"
          >
            <h3 className="text-2xl font-semibold text-white mb-1">{exp.role}</h3>
            <p className="text-indigo-400 mb-2">
              {exp.company} • <span className="text-gray-400">{exp.duration}</span>
            </p>
            <p className="text-gray-400 text-sm mb-3">{exp.description}</p>

            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {exp.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-indigo-600/30 text-indigo-300 px-3 py-1 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
