import { configureStore } from '@reduxjs/toolkit'
import reducer from './choice/reducer'
// import Reducer from './text/Reducer'

const store = configureStore({
    reducer
})

// const store2 = configureStore({reducer:Reducer})

export default store