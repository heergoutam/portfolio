import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white scroll-smooth">
      {/* ===== Navbar ===== */}
      <Navbar />

      {/* ===== Hero Section ===== */}
      <Hero />

      {/* ===== Education Section ===== */}
      <Education />

      {/* ===== Skills Section ===== */}
      <Skills />

      {/* ===== Projects Section ===== */}
      <Projects />

      {/* ===== Experience Section ===== */}
      <Experience />

      {/* ===== Contact Section ===== */}
      <Contact />

      {/* ===== Scroll to Top Button ===== */}
      <ScrollToTop />

      {/* ===== Footer ===== */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} Goutam Heer. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
