import React from 'react';
import './index.css';

const ProjectCard = ({ image, title, discription }) => {
  return (
    <div className="project-card group relative max-w-sm mx-auto overflow-hidden rounded-xl shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-xl">
      <div className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-500"></div>
      <img 
        src={image} 
        alt="home" 
        className="w-full h-60 object-cover transform transition-all duration-500 group-hover:scale-110"
      />
      <div className="bg-[#26458c] text-white p-4 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h5 className="text-xl font-bold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{discription}</p>
      </div>
    </div>
  );
}

export default ProjectCard;

