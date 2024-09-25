import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer"; // Import the Footer component
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="bg-white min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route exact path="/" element={
              <div className="container mx-auto flex items-center justify-center py-20">
                <div className="flex flex-col md:flex-row items-center md:items-start w-full">
                  <div className="md:w-1/2 p-4">
                    <h1 className="text-60px font-bold mb-4 text-black" style={{ fontFamily: 'Poppins', fontWeight: '600' }}>
                      Hello,
                    </h1>
                    <h2 className="text-70px font-bold mb-4 text-black" style={{ fontFamily: 'Poppins', fontWeight: '600' }}>
                      I am Shoaib.
                    </h2>
                    <h3 className="text-40px font-bold mb-4" style={{ fontFamily: 'Poppins', fontWeight: '600', color: '#EDA751' }}>
                      Frontend Web Developer
                    </h3>
                    <p className="text-30px mb-6 text-black" style={{ fontFamily: 'Poppins', fontWeight: '600' }}>
                      Hello, I am an aspiring Frontend Web Developer with a passion for creating interactive and responsive web applications.
                    </p>
                    <button
                      className="text-30px font-bold py-2 px-4 rounded-full transition duration-300"
                      style={{ backgroundColor: "#EDA751", color: "black" }}
                    >
                      Hire Me
                    </button>
                  </div>
                  <div className="md:w-1/2 p-4 flex justify-center items-center relative">
                    <img
                      src={require("./yellow.png")}
                      alt="Yellow Background"
                      className="absolute bottom-0 right-0 w-64 h-64 object-contain"
                      style={{ zIndex: -1 }}
                    />
                    <img
                      src={require("./profile.png")}
                      alt="Profile"
                      className="rounded-lg shadow-lg max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer /> {/* Include the Footer component */}
      </div>
    </Router>
  );
}