import React, { useState } from "react";
import image1 from "./image1.png";
import image2 from "./image2.png";
import image3 from "./image3.png";
import vedio1 from "./vedio1.mp4";
import vedio2 from "./vedio2.mp4";
import vedio3 from "./vedio3.mp4";
import Modal from "./Modal"; // Ensure this path is correct

export default function NewPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Delivery Hero",
      cover: image1,
      video: vedio1,
      github: "https://github.com/username/project1",
      details: "Theme: Tech-Driven Delivery Service\nDesign Elements: A sleek delivery motorcycle or van zooming through a bustling cityscape. Digital route maps, package icons, and notifications pop up around it, symbolizing efficient service. Background features a city skyline with subtle tech elements like network connections or data points.\nColor Scheme: Energetic tones such as bright red, orange, and blue to represent speed, technology, and reliability."
    },
    {
      title: "SA Gold Mine",
      cover: image2,
      video: vedio2,
      github: "https://github.com/username/project2",
      details: "Theme: Gold Mining & Resource Extraction\nDesign Elements: A mining scene in the foreground, showing large machines, workers in hard hats, and gold nuggets being loaded into trucks. Rugged mountains and a deep mine pit form the background, with a golden glow highlighting the richness of resources.\nColor Scheme: Earthy tones—browns, golds, and greens—to reflect natural resources and industrial effort."
    },
    {
      title: "PakStay",
      cover: image3,
      video: vedio3,
      github: "https://github.com/username/project3",
      details: "Theme: Hospitality & Travel\nDesign Elements: A luxurious hotel entrance with lush greenery, palm trees, and people checking in or relaxing by a pool. Scenic background of mountains or a beach, with subtle travel icons like a plane and passport stamps evoking a premium travel experience.\nColor Scheme: Calming hues like blues, greens, and golds to convey luxury, comfort, and relaxation."
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto py-20 px-4 md:px-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-black text-center" style={{ fontFamily: 'Poppins', fontWeight: '700', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)' }}>
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-lg shadow-lg flex flex-col items-center">
              <div className="w-full h-64 mb-4 overflow-hidden relative group" onClick={() => handleProjectClick(project)}>
                <img src={project.cover} alt={`${project.title} Cover`} className="w-full h-full object-cover rounded transition-transform duration-300 transform group-hover:scale-110 cursor-pointer" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-black text-center" style={{ fontFamily: 'Poppins', fontWeight: '600', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}>
                {project.title}
              </h2>
              <button
                onClick={() => window.open(project.video, "_blank")}
                className="bg-[#EDA751] text-black py-2 px-4 rounded-full cursor-pointer transition duration-300 hover:bg-yellow-600 mb-4"
                style={{ fontFamily: 'Poppins', fontWeight: 'bold', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
              >
                Run Video
              </button>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#EDA751] text-lg hover:underline"
                style={{ fontFamily: 'Poppins', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
      <Modal show={showModal} onClose={handleCloseModal} project={selectedProject} />
    </div>
  );
}