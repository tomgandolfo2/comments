// app/components/RecognitionDropdown.js

"use client";

import React from "react";

const RecognitionDropdown = ({ value, onChange, darkMode }) => {
  const recognitionOptions = [
    "su trabajo en clase",
    "su actitud positiva",
    "su disposición al aprendizaje",
    "su esfuerzo al realizar tareas",
    "su compañerismo",
    "su participación activa",
    "su liderazgo en proyectos",
    "su creatividad en tareas",
    "su responsabilidad",
    "su puntualidad",
    "su habilidad para resolver problemas",
    "su capacidad para trabajar en equipo",
  ];

  return (
    <div className="mb-4">
      <label htmlFor="recognition" className="font-bold mr-2">
        Reconocimiento (opcional):
      </label>
      <select
        className={`border rounded p-2 w-full transition duration-300 ease-in-out focus:outline-none ${
          darkMode
            ? "bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400"
            : "bg-white border-gray-300 text-black placeholder-gray-500"
        } animate-dropdown`}
        id="recognition"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Seleccione Reconocimiento</option>
        {recognitionOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RecognitionDropdown;
