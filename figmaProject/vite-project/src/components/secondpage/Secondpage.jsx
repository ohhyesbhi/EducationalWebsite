import React from 'react'
import "./Secondpage.css"
import Image1 from "../../assets/avatar (1).png"
import Image2 from "../../assets/avatar (2).png"
import Image3 from "../../assets/avatar.png"

function Secondpage() {
  return (
  <>
  <div className="secondpage-wrapper">
    <div className="Allacct">
      <div className='acct'>
          <div className="first-acct">

              <div className='image-wrapper'>
                <img src={Image1} className='image'/>
              </div>
              <div style={{display:"flex",flexDirection:"column"}}>
                <h4 className='name'>Heema</h4>
                <p className='info'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
              </div> 

          </div>

          <div className="first-acct">

            <div className='image-wrapper'>
              <img src={Image2} className='image'/>
            </div>
            <div style={{display:"flex",flexDirection:"column"}}>
              <h4 className='name'>Heema</h4>
              <p className='info'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
            </div> 

          </div>

          <div className="first-acct">

            <div className='image-wrapper'>
              <img src={Image3} className='image'/>
            </div>
            <div style={{display:"flex",flexDirection:"column"}}>
              <h4 className='name'>Heema</h4>
              <p className='info'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
            </div>

          </div>
        </div>
    </div>

     <div className="vacation">
     <p className='title1'>Tropical adventure</p>
     <p className='subtitle'>For students</p>
     <p className='text'>Student Tropical Vacation: Relac and Recharge</p>
     <ul>
        <li>Lorem Ipsum has been the industry's</li>
        <br></br>
        <li>Lorem Ipsum has been the industry's</li>
        <br></br>
        <li>Lorem Ipsum has been the industry's</li>
        <br></br>
        <li>Lorem Ipsum has been the industry's</li>
        <br></br>
        <li>Lorem Ipsum has been the industry's</li>

     </ul>
     <button className='explore-more'>Explore more</button>
     </div>
    
  </div>
  </>
  )
}

export default Secondpage
