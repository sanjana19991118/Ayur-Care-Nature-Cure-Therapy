import * as React from 'react';
//import image
import Footer from './Footer'
import { useSelector } from 'react-redux'
// import CalorieCounter from './CalorieCounter';
import bookingDone from './images/bookingDone.png'
import bookIt from './images/bookIt.png'
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
} from '@syncfusion/ej2-react-schedule';
import { extend } from '@syncfusion/ej2-base';
import { default as scheduleData }  from './datasource.json';
import { Link, Route, withRouter } from 'react-router-dom';
import './css/book.css'

const Bookings = () => {
    const bookingDetails = useSelector((state) => {
        return state.booking.booking
    }) 

    
    let scheduleObj;
    const data = extend([], scheduleData , null, true)

    function onPopupOpen(args) {
        if(args.type === 'Editor') {
            scheduleObj.eventWindow.recurrenceEditor.frequencies = ['none', 'daily'];

        }
    }
     return (
        <div>
            {/* basic view modules
                Day
                Week
                WorkWeek
                Month
                Agenda
            */}

            {/* <button type="button" class="btn btn-lg btn-danger" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button> */}
            <div>
                 <div className="col-md-4 ">
                    <div className="card mb-4 border-warning book-card">
                        <img className="card-img-top border-warning" src={bookingDone} style ={{ width : '200px', height: '200px', margin : 'auto'}}alt="Card cap" />
                        <div className="card-body">
                        {/* <h3 className="card-title">Treatment Name</h3> */}
                        {/* <h5 className="card-title">Oil Massage</h5> */}
                        <div class="alert alert-success" role="alert" style={{ width: '350px'}}>
                            <h4 class="alert-heading">Well done!, you booked for a treatment { bookingDetails.treatmentName}</h4> 
                            <hr/>
                            <h5 className="card-title">Oil Massage</h5>
                            {/* <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p> */}
                           
                            {/* <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p> */}
                        </div>
                        {/* <p className="card-text">Click the bellow Button to Book Your Treatment / Package</p>
                        <a href=" " className="btn btn-outline-warning btn-sm" style ={{ color: '#3d1802'}}>Go somewhere<input  type="checkbox" className="btn btn-success"  style={{ marginLeft : "10px", marginTop: "10px", width: "8px", height: "8px", borderColor: "yellow"}} /></a> */}
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>

        {/* Toaster */}

         <div class="toast" data-autohide="false" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <img src="..." class="rounded mr-2" alt="..." />
                <strong class="mr-auto">Bootstrap</strong>
                <small class="text-muted">11 mins ago</small>
                <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="toast-body">
                Hello, world! This is a toast message.
            </div>
            </div>
            {/* Schedulated Component */}
            <ScheduleComponent
                width="100%"
                ref = {t => scheduleObj= t}
                height="550px"
                selectedDate={new Date(2021,0,10)}
                eventSettings={{ dataSource : data }}
                popupOpen={onPopupOpen.bind(this)} 
            >
                 <h3 class="book-head">
                    Schedule Your Appointments With Us
                       <img class="card-img-top" src={bookIt} style ={{width : '20px', height : '20px', marginLeft: '5px'}}alt="Card  cap" />  
                 </h3>
                 <Inject services={[Day,Week, WorkWeek, Month, Agenda]}  />
            </ScheduleComponent>


            <div>Protein Intake</div>

            <div>Calorie Counter</div>
            {/* <CalorieCounter/> */}
            {/* https://dribbble.com/shots/4738855-The-Daily-Hack-2-Automated-Calorie-Counter-App?utm_source=Clipboard_Shot&utm_campaign=andreaeppy&utm_content=The%20Daily%20Hack%202%20-%20Automated%20Calorie%20Counter%20App&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=andreaeppy&utm_content=The%20Daily%20Hack%202%20-%20Automated%20Calorie%20Counter%20App&utm_medium=Social_Share */}
            <div>BMI</div>
            
            <button type="button" className="btn btn-warning diet-button" ><Link to='/dietChart' style={{ textDecoration: 'none' , color: 'white' }} ><h3>Diet Recommendation</h3></Link></button>


            <Footer />
        </div>
     )
}

// https://dribbble.com/shots/4738855-The-Daily-Hack-2-Automated-Calorie-Counter-App?utm_source=Clipboard_Shot&utm_campaign=andreaeppy&utm_content=The%20Daily%20Hack%202%20-%20Automated%20Calorie%20Counter%20App&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=andreaeppy&utm_content=The%20Daily%20Hack%202%20-%20Automated%20Calorie%20Counter%20App&utm_medium=Social_Share
export default Bookings