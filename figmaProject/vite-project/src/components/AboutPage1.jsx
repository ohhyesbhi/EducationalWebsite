

function AboutPage1({Image}) {
  return (
<>
   <div className='start-success'>
     <div className='success'>
         <div className='successText'>
           <p style={{fontSize:"25px",color:"yellow",fontWeight:"bold"}}>START TO SUCCESS</p>
           <h1 style={{fontSize:"60px",color:"white",fontWeight:"bold"}}>Access To 5000+ Courses from 300 intructors and institutions</h1>
          <p style={{color:"#c9c4c3",fontSize:"25px",marginTop:"2rem"}}> Various versions have been involved over the years,sometimes by accident,</p>
          <input style={{width:"50%",padding:"1rem",borderRadius:"15px",marginTop:"2rem"}} placeholder='What do you want to learn here?'/>
         </div>
         <div className="successImg">
           <img className='img' src={Image}/>
         </div>
     </div>
   </div>
  
</>
  )
}

export default AboutPage1
