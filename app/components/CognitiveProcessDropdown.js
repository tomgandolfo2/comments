// app/components/CognitiveProcessDropdown.js

"use client";

import React from "react";

const CognitiveProcessDropdown = ({
  setCognitiveProcessLabel,
  setCognitiveProcessGender,
  darkMode,
}) => {
  const cognitiveProcesses = [
    {
      label: "aplicar los conocimientos en tareas prácticas",
      gender: "masculino",
    },
    {
      label: "analizar textos utilizando pensamiento crítico",
      gender: "masculino",
    },
    {
      label: "sintetizar información relevante de fuentes variados",
      gender: "femenino",
    },
    {
      label: "crear textos originales combinando ideas creativas",
      gender: "masculino",
    },
    {
      label: "evaluar opiniones y argumentos en debates",
      gender: "masculino",
    },
    {
      label: "inferir significados a partir del contexto",
      gender: "masculino",
    },
    {
      label: "interpretar mensajes en textos y audios",
      gender: "masculino",
    },
    {
      label: "traducir conceptos complejos en lenguaje sencillo",
      gender: "masculino",
    },
    {
      label: "integrar vocabulario nuevo en situaciones comunicativas",
      gender: "masculino",
    },
    {
      label: "clasificar ideas y conceptos clave estudiados",
      gender: "femenino",
    },
    {
      label: "comparar diferentes puntos de vista",
      gender: "masculino",
    },
    {
      label: "generalizar reglas gramaticales a contextos nuevos",
      gender: "masculino",
    },
    {
      label: "predecir información a partir de pistas contextuales",
      gender: "femenino",
    },
    {
      label: "clarificar dudas sobre estructuras gramaticales complejas",
      gender: "femenino",
    },
    {
      label: "decodificar mensajes orales y escritos en inglés",
      gender: "masculino",
    },
    {
      label: "razonar sobre el uso adecuado del idioma",
      gender: "masculino",
    },
  ];

  return (
    <div className="mb-4">
      <label htmlFor="cognitiveProcess" className="font-bold mr-2">
        Proceso Cognitivo:
      </label>
      <select
        className={`border rounded p-2 w-full transition duration-300 ease-in-out focus:outline-none ${
          darkMode
            ? "bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400"
            : "bg-white border-gray-300 text-black placeholder-gray-500"
        } animate-dropdown`}
        id="cognitiveProcess"
        onChange={(e) => {
          const selectedProcess = cognitiveProcesses.find(
            (process) => process.label === e.target.value
          );
          if (selectedProcess) {
            setCognitiveProcessLabel(selectedProcess.label);
            setCognitiveProcessGender(selectedProcess.gender);
          }
        }}
      >
        <option value="">Seleccione Proceso Cognitivo</option>
        {cognitiveProcesses.map((process, index) => (
          <option key={index} value={process.label}>
            {process.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CognitiveProcessDropdown;
