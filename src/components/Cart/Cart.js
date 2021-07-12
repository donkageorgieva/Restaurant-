import {useContext} from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartCtx from '../../store/cart-context';
const Cart = props => {
    const cartContext = useContext(CartCtx);
    const totalAmount = cartContext.totalAmount.toFixed(2);
    const cartItemsList = cartContext.items.map((item => {
        return <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.amount}</p>
            <p>{item.price}</p>
        </li>
    }))
return(
   <Modal hideCart={props.hideCart}>
   
      <h1> Cart</h1>
      <ul>{cartItemsList}</ul>
       <div className={classes.total}>
           <span>Total amount</span>
           <span> ${totalAmount}</span>
       </div>
       <div className={classes.actions}>
           <button className={classes['button--alt']} onClick={props.hideCart}>Close</button>
           <button className={classes.button}>Order</button>


       </div>
   </Modal>
)
}

export default Cart;