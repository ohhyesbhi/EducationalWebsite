import React from 'react'
import { Link } from 'react-router-dom'

// css imports
import "./Header.css"

function Header({color,btn1,btn2}) {
  return (
   <>
  <div className='navbar-wrapper' style={{backgroundColor:color}}>

    <div className='title-wrapper'>
      <Link to="/" style={{textDecoration:"none",color:"black"}}><p className='navLists'>Home</p></Link>
     <Link to="/about"> <p className='navLists'>About</p> </Link>
      <p className='navLists'>Course</p>
      <p className='navLists'>Blog</p>
     <Link to="/contacts"> <p className='navLists'>Contact us</p></Link>
    </div>
    <div className='btn-wrapper'>
      <button className='btn-others'>{btn1}</button>
      <button className='btn-courses'>{btn2}</button>
    </div>

  </div>
   </>
  )
}

export default Header
