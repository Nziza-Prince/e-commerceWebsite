import { createContext, useState, useEffect, useMemo } from "react";
import { jwtDecode } from "jwt-decode";

import { products } from "../assets/frontend_assets/assets";
import PropTypes from "prop-types";

export const ShopContext = createContext(); // Create context

const ShopProvider = (props) => {
  const [cart, setCart] = useState([]);
  const currency = "$";
  const delivery_fee = 5;
  const token = localStorage.getItem("token");
  const decodedToken = token ? jwtDecode(token) : null
  const userId = decodedToken?.userId;
  // Load cart from localStorage when the component mounts
  useEffect(() => {
    if (userId) {
      const storedCart = localStorage.getItem(`cart_${userId}`);
      setCart(storedCart ? JSON.parse(storedCart) : []);
    }
  }, [userId]);
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (userId && cart.length > 0) {
      localStorage.setItem(`cart_${userId}`, JSON.stringify(cart));
    } else if (!userId) {
      console.warn("User ID not available. Cart changes not saved.");
    }
  }, [cart, userId]);
  
  

  // Add to cart
  const addToCart = (productId, size) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item._id === productId && item.size === size
      );
      if (existingItem) {
        return prevCart.map((item) =>
          item._id === productId && item.size === size
        ? { ...item, quantity: item.quantity + 1 }
        : item
      );
    }
    console.log(userId)
    const product = products.find((p) => p._id === productId);
    return [...prevCart, { ...product, size, quantity: 1 }];
    });
  };

  // Remove from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item._id !== productId)
    );
  };

  // Update quantity
  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Calculate total price
  const totalPrice = useMemo(() => {
    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cart]);

  const value = {
    products,
    cart,
    currency,
    delivery_fee,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalPrice,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

ShopProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShopProvider;
