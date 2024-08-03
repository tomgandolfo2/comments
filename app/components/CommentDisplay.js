// app/components/CommentDisplay.js

"use client";

import React, { useEffect, useRef } from "react";

const CommentDisplay = ({ comment, darkMode }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.classList.add("animate-highlight");
      setTimeout(() => {
        textareaRef.current.classList.remove("animate-highlight");
      }, 1000);
    }
  }, [comment]);

  const copyToClipboard = () => {
    if (!comment) return;

    navigator.clipboard.writeText(comment).then(
      () => {
        alert("Comentario copiado al portapapeles.");
      },
      (err) => {
        console.error("Error al copiar el comentario: ", err);
      }
    );
  };

  return (
    <div className="mt-4">
      <textarea
        ref={textareaRef}
        className={`w-full h-64 border rounded p-2 resize-none transition duration-300 ease-in-out ${
          darkMode
            ? "border-gray-600 bg-gray-700 text-gray-200"
            : "border-gray-300 bg-gray-100 text-black"
        }`}
        value={comment}
        readOnly
      />
      <div className="text-right text-sm text-gray-600 dark:text-gray-400 mt-1">
        {comment.length} caracteres
      </div>
      <button
        onClick={copyToClipboard}
        className={`mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer transition-opacity ${
          comment ? "opacity-100" : "opacity-50 cursor-not-allowed"
        }`}
        disabled={!comment}
      >
        Copiar al portapapeles
      </button>
    </div>
  );
};

export default CommentDisplay;
