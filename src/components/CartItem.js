import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useContext(CartContext);

  return (
    <div className="flex items-center justify-between my-4">
      <img src={item.image} alt={item.title} className="w-20 h-20 object-cover" />
      <h3 className="text-lg">{item.title}</h3>
      <div>
        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
        <span className="mx-2">{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
      </div>
      <p>${(item.price * item.quantity).toFixed(2)}</p>
      <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
    </div>
  );
};

export default CartItem;
