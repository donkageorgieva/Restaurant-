import { useRef, useState } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = props => {
    const [amountIsValid, setAmountIsValid] = useState(true);
const amountInputRef = useRef();
const submitHandler = e => {
e.preventDefault();
const enteredAmount = amountInputRef.current.value;
const enteredAmountNum = +enteredAmount;
if(enteredAmount.trim().length === 0 || enteredAmountNum <= 0  || enteredAmountNum > 5){
    setAmountIsValid(false);

    return;

}
props.onAddToCart(enteredAmountNum);
}
    return(
  
        <form className={classes.form} onSubmit={submitHandler}>
           <Input label="Amount" ref={amountInputRef} input={{
               id: 'amount' + props.id,
               type: 'number',
               min: '1',
               max: '5',
               step: '1',
               defaultValue: '1'
           }} />
            <button >+ Add</button>
            {!amountIsValid? <p>Please enter a valid amount</p> : null}

        </form>
       
    )
}

export default MealItemForm;