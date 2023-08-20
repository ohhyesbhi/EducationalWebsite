import React from 'react'

// css import
import "./NavBar.css"

// components import
import FirstPage from '../firstpage/FirstPage'
import Secondpage from '../secondpage/Secondpage'
import ThirdPage from '../thirdpage/ThirdPage'
import FourthPage from '../fourthpage/FourthPage'
import FifthPage from '../fifthpage/FifthPage'
import SixthPage from '../sixthpage/SixthPage'
import SeventhPage from '../seventhpage/SeventhPage'
import Header from '../header/Header'

function NavBar() {
  return (
   <>

      <Header color="white" btn1="Offers" btn2="Courses"/>

      <FirstPage/>
      <Secondpage/>
      <ThirdPage/>
      <FourthPage/>
      <FifthPage/>
      <SixthPage/>
      <SeventhPage/>
   </>
  )
}

export default NavBar
