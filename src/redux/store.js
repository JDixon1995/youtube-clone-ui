import { ConfigureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'

export const store = configureStore({
    reducer : {
        currentUser : userReducer
    }
})