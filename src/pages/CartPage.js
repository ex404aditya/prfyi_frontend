import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartSummary from '../components/CartSummary';

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

  return (
    <div className="container mx-auto mt-10">
  {cart.length === 0 ? (
    <p className="text-center">Your cart is empty</p>
  ) : (
    <div className="flex flex-col md:flex-row md:space-x-6">
      {/* Cart Items Section */}
      <div className="w-full md:w-2/3">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 mb-4 bg-white border rounded-lg shadow-md"
          >
            <div className="flex items-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="ml-4">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
            </div>

            <div className="flex items-center">
              <button
                onClick={() => updateQuantity(item.id, -1)}
                className="bg-gray-300 text-gray-800 px-2 py-1 rounded-full hover:bg-gray-400 transition mx-2"
              >
                -
              </button>
              <span className="text-lg">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, 1)}
                className="bg-gray-300 text-gray-800 px-2 py-1 rounded-full hover:bg-gray-400 transition mx-2"
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="ml-4 text-red-500 hover:text-red-700 transition"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary Section */}
      <div className="w-full md:w-1/3 rounded-lg">
        <CartSummary />
      </div>
    </div>
  )}
</div>

  )
};

export default CartPage;
