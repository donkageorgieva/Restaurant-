import { useContext  } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import cartContext from '../../../store/cart-context';

const MealItem = props => {
    const cartCtx = useContext(cartContext);
const addToCartHandler = (amount) => {
    cartCtx.additem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: +props.price,
    })

}
return(
  

 
<li className={classes.meal}>
    <div>
        <h3>{props.name}</h3>
        <div>
        <p className={classes.description}>{props.description}</p>
     
    </div>
    <div>
    <p className={classes.price}>{props.price}</p>
    </div>
     
    </div>
   <div>
       <MealItemForm id={props.name} onAddToCart={addToCartHandler}/>
   </div>
</li>

)
}


export default MealItem;