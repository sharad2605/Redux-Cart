import {createSlice} from '@reduxjs/toolkit';


const initialCartState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
    changed: false,
};

const cartSlice = createSlice({ 
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        fetchCart(state,action){
            state.totalQuantity = action.payload.totalQuantity || 0;
    state.totalAmount = action.payload.totalAmount || 0;
    state.items = action.payload.items || [];
        },
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            state.changed=true;
            state.totalAmount = state.totalAmount + newItem.price;
            if(!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price, 
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }

        },

        removeToCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
           
            state.totalAmount = state.totalAmount - existingItem.price;
            state.totalQuantity--;
            state.changed = true;
            if(existingItem.quantity === 1) {   
               
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price; 
        }

        }
        }
});



 

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;