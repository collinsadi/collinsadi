import React from 'react'
import {Header} from "../../components/header/Header"
import { Hero } from '../../components/hero/Hero'
import { Stack } from '../../components/stack/Stack'
import { Projects } from '../../components/Projects/Projects'
import { Aboutme } from '../../components/aboutme/Aboutme'
import { Contact } from '../../components/contact/Contact'
import { Footer } from '../../components/footer/Footer'

export const HomePage = () => {
  return (
      <>
    
      <Header />
      <Hero />
      <Stack />
      <Projects />
      <Aboutme />
      <Contact />
      <Footer />
          
      </>
  )
}
