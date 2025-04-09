import { configureStore } from "@reduxjs/toolkit"
import counterRedducer from './counter'
import authReducer from './auth'
 const store=configureStore({
    reducer:{counter:counterRedducer,auth:authReducer}
 });
 export default store;