import axios from 'axios'


//treatment post request
export const startDoBookingTreatment= (formData) => {
    //  console.log('id', formData)
      return (dispatch) => {
        axios.post('http://localhost:3022/api/book-treat', formData)
        // axios.post('http://localhost:3058/api/order', { menuId : id })
              .then((response) => {
                const res = response.data
                console.log('book', res)
                dispatch(setBookingTreatment(res))
              })
              .catch((err) => {
                 alert('2', err)
              })
    }
} 


const setBookingTreatment = (bookTreat) =>  {
    // console.log('m', order)
    return {
      type: "ADD_BOOK_TREAT",
      payload: bookTreat
    }
}

// package post request
export const startDoBooking= (formData) => {
    //  console.log('id', formData)
      return (dispatch) => {
        axios.post('http://localhost:3022/api/book', formData)
        // axios.post('http://localhost:3058/api/order', { menuId : id })
              .then((response) => {
                const res = response.data
                console.log('book', res)

                dispatch(setBooking(res))
              })
              .catch((err) => {
                 alert('2', err)
              })
    }
} 

const setBooking = (book) =>  {
    // console.log('m', order)
    return {
      type: "ADD_BOOK",
      payload: book
    }
}


// export const startSearchMenu = (search) => {
//     // console.log('f', search)
//     return (dispatch) => {
//         axios.get(`http://localhost:3058/api/menuItems/search?menuName=${search}`)
//           .then((response) => {
//               const res = response.data
//               console.log('r' , res)
//             //   if(search.length >= 3){
//                 dispatch(setSearchMenu(res))
//             //   }  
//           })
//           .catch((err) => { 
//             // localhost:3058/api/menuItems/search?menuName=Oreo biscuit
//              alert(err)
//           })
//     }
// }

//treatment get request
export const startGetTreatmentBookingList = () => {
      return (dispatch) => {
        axios.get('http://localhost:3022/api/book-treat')
              .then((response) => {
                const booking = response.data
                // console.log('ol', ord)
                dispatch(setGetBookingTreat(booking))
              })
              .catch((err) => {
                 alert('3', err)
              })
    }
} 



const setGetBookingTreat = (bookList) =>  {
    // console.log('m', orderList)
    return {
      type: "BOOK_LIST_TREAT",
      payload: bookList
    }
}



//package get action
export const startGetBookingList = () => {
      return (dispatch) => {
        axios.get('http://localhost:3022/api/book')
              .then((response) => {
                const booking = response.data
                // console.log('ol', ord)
                dispatch(setGetBooking(booking))
              })
              .catch((err) => {
                 alert('3', err)
              })
    }
} 


const setGetBooking = (bookList) =>  {
    // console.log('m', orderList)
    return {
      type: "BOOK_LIST",
      payload: bookList
    }
}


// router.get('/api/book-treat',  bookingsController.treat)
// router.post('/api/book-treat',  bookingsController.createTreat)



// DELETE TREATMENT
export const startDeleteTreatmentBookings = (id) => {
    // (id, menuList,orders) => {
    console.log('d', id)
      return (dispatch, getState) => {
        // console.log('gg' , getState)
        axios.put(`http://localhost:3058/api/book-treat/delete/${id}`)
              .then((response) => {
                const ord = response.data
                // console.log('ml', menuList)
                // console.log('oll', orders)
                console.log('gs', getState())
                const menuItem = getState().order.addOrder.find(ele => ele._id === ord._id)
                // console.log('mi', menuItem)
                // console.log('mi', menuItem.menuId)
                // console.log('mi', menuItem.menuId.menuName)
                const msg = `The ${menuItem.menuId.menuName} is complete !!!`
                console.log('ol', ord._id)
                dispatch(setDeleteTreatment(ord._id))
                dispatch(setNoticeTreatment(msg))
              })
              .catch((err) => {
                 alert(err)
              })
    }
} 


const setDeleteTreatment = (id) =>  {
    // console.log('m', orderList)
    return {
      type: "DELETE_TREATMENT",
      payload: id
    }
}

const setNoticeTreatment = (msg) => {
    return {
         type: "MESSAGE",
         payload: msg   
     }
}






export const startDeleteBookings = (id) => {
    // (id, menuList,orders) => {
    console.log('d', id)
      return (dispatch, getState) => {
        // console.log('gg' , getState)
        axios.put(`http://localhost:3058/api/book/delete/${id}`)
              .then((response) => {
                const ord = response.data
                // console.log('ml', menuList)
                // console.log('oll', orders)
                console.log('gs', getState())
                const menuItem = getState().order.addOrder.find(ele => ele._id === ord._id)
                // console.log('mi', menuItem)
                // console.log('mi', menuItem.menuId)
                // console.log('mi', menuItem.menuId.menuName)
                const msg = `The ${menuItem.menuId.menuName} is complete !!!`
                console.log('ol', ord._id)
                dispatch(setDelete(ord._id))
                dispatch(setNotice(msg))
              })
              .catch((err) => {
                 alert(err)
              })
    }
} 


const setDelete = (id) =>  {
    // console.log('m', orderList)
    return {
      type: "DELETE_PACKAGE",
      payload: id
    }
}

const setNotice = (msg) => {
    return {
         type: "ALERT",
         payload: msg   
     }
}






