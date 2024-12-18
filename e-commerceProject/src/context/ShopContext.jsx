import { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";
import PropTypes from "prop-types";
export const ShopContext = createContext(); // Create context

const ShopProvider = (props) => { // Rename the function to ShopProvider
    const currency = "$";
    const delivery_fee = 10;
    
    const value = {
    products,
    currency,
    delivery_fee,
};

return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

ShopProvider.propTypes={
  children:PropTypes.node.isRequired
}
export default ShopProvider; // Export the provider component
