import React from 'react'
import "./Contact.css"

export const Contact = () => {
  return (
   <div className="contact-section">

          <div className="section-title">
              <h3>Contact Me</h3>
          </div>

          <div className="contact-form">

              <form method='POST' action="https://formlinx.onrender.com/api/form/X9RQ7qyU3">
                  
                  <input required placeholder='Your Name Please' name='name' type="text" />
                  
                <input placeholder='Your Email Please (optional) ' name='email' type="email" />

                  <textarea required placeholder='Your Message Please' name="message" ></textarea>

                  <button>Send Message</button>

            </form>
              
          </div>
          
   </div>
  )
}
