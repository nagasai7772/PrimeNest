import React from 'react'
import { ToastContainer } from 'react-toastify';
import Header from './Components/Header'
import About from './Components/About'
import Projects from './Components/Projects'
import Reviews from './Components/Reviews'
import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import Footer from './Components/Footer';


const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer/>
      <Navbar/>
      <Header/>
      <About/>
      <Projects/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App