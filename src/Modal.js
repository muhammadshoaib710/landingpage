import React from "react";

export default function Modal({ show, onClose, project }) {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins', fontWeight: '600' }}>
          {project.title}
        </h2>
        <p className="mb-4 whitespace-pre-line">{project.details}</p>
        <button
          onClick={onClose}
          className="bg-[#EDA751] text-black py-2 px-4 rounded-full cursor-pointer transition duration-300 hover:bg-yellow-600"
          style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}
        >
          Close
        </button>
      </div>
    </div>
  );
}