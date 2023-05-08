import { createSelector } from "@reduxjs/toolkit";

const cartItemsSelector = (state) => state.cart.cartItems;

// count number of products
export const cartItemsCountSelector = createSelector(
    cartItemsSelector,
    cartItems => cartItems.reduce((count, item) => count + item.quantity, 0));

// Caculator total of cart
export const cartTotalSelector = createSelector(
    cartItemsSelector,
    cartItems => cartItems.reduce((total, item) => total + (item.quantity * item.product.price), 0));