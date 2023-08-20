import React from 'react'
import Carousel from "react-multi-carousel";


// css import
import "react-multi-carousel/lib/styles.css";
import "./ThirdPage.css";

// image import
import Image1 from "../../assets/card-image (1).png"
import Image2 from "../../assets/card-image (2).png"
import Image3 from "../../assets/card-image.png"

function ThirdPage() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
        }
      };

  return (
  <>
   <div className='thirdpage-wrapper'>
     <h2 className='destiny'>Our destinations</h2>

     <Carousel className='carousel'  responsive={responsive} swipeable={true} autoPlay={true} infinite={true} >
      <div className="card-wrapper">
        <div className='card' style={{height:"350px",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",width:"60%",backgroundColor:"white"}}>
           <img src={Image1} style={{width:"100%"}}/>
           <p className='college-names'>Oxfoard University</p>
           <p className='location'>Oxfoard,England</p>
        </div>
      </div>

      <div className="card-wrapper">
        <div className='card' style={{height:"350px",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",width:"60%",backgroundColor:"white"}}>
           <img src={Image2} style={{width:"100%"}}/>
           <p className="college-names">Harvard University</p>
           <p className='location'>Cambridge,Massachusetts,UK</p>
        </div>
      </div>

      <div className="card-wrapper">
        <div className='card' style={{height:"350px",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",width:"60%",backgroundColor:"white"}}>
           <img src={Image3} style={{width:"100%"}}/>
           <p className="college-names" >Stanford University</p>
           <p className='location'>Stanfoard,California</p>
        </div>
      </div>

      <div className="card-wrapper">
        <div className='card' style={{height:"350px",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",width:"60%",backgroundColor:"white"}}>
           <img src={Image2} style={{width:"100%"}}/>
           <p className="college-names">Oxfoard University</p>
           <p className='location'>Oxfoard,England</p>
        </div>
      </div>

      <div className="card-wrapper">
        <div className='card' style={{height:"350px",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",width:"60%",backgroundColor:"white"}}>
           <img src={Image1} style={{width:"100%"}}/>
           <p className="college-names">Harvard University</p>
           <p className='location'>Cambridge,Massachusetts,UK</p>
        </div>
      </div>
      
      <div className="card-wrapper">
        <div className='card' style={{height:"350px",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",width:"60%",backgroundColor:"white"}}>
            <img src={Image1} style={{width:"100%"}}/>
            <p className="college-names">Oxfoard University</p>
            <p className='location'>Oxfoard,England</p>
        </div>
      </div>
     

      <div className="card-wrapper">
        <div className='card' style={{height:"350px",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",width:"60%",backgroundColor:"white"}}>
            <img src={Image3} style={{width:"100%"}}/>
            <p className="college-names">Stanford University</p>
            <p className='location'>Stanfoard,California</p>
        </div>
      </div>

     
     </Carousel>
</div>
  </>
  )
}

export default ThirdPage
