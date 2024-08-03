// app/components/NameInput.js

"use client";

import React from "react";

const NameInput = ({ value, onChange, darkMode }) => {
  return (
    <div className="mb-4">
      <label htmlFor="name" className="font-bold mr-2">
        Nombre:
      </label>
      <input
        type="text"
        id="name"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`border rounded p-2 w-full transition duration-300 ease-in-out focus:outline-none ${
          darkMode
            ? "bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400"
            : "bg-white border-gray-300 text-black placeholder-gray-500 light-mode"
        }`}
        placeholder="Ingrese el nombre del estudiante"
      />
    </div>
  );
};

export default NameInput;
