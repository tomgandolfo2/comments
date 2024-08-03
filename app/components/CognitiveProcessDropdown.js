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
      label:
        "aplicar los conocimientos trabajados en clase para resolver problemas prácticos",
      gender: "masculino",
    },
    {
      label:
        "analizar problemas complejos utilizando pensamiento crítico y lógico",
      gender: "masculino",
    },
    {
      label:
        "sintetizar información de múltiples fuentes para formar una comprensión clara",
      gender: "femenino",
    },
    {
      label:
        "crear soluciones innovadoras mediante la combinación de ideas creativas",
      gender: "femenino",
    },
    {
      label:
        "evaluar argumentos y evidencia para desarrollar opiniones fundamentadas",
      gender: "masculino",
    },
    {
      label:
        "inferir significados subyacentes en textos para una comprensión más profunda",
      gender: "masculino",
    },
    {
      label:
        "interpretar mensajes complejos y comunicar ideas clave claramente",
      gender: "masculino",
    },
    {
      label: "traducir conceptos abstractos en términos claros y comprensibles",
      gender: "masculino",
    },
    {
      label:
        "integrar conocimientos de diversas áreas para abordar problemas interdisciplinares",
      gender: "masculino",
    },
    {
      label:
        "clasificar información sistemáticamente para facilitar el análisis",
      gender: "femenino",
    },
    {
      label:
        "comparar distintas perspectivas para entender similitudes y diferencias",
      gender: "femenino",
    },
    {
      label:
        "generalizar principios aprendidos y aplicarlos a nuevos contextos",
      gender: "masculino",
    },
    {
      label: "predecir tendencias basándose en datos y patrones observados",
      gender: "femenino",
    },
    {
      label:
        "clarificar conceptos complejos para asegurar una comprensión adecuada",
      gender: "masculino",
    },
    {
      label: "decodificar mensajes complejos para revelar su significado",
      gender: "masculino",
    },
    {
      label: "razonar sobre el uso del lenguaje para mejorar la comunicación",
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
