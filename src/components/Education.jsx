import React from "react";
import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      degree: "B.E in Information Technology",
      school: "Pune Vidyarthi Griha’s College of Engineering and Technology, Pune",
      year: "2020 – 2024",
      grade: "CGPA: 7.0",
    },
    {
      degree: "Higher Secondary Education",
      school: "Govt. Boys Hr. Sec. School, Jammu",
      year: "2020",
      grade: "Percentage: 70%",
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-950 text-center">
      <h2 className="text-4xl font-bold mb-10 text-indigo-400">Education</h2>

      <div className="max-w-4xl mx-auto px-6 space-y-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-indigo-500/40 transition"
          >
            <h3 className="text-2xl font-semibold text-white mb-1">{edu.degree}</h3>
            <p className="text-indigo-400 mb-1">{edu.school}</p>
            <p className="text-gray-400">{edu.year}</p>
            <p className="text-gray-400 text-sm mt-2">{edu.grade}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
