import React from 'react'

const ProjectCard = ( { imageUrl , title , discription}) => {
  return (
    <div><div className="h-52 md:h-72 rounded-t-xl" style={{background: `url(${imageUrl})` , backgroundSize: "cover"}  }>
        <div>
            <h5 className="text-xl font-semibold mb-2">{title}</h5>
            <p className="text">{discription}</p>
        </div>
    </div>
    </div>
    
  )
}

export default ProjectCard