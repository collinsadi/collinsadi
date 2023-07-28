import React from 'react'
import developer from "../images/developer.jpg"
import "./Hero.css"

export const Hero = () => {
  return (
      <div className='hero-section' >
          
          <div className="hero-section-inner">

              <div className="hero-section-left">

                  <div className="introduction1">
                      <h1>I'm <span>Collins Oribo</span> </h1>
                      <p>Web Developer | Tech Enthusiast | Minimalist </p>

                      <a href="#projects"><button>See My Projects</button></a>
                  </div>

              </div>

              <div className="hero-section-right">
                  
                  <div className="developer-image">

                      <img src={developer} alt="developer" />

                  </div>

              </div>

          </div>
           
 </div>
  )
}
