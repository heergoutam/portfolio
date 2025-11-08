import React from "react";
import ThemeToggle from "./ThemeToggle"; // 👈 import the toggle component

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur z-30 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Left side — name / logo */}
        <div className="text-xl font-semibold text-blue-600 dark:text-blue-400">
          Goutam Heer
        </div>

        {/* Right side — nav links + theme toggle */}
        <div className="flex items-center gap-4">
          <nav className="space-x-6 text-sm">
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#skills" className="hover:underline">
              Skills
            </a>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
            <a href="#experience" className="hover:underline">
              Experience
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </nav>
          {/* 👇 Add the theme toggle button on the far right */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
