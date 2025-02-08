import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Component/counter/counterSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,  // Use userReducer here
  },
  
})

