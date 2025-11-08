import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    {
      category: "Backend Development",
      tech: ["Java", "Spring Boot", "Spring Security", "REST API", "MySQL", "MongoDB"],
    },
    {
      category: "Programming & Tools",
      tech: ["Python", "C++", "Git", "Postman", "Maven", "VS Code", "IntelliJ IDEA"],
    },
    {
      category: "AI & Machine Learning",
      tech: ["Flask", "LangChain", "OpenAI API", "Pandas", "Scikit-learn"],
    },
    {
      category: "Frontend & Cloud",
      tech: ["React", "Tailwind CSS", "HTML", "CSS", "Vite", "AWS Basics"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 text-center">
      <h2 className="text-4xl font-bold mb-10 text-indigo-400">Skills</h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-indigo-500/40 transition"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {skillGroup.tech.map((tech, i) => (
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
