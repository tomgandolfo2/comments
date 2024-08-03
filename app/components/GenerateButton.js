// app/components/GenerateButton.js

import React from "react";

const GenerateButton = ({ onClick }) => {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer w-full mb-4"
      onClick={onClick}
    >
      Generar Comentario
    </button>
  );
};

export default GenerateButton;
