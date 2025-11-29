import React from 'react'
import pain from './images/pain.jpg'
import balance from './images/balance.jpg'
import detox from './images/detox.jpg'
import Footer from './Footer'
import { useSelector } from 'react-redux'
import stressfree from './images/stressfree.png'
import weightless from './images/weightless.jpg'
import noweight from './images/noweight.jpg'
import './css/package.css'

const Packages = () => {

   const packageDetails = useSelector((state) => {
        return state.package.package
    })  

     return (
        <div>
            <h1 className="package-head-one">  <img className="pack-img-two" src={balance}  alt="no img" /> Curated Packages</h1>
            <img className="pack-img-one" src={pain}  alt="no img" />
            
            <img className="pack-img-three" src={detox}  alt="no img" /> 
            
            

            {
              packageDetails.map((p) => {
                  <table className="table table-warning" style={{ marginLeft: '220px' , width : '800px', marginTop: '-500px', fontSize: '20px', fontWeight : '5'}}>
            <thead className="thead">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Package</th>
                <th scope="col">Price</th>
                {/* <th scope="col">Handle</th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>{p.packageName}</td>
                <td>{p.price}</td>
                {/* <td>@mdo</td> */}
              </tr>
              
            </tbody>
          </table>

              })
            }



             
          <table className="table table-warning" style={{ marginLeft: '220px' , width : '800px', marginTop: '-300px', fontSize: '20px', fontWeight : '5'}}>
            <thead className="thead">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Package</th>
                <th scope="col">Price</th>
                {/* <th scope="col">Handle</th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Detox Management</td>
                <td>10000</td>
                {/* <td>@mdo</td> */}
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Stress Management</td>
                <td>3500</td>
                {/* <td>@fat</td> */}
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Weight Management</td>
                <td>15000</td>
                {/* <td>@twitter</td> */}
              </tr>
            </tbody>
          </table>

            <img className="pack-img-four" src={stressfree}  alt="no img" /> 
            <img className="pack-img-five" src={weightless}  alt="no img" /> 
            <img className="pack-img-six" src={noweight}  alt="no img" /> 

          <Footer/>
        </div>

     )
}

export default Packages