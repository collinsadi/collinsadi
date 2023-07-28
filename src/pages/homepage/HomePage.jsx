import React from 'react'
import {Header} from "../../components/header/Header"
import { Hero } from '../../components/hero/Hero'
import { Stack } from '../../components/stack/Stack'
import { Projects } from '../../components/Projects/Projects'

export const HomePage = () => {
  return (
      <>
    
      <Header />
      <Hero />
      <Stack />
      <Projects />
          
      </>
  )
}
