
import {configureStore} from '@reduxjs/toolkit'
import TodoReducer from './Features/TodoSlice'
 export const store =configureStore({
    reducer:{
      Todo:TodoReducer
    }

})
export default store