import React from 'react'
import "./Projects.css"
import { ProjectsCard } from '../projectscard/ProjectsCard'
import demo from "../images/portfoliowebsite.png"
import formlinx from "../images/formlinx.png"
import hadifoxapi from "../images/hadifoxapi.png"
import gimbalite from "../images/gimbalite.png"
import hadifox from "../images/hadifox.png"



import {FaJs,FaNode,FaCss3,FaHtml5,FaBootstrap,FaSass,FaReact,} from "react-icons/fa"
import {SiExpress,SiMongodb,SiFastapi} from "react-icons/si"

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


                  

                  <ProjectsCard image={demo} title="Portfolio Website" desc="A Minimal Portfolio Website, Showcasing Some Basic Informations About Me, My Skills Set, and Some Of My Projects." icons={[<FaReact />]} link="https://github.com/collinsadi/collinsadi" />
                  
                  <ProjectsCard image={formlinx} title="Formlinx" desc="Advanced Form Handler API, designed to effortlessly direct HTML form submissions to users' email addresses. Simplify communication, capture crucial information, and build meaningful connections with ease." icons={[<FaNode />, <FaCss3 />, <SiExpress />, <SiMongodb />]} link="https://formlinx.onrender.com/" />
                  
                <ProjectsCard image={hadifoxapi} title="Hadifox V2" desc="I have developed an eCommerce website API that comes packed with complete eCommerce functionality. However, please note that the frontend implementation is still pending. For detailed information, you can find the documentation below." icons={[<FaNode />,<SiExpress />, <SiMongodb />]} link="https://hadifox-test.onrender.com/docs/#/"  />
                  
                  <ProjectsCard image={gimbalite} title="Gimba Lite" desc="Discover My fully functional blog content management system, equipped with a user verification system, community control, personalized user profiles, and a powerful rich text editor. This editor empowers users to create and format content effortlessly, making their blogging experience seamless and enjoyable. Stay tuned for the upcoming advanced version, which will introduce even more exciting features to elevate your blogging journey." icons={[<FaNode />, <SiExpress />, <FaCss3 />, <SiMongodb />]} link="https://gimba.onrender.com/" />
                  
                <ProjectsCard image={hadifox} title="Hadifox V1" desc="A really cool online shopping website, I used HTML, CSS, and JavaScript to build it. It was a fun and exciting project where I got to design how the website looks and how people can interact with it." icons={[<FaHtml5 />,<FaSass />,<FaCss3 />, <FaJs />]} link="https://collinsadi.github.io/hadifox/"  />





                  
             
                  
              </div>

              
              

        </div>

    </div>
  )
}
