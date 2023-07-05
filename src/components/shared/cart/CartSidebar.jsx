import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../../../redux/cart/cartSlice';
import style from './CartSiderbarStyling/cartSidrBar.module.css'
const CartSidebar = () => {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleIncreaseQuantity = (itemId) => {
        dispatch(increaseQuantity(itemId));
    };

    const handleDecreaseQuantity = (itemId) => {
        dispatch(decreaseQuantity(itemId));
    };

    return (
        <div className={style.sidebar}>
            <h3>Cart</h3>
            {cartItems.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            {item.name} - Quantity: {item.quantity}
                            <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                            <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CartSidebar;