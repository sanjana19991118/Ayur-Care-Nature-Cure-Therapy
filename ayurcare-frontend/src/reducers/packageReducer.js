const initialValues = {
    package: [],
   
}


const packageReducer = (state = initialValues, action) => {
     console.log('s' , state)
    //  console.log('toggle', toggle)
    //  console.log('a', action.payload)
      switch(action.type) {
         case "SET_PACKAGE" :  {
             return {...state, package:action.payload}
         }
          default : {
              return {...state}
          }
      }
} 

export default packageReducer