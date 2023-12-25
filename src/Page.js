import React from 'react'
import Home from './Home'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Skills from './Skills'
import Education from './Education'
import Contact from './Contact'

const Page = () => {
  return (
   <div class="p-4 sm:ml-64">
    <Home/>
    <About/>
    <Experience/>
    <Projects/>
    <Skills/>
    <Education/>
    <Contact/>
</div>
  )
}

export default Page