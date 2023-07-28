import React from 'react'
import "./Stack.css"
import {FaJs,FaNode,FaCss3,FaHtml5,FaBootstrap,FaSass,FaReact,} from "react-icons/fa"
import {BiLogoTypescript,BiLogoJquery} from "react-icons/bi"
import {SiExpress,SiMongodb,SiFastapi,SiAdobephotoshop} from "react-icons/si"
import {TbBrandVscode} from "react-icons/tb"
import {BsPencilFill} from "react-icons/bs"


export const Stack = () => {
  return (
      <div id='stack' className="stack-section">
          
          <div className="stack-section-inner">
              
              <div className="section-title">

                  <h3>Tools I Proficiently Work With</h3>

              </div>
              
              <div className="stack-list">
                  
                  <div className="stack">
                      
                      <div className="stack-logo">
                          <FaJs />
                      </div>
                      
                      <div className="stack-language">
                          <p>JavaScript</p>
                      </div>

                </div>
                  <div className="stack">
                      
                      <div className="stack-logo">
                          <FaNode />
                      </div>
                      
                      <div className="stack-language">
                          <p>Node Js</p>
                      </div>

                </div>
                  <div className="stack">
                      
                      <div className="stack-logo">
                          <FaReact />
                      </div>
                      
                      <div className="stack-language">
                          <p>React Js</p>
                      </div>

                </div>
                  <div className="stack">
                      
                      <div className="stack-logo">
                          <BiLogoTypescript />
                      </div>
                      
                      <div className="stack-language">
                          <p>Typescript</p>
                      </div>

                </div>
                  <div className="stack">
                      
                      <div className="stack-logo">
                          <SiExpress />
                      </div>
                      
                      <div className="stack-language">
                          <p>Express JS</p>
                      </div>

                </div>
             
                  <div className="stack">
                      
                      <div className="stack-logo">
                          <SiMongodb />
                      </div>
                      
                      <div className="stack-language">
                          <p>Mongo DB</p>
                      </div>

                </div>
                  <div className="stack">
                      
                      <div className="stack-logo">
                          <SiFastapi />
                      </div>
                      
                      <div className="stack-language">
                          <p>Fast API (Python)</p>
                      </div>

                </div>
                  <div className="stack">
                      
                      <div className="stack-logo">
                          <BiLogoJquery />
                      </div>
                      
                      <div className="stack-language">
                          <p>JQuery</p>
                      </div>

                </div>
                  <div className="stack">
                      
                      <div className="stack-logo">
                          <FaHtml5 />
                      </div>
                      
                      <div className="stack-language">
                          <p>HTML</p>
                      </div>

                </div>
                  <div className="stack">
                      
                      <div className="stack-logo">
                          <FaCss3 />
                      </div>
                      
                      <div className="stack-language">
                          <p>CSS</p>
                      </div>

                </div>
                  <div className="stack">
                      
                      <div className="stack-logo">
                          <FaSass />
                      </div>
                      
                      <div className="stack-language">
                          <p>Sass Css</p>
                      </div>

                </div>
                  <div className="stack">
                      
                      <div className="stack-logo">
                          <FaBootstrap />
                      </div>
                      
                      <div className="stack-language">
                          <p>Bootstrap</p>
                      </div>

                </div>
                  <div className="stack">
                      
                      <div className="stack-logo">
                          <TbBrandVscode />
                      </div>
                      
                      <div className="stack-language">
                          <p>VS Code</p>
                      </div>

                </div>
                  <div className="stack">
                      
                      <div className="stack-logo">
                          <SiAdobephotoshop />
                      </div>
                      
                      <div className="stack-language">
                          <p>Adobe Photoshop</p>
                      </div>

                </div>
                  <div className="stack">
                      
                      <div className="stack-logo">
                          <BsPencilFill />
                      </div>
                      
                      <div className="stack-language">
                          <p>Corel Draw</p>
                      </div>

                </div>

              </div>

        </div>

    </div>
  )
}
