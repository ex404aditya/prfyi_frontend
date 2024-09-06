import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartSummary = () => {
  const { cart } = useContext(CartContext);
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const discount = 10; //$10 discount
  const total = subtotal - discount;

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">Cart Summary</h2>
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <p>Discount: -${discount.toFixed(2)}</p>
      <p>Total: ${total.toFixed(2)}</p>
      <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded">
        Checkout
      </button>
    </div>
  );
};

export default CartSummary;
