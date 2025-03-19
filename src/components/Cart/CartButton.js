import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {

  const dispatch = useDispatch();
  const cartQunatity = useSelector(state => state.cart.totalQuantity);
  const toggleCart = () => {
    console.log("cart button clicked")
    dispatch(uiActions.toggle());
  }


  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQunatity}</span>
    </button>
  );
};

export default CartButton;
