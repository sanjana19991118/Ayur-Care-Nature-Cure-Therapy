import React from 'react'
import '../components/css/home.css' 


const Footer  = () => {


    return (
         <div>
           <div className="footer-details">
                <h1 className="footer-head">Contact Us</h1>
                <p style={{fontSize: '12px'}}>
                    # 1537/1, 9th Main Road, 3rd Block, Near Bank Of Baroda, Jayanagar, Bangalore - 560011.
                    <h3 style={{color : '#0da168', fontFamily: 'Rubik, sans-serif', fontSize: '20px'}}>Timmings</h3>
                    7.00am–12.00noon
                    1.00pm–6.00pm
                    Weekly Holiday: Tuesday
                </p>
                 <p style={{fontSize: '12px'}}><strong style={{color: '#0da168'}}>Phone No:</strong> +91 80 2663 1945 / 2244 6035</p>
                 <hr/>
                 <p style={{ fontSize: '12px'}}>© 2018 Nature Cure Hospital. All rights reserved  |  <a href="infokpcpt@gmail.com" style={{color: '#0da168', fontSize: '12px' }}>infokpcpt@gmail.com</a></p>
             </div>
        </div>
    )
}

export default Footer