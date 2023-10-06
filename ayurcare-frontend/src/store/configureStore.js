import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import bookingReducer from '../reducers/bookingReducer'
import packageReducer from '../reducers/packageReducer'
import treatmentReducer from '../reducers/treatmentReducer'
import searchReducer from '../reducers/searchReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        treatment: treatmentReducer,
        package: packageReducer,
        search : searchReducer,
        booking: bookingReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore





// we do not want to export a variable from the file , so we have the function