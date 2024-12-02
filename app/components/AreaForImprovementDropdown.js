"use client";

import React from "react";

const AreaForImprovementDropdown = ({ setAreaForImprovement, darkMode }) => {
  const areas = [
    "participar más activamente en debates y discusiones",
    "desarrollar confianza al comunicarse en inglés",
    "ampliar su vocabulario académico y general",
    "mejorar la estructura y claridad en tareas escritas",
    "prestar más atención a las instrucciones proporcionadas",
    "organizar mejor su tiempo para cumplir con los plazos",
    "solicitar ayuda cuando enfrente dificultades",
    "practicar más la gramática en contextos reales",
    "usar recursos tecnológicos de manera más eficiente",
    "aprovechar oportunidades para interactuar en inglés",
    "establecer conexiones más claras entre conceptos estudiados",
    "trabajar en la pronunciación para mejorar la claridad",
    "reforzar habilidades de comprensión auditiva",
    "mostrar más iniciativa en proyectos grupales",
    "mantener consistencia en la calidad del trabajo entregado",
    "integrar comentarios y sugerencias en tareas futuras",
    "participar más en actividades extracurriculares en inglés",
    "apoyar a sus compañeros durante actividades grupales",
    "desarrollar habilidades para sintetizar información",
    "mejorar la edición y revisión de sus propios textos",
  ];

  return (
    <div className="mb-4">
      <label htmlFor="areaForImprovement" className="font-bold mr-2">
        Área de Mejora:
      </label>
      <select
        className={`border rounded p-2 w-full transition duration-300 ease-in-out focus:outline-none ${
          darkMode
            ? "bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400"
            : "bg-white border-gray-300 text-black placeholder-gray-500"
        } animate-dropdown`}
        id="areaForImprovement"
        onChange={(e) => setAreaForImprovement(e.target.value)}
      >
        <option value="">Seleccione un Área</option>
        {areas.map((area, index) => (
          <option key={index} value={area}>
            {area}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AreaForImprovementDropdown;
