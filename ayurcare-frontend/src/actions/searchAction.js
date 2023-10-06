import axios from 'axios'

export const startSearchTreatment = (search) => {
    // console.log('f', search)
    return (dispatch) => {
        axios.get(`http://localhost:3022/api/treatment/search?name=${search}`)
          .then((response) => {
              const res = response.data
            //   console.log('r' , res)
            //   if(search.length >= 3){
                dispatch(setSearchTreatment(res))
            //   }  
          })
          .catch((err) => { 
            // localhost:3058/api/menuItems/search?menuName=Oreo biscuit
             alert(err)
          })
    }
}

const setSearchTreatment = (searchTreat) =>  {
    // console.log('m', menu)
    return {
      type: "SEARCH_TREAT",
      payload: searchTreat
    }
}


export const startSearchPackage = (searchPack) => {
    // console.log('f', search)
    return (dispatch) => {
        axios.get(`http://localhost:3022/api/package/find?packageName=${searchPack}`)
          .then((response) => {
              const res = response.data
            //   console.log('r' , res)
            //   if(search.length >= 3){
                dispatch(setSearchPackage(res))
            //   }  
          })
          .catch((err) => { 
            // localhost:3058/api/menuItems/search?menuName=Oreo biscuit
             alert(err)
          })
    }
}

const setSearchPackage = (packSearch) =>  {
    // console.log('m', menu)
    return {
      type: "SEARCH_PACKAGE",
      payload: packSearch
    }
}



