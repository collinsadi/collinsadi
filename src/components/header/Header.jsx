import React from 'react'
import "./Header.css"

export const Header = () => {
  return (
      <header>
          <div className="header-inner">
              
              <div className="header-logo">
                  
                  <h3>COLLINS</h3>

              </div>
              
              <div className="header-buttons">
                  
                  <a href="/about">About</a>
                  <a href="/projects">Projects</a>
                  <a href="/projects">Stack</a>
                  <a href="/projects">Codellins</a>

              </div>

          </div>
    </header>
  )
}
