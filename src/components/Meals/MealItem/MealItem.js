import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';


const MealItem = props => {

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
       <MealItemForm id={props.name}/>
   </div>
</li>
)
}


export default MealItem;