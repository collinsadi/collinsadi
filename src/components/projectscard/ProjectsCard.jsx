import React from 'react'


import { FiExternalLink } from "react-icons/fi"






export const ProjectsCard = ({image,title,desc,icons,link}) => {
  return (
     <div className="project-card">

                  <div className="project-image">
                      
                      <img src={image} alt="" />

                  </div>
                  
                  <div className="project-description">
                      
              <h3>{ title }</h3>
              <p>{ desc}</p>

                  </div>

                  <div className="project-technologies">

              {icons.map((icon, index) => (
            <span key={index}>{icon}</span>
                ))}
              

                  </div>

                <div className="project-navigation">
              
                    <p><a rel='noreferrer' target='_blank' href={link}>  <FiExternalLink/> View Live Website</a></p>
                 
                      
                  </div>
                  
        </div>
  )
}
