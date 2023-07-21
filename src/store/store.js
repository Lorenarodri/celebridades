
//Primero configurar el store 
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/authReducer';
import celReducer from '../reducers/slices/celSlice';

//configure store recibe los reducers 
export default configureStore({
    reducer: {
        auth: authReducer,
        cel: celReducer
    }
})

