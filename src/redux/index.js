import { configureStore } from '@reduxjs/toolkit';
import { fieldsData, spinnerData } from './reducers';
 
const store = configureStore({
 reducer: {
   fieldsData,
   spinnerData
 }
})
 
export default store;