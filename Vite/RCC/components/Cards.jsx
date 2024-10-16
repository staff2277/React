import React from "react";

const Cards = ({tittle, text, linkPath, linkText, bg}) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold">{tittle}</h2>
      <p className="mt-2 mb-4">
        {text}
      </p>
      <a
        href={linkPath}
        className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
      >
        {linkText}
      </a>
    </div>
  );
};

export default Cards;
