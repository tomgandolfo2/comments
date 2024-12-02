"use client";

import React, { useState } from "react";
import CommentGenerator from "./components/CommentGenerator";
import EndOfYearComment from "./components/EndOfYearComment";

const Page = () => {
  const [activeTab, setActiveTab] = useState("juicios");
  const [darkMode, setDarkMode] = useState(false); // Dark mode state

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ease-in-out ${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-blue-100 text-black"
      }`}
    >
      {/* Tabs Navigation */}
      <div
        className={`flex justify-center space-x-4 p-4 shadow ${
          darkMode ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-black"
        }`}
      >
        <button
          onClick={() => setActiveTab("juicios")}
          className={`px-4 py-2 rounded ${
            activeTab === "juicios"
              ? darkMode
                ? "bg-blue-500 text-white"
                : "bg-blue-600 text-white"
              : darkMode
              ? "bg-gray-700 text-blue-300"
              : "bg-white text-blue-600"
          }`}
        >
          Juicios
        </button>
        <button
          onClick={() => setActiveTab("endOfYear")}
          className={`px-4 py-2 rounded ${
            activeTab === "endOfYear"
              ? darkMode
                ? "bg-blue-500 text-white"
                : "bg-blue-600 text-white"
              : darkMode
              ? "bg-gray-700 text-blue-300"
              : "bg-white text-blue-600"
          }`}
        >
          Comentarios de Fin de Año
        </button>
      </div>

      {/* Conditional Rendering */}
      <div
        className={`p-8 ${
          darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-black"
        } rounded-lg shadow-lg max-w-6xl mx-auto`}
      >
        {activeTab === "juicios" && (
          <CommentGenerator darkMode={darkMode} setDarkMode={setDarkMode} />
        )}
        {activeTab === "endOfYear" && (
          <EndOfYearComment darkMode={darkMode} setDarkMode={setDarkMode} />
        )}
      </div>
    </div>
  );
};

export default Page;
