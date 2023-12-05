import { ConfigureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'

export const store = ConfigureStore({
    reducer : {
        currentUser : userReducer
    }
})