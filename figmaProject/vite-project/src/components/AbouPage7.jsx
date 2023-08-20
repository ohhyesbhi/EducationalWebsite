

function AbouPage7({Image1}) {
  return (
<>

<div className='join-learning'>
  <div className="learning-img">
  <img src={Image1} style={{width:"90%"}}/>
  </div>
  <div className="learning-wrapper">
     <p className='learning-title'>Join <span style={{color:"#3461fd"}}> World's largest </span> learning platform</p>
     <p className='learning-subtitle'>Start learning by registering for free</p>
     <p className='learning-text'> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s </p>
     <button style={{padding:"1rem",border:"none",borderRadius:"15px",backgroundColor:"#ffbd70",fontSize:"15px",marginTop:"2rem"}}>Sign Up for Free</button>
  </div>
</div>
</>
  )
}

export default AbouPage7
