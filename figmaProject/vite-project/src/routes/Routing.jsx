import React from 'react'
import {Routes,Route} from "react-router-dom"

// component imports
import Home from '../pages/home/Home'
import LandingPage from '../pages/landingpage/LandingPage'
import About from "../pages/about/About"

function Routing() {
  return (
   <>
   <Routes>
     <Route path="/about" element={<Home/>}/>
     <Route path = "/contacts" element={<LandingPage/>}/>
     <Route path = "/" element={<About/>} />
   </Routes>
  </>
  )
}

export default Routing
