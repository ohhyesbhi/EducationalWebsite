import React from 'react'

// css imports
import "react-multi-carousel/lib/styles.css";
import "./About.css"

// components import
import Header from '../../components/header/Header'
import Footer from "../../footer/Footer"
import AboutPage1 from '../../components/AboutPage1';
import AboutPage2 from '../../components/AboutPage2';
import AboutPage3 from '../../components/AboutPage3';
import AboutPage4 from '../../components/AboutPage4';
import AboutPage5 from '../../components/AboutPage5';
import AboutPage6 from '../../components/AboutPage6';
import AbouPage7 from '../../components/AbouPage7';

// image import
import SuccessImg from "../../assets/Saly-10.png"
import Mentor from "../../assets/mentors/Frame 67.png"
import Mentor1 from "../../assets/mentors/Frame 67 (1).png"
import Mentor2 from "../../assets/mentors/Frame 67 (2).png"
import Mentor3 from "../../assets/mentors/Frame 67 (3).png"

import Image1 from "../../assets/courses/Saly-1.png"
import Image2 from "../../assets/courses/Sample 46.png"
import Image3 from "../../assets/courses/Sample 12.png"
import Image4 from "../../assets/courses/Sample 26.png"

import Category1 from "../../assets/Category/PenNib.png"
import Category2 from "../../assets/Category/FileHtml.png"
import Category3 from "../../assets/Category/MicrophoneStage.png"
import Category4 from "../../assets/Category/Briefcase.png"
import Category5 from "../../assets/Category/SunHorizon.png"
import Category6 from "../../assets/Category/Camera.png"
import Category7 from "../../assets/Category/MusicNote.png"
import Category8 from "../../assets/Category/Database.png"
import Category9 from "../../assets/Category/Lightbulb.png"
import Category10 from "../../assets/Category/Heartbeat.png"
import Category11 from "../../assets/Category/Graph.png"
import Category12 from "../../assets/Category/Detective.png"

import Educator1 from "../../assets/Instructors/Rectangle 16.png"
import Educator2 from "../../assets/Instructors/Rectangle 16 (1).png"
import Eductaor3 from "../../assets/Instructors/Rectangle 16 (2).png"
import Educator4 from "../../assets/Instructors/Rectangle 16 (3).png"

import Feedback1 from "../../assets/feedbacks/Rectangle 25.png"
import Feedback2 from "../../assets/feedbacks/Rectangle 25 (1).png"
import Feedback3 from "../../assets/feedbacks/Rectangle 25 (2).png"

import learningImg1 from "../../assets/feedbacks/Saly-1.png"



function About() {
 

  return (
  <>
   <Header color="#6176f7" btn1="Login" btn2="Colleges"/>
   
   <AboutPage1 Image={SuccessImg}/>

   <AboutPage2 Image1={Mentor} Image2={Mentor1} Image3={Mentor2} Image4={Mentor3}/>
 
   <AboutPage3 Image1={Image1} Image2={Image2} Image3={Image3} Image4={Image4} />

   <AboutPage4 Image1={Category1} Image2={Category2} Image3={Category3} Image4={Category4} Image5={Category5} Image6={Category6} Image7={Category7} Image8={Category8} Image9={Category9} Image10={Category10} Image11={Category11}  Image12={Category12}/>

   <AboutPage5 Image1={Educator1} Image2={Educator2} Image3={Eductaor3} Image4={Educator4} />

   <AboutPage6 Image1={Feedback1} Image2={Feedback2} Image3={Feedback3} />

   <AbouPage7 Image1={learningImg1}/>

   <Footer/>
  </>
  )
}

export default About
