import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion } from 'framer-motion';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProductCard = ({ product }) => {
  const { addToCart, updateQuantity, cart } = useContext(CartContext);

  const itemInCart = cart.find(item => item.id === product.id);
  const quantity = itemInCart ? itemInCart.quantity : 0;

  const handleAddToCart = () => {
    if (quantity === 0) {
      addToCart(product);
    }
  };

  const handleIncreaseQuantity = () => {
    updateQuantity(product.id, 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 0) {
      updateQuantity(product.id, -1);
    }
  };

  return (
    <motion.div
      className="border p-4 rounded-lg shadow-md flex flex-col justify-between h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <LazyLoadImage
        src={product.image}
        alt={product.title}
        effect="blur"
        className="w-full h-40 object-cover mb-4"
      />
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <p className="text-gray-700 mb-4">${product.price.toFixed(2)}</p>
      </div>

      {quantity === 0 ? (
        <button
          onClick={handleAddToCart}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Add to Cart
        </button>
      ) : (
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={handleDecreaseQuantity}
            className="bg-gray-300 text-gray-800 px-2 py-1 rounded hover:bg-gray-400"
          >
            -
          </button>
          <span className="mx-4">{quantity}</span>
          <button
            onClick={handleIncreaseQuantity}
            className="bg-gray-300 text-gray-800 px-2 py-1 rounded hover:bg-gray-400"
          >
            +
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default ProductCard;
