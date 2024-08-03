// app/components/GradeDropdown.js

"use client";

import React from "react";

const GradeDropdown = ({ value, onChange, darkMode }) => {
  return (
    <div className="mb-4">
      <label htmlFor="grade" className="font-bold mr-2">
        Calificación:
      </label>
      <select
        className={`border rounded p-2 w-full transition duration-300 ease-in-out focus:outline-none ${
          darkMode
            ? "bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400"
            : "bg-white border-gray-300 text-black placeholder-gray-500"
        } animate-dropdown`}
        id="grade"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Seleccione Calificación</option>
        <option value="10">10</option>
        <option value="9">9</option>
        <option value="8">8</option>
        <option value="7">7</option>
        <option value="6">6</option>
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
      </select>
    </div>
  );
};

export default GradeDropdown;
