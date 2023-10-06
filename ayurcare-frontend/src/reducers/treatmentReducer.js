const initialValues = {
    treatment: [], 
}


const treatmentReducer = (state = initialValues, action) => {
     console.log('s' , state)
    //  console.log('toggle', toggle)
    //  console.log('a', action.payload)
      switch(action.type) {
         case "SET_TREATMENT" :  {
             return {...state, treatment:action.payload}
         }
          default : {
              return {...state}
          }
      }
} 

export default treatmentReducer