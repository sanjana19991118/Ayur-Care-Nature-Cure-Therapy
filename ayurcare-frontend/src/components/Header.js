import React from 'react'
import oilIng from './images/oilIng.jpg'
import oilmassageone from './images/oilmassageone.jpg'
import './css/home.css'

const Home = () => {
     return (
        <div>
            <div className="heading-div">
               <div className="head-one">
                  <img className="image-one" src={oilIng}  alt="no img" /> 
               </div>
                {/* img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600" */}
                <div className="head-two">
                   <h1 className="heading">Ayur Care</h1> 
                   <p className="tagline">Experience the healing power of nature</p>
                </div>
                <div className="head-three">
                   <img  className ="image-two" src={oilmassageone} alt="no img"/>
                </div> 
            </div>
        </div>
     )
}

export default Home