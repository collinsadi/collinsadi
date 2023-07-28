import React from 'react'
import "./Projects.css"
import { ProjectsCard } from '../projectscard/ProjectsCard'


export const Projects = () => {
  return (
      <div className="projects-section">
          
          <div className="projects-section-inner">

              <div className="section-title">
                  <h3>My Projects</h3>
                  
              </div>
              <div className="section-description">
                
                  <p>Projects are Arranged in Descending Order, Meaning that, Newer Projects are at the Top</p>

              </div>

              <div className="projects-container">

                <ProjectsCard />
              <ProjectsCard />
              <ProjectsCard />
              <ProjectsCard />
              <ProjectsCard />
              <ProjectsCard />
                  
              </div>

              
              

        </div>

    </div>
  )
}
