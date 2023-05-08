const { createSlice } = require('@reduxjs/toolkit')

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        showMiniCart: false,
        cartItems: [],
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const index = state.cartItems.findIndex(x => x.id === newItem.id);
            if (index >= 0) {
                // increase quantity
                state.cartItems[index].quantity += Number(newItem.quantity);
            }
            else {
                // add to cart
                state.cartItems.push(newItem);
            }
        },
    }
})

const { actions, reducer } = cartSlice;
export const { showMiniCart, hideMiniCart, addToCart, setQuantity, removeFromCart } = actions;
export default reducer;