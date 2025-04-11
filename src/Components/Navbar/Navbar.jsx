import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky ,setSticky ] = useState(false);
  useEffect(()=>{
  window.addEventListener('scroll',()=>{
    window.scrollY > 50 ? setSticky(true) :setSticky(false);
  })
  },[]);
  const [mobileMenu ,setMobilemenu]=useState(false)
  const toggleMenu=()=>{
    mobileMenu?setMobilemenu(false):setMobilemenu(true);
  }
  return (
  
        <nav className={`Container  ${sticky? 'dark-nav' : ''}`}>
          <div className='bi bi-mortarboard-fill fs-1 logo '><span className=' fs-3'> 𝕰𝖉𝖚𝖙𝖆𝖑k</span></div>       
          <ul className={mobileMenu?'':'hide-mobile-menu'}> 
            <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to="program" smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to="about" smooth={true} offset={-150} duration={500}>About-us</Link></li>
            <li><Link to="testimonials" smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to="campus" smooth={true} offset={-150} duration={500}>About-us</Link></li>

            <li className='mt-3'><Link className='nav-btn text-decoration-none ' to="contact" smooth={true} offset={0} duration={500} >Contact</Link></li>
        </ul>
        <div className='menu-icon bi bi-list' onClick={toggleMenu}></div>
        </nav>
      
    
  )
}

export default Navbar
