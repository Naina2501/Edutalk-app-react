import React, { useState } from 'react'
import Navbar from "./Components/Navbar/Navbar"
import Hero from './Components/Hero/Hero'
import Program from './Components/Program/program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact-Us/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/Videoplayer/VideoPlayer'
const App = () => {
  const[playState, setPlayState]=useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
     <div className='Container'>
     <Title subtitle="Our Program" title="what we offer"/>
     <Program/>
     <About setPlayState={setPlayState}/>
     <Title subtitle="Gallery" title="Campus Photos"/>
     <Campus/>
    <Title subtitle="TESTIMONIALS" title="what Students Says"/>
    <Testimonials/>
    <Title subtitle="Contact Us" title="Get In Touch"/>
    <Contact/>
    <Footer/>
     </div>
     <VideoPlayer playState={playState} setPlayState={setPlayState} />

    </div>
  )
}

export default App

