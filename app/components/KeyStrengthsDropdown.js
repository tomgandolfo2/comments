"use client";

import React from "react";

const KeyStrengthsDropdown = ({ setKeyStrengths, darkMode }) => {
  const strengths = [
    "liderazgo en proyectos grupales",
    "pensamiento creativo para la resolución de problemas",
    "habilidades de comunicación efectiva",
    "compromiso constante con el aprendizaje",
    "colaboración destacada con sus compañeros",
    "dedicación y esfuerzo en tareas desafiantes",
    "participación activa en debates y discusiones",
    "curiosidad por explorar nuevos temas",
    "capacidad para adaptarse a los cambios y desafíos",
    "actitud positiva hacia el aprendizaje y las tareas",
    "iniciativa para proponer nuevas ideas y soluciones",
    "habilidad para interpretar y analizar textos complejos",
    "empatía al trabajar en equipo y al apoyar a otros",
    "consistencia en la calidad del trabajo entregado",
    "reflexión crítica sobre su propio aprendizaje",
    "fluidez en la expresión oral durante presentaciones",
    "gestión efectiva del tiempo en proyectos y tareas",
    "uso apropiado de recursos tecnológicos para el aprendizaje",
    "habilidad para conectar conceptos de diferentes áreas del conocimiento",
    "creatividad al completar actividades escritas o visuales",
  ];

  return (
    <div className="mb-4">
      <label htmlFor="keyStrengths" className="font-bold mr-2">
        Fortalezas Clave:
      </label>
      <select
        className={`border rounded p-2 w-full transition duration-300 ease-in-out focus:outline-none ${
          darkMode
            ? "bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400"
            : "bg-white border-gray-300 text-black placeholder-gray-500"
        } animate-dropdown`}
        id="keyStrengths"
        onChange={(e) => setKeyStrengths(e.target.value)}
      >
        <option value="">Seleccione una Fortaleza</option>
        {strengths.map((strength, index) => (
          <option key={index} value={strength}>
            {strength}
          </option>
        ))}
      </select>
    </div>
  );
};

export default KeyStrengthsDropdown;
