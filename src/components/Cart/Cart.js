
import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = props => {
return(
   <Modal hideCart={props.hideCart}>
   
      <h1> Cart</h1>
       <div className={classes.total}>
           <span>Total amount</span>
           <span>20</span>
       </div>
       <div className={classes.actions}>
           <button className={classes['button--alt']} onClick={props.hideCart}>Close</button>
           <button className={classes.button}>Order</button>


       </div>
   </Modal>
)
}

export default Cart;