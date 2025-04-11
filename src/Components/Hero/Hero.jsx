import React from 'react'
import "./hero.css"


const Hero = () => {
  return (
    <div className='hero Container'>
      <div className='hero-text'>
        <h2 className='fs-2 fw-bold'>We Ensure education for a better world</h2>
        <p className='fs-6 '>
          Our Cutting-edge curriculum is degsign to enpower students with the knownledge,skills,and experience needed to excel in the dynamics field of education.
         </p>  
        <button className='nav-btn '>Let Connect<span className='bi bi-arrow-right mx-3 fw-bold'></span></button>   
      </div>
      
    </div>
  )
}

export default Hero
