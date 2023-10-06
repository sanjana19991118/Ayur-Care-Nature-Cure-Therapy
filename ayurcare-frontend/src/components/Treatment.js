import React from 'react'
import Footer from './Footer'
import Bookings from './Bookings'
import { useSelector } from 'react-redux'
import powdertwo from './images/powdertwo.jpg'
import yoga from './images/yoga.png'
import { Link } from 'react-router-dom'
// import border from './images/border.png'
// import left from './images/left.PNG'
import sauna from './images/sauna.jpg'
import chart5 from './images/chart5.png'
import chart2 from './images/chart2.jpg'
import chart3gif from './images/chart3gif.gif'
import chart4gif from './images/chart4gif.png'
import './css/treat.css'

const Treatment = () => {
      const treatmentDetails = useSelector((state) => {
        return state.treatment.treatment
    }) 

     return (
        <div>
            
            <h1 className="treat-head-one">Individual Therapies</h1>
            {/* <img className="treat-img-three" src={border}  alt="no img" />  */}
            <img className="treat-img-one" src={yoga}  alt="no img" /> 
            <img className="treat-img-two" src={powdertwo}  alt="no img" /> 
            <img className="treat-img-five" src={sauna}  alt="no img" /> 
            {/* <img className="treat-img-four" src={left}  alt="no img" /> */}

          <table className="table table-warning" style={{ marginLeft: '220px' , width : '800px', marginTop: '-500px', fontSize: '20px', fontWeight : '5'}}>
            <thead className="thead">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Therapy</th>
                <th scope="col">Price</th>
                {/* <th scope="col">Handle</th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Oil Massage</td>
                <td>550</td>
                {/* <td>@mdo</td> */}
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Powder Massage</td>
                <td>700</td>
                {/* <td>@fat</td> */}
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>salt Glow Massage</td>
                <td>1200</td>
                {/* <td>@twitter</td> */}
              </tr>
            </tbody>
          </table>


          {/* <div id="carouselExampleControls" className="carousel slide carousel-div" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100 carousel-one" src={chart5} alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100 carousel-two" src={chart2} alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100 carousel-three" src={chart3gif} alt="Third slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100 carousel-four" src={chart4gif} alt="Third slide"/>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only" style={{ color:'black'}}>Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only" style={{ color:'black'}} >Next</span>
                  </a>
               </div> */}


          <div className="bottom-button">
             <label className="label-health">Know about your current health status</label>
             <button type="button" className="btn btn-success  btn-lg btn-block"><Link  className="list-page-links" to="/bookings" style={ { textDecoration : 'none', color: 'white' }}>Health Check</Link></button>
          </div>

          <Footer/>
        </div>
     )
}

export default Treatment