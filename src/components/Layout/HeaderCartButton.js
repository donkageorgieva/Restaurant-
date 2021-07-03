import React from 'react';
import {useContext} from 'react';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';
const HeaderCartButton = (props) => {
    const cartContext = useContext(CartContext);
    const numberOfCartItems = cartContext.items.reduce((currAmount,item)=>{
    return currAmount + item.amount;
    },0);
    return(
        <button className={classes.button} onClick={props.btnFnc}>
        <span>{props.text}</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
        
            </button>
    )

}





export default HeaderCartButton;