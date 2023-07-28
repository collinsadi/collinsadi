import React from 'react'
import demo from "../images/portfoliowebsite.png"
import {FaJs,FaNode,FaCss3,FaHtml5,FaBootstrap,FaSass,FaReact,} from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"
import {GrOverview} from "react-icons/gr"





export const ProjectsCard = () => {
  return (
     <div className="project-card">

                  <div className="project-image">
                      
                      <img src={demo} alt="" />

                  </div>
                  
                  <div className="project-description">
                      
              <h3>Portfolio Website</h3>
              <p>A Minimal Portfolio Website, Showcasing Some Basic Informations About Me, My Skills Set, and Some Of My Projects.</p>

                  </div>

                  <div className="project-technologies">

                    <FaReact />
              

                  </div>

                <div className="project-navigation">
              
                    <p><a href="/">  <FiExternalLink/> View Live Website</a></p>
                    <p><a href="/"> Project Details</a></p>
                      
                  </div>
                  
        </div>
  )
}
