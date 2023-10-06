//Accordian.js

import { useState } from 'react'
import oilmassage2 from './images/oilmassage2.jpg'
import noweightcheck from './images/noweightcheck.jpg'
import stressfreerelax from './images/stressfreerelax.jpg'
import weightlesschart from './images/weightlesschart.jpg'
import saltOilGlow from './images/saltOilGlow.jpg'
import yogaAsana from './images/yogaAsana.jpg'


import { FaCameraRetro } from "react-icons/fa";
import './css/accord.css'

const cards = [
    {
        header: "oilmassage",
        image: oilmassage2,
        text: 'We provide oil massage'
    },
     {
        header: "stress management",
        image: stressfreerelax,
        text: 'Treatment curated for stress management'
    },
    {
        header: "weight reduction program",
        image: noweightcheck,
        text: 'Trusted treatments for weight reduction'
    },
     {
        header: "weight management",
        image: weightlesschart,
        text: 'Treatment and guidance for managing weight'
    },
      {
        header: "salt oil GLow",
        image: saltOilGlow,
        text: 'Treatment and guidance for managing weight'
    },
    {
        header: "yoga Asana",
        image: yogaAsana,
        text: 'Treatment and guidance for managing weight'
    },
    
    
];

const Accordian = () => {
    const [active, setActive] = useState(0);

    return (
        <section style={{width: "500px", height: "100px"}}>
            {cards.map((card, index) => (
                <article
                  key={card.image}
                  className={
                    active === index ? "active" : " "
                  }
                  onClick={() => setActive(index)}
                >
                    
                    <div>
                        <img src={card.image} alt="no img" />
                        <span>
                             <FaCameraRetro />
                        </span>
                        <div>
                            <h2 style={{color: "red"}}>{card.header}</h2>
                            <p>{card.text}</p>
                        </div>
                    </div>

                </article>
            ))}
        </section>
    )
}

export default Accordian