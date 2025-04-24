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
        <option value="en actividades del libro de clase">
          en actividades del libro de clase
        </option>
        <option value="en tareas orales grupales">
          en tareas orales grupales
        </option>
        <option value="en presentaciones individuales">
          en presentaciones individuales
        </option>
        <option value="en presentaciones grupales">
          en presentaciones grupales
        </option>
        <option value="en pruebas sumativas escritas">
          en pruebas sumativas escritas
        </option>
        <option value="en pruebas orales">en pruebas orales</option>
        <option value="al participar en discusiones en clase">
          al participar en discusiones en clase
        </option>
        <option value="en tareas prácticas en parejas">
          en tareas prácticas en parejas
        </option>
        <option value="al redactar textos breves en clase">
          al redactar textos breves en clase
        </option>
        <option value="en ejercicios de comprensión auditiva">
          en ejercicios de comprensión auditiva
        </option>
        <option value="en ejercicios de comprensión lectora">
          en ejercicios de comprensión lectora
        </option>
        <option value="al completar tareas colaborativas en clase">
          al completar tareas colaborativas en clase
        </option>
        <option value="en la elaboración de proyectos en equipo">
          en la elaboración de proyectos en equipo
        </option>
        <option value="al utilizar nuevo vocabulario en contexto">
          al utilizar nuevo vocabulario en contexto
        </option>
        <option value="en ejercicios gramaticales específicos">
          en ejercicios gramaticales específicos
        </option>
        <option value="al intervenir espontáneamente en inglés">
          al intervenir espontáneamente en inglés
        </option>
        <option value="en tareas escritas formativas">
          en tareas escritas formativas
        </option>
        <option value="en tareas prácticas individuales">
          en tareas prácticas individuales
        </option>
      </select>
    </div>
  );
};

export default EvidenceDropdown;
