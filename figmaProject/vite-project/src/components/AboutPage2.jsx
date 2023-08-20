
function AboutPage2({Image1,Image2,Image3,Image4}) {
  return (
<>
<div className="details-mentor">
     <div className="mentorship-wrapper1">
         <img src={Image1}/>
         <div style={{marginLeft:"0.5rem"}}>
          <h3 style={{fontWeight:"bold"}}>300</h3>
          <p>Instructor</p>
         </div>
     </div>

     <div className="mentorship-wrapper1">
         <img src={Image2}/>
         <div style={{marginLeft:"0.5rem"}}>
          <h3 style={{fontWeight:"bold"}}>20,000+</h3>
          <p>Student</p>
         </div>
     </div>

     <div className="mentorship-wrapper1">
         <img src={Image3}/>
         <div style={{marginLeft:"0.5rem"}}>
          <h3 style={{fontWeight:"bold"}}>10,000</h3>
          <p>Video</p>
         </div>
     </div>

     <div className="mentorship-wrapper1">
         <img src={Image4}/>
         <div style={{marginLeft:"0.5rem"}}>
          <h3 style={{fontWeight:"bold"}}>1,00,000+</h3>
          <p>users</p>
         </div>
     </div>
   </div>

 
</>    
  )
}

export default AboutPage2
