
import React from 'react';
import ProjectCard from './ProjectCard';
import './Home.css'
const projectData = [
  {
    id: 1,
    name: "Ride-sharing app",
    price: "FLutter",
    detail: " Developed a mobile app using Flutter framework",
    image: "/public/WhatsApp Image 2024-06-10 at 05.43.22_d8bbcecc.jpg"
  },
  {
    id: 2,
    name: "house-Searching website",
    price: "React front end $ python flask backend",
    detail: "Housing search website upload find and Like properties,",
    image: "/public/Screenshot (677).png",
  },
  {
    id: 3,
    name: "Designed Mobile version of houseApp",
    price: "Flutter",
    detail: "House search app where user can find and upload properties",
    image: "/public/WhatsApp Image 2024-06-10 at 06.00.37_61bcc877.jpg"
  },
  {
    id: 5,
    name: "VVIMS",
    price: "Worked on vvims on an intership with Vtc international",
    detail: " VVIMS is a visitor Vahicle Management system ",
    image: "/public/Screenshot (569).png"
  },
  {

    id: 6,
    name: "Apartment Management System",
    price: "Built it with python and Qt designer",
    detail: " Apartment mangement Application where users can login magane Tenants ",
    image: "/public/Screenshot (434).png"
  },
  {
    id: 7,
    name: "Resutant app",
    price: "Built with java ",
    detail: " Restourant app where user can login order for food ,make reservations for tables",
    image: "/public/Screenshot (417).png"
  },
  {
    id: 8,
    name: "File Manager App",
    price: "Design the cloud page and video player",
    detail: "Worked on group project to reduce a file manager application  ",
    image: "/public/Screenshot (312).png",
  }

]


const Projects = () => {
  return (
    <>
      <h1>My Projects</h1>
      <div className='home'>{projectData.map((project) => (<ProjectCard key={project.id} title={project.name} discription={project.detail} imageUrl={project.image} />))}</div>
    </>
  )
}

export default Projects;

