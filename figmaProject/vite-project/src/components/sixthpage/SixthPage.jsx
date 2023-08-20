import React from 'react'

// css import
import "./SixthPage.css"

// image import
import testimonialImage1 from "../../assets/Avatar.png"
import testimonialImage2 from "../../assets/Ellipse 1.png"
import testimonialImage3 from "../../assets/Frame 6.png"



function SixthPage() {
  return (
  <>
   <div className="sixthpage-wrapper">
     <div className="testimonials">
         <div className='testimonials-title'>
            <h1 className='testimonials-subtitle'>Testimonials</h1>
         </div>
         <div className='testimonials-wrapper'>
            <div className='items'>
                <img src={testimonialImage1}/>
                <h2 className='names'>Carla press</h2>
                <p className='context'>It's a long established fact that raeder will be distracted by the raedable comtent of page when looking at it's layout</p>
            </div>
            <div className='items'>
                <img src={testimonialImage2}/>
                <h2 className='names'>Corey Korsgaard</h2>
                <p className='context'>It's a long established fact that raeder will be distracted by the raedable comtent of page when looking at it's layout</p>
            </div>
            <div className='items'>
                <img src={testimonialImage3}/>
                <h2 className='names'>Jakob Aminoff</h2>
                <p className='context'>It's a long established fact that raeder will be distracted by the raedable comtent of page when looking at it's layout</p>
            </div>

          </div>
     </div>
   </div>
  </>
  )
}

export default SixthPage
