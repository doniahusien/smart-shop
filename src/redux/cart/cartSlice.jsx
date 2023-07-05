import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.push({ ...item, quantity: 1 });
            }
        },

        //هستخدمها لسه 
        removeFromCart(state, action) {
            const itemId = action.payload;
            state.items = state.items.filter((item) => item.id !== itemId);
        },
        increaseQuantity: (state, action) => {
            const itemId = action.payload;
            const item = state.find((cartItem) => cartItem.id === itemId);
            if (item) {
            item.quantity += 1;
            }
          },
        decreaseQuantity: (state, action) => {
            const itemId = action.payload;
            const item = state.find((cartItem) => cartItem.id === itemId);
            if (item) {
                item.quantity -= 1;
                if (item.quantity === 0) {
                    // Remove the item from the cart if quantity reaches 0
                    state.splice(state.indexOf(item), 1);
                }
            }
        },
        clearCart(state) {
            state.items = [];
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;