"use client";

import React from "react";

const FutureGoalsDropdown = ({ setFutureFocus, darkMode }) => {
  const goals = [
    "mejorar la confianza en la expresión oral",
    "ampliar su vocabulario para contextos académicos",
    "desarrollar habilidades para redactar textos persuasivos",
    "aumentar la fluidez y precisión en el uso de la gramática",
    "participar más activamente en discusiones grupales",
    "dedicar más tiempo a la lectura de textos en inglés",
    "aprender estrategias para comprender acentos variados",
    "realizar presentaciones orales más dinámicas y claras",
    "usar más conectores en la escritura para lograr una mejor cohesión",
    "practicar la toma de notas mientras escucha audios complejos",
    "explorar aspectos culturales del mundo de habla inglesa",
    "reforzar habilidades de edición en tareas escritas",
    "ser más consistente al completar tareas y proyectos",
    "buscar oportunidades para practicar inglés fuera del aula",
    "aplicar estrategias de pensamiento crítico al analizar textos",
    "mejorar la claridad y organización en respuestas escritas",
    "usar recursos como diccionarios y herramientas en línea de manera efectiva",
    "colaborar más en actividades grupales para compartir ideas",
    "dedicar tiempo extra a la revisión de trabajos entregados",
    "mejorar la calidad de las preguntas planteadas en clase",
  ];

  return (
    <div className="mb-4">
      <label htmlFor="futureGoals" className="font-bold mr-2">
        Metas Futuras:
      </label>
      <select
        className={`border rounded p-2 w-full transition duration-300 ease-in-out focus:outline-none ${
          darkMode
            ? "bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400"
            : "bg-white border-gray-300 text-black placeholder-gray-500"
        } animate-dropdown`}
        id="futureGoals"
        onChange={(e) => setFutureFocus(e.target.value)}
      >
        <option value="">Seleccione una Meta</option>
        {goals.map((goal, index) => (
          <option key={index} value={goal}>
            {goal}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FutureGoalsDropdown;
