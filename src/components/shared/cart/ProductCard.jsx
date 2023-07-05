import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart,removeFromCart } from '../../../redux/cart/cartSlice';

const ProductCard = ({ id, name, price ,img}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, price,img, quantity: 1 }));
  };

  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <img src={img} alt="" />
      <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={removeFromCart}>x</button>
    </div>
  );
};

export default ProductCard;