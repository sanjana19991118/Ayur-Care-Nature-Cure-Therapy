import React from 'react'
import dietone from './images/dietone.jpg'
import diettwo from './images/diettwo.jpg'
import dietthree from './images/dietthree.jpg'
import dietfour from './images/dietfour.jpg'
import dietfive from './images/dietfive.jpg'
import dietsix from './images/dietsix.jpg'
import dietseven from './images/dietseven.jpg'
import dieteight from './images/dieteight.jpg'
import dietten from './images/dietten.jpg'
import dietnine from './images/dietnine.jpg'
import diettwelve from './images/diettwelve.jpg'
import dietthirteen from './images/dietthirteen.jpg'
import './css/diet.css'

import recipeone from './images/recipeone.jpg'
import recipetwo from './images/recipetwo.jpg'
import recipethree from './images/recipethree.jpg'

import { FaArrowDown } from 'react-icons/fa'
import Footer from './Footer'




const DietChart = (props) => {
     
    return (
        <div>
           <a href="#recipe-list">Check Out ! recipes curated for your better.<FaArrowDown/></a>
           <div className="grid-container ">
                <div className="column">
                 <img src= {dietone}/>
                 <img src={diettwo}/>
                 <img src={dietthree}/>
             </div>
             <div className="column">
                 <img src={dietfour}/>
                 <img src={dietfive}/>
                 <img src={dietsix}/>
             </div>
             <div className="column">
                 <img src={dietseven}/>
                 <img src={dieteight}/>
                 <img src={dietthirteen}/>
                
             </div>
             <div className="column">
                 <img src={dietnine}/>
                 <img src={diettwelve}/>
                 <img src={dietten}/>
             </div>
           </div>

           <ul classNmae="cards" id="recipe-list">
              <li className="cards_item">
                 <div className="card">
                    <div className="card_image"><img src={recipeone} alt="set image properly"></img></div>
                    <div className="card_content">
                        <h2 className="card_title"></h2>
                        <div className="card_text">
                            <p> If there’s one classic bhindi (okra) dish with North Indian flavors, it is the Bhindi Masala. This is a semi-dry preparation featuring the star ingredient okra pods (bhindi in Hindi), piquant onions,tomatoes, bold Indian spices and herbs.It is one of the most popular dishes served in all of North India.
                            </p>
                            <br/>
                            <p>Elaborate Recipe</p>
                        </div>
                    </div>
                 </div>
              </li>
              <li className="cards_item">
                 <div className="card">
                    <div className="card_image"><img src={recipetwo} alt="set image properly"></img></div>
                    <div className="card_content">
                        <h2 className="card_title"></h2>
                        <div className="card_text">
                            <p>Veg Kadai gravy is filled with rich flavors, aromatic spices and vegetables. Made in a kadai (Indian wok) this dish has a medley of onions, tomatoes, bell peppers and various assorted veggies together with spices and cream make a stylish gravy! Serve this wonderful North Indian dish with roti, naan, paratha or steamed basmati rice to make for a satisfying meal.</p>
                            <br/>
                            <p>Elaborate Recipe</p>
                        </div>
                    </div>
                 </div>
              </li>
              <li className="cards_item">
                 <div className="card">
                    <div className="card_image"><img src={recipethree} alt="set image properly"></img></div>
                    <div className="card_content">
                        <h2 className="card_title"></h2>
                        <div className="card_text">
                            <p>Stuffed capsicum recipe with step by step photos. This is a Punjabi style delicious bharwa shimla mirch preparation in which capsicum (bell pepper) are stuffed with spiced mashed potatoes filling and then further cooked. It makes for a comforting side dish to go with any North Indian meal.</p>
                            <br/>
                            <p>Elaborate Recipe</p>
                        </div>
                    </div>
                 </div>
              </li>
           </ul>
           <div className="footer-div">
               <Footer />
           </div>
           
        </div>
    )
}

export default DietChart