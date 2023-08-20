// css import
import './LandingPage.css'

// image import
import MobileImage from '../../assets/mobile.png'
import TimeImage from '../../assets/time.png'
import LocationImage from '../../assets/Location.png'
import OneImage from '../../assets/one.png'
import TwoImage from '../../assets/two.png'
import ThreeImage from '../../assets/three.png'

// component import
import Header from '../../components/header/Header'
import Footer from "../../footer/Footer"

function LandingPage () {

   

    return (
        <>
        <Header color="#6176f7" btn1="Login" btn2="Colleges"/>
            <div className="main">
                <div className="first">
                        <h2 style={{fontWeight:"bolder",fontSize:"25px"}}>Get In Touch With Us</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse inventore Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse inventore velit ut ab quo corporis laboriosam consequuntur impedit nemo culpa.</p>
                </div>
                <div className="parent-of-second-third">
                  <div className="second">
                    <div className="second-left-side" style={{marginTop:"2rem"}}>
                        <img src={LocationImage} alt=''/>
                        <h4>Address</h4>
                        <p>238 5th SE Avenue, New York NY10000, United States</p>
                        <br></br>
                        <img src={MobileImage} alt=''/>
                        <h4 >Phone</h4>
                        <p>238 5th SE Avenue, New York NY10000, United States</p>
                        <br></br>
                        <img src={TimeImage} alt=''/>
                        <h4>Working Time</h4>
                        <p>238 5th SE Avenue, New York NY10000, United States</p>
                    </div>
                   </div>
                    <div className="third">
                      <div className="second-right-side">
                        <p>Your Name</p>
                        <input type="text"  placeholder='ABC' id="border"/>
                        <p>Email Address</p>
                        <input type="text"  placeholder='Abc@gmail.com' id="border"/>
                        <p>Subject</p>
                        <input type="text"  placeholder='This is optional' id="border"/>
                        <p>Message</p>
                        <textarea rows="10" cols="60" placeholder='Hi! i would like to ask about' id="border"/>  
                        <button id='btn'>Submit</button>                  
                      </div>
                    </div>
                </div>

                <div className="bottom-part">
                    <div className="parent">
                        <div className="one">
                            <img src={OneImage} alt="" />
                            <div className="child-of-one">
                                <h5>Hight Quality</h5>
                                <p>created from top Instructors</p>
                            </div>
                        </div>
                        <div className="one">
                            <img src={TwoImage} alt="" />
                            <div className="child-of-one">
                                <h5>Renual option</h5>
                                <p>Over 2 Years</p>
                            </div>
                        </div>
                        <div className="one">
                        <img src={ThreeImage} alt="" />
                            <div className="child-of-one">
                                <h5>22 / 7</h5>
                                <p>Dedicated support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

  <Footer/>
        </>
    )
}

export default LandingPage;