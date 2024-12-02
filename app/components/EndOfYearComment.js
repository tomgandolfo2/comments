"use client";

import React, { useState, useEffect } from "react";
import KeyStrengthsDropdown from "./KeyStrengthsDropdown";
import AreaForImprovementDropdown from "./AreaForImprovementDropdown";
import FutureGoalsDropdown from "./FutureGoalsDropdown";
import GradeDropdown from "./GradeDropdown";
import DarkModeToggle from "./DarkModeToggle";
import ShareButtons from "./ShareButtons";

const EndOfYearComment = ({ darkMode, setDarkMode }) => {
  const [name, setName] = useState("");
  const [keyStrengths, setKeyStrengths] = useState("");
  const [areaForImprovement, setAreaForImprovement] = useState("");
  const [futureFocus, setFutureFocus] = useState("");
  const [grade, setGrade] = useState("");
  const [comment, setComment] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  const pageTitle = "Comentarios de Fin de Año - Generador";
  const pageUrl = "https://comments-navy.vercel.app";

  const getPerformanceDescription = (grade) => {
    if (grade >= 9) return "excelente desempeño";
    if (grade >= 7) return "desempeño satisfactorio";
    if (grade >= 5) return "desempeño aceptable";
    return "dificultades para alcanzar los objetivos";
  };

  const getRecognitionVerb = (grade) => {
    if (grade >= 9) return "destaco";
    if (grade >= 7) return "valoro";
    if (grade >= 5) return "reconozco";
    return "observo";
  };

  useEffect(() => {
    let generatedComment = "";

    if (name && grade) {
      const performance = getPerformanceDescription(Number(grade));
      generatedComment += `${name} ha aprobado el curso con un ${performance}. `;
    }

    if (keyStrengths && grade) {
      const recognitionVerb = getRecognitionVerb(Number(grade));
      generatedComment += `Además, ${recognitionVerb} su ${keyStrengths.toLowerCase()}. `;
    }

    if (areaForImprovement) {
      generatedComment += `Un área a mejorar es ${areaForImprovement}. `;
    }

    if (futureFocus) {
      generatedComment += `El próximo año, se debería enfocar en ${futureFocus}. `;
    }

    setComment(generatedComment);

    // Trigger the animation when comment changes
    setIsUpdating(true);
    const timer = setTimeout(() => setIsUpdating(false), 500); // Animation duration
    return () => clearTimeout(timer);
  }, [name, grade, keyStrengths, areaForImprovement, futureFocus]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(comment);
    alert("Comentario copiado al portapapeles");
  };

  return (
    <div
      className={`min-h-screen flex flex-col justify-between ${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-blue-100 text-black"
      } transition duration-500 ease-in-out`}
    >
      <div
        className={`p-8 rounded-lg shadow-lg w-full max-w-4xl mx-auto flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 ${
          darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-black"
        }`}
      >
        <div className="w-full md:w-1/2 space-y-4 animate-fadeIn">
          <h1 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-300">
            Generador de Comentarios de Fin de Año
          </h1>
          <DarkModeToggle darkMode={darkMode} toggleDarkMode={setDarkMode} />

          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="font-bold mr-2">
              Nombre del Estudiante:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ingrese el nombre del estudiante"
              className={`border rounded p-2 w-full transition duration-300 ease-in-out focus:outline-none ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400"
                  : "bg-white border-gray-300 text-black placeholder-gray-500"
              }`}
            />
          </div>

          {/* Dropdowns */}
          <GradeDropdown
            value={grade}
            onChange={setGrade}
            darkMode={darkMode}
          />
          <KeyStrengthsDropdown
            setKeyStrengths={setKeyStrengths}
            darkMode={darkMode}
          />
          <AreaForImprovementDropdown
            setAreaForImprovement={setAreaForImprovement}
            darkMode={darkMode}
          />
          <FutureGoalsDropdown
            setFutureFocus={setFutureFocus}
            darkMode={darkMode}
          />
        </div>

        {/* Right Column: Comment Display */}
        <div className="w-full md:w-1/2 space-y-4 animate-fadeIn">
          <div
            className={`p-8 rounded-lg shadow-lg transition-colors duration-500 ease-in-out border-2 ${
              isUpdating
                ? "border-blue-500 animate-pulse"
                : darkMode
                ? "border-gray-700"
                : "border-gray-300"
            } ${
              darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-50 text-black"
            }`}
          >
            <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-300">
              Comentario Generado:
            </h2>
            <p className="mt-4 whitespace-pre-wrap text-lg">{comment || ""}</p>
          </div>
          <button
            onClick={copyToClipboard}
            className={`w-full p-2 rounded text-white font-bold transition duration-300 ${
              darkMode
                ? "bg-blue-500 hover:bg-blue-400"
                : "bg-blue-600 hover:bg-blue-500"
            }`}
          >
            Copiar Comentario
          </button>
        </div>
      </div>

      {/* Share Buttons Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-center text-blue-600 dark:text-blue-300 mb-4">
          ¡Comparte esta herramienta!
        </h2>
        <div className="flex justify-center mb-8">
          <ShareButtons url={pageUrl} title={pageTitle} />
        </div>
      </div>
    </div>
  );
};

export default EndOfYearComment;
