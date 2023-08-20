import React from 'react'
import Carousel from "react-multi-carousel";


function AboutPage5({Image1,Image2,Image3,Image4}) {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
        }
      };
  return (
 <>
           <div className="best-instructors">
         <h1 className='category-title' style={{fontWeight:"bold"}}>Our Best <span style={{color:"#3461fd"}}>Educator</span></h1>
         <p style={{color:"#8c8888",fontSize:"25px"}}> Various versions have been involved over the years,sometimes by accident,</p>
         <Carousel className='carousel'  responsive={responsive} swipeable={true} autoPlay={true} infinite={true} >
      <div className="card-wrapper">
        <div className='card' style={{height:"350px",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",width:"70%",backgroundColor:"white"}}>
        <img src={Image1} style={{width:"100%"}}/>
        <p className='college-names'>Jacob Jones</p>
        <p style={{padding:"0.5rem"}}>UI-UX design expert</p>
        </div>
      </div>

      <div className="card-wrapper">
        <div className='card' style={{height:"350px",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",width:"70%",backgroundColor:"white"}}>
        <img src={Image2} style={{width:"100%"}}/>
        <p className="college-names">Jacob Jones</p>
        <p style={{padding:"0.5rem"}}>Socila media Expert</p>
        </div>
      </div>

      <div className="card-wrapper">
        <div className='card' style={{height:"350px",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",width:"70%",backgroundColor:"white"}}>
        <img src={Image3} style={{width:"100%"}}/>
        <p className="college-names" >Jacob Jones</p>
        <p style={{padding:"0.5rem"}}>Buisness Expert</p>
        </div>
      </div>

      <div className="card-wrapper">
        <div className='card' style={{height:"350px",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",width:"70%",backgroundColor:"white"}}>
        <img src={Image4} style={{width:"100%"}}/>
        <p className="college-names">Jacob Jones</p>
        <p style={{padding:"0.5rem"}}>Photography Expert</p>
        </div>
      </div>
     
     </Carousel>
         </div> 
 </>
  )
}

export default AboutPage5
