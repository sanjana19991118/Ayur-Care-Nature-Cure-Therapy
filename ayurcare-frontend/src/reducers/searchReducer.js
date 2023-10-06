const initialValue = { search: [] }
//{
//  []
//}

const searchReducer = (state = initialValue, action) => {
    // console.log('s', state)
    // console.log('a' , action.payload)
    switch(action.type) {
        case "SEARCH_TREAT" : {
            // category:[...state.category,action.payload]
            return {...state, search:action.payload}
        }

        case "SEARCH_PACKAGE" : {
            return {... state, search:action.payload}
        }

        default : {
            return {...state}
        }
    }

    //  switch(action.type) {
    //      case "SET_MENU" :  {
    //          return {...state, menu:action.payload}
    //      }

    //       default : {
    //           return {...state}
    //       }
    //   }
}

export default searchReducer