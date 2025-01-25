import{configureStore} from '@reduxjs/toolkit'
import userReducer from '../slices/userSlices'
import fruitReducer from '../slices/fruitSlices'
// import arrayReducer from '../slices/fruitSlices'

const store = configureStore({
    reducer:{
         userInfo:userReducer,
        fruitInfo:fruitReducer//,
        //  arrayInfo:arrayReducer
    }
})
export default store