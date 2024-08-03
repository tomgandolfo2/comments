// app/page.js

"use client";

import React, { useState, useEffect } from "react";
import NameInput from "./components/NameInput";
import GenderDropdown from "./components/GenderDropdown";
import GradeDropdown from "./components/GradeDropdown";
import CognitiveProcessDropdown from "./components/CognitiveProcessDropdown";
import EvidenceDropdown from "./components/EvidenceDropdown";
import IbAttributeDropdown from "./components/IbAttributeDropdown";
import RecognitionDropdown from "./components/RecognitionDropdown";
import ImprovementSuggestionDropdown from "./components/ImprovementSuggestionDropdown";
import CommentDisplay from "./components/CommentDisplay";
import DarkModeToggle from "./components/DarkModeToggle";

const CommentGenerator = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [grade, setGrade] = useState("");
  const [cognitiveProcessLabel, setCognitiveProcessLabel] = useState("");
  const [cognitiveProcessGender, setCognitiveProcessGender] = useState("");
  const [evidence, setEvidence] = useState("");
  const [ibAttribute, setIbAttribute] = useState("");
  const [ibReason, setIbReason] = useState("");
  const [recognition, setRecognition] = useState("");
  const [improvementSuggestion, setImprovementSuggestion] = useState("");
  const [comment, setComment] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Real-time comment generation using useEffect
  useEffect(() => {
    let generatedComment = "";

    if (name) {
      generatedComment += `${name} `;
    }

    if (grade && cognitiveProcessLabel) {
      switch (grade) {
        case "9":
        case "10":
          generatedComment += `logra en gran medida ${cognitiveProcessLabel}. `;
          break;
        case "7":
        case "8":
          generatedComment += `logra en buena medida ${cognitiveProcessLabel}. `;
          break;
        case "5":
        case "6":
          generatedComment += `logra en cierta medida ${cognitiveProcessLabel}. `;
          break;
        default:
          generatedComment += `logra con dificultades ${cognitiveProcessLabel}. `;
          break;
      }
    }

    const genderedPhrase =
      cognitiveProcessGender === "femenino"
        ? "Las mismas se evidencian"
        : "Los mismos se evidencian";

    if (evidence) {
      generatedComment += `${genderedPhrase} ${evidence}. `;
    }

    if (ibAttribute && ibReason) {
      generatedComment += `Destaco que ha desarrollado la habilidad ${ibAttribute} porque ${ibReason}. `;
    } else if (ibAttribute) {
      generatedComment += `Destaco que ha desarrollado la habilidad ${ibAttribute}. `;
    }

    if (recognition) {
      generatedComment += `Reconozco ${recognition}. `;
    }

    if (improvementSuggestion) {
      const pronoun = gender === "masculino" ? "Lo" : "La";
      generatedComment += `${pronoun} aliento a ${improvementSuggestion}.`;
    }

    setComment(generatedComment);
  }, [
    name,
    gender,
    grade,
    cognitiveProcessLabel,
    cognitiveProcessGender,
    evidence,
    ibAttribute,
    ibReason,
    recognition,
    improvementSuggestion,
  ]);

  // Toggle dark mode
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-blue-100 text-black"
      } transition duration-500 ease-in-out`}
    >
      <div
        className={`p-8 rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 transition-colors duration-500 ease-in-out ${
          darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-black"
        }`}
      >
        <div className="w-full md:w-1/2 space-y-4 animate-fadeIn">
          <h1 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-300">
            Generador de Comentarios
          </h1>
          <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <NameInput value={name} onChange={setName} darkMode={darkMode} />
          <GenderDropdown
            value={gender}
            onChange={setGender}
            darkMode={darkMode}
          />
          <GradeDropdown
            value={grade}
            onChange={setGrade}
            darkMode={darkMode}
          />
          <CognitiveProcessDropdown
            setCognitiveProcessLabel={setCognitiveProcessLabel}
            setCognitiveProcessGender={setCognitiveProcessGender}
            darkMode={darkMode}
          />
          <EvidenceDropdown
            value={evidence}
            onChange={setEvidence}
            darkMode={darkMode}
          />
          <IbAttributeDropdown
            attributeValue={ibAttribute}
            onAttributeChange={setIbAttribute}
            reasonValue={ibReason}
            onReasonChange={setIbReason}
            darkMode={darkMode}
          />
        </div>

        <div className="w-full md:w-1/2 space-y-4 animate-fadeIn">
          <RecognitionDropdown
            value={recognition}
            onChange={setRecognition}
            darkMode={darkMode}
          />
          <ImprovementSuggestionDropdown
            value={improvementSuggestion}
            onChange={setImprovementSuggestion}
            darkMode={darkMode}
          />
          <CommentDisplay comment={comment} darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
};

export default CommentGenerator;
