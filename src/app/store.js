import cartReducer from '../features/Cart/cartSlice'
import { configureStore } from '@reduxjs/toolkit'

// export const rootReducer = {
//     cart: cartReducer ,
// }

export const store = configureStore({
    reducer: {
        cart: cartReducer
    },
})

export default store;