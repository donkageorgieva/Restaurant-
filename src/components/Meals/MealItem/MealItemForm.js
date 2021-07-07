import { useContext } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import CartProvider  from '../../../store/CartProvider';
const MealItemForm = props => {
 
    return(
        <CartProvider>
        <form className={classes.form}>
           <Input label="Amount" input={{
               id: 'amount' + props.id,
               type: 'number',
               min: '1',
               max: '5',
               step: '1',
               defaultValue: '1'
           }} />
            <button >+ Add</button>

        </form>
        </CartProvider>
    )
}

export default MealItemForm;