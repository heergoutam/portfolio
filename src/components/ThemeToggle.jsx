import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
      title="Toggle theme"
    >
      {dark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-300" />}
    </button>
  );
}
