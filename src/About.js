// src/About.js
import React from "react";

export default function About() {
    return (
        <div className="bg-white min-h-screen flex items-center justify-center">
          <div className="container mx-auto py-20 px-4 md:px-0">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black" style={{ fontFamily: 'Poppins', fontWeight: '600' }}>
                About Me
              </h1>
              <p className="text-lg md:text-xl mb-6 text-gray-700" style={{ fontFamily: 'Poppins', fontWeight: '400' }}>
                I am Shoaib, a passionate Frontend Web Developer with a knack for creating interactive and responsive web applications. With a strong background in front-end development and design, I strive to bridge the gap between aesthetics and functionality.
              </p>
              <p className="text-lg md:text-xl mb-6 text-gray-700" style={{ fontFamily: 'Poppins', fontWeight: '400' }}>
                My journey in web development started with a love for coding and technology. Over the years, I have honed my skills in various front-end technologies and frameworks, enabling me to create seamless user experiences.
              </p>
              <p className="text-lg md:text-xl mb-6 text-gray-700" style={{ fontFamily: 'Poppins', fontWeight: '400' }}>
                I believe in the power of technology to solve problems and create meaningful experiences. My goal is to continue learning and growing as a developer, and to use my skills to make a positive impact in the world.
              </p>
            </div>
          </div>
        </div>
      );
}