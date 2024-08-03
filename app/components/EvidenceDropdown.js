// app/components/EvidenceDropdown.js

"use client";

import React from "react";

const EvidenceDropdown = ({ value, onChange, darkMode }) => {
  return (
    <div className="mb-4">
      <label htmlFor="evidence" className="font-bold mr-2">
        Evidencia:
      </label>
      <select
        className={`border rounded p-2 w-full transition duration-300 ease-in-out focus:outline-none ${
          darkMode
            ? "bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400"
            : "bg-white border-gray-300 text-black placeholder-gray-500"
        } animate-dropdown`}
        id="evidence"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Seleccione Evidencia</option>
        <option value="en las actividades de clase">
          en las actividades de clase
        </option>
        <option value="en las pruebas formativas">
          en las pruebas formativas
        </option>
        <option value="en las pruebas sumativas">
          en las pruebas sumativas
        </option>
        <option value="al intervenir en clase">al intervenir en clase</option>
        <option value="en tareas grupales">en tareas grupales</option>
        <option value="en el parcial">en el parcial</option>
        <option value="al realizar tareas prácticas">
          al realizar tareas prácticas
        </option>
        <option value="en su desempeño diario">en su desempeño diario</option>
        <option value="en la participación en debates">
          en la participación en debates
        </option>
        <option value="en la realización de proyectos">
          en la realización de proyectos
        </option>
        <option value="en la aplicación de teorías">
          en la aplicación de teorías
        </option>
        <option value="al analizar textos complejos">
          al analizar textos complejos
        </option>
        <option value="en la síntesis de información">
          en la síntesis de información
        </option>
        <option value="al resolver problemas complejos">
          al resolver problemas complejos
        </option>
        <option value="en la creación de soluciones innovadoras">
          en la creación de soluciones innovadoras
        </option>
        <option value="en la interpretación de datos">
          en la interpretación de datos
        </option>
      </select>
    </div>
  );
};

export default EvidenceDropdown;
