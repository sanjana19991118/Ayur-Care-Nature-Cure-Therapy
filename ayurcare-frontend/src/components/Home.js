import React from 'react'
import  Accordian  from '../components/Accordian'
import DetailedInfo from '../components/DetailedInfo'
import Footer from './Footer'
// // import Details from './Details'
// import Bookings from './Bookings'
// image import 
import oilmassagetreat from './images/oilmassagetreat.jpg'
import powdermassage from './images/powdermassage.jpg'
import saunabath from './images/saunabath.jpg'
import hydrotreatment from './images/hydrotreatment.jpg'
import mudthreapy from './images/mudthreapy.jpg'
import yogatherapy from './images/yogatherapy.jpg'
import diettherapy from './images/diettherapy.jpg'
import colonhydrotherapy from './images/colonhydrotherapy.jpg'
import physiotherapy from './images/physiotherapy.jpg'
import accupunture from './images/accupunture.jpg'
import steambath from './images/steambath.jpg'
import EMS from './images/EMS.jpg'
import naturehome from './images/naturehome.jpg'
//Link
import { Link, Route, withRouter } from 'react-router-dom'
// import icon
import {FaAngleDoubleRight } from "react-icons/fa"




const Home = () => {

     return (
        <div>
            <Accordian style={{ padding: "20px" }} />
            <div className="card-one" style={{ width: '100px',  marginTop : '-80px' }}>
                <img className="card-img-top" src={oilmassagetreat} alt="Card  cap1" style={{ width: '200px', borderRadius : '5%'}} />
                <div className="">
                    <h5 className="card-title" style={{marginLeft : '10px'}}>
                        Oil Massage
                    </h5>
                    <Link className="btn btn-outline-warning" style={{textDecoration : 'none', color : '#3d1802'}} to='/detailspage'>Know more <FaAngleDoubleRight /></Link>
                </div>
            </div>
              <div className="card-two" style={{ width: '100px',  marginTop : '40px' }}>
                <img className="card-img-top" src={powdermassage} alt="Card  cap2" style={{ width: '200px', borderRadius : '5%'}} />
                <div className="">
                    <h5 className="card-title" style={{marginLeft : '10px'}}>
                        Vibro Massage or Powder Massage
                    </h5>
                     <Link className="btn btn-outline-warning" style={{textDecoration : 'none', color : '#3d1802'}} to='/detailspage'>Know more <FaAngleDoubleRight /></Link>
                    
                </div>
            </div>
             <div className="card-three" style={{ width: '100px',  marginTop : '-100px' }}>
                <img className="card-img-top" src={saunabath} alt="Card  cap3" style={{ width: '200px', borderRadius : '5%'}} />
                <div className="">
                    <h5 className="card-title" style={{marginLeft : '10px'}}>
                        Sauna Bath
                    </h5>
                    <Link className="btn btn-outline-warning" style={{textDecoration : 'none', color : '#3d1802'}} to='/detailspage'>Know more <FaAngleDoubleRight /></Link>
                </div>
            </div>
             <div className="card-four" style={{ width: '100px',  marginTop : '-425px' }}>
                <img className="card-img-top" src={hydrotreatment} alt="Card  cap3" style={{ width: '200px', borderRadius : '5%'}} />
                <div className="">
                    <h5 className="card-title" style={{marginLeft : '10px'}}>
                        Hydrotherapy
                    </h5>
                    <Link className="btn btn-outline-warning" style={{textDecoration : 'none', color : '#3d1802'}} to='/detailspage'>Know more <FaAngleDoubleRight /></Link>
                    
                </div>
            </div> 
             <div className="card-four" style={{ width: '100px',  marginTop : '-200px' }}>
                <img className="card-img-top" src={mudthreapy} alt="Card  cap3" style={{ width: '200px', borderRadius : '5%'}} />
                <div className="">
                    <h5 className="card-title" style={{marginLeft : '10px'}}>
                         Mud Therapy
                    </h5>
                    <Link className="btn btn-outline-warning" style={{textDecoration : 'none', color : '#3d1802'}} to='/detailspage'>Know more <FaAngleDoubleRight /></Link>
                </div>
            </div> 
            {/* redirect to Details Page  */}
            <Route path="/details" component={DetailedInfo} />
           



            {/* various diseases Addressed */}
            <div className="diseases flip-card"  style={{ marginTop: "450px"}}>
                <h3 className="disease-title" style={{fontFamily : 'Rubik, sans-serif'}}>Diseases Addressed</h3>
                <div className="flip-card-inner">
                     <div className="flip-card-front">
                      <p className="disease-one title">Treatment for</p>
                      <br/>
                      <p className="disease-one">Obesity</p>
                      <p className="disease-one">Diabetes/High Sugar</p>
                      <p className="disease-one">High Blood Pressure</p>
                      <p className="disease-one">High Cholesterol</p>
                      <p className="disease-one">Stress and Anxiety</p>
                     </div>
                     <div className="flip-card-back">
                      <p className="disease-one title">Treatment for</p>
                      <br/>
                      <p className="disease-one">Low back pain</p>
                      <p className="disease-one">Osteo/ Rheumatoid Arthritis</p>
                      <p className="disease-one">Spondylosis</p>
                        <p className="disease-one">Sprained Back</p>
                      <p className="disease-one">All Joint Pains</p>
                     
                     </div>
                     
                </div>
                <br/>
                <div className="flip-card-inner-two ">
                     <div className="flip-card-front-two">
                      <p className="disease-one title">Treatment for</p>
                      <br/>
                      <p className="disease-one">Menstrual Diseases</p>
                      <p className="disease-one">Anemia</p>
                      <p className="disease-one">Thyroid</p>
                      <p className="disease-one">PCOD</p>
                      <p className="disease-one ">Infertility</p>
                     </div>
                     <div className="flip-card-back-two">
                      <p className="disease-one title">Treatment for</p>
                      <br/>
                      <p className="disease-one ">Bronchial Asthma</p>
                      <p className="disease-one ">Allergic Cold</p>
                      <p className="disease-one">Breathing Issues</p>
                      <p className="disease-one">Headache</p>
                      <p className="disease-one">Migraine</p>
                     </div>
                </div>
                <div className="flip-card-inner-three ">
                     <div className="flip-card-front-three">
                      <p className="disease-one title">Treatment for</p>
                      <br/>
                      <p className="disease-one ">Bloating</p>
                      <p className="disease-one">Indigestion</p>
                      <p className="disease-one">Constipation</p>
                      <p className="disease-one">Hyperacidity</p>
                      <p className="disease-one">Unexplained fatigue</p>
                     </div>
                     <div className="flip-card-back-three">
                      <p className="disease-one title">Treatment for</p>
                      <br/>
                       <p className="disease-one">Facial Palsy</p>
                       <p className="disease-one ">Low-grade infection</p>
                       <p className="disease-one ">Allergies</p>
                       <p className="disease-one ">Ear infection</p>
                      <p className="disease-one ">Irritated skin</p>
                     </div>
                     
                </div>
            </div>
            <div> 
                <marquee behavior="scroll" direction="left" width="100%" style={{ marginTop : "80px"}}>
                        <img src={diettherapy}  alt="img one"/>
                        <img src={colonhydrotherapy} alt="img seven" style={{ width: "250px", height: "180px"}}/>
                        <img src={yogatherapy} alt="img two" />
                        <img src={physiotherapy} alt="img three" />
                        <img src={accupunture} alt="img four" style={{ width: "250px", height: "180px"}}/>
                        <img src={EMS} alt="img six" style={{ width: "250px", height: "180px"}}/>
                         <img src={steambath} alt="img six" style={{ width: "250px", height: "180px"}}/>
                </marquee>
              {/* <marquee loop="4" style={{marginTop: "50px", float: "left"}}>
                
                <br/>
                <img src={hydrotreatment} alt="no img"/>
              </marquee>
               <marquee loop="4" style={{marginTop: "50px", marginLeft: "800px", marginTop: "-200px"}}>
                
                <br/>
                <img src={hydrotreatment} alt="no img"/>
              </marquee> */}
            
            </div>
            <div className="row" style={{marginLeft : "250px", marginTop : "80px"}}>
                    <div className="col-md-10 ">
                        <div className="card flex-md-row mb-4 shadow-sm h-md-250 border border-success">
                            <div class="card-body d-flex flex-column align-items-start">
                            <strong class="d-inline-block mb-2" style={{fontSize: "25px", margin : "auto" , color : '#0da168', fontFamily : 'Rubik, sans-serif'}}>About Us</strong>
                            {/* <h6 class="mb-0">
                                <a class="text-dark" href="#">40 Percent of People Can’t Afford Basics</a>
                            </h6> */}
                            {/* <div class="mb-1 text-muted small">Nov 12</div> */}
                            <p class="card-text mb-auto text-muted" style={{fontSize: '13px'}}><strong> 
                                NATURE CURE HOSPITAL, Jayanagar, Bengaluru is one of the oldest institute of its kind in Karnataka. Hospital was started by Karnataka Prakruti Chikitsa Prachara Trust(R) a not-for-profit organization in the year 1966 with intention to popularize drugless and effective system of Nature Cure amongst common people. The organization intended to propagate the cause of Nature cure so as to provide medical help for all classes of the society through drugless therapy 'nature cure' and Ancient Indian Science Yoga.
                            </strong></p>
                            <br/>
                            <strong className="text-muted" style={{fontSize: '13px'}}>
                                The hospital is synonymous with quality care, a rare achievement for naturopathy hospital. Not only the poor, but the rich & the middle class people also come to the hospital for the kind of tender care it offers with a touch of quality services.
                            </strong>
                            <br/>
                            <button className="btn btn-outline-success btn-sm  "><a className="about-link text-muted continue-button" href="about.js"><strong >Continue reading</strong></a></button>
                            </div>
                            <img class="card-img-left flex-auto d-none d-lg-block"   src={naturehome} alt="Thumbnail [200x250]" style={{ width: "250px", height: "310px"}} />
                        </div>
                    </div>
            </div>
                {/* <div class="card border-success mb-3" style={{maxWidth: "18rem" }}>
                    <div class="card-header"></div>
                    <div class="card-body text-success">
                        <p class="card-text"></p>
                    </div>
                </div> */}
              <Footer/>
        </div>
     )
}

export default withRouter(Home)