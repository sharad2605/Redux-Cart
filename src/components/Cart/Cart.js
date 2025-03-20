import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {


  const CartItems =  useSelector ((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <p>Total Amount: ₹{totalAmount}</p>
      <ul>
        {CartItems.map((item) => (
          <CartItem
          key={item.id}
          item={{ 
            title: item.name,
            quantity: item.quantity,
            total: item.totalPrice, 
            price: item.price, 
            id: item.id }}
        />
        ))}
        
      </ul>
    </Card>
  );
};

export default Cart;
