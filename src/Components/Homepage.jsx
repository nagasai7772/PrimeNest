import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import About from './About'
import Projects from './Projects'
import OurLocation from './OurLocation'
import Reviews from './Reviews'
import Contact from './Contact'
import Footer from './Footer'

const Homepage = () => {
  return (
    <div>
        <Navbar/>
      <Header/>
      <About/>
      <Projects/>
      <OurLocation/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Homepage