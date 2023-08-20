import {useState} from 'react'

//css imports
import "./FifthPage.css"

// image imports
import Studentformimage from "../../assets/Group 167.png"

function FifthPage() {

    const[star,setStar] = useState(0);
    const[book,setBook] = useState(0);
  return (
   <>
 <div className="circle8"></div>
   <div className="circle9"></div>
    <div className="fifthpage-wrapper">
      <div className='studentform-image'>
        <img className='studentImage' src={Studentformimage}/>
      </div>
      <div className="contacts-form">
         <div className='student-form'>
            <h1 className='heading'>Book now</h1>
            <br></br>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
            <br></br>
            <p className='heading1'>City</p>
            <br></br>
            <input className='ip-city' placeholder='City' id='city'/>
            <br></br>
            <div className='booking-title'>
                <h2 className='arrival heading1'>Arrivale</h2>
                <h2 className='departure heading1'>Departure</h2>
            </div>
            <br></br>
            <div className='booking-ip'>
                <input className='arrival-ip' placeholder='10 october'/>
                <input className='departure-ip' placeholder='11 october'/>
            </div>
            <br></br>
            <div className='booking-title'>
                <h2 className='stars heading1'>Stars</h2>
                <h2 className='rooms heading1'>Rooms</h2>
            </div>
            <div className='numbers-ofBooking'>
                <div className='stars-ip'>
                    <p className='plus' onClick={()=>setStar(star+1)}>+</p>
                    <p className='star-value'>{star}</p>
                    <p className='minus'  onClick={()=>setStar(star-1)}> -</p>
                </div>
                <div className='rooms-ip'>
                    <p className='plus' onClick={()=>setBook(book+1)}>+</p>
                    <p className='star-value'>{star}</p>
                    <p className='minus'  onClick={()=>setBook(book-1)}> -</p>
                </div>
            </div>

            <button className='btn-booknow'>BOOK NOW</button>
         </div>
      </div>
    </div>
     
   </>
  )
}

export default FifthPage
