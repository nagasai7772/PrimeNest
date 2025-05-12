import React from 'react'
import { ToastContainer } from 'react-toastify';
// import Header from './Components/Header'
// import About from './Components/About'
// import Projects from './Components/Projects'
// import Reviews from './Components/Reviews'
// import Navbar from './Components/Navbar'
// import Contact from './Components/Contact'
// import Footer from './Components/Footer';
// import WhyUs from './Components/OurLocation';
// import OurLocation from './Components/OurLocation';
import Signup from './Components/Signup';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Homepage from './Components/Homepage';

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer/>
      <Router>
      <Routes>
     
      <Route path='/' element={<Homepage/>}/>
      <Route path="/signup" element={<Signup/>} />
      </Routes>
      </Router>
    </div>
  )
}

export default App