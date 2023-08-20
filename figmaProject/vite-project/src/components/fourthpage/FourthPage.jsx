import React from 'react'

// css import
import "./FourtPage.css"

// image import
import Studentimg from "../../assets/Mask group.png"


function FourthPage() {
  return (
    <>
     <div className="fourthpage-wrapper">
        <div className='offer-wrapper'>
           <div className='offer-details'>
             <p className='offer-subtitle1'>Get 20% off for student</p>
             <p className='offer-heading'>Student discounts available</p>
             <p className='offer-quote'>Get ready for fun in the sun</p>

             <ul className='offer-lists'>
                <li>Lorem Ipsum has been the industry's</li>
                    <br></br>
                <li>Lorem Ipsum has been the industry's</li>
                    <br></br>
                <li>Lorem Ipsum has been the industry's</li>
                    <br></br>
                <li>Lorem Ipsum has been the industry's</li>
                    <br></br>
                <li>Lorem Ipsum has been the industry's</li>
                    <br></br>
             </ul>
             <button className='explore-more'>Explore more</button>
           </div>

        </div>
         <div className='student-imgWrapper'>
             <img className='student-img' src={Studentimg}/>
         </div> 
     </div>
    
    </>
  )
}

export default FourthPage
