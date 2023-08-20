import React from 'react'

import Carousel from "react-multi-carousel";

function AboutPage6({Image1,Image2,Image3}) {
    const responsives = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        }
      };
  return (
<>
<div className="my-feedback">
<h1 className='category-title' style={{fontWeight:"bold"}}>Our Best <span style={{color:"#3461fd"}}>Educator</span></h1>
         <p style={{color:"#8c8888",fontSize:"25px"}}> Various versions have been involved over the years,sometimes by accident,</p>
         <Carousel className='carousel'  responsive={responsives} swipeable={true} autoPlay={true} infinite={true} >
      <div className="card-wrapper">
        <div className='card' style={{display:"flex",flexDirection:"column",height:"380px",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",width:"80%",padding:"1rem",backgroundColor:"white"}}>
           <div className="acct" style={{height:"100px",width:"70%",display:"flex",flexDirection:"row"}}>
             <img src={Image1} style={{width:"50%"}} />
             <div style={{display:"flex",flexDirection:"column",padding:"0.5rem"}}>
               <p style={{margin:"0"}}>GUY HAWKINS</p>
               <p style={{color:"#b3afaf"}}>UI-UX Designer</p>
             </div>
           </div>
           <p style={{fontWeight:"400",marginTop:"0.5rem"}} > Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s own printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
        </div>
      </div>

      <div className="card-wrapper">
        <div className='card' style={{display:"flex",flexDirection:"column",height:"380px",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",width:"80%",padding:"1rem",backgroundColor:"white"}}>
           <div className="acct" style={{height:"100px",width:"70%",display:"flex",flexDirection:"row"}}>
             <img src={Image2} style={{width:"50%"}} />
             <div style={{display:"flex",flexDirection:"column",padding:"0.5rem"}}>
               <p style={{margin:"0"}}>GUY HAWKINS</p>
               <p style={{color:"#b3afaf"}}>UI-UX Designer</p>
             </div>
           </div>
           <p style={{fontWeight:"400",marginTop:"0.5rem"}} > Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s own printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
        </div>
      </div>

      <div className="card-wrapper">
        <div className='card' style={{display:"flex",flexDirection:"column",height:"380px",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",width:"80%",padding:"1rem",backgroundColor:"white"}}>
           <div className="acct" style={{height:"100px",width:"70%",display:"flex",flexDirection:"row"}}>
             <img src={Image3} style={{width:"50%"}} />
             <div style={{display:"flex",flexDirection:"column",padding:"0.5rem"}}>
               <p style={{margin:"0"}}>GUY HAWKINS</p>
               <p style={{color:"#b3afaf"}}>UI-UX Designer</p>
             </div>
           </div>
           <p style={{fontWeight:"400",marginTop:"0.5rem"}} > Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s own printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
        </div>
      </div>

      
     
     </Carousel>
</div>
</>
  )
}

export default AboutPage6
