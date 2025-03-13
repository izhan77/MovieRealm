import { Moon, Sun } from "lucide-react";
import React, { useState } from "react";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex items-center justify-center">
      <input type="checkbox" id="darkmode-toggle"/>
      <label>
        
      </label>
    </div>
  );
};

export default DarkMode;
