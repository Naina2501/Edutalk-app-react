import React from 'react'
import "./About.css"
const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src="https://st3.depositphotos.com/8214686/35212/i/450/depositphotos_352120552-stock-photo-a-young-female-graduate-against.jpg" alt="" className='about-img' />
        <img src="https://allmedialink.com/wp-content/uploads/2021/12/play-video-icon-transparent.png" alt="" className='play-icon' 
        onClick={()=>
        {setPlayState(true)}
        } />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nuturing Tommorow Leader Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eos eligendi quas sequi. Dolores, nostrum dignissimos. Quos atque dolores quia nam delectus? Iure explicabo ipsum cupiditate fugit dicta eius deleniti.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At esse dolorum quod consectetur quisquam non. Illum, aut voluptatibus. Odit, delectus commodi quos magnam voluptas maiores vero omnis neque sunt similique?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eos eligendi quas sequi. Dolores, nostrum dignissimos. Quos atque dolores quia nam delectus?</p>
      </div>
    </div>
  )
}

export default About
