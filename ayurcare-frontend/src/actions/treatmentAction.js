import axios from 'axios'
 
export const startGetTreatmentList = () => {
     return(dispatch) =>  {
          axios.get('http://localhost:3022/api/treatment')
              .then((response) => {
                  const result = response.data
                //   console.log('r', result)
                  dispatch(setTreatments(result))
              })
              .catch((err) => {
                 alert(err)
              })
     }
}


const setTreatments = (treat) =>  {
    // console.log('m', menu)
    return {
      type: "SET_TREATMENT",
      payload: treat
    }
}

