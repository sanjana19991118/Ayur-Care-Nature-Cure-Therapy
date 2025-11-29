import React from 'react'
import Header from './Header'
import Home from './Home'
import Treatment from './Treatment'
import Bookings from './Bookings'
import Packages from './Packages'
import DetailedInfo from './DetailedInfo'
import DietChart from './DietChart'
import { Link, Route, withRouter } from 'react-router-dom'
import './css/navbar.css'
// images
import A from './images/A.PNG'
import C from './images/C.PNG'


const Navbar = () => {
     
     return ( 
        <div>
                  <Header />
                   <nav className="navbar navbar-dark " style={{ height : '50px'}}>
                        <button className="btn btn-outline-warning border-warning details-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                           <b className="details-text">Access More Details</b>
                        </button>

                    <div className="offcanvas offcanvas-top  bg bg-light" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                    <div className="offcanvas-header">
                       
                        <h5 id="offcanvasTopLabel" className="details-canvas-title"><strong> 
                              <img className="canvas-logo rounded-circle border border-warning" src={A} alt="Card  cap1"  />  
                                  &nbsp; &nbsp; Get More Information  &nbsp; &nbsp;
                              <img className="canvas-logo rounded-circle border border-warning" src={C} alt="Card  cap1" /> </strong></h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                    
                          <ul className="list-page">
                            <li >
                                <Link className="list-page-links" to="/" style ={{textDecoration: 'none', color: '#3d1802', fontFamily : 'Caprasimo , cursive'}}>Home</Link>
                            </li>
                            <li >
                                 <Link className="list-page-links" to="/treatment" style={{textDecoration: 'none', color: '#3d1802', fontFamily : 'Caprasimo , cursive'}}>Treatment</Link>
                            </li>
                            <li >
                                 <Link  className="list-page-links" to="/packages" style={{textDecoration: 'none', color: '#3d1802', fontFamily : 'Caprasimo , cursive'}}>Packages</Link>
                            </li>
                            <li >
                                 <Link  className="list-page-links"  to="/bookings" style={{textDecoration: 'none', color: '#3d1802', fontFamily : 'Caprasimo , cursive'}}>Bookings</Link>
                            </li> 
                            <li >
                                 <Link  className="list-page-links" to="/detailspage" style={{textDecoration: 'none', color: '#3d1802', fontFamily : 'Caprasimo , cursive'}}>Details</Link>
                            </li>  
                            <li >
                                 <Link  className="list-page-links" to="/dietChart" style={{textDecoration: 'none', color: '#3d1802', fontFamily : 'Caprasimo , cursive'}}>Diet</Link>
                            </li>    
                            
                       </ul>
                    </div>
                    </div>
                     
                   </nav>
                    <Route path="/" component={Home} exact={true}  />
                    <Route path="/treatment" component={Treatment}  />
                    <Route path="/bookings" component={Bookings} />

                    <Route path="/packages" component={Packages} />
                    <Route path='/detailspage' component={DetailedInfo} />
                    <Route path="/dietChart" component={DietChart} />

        </div>
     )
}

export default withRouter(Navbar)