import React from 'react';
import './index.css';

const ProjectCard = ({ image, title, discription }) => {
  return (
    <div>
    <div className="project-card ">
       <img src={image} alt="home"/>
        </div>
        <div className="#081b29 p-4 rounded-b-xl bg-[#181818]py-6 px-4">
          <h5 className="text-xl font-bold mb-2 text-white">{title}</h5>
          <p className="text-[#ADB7BE]">{discription}</p>
        </div>
   
    </div>
  );
}

export default ProjectCard;
