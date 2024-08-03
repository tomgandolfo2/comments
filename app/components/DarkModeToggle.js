// app/components/DarkModeToggle.js

"use client";

import React from "react";

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="mb-4 text-center">
      <button
        onClick={toggleDarkMode}
        className={`px-4 py-2 rounded ${
          darkMode
            ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
            : "bg-gray-300 text-black hover:bg-gray-400"
        } transition duration-200 transform hover:scale-105`}
      >
        {darkMode ? "Modo Claro" : "Modo Oscuro"}
      </button>
    </div>
  );
};

export default DarkModeToggle;
