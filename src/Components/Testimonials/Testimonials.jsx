import React, { useRef, useState } from 'react'
import "./Testimonials.css"
const Testimonials = () => {
  const slider=useRef();
  let tx=0;
  const slideForward =()=>{
     if(tx>-50){
      tx -=25;
     }
     slider.current.style.transform=`translateX(${tx}%)`
  }
  const slideBackward=()=>{
    if(tx<0){
      tx +=25;
     }
     slider.current.style.transform=`translateX(${tx}%)`
  }
  return (
    <div className='testimonials'>
      <div className='bi bi-arrow-right next-btn' onClick={slideForward}></div>
      <div className='bi bi-arrow-left back-btn' onClick={slideBackward}></div>
      <div className="slider">
         <ul ref={slider}>
          <li>
            <div className="slide">
              <div className='user-info'>
              <img src='https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg'></img>
              <div>
                <h3>William Jackson</h3>
                <span>Edusity ,USA</span>
              </div>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis veniam amet provident officiis animi beatae repellendus explicabo numquam libero neque quis iusto, quidem assumenda dolore minima quaerat ea aperiam sint.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit necessitatibus aliquid quas, placeat quasi ducimus temporibus facilis ea vel ullam omnis debitis molestias accusamus similique nobis. Adipisci, aliquid aperiam! Rem.
              </p>
            </div>
            </li>
            <li>
            <div className="slide">
              <div className='user-info'>
              <img src='https://lifetouch.com/wp-content/uploads/2018/06/Underclass_girlwithbluebg.jpg'></img>
              <div>
                <h3>William Jackson</h3>
                <span>Edusity ,USA</span>
              </div>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis veniam amet provident officiis animi beatae repellendus explicabo numquam libero neque quis iusto, quidem assumenda dolore minima quaerat ea aperiam sint.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit necessitatibus aliquid quas, placeat quasi ducimus temporibus facilis ea vel ullam omnis debitis molestias accusamus similique nobis. Adipisci, aliquid aperiam! Rem.
              </p>
            </div>
            </li>
            <li>
            <div className="slide">
              <div className='user-info'>
              <img src='https://i.pinimg.com/originals/7a/8c/6f/7a8c6f3d25e3b3d5b1179e6aee39ce23.jpg'></img>
              <div>
                <h3>William Jackson</h3>
                <span>Edusity ,USA</span>
              </div>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis veniam amet provident officiis animi beatae repellendus explicabo numquam libero neque quis iusto, quidem assumenda dolore minima quaerat ea aperiam sint.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit necessitatibus aliquid quas, placeat quasi ducimus temporibus facilis ea vel ullam omnis debitis molestias accusamus similique nobis. Adipisci, aliquid aperiam! Rem.
              </p>
            </div>
            </li>
         </ul>
      </div>
    </div>
  )
}

export default Testimonials
