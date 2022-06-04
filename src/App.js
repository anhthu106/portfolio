import React from 'react'

import Homepage from './components/Homepage'
import About from './components/About'
import Project from './components/Project'
import Footer from './components/Footer'
import Skill from './components/Skill'
import Contact from './components/Contact'

import './style/portfolio.css'
import './style/responsive.css'
import './index.css'

const App = () => {
  return (
    <div className='container'>
      <main id='main'>
        <Homepage />
        <About />
        <Skill />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
