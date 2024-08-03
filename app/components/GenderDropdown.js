// app/components/GenderDropdown.js

"use client";

import React from "react";

const GenderDropdown = ({ value, onChange, darkMode }) => {
  return (
    <div className="mb-4">
      <label htmlFor="gender" className="font-bold mr-2">
        Género:
      </label>
      <select
        className={`border rounded p-2 w-full transition duration-300 ease-in-out focus:outline-none ${
          darkMode
            ? "bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400"
            : "bg-white border-gray-300 text-black placeholder-gray-500"
        } animate-dropdown`}
        id="gender"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Seleccione Género</option>
        <option value="masculino">Masculino</option>
        <option value="femenino">Femenino</option>
      </select>
    </div>
  );
};

export default GenderDropdown;
