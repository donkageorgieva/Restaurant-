import { useReducer } from 'react';
import React from 'react';
import CartContext from './cart-context'
const defaultCartState = {
    items: [],
    totalAmount: 0,
}
const cartReducer = (state, action) => {
    return defaultCartState
}
const CartProvider = (props) => {
    const [cartState, dispatchCartAction ] = useReducer(cartReducer, defaultCartState)
    const addItemToCart = (item) =>{

    };
    const removeItemFromCart = (id) => {};
    const cartContext =  {
        items : cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart,
    }
return <CartContext.Provider value ={cartContext}>
    {props.children}
</CartContext.Provider>
}


export default CartProvider;