import { createContext, useState, useMemo } from "react";
import { products } from "../assets/frontend_assets/assets";
import PropTypes from "prop-types";

export const ShopContext = createContext(); // Create context

const ShopProvider = (props) => {

  const [cart, setCart] = useState([]); // State to hold cart items

  const currency = "$";
  const delivery_fee = 5;

  // Function to add a product to the cart
  const addToCart = (productId, size) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item._id === productId && item.size === size
      );
      if (existingItem) {
        // If the item already exists with the same size, update the quantity
        return prevCart.map((item) =>
          item._id === productId && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Add new item to the cart
      const product = products.find((p) => p._id === productId);
      return [...prevCart, { ...product, size, quantity: 1 }];
    });
  };
  
  
  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item._id !== productId)
    );
  };

  // Function to update the quantity of a product in the cart
  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]);
  };

  // Calculate the total price
  const totalPrice = useMemo(() => {
    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [cart]);
  
  // Value object for the context
  const value = {
        products,
        cart,
        currency,
        delivery_fee,
    cart,
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

export default ShopProvider; // Export the provider component
