import {createSlice} from '@reduxjs/toolkit';

const initialCartState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0
};

const cartSlice = createSlice({ 
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
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
            state.totalQuantity--;
            state.totalAmount = state.totalAmount - existingItem.price;
            if(existingItem.quantity === 1) {   
            
        }

        }
        }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;