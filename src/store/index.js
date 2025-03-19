import { configureStore } from "@reduxjs/toolkit";
import uiSliceReducer from './ui-slice';
import cartSliceReducer from './cartSlice';

const store = configureStore({
    reducer:{ui:uiSliceReducer, cart:cartSliceReducer}
});

export default store;