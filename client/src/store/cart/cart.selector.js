export const selectCartItems = (state) => {
    return state.cart.cartItems;
};

export const selectCartHidden = (state) => {
    return state.cart.hidden;
};

export const selectCartItemsCount = state => {
    return state.cart.cartItems.reduce(
        (accumalatedQuantity, cartItem) =>
            accumalatedQuantity + cartItem.quantity,
        0
    )
};

export const selectCartTotal = state => {
    return state.cart.cartItems.reduce(
        (accumalatedQuantity, cartItem) =>
            accumalatedQuantity + cartItem.quantity * cartItem.price,
        0
    );
};