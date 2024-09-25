// src/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [resume, setResume] = useState(null);

  const handleFileChange = (event) => {
    setResume(event.target.files[0]);
  };

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-[#EDA751] text-2xl font-bold" style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>
          Srcamble Soft
        </div>
        <div className="flex-1 text-center">
          <Link to="/" className="text-[#000000] px-4 text-lg hover:underline bg-transparent border-none cursor-pointer" style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>
            Home
          </Link>
          <Link to="/about" className="text-[#000000] px-4 text-lg hover:underline bg-transparent border-none cursor-pointer" style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>
            About
          </Link>
          <Link to="/contact" className="text-[#000000] px-4 text-lg hover:underline bg-transparent border-none cursor-pointer" style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>
            Contact
          </Link>
        </div>
        <div className="flex items-center">
          {resume ? (
            <a
              href={URL.createObjectURL(resume)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#EDA751] text-black py-2 px-4 rounded-full cursor-pointer transition duration-300 hover:bg-yellow-600"
              style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}
            >
              View Resume
            </a>
          ) : (
            <label className="bg-[#EDA751] text-black py-2 px-4 rounded-full cursor-pointer transition duration-300 hover:bg-yellow-600" style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>
              Upload Resume
              <input type="file" className="hidden" onChange={handleFileChange} />
            </label>
          )}
        </div>
      </div>
    </nav>
  );
}