import { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    return cart.some(item => item.id === id);
  };

  const addToCart = (product) => {
    if (isInCart(product.id)) {
      updateQuantity(product.id, 1); 
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
      toast.success(`${product.title} added to cart!`);
    }
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
    toast.info(`Item removed from cart!`);
  };

  const updateQuantity = (id, change) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + change } : item
      )
    );

    const updatedItem = cart.find(item => item.id === id);
    if (updatedItem && updatedItem.quantity + change === 0) {
      removeFromCart(id); 
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
