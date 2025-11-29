import axios from 'axios'
 
export const startGetPackageList = () => {
     return(dispatch) =>  {
          axios.get('http://localhost:3022/api/package')
              .then((response) => {
                  const result = response.data
                //   console.log('r', result)
                  dispatch(setPackages(result))
              })
              .catch((err) => {
                 alert(err)
              })
     }
}


const setPackages = (packs) =>  {
    // console.log('m', menu)
    return {
      type: "SET_PACKAGE",
      payload: packs
    }
}

