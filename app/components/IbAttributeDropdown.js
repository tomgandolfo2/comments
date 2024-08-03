// app/components/IbAttributeDropdown.js

"use client";

import React from "react";

const IbAttributeDropdown = ({
  attributeValue,
  onAttributeChange,
  reasonValue,
  onReasonChange,
  darkMode,
}) => {
  const ibAttributes = [
    "indagador",
    "informado e instruido",
    "pensador",
    "comunicador",
    "íntegro",
    "de mentalidad abierta",
    "solidario",
    "audaz",
    "equilibrado",
    "reflexivo",
  ];

  const reasonsForAttributes = {
    indagador: [
      "hace preguntas significativas durante las lecciones",
      "investiga más allá de lo esperado",
      "desarrolla proyectos de investigación de forma independiente",
      "busca respuestas a preguntas complejas",
      "participa activamente en discusiones de clase",
    ],
    "informado e instruido": [
      "explora temas de manera profunda",
      "hace conexiones entre diferentes disciplinas",
      "comparte conocimientos con sus compañeros",
      "participa en debates informados",
      "demuestra comprensión de conceptos complejos",
    ],
    pensador: [
      "resuelve problemas complejos con creatividad",
      "aplica pensamiento crítico en tareas",
      "desarrolla nuevas ideas para proyectos",
      "analiza información desde múltiples perspectivas",
      "genera soluciones innovadoras",
    ],
    comunicador: [
      "expresa ideas con claridad y confianza",
      "participa activamente en presentaciones orales",
      "escucha atentamente a los demás",
      "utiliza medios variados para comunicar",
      "establece conexiones efectivas con sus compañeros",
    ],
    íntegro: [
      "demuestra honestidad y responsabilidad",
      "actúa con integridad en todas las situaciones",
      "asume la responsabilidad de sus acciones",
      "refleja principios éticos en su trabajo",
      "inspira confianza en sus compañeros",
    ],
    "de mentalidad abierta": [
      "muestra aceptación hacia diferentes perspectivas",
      "aprecia diversas culturas y tradiciones",
      "escucha con respeto las opiniones de los demás",
      "se adapta a situaciones nuevas y desafiantes",
      "celebra la diversidad en el aula",
    ],
    solidario: [
      "muestra empatía y compasión",
      "apoya a sus compañeros en momentos de necesidad",
      "participa en actividades de servicio comunitario",
      "fomenta un ambiente inclusivo",
      "demuestra bondad y consideración",
    ],
    audaz: [
      "asume riesgos con responsabilidad",
      "explora nuevas ideas con confianza",
      "persiste frente a desafíos",
      "enfrenta situaciones desconocidas con valentía",
      "se adapta a cambios con resiliencia",
    ],
    equilibrado: [
      "mantiene un equilibrio entre el trabajo y el ocio",
      "participa en actividades físicas y artísticas",
      "maneja el estrés de manera efectiva",
      "cultiva el bienestar emocional y físico",
      "demuestra habilidades de autorregulación",
    ],
    reflexivo: [
      "evalúa su propio aprendizaje y desarrollo",
      "se toma el tiempo para reflexionar sobre sus acciones",
      "identifica fortalezas y áreas de mejora",
      "planifica estrategias para el crecimiento personal",
      "aprende de la experiencia para mejorar",
    ],
  };

  return (
    <div className="mb-4">
      <label htmlFor="ibAttribute" className="font-bold mr-2">
        Atributo del IB:
      </label>
      <select
        className={`border rounded p-2 w-full transition duration-300 ease-in-out focus:outline-none ${
          darkMode
            ? "bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400"
            : "bg-white border-gray-300 text-black placeholder-gray-500"
        } animate-dropdown`}
        id="ibAttribute"
        value={attributeValue}
        onChange={(e) => onAttributeChange(e.target.value)}
      >
        <option value="">Seleccione Atributo</option>
        {ibAttributes.map((attribute, index) => (
          <option key={index} value={attribute}>
            {attribute}
          </option>
        ))}
      </select>

      <label htmlFor="ibReason" className="font-bold mr-2 mt-2 block">
        Razón:
      </label>
      <select
        className={`border rounded p-2 w-full transition duration-300 ease-in-out focus:outline-none ${
          darkMode
            ? "bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400"
            : "bg-white border-gray-300 text-black placeholder-gray-500"
        } animate-dropdown`}
        id="ibReason"
        value={reasonValue}
        onChange={(e) => onReasonChange(e.target.value)}
        disabled={!attributeValue}
      >
        <option value="">Seleccione Razón</option>
        {attributeValue &&
          reasonsForAttributes[attributeValue].map((reason, index) => (
            <option key={index} value={reason}>
              {reason}
            </option>
          ))}
      </select>
    </div>
  );
};

export default IbAttributeDropdown;
