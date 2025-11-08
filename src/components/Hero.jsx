import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";
 // ✅ make sure this path is correct

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-20 pb-16 flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left"
    >
      {/* ==== Left Side (Profile Image) ==== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-shrink-0"
      >
        <img
          src={profileImg}
          alt="Goutam Heer"
          className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full shadow-lg border-4 border-indigo-600"
        />
      </motion.div>

      {/* ==== Right Side (Text + Buttons) ==== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="max-w-xl"
      >
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
          Goutam Heer
        </h1>

        <p className="text-lg mb-4 text-gray-300">
          Software Developer • Java Backend • AI Enthusiast
        </p>

        <p className="text-gray-400 leading-relaxed mb-6">
          Passionate backend developer experienced in building scalable systems
          using <span className="text-indigo-400 font-semibold">Java Spring Boot</span>, 
          <span className="text-indigo-400 font-semibold"> REST APIs</span>, and 
          <span className="text-indigo-400 font-semibold"> microservices</span>. 
          I also explore AI-driven projects and cloud integration for modern
          business solutions.
        </p>

        <div className="flex justify-center md:justify-start gap-4">
          <a
            href="/Goutam_Heer_Resume.pdf"
            className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            download
          >
            View Resume
          </a>
          <a
            href="#contact"
            className="px-5 py-2 border border-indigo-600 text-indigo-400 rounded-md hover:bg-indigo-600 hover:text-white transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
