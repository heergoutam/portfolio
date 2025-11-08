import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-700 py-6 text-center text-gray-400 text-sm">
      <p>© {new Date().getFullYear()} Goutam Heer — Built with ❤️ using React & Tailwind CSS</p>
    </footer>
  );
}
