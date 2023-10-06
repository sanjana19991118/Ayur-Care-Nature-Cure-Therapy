const initialValues = {
    booking: [], 
}


const bookingReducer = (state = initialValues, action) => {
     console.log('s' , state)
    //  console.log('toggle', toggle)
    //  console.log('a', action.payload)
      switch(action.type) {
         case "SET_BOOKING" :  {
             return {...state, booking:action.payload}
         }
          default : {
              return {...state}
          }
      }
} 

export default bookingReducer