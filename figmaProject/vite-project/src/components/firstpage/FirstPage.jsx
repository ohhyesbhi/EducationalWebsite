import React from 'react'

// css import
import "./FirstPage.css"

// image import
import FirstImage from "../../assets/Group 171.png"

function FirstPage() {
  return (
   <>
   {/* these circles are for design */}
   <div className="circle"></div>
   <div className="circle2"></div>
   <div className="circle3"></div>
   <div className="circle4"></div>
   <div className="circle5"></div>
   <div className="circle6"></div>
   <div className="circle7"></div>

   <div className="firstpage-wrapper">
     <div className='details-wrapper'>
      <div className="details">
          <p className="title-subtitle">Discover the beauty of tropics</p>
          <h1 className="title">Tropical Destinations</h1>
          <p className="title-subtitle2">For student</p>
          <p className='title-subtitle3'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
          <button className='btn-signup'>Sign up</button>
      </div>
     </div>

     <div className="img-wrapper">
         <img className='img' src={FirstImage}/>
     </div>
      
   </div>
   </>
  )
}

export default FirstPage
