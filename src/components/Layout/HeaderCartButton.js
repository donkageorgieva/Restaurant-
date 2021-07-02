import React from 'react';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    return(
        <button className={classes.button} onClick={props.btnFnc}>
        <span>{props.text}</span>
        <span className={classes.badge}>{props.itemsAmount}</span>
        
            </button>
    )

}





export default HeaderCartButton;