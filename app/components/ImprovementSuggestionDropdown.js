// app/components/ImprovementSuggestionDropdown.js

"use client";

import React from "react";

const ImprovementSuggestionDropdown = ({ value, onChange, darkMode }) => {
  const suggestions = [
    "continuar participando activamente en clase",
    "seguir trabajando en sus habilidades de comunicación",
    "mejorar su gestión del tiempo para las tareas",
    "prestar más atención a los detalles",
    "fortalecer sus habilidades de pensamiento crítico",
    "colaborar más con sus compañeros",
    "buscar oportunidades para liderar proyectos",
    "reforzar su comprensión de los conceptos clave",
    "participar en actividades extracurriculares",
    "desarrollar una rutina de estudio efectiva",
    "pedir ayuda cuando lo necesite",
    "trabajar en su confianza al presentar ideas",
    "tomar la iniciativa en discusiones de clase",
    "reforzar su vocabulario",
    "practicar la escucha activa",
    "expresar sus ideas con claridad",
  ];

  return (
    <div className="mb-4">
      <label htmlFor="improvementSuggestion" className="font-bold mr-2">
        Sugerencias de Mejora:
      </label>
      <select
        className={`border rounded p-2 w-full transition duration-300 ease-in-out focus:outline-none ${
          darkMode
            ? "bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400"
            : "bg-white border-gray-300 text-black placeholder-gray-500"
        } animate-dropdown`}
        id="improvementSuggestion"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Seleccione Sugerencia</option>
        {suggestions.map((suggestion, index) => (
          <option key={index} value={suggestion}>
            {suggestion}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ImprovementSuggestionDropdown;
