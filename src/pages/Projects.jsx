import React from 'react';
import ProjectCard from './ProjectCard';
import './Bro.css';
import data from "../utils/slider.json";

const Projects = () => {
  return (
    <>
      <div className="homes">
        <h1 className="text-6xl font-bold mb-6 text-white text-center  ">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((project) => (
            <ProjectCard 
              key={project.id} 
              title={project.name} 
              discription={project.detail} 
              image={project.image} 
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;


