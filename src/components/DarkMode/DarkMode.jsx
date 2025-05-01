import { Moon, Sun } from "lucide-react";
import React, { useState } from "react";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    //document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 bg-gray-600 rounded-full focus:outline-none"
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <Moon className="h-6 w-6 fill-white text-white" />
      ) : (
        <Sun className="h-6 w-6 fill-yellow-500 text-yellow-500" />
      )}
    </button>
  );
};

export default DarkMode;