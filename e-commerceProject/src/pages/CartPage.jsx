import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const CartPage = () => {
  const { cart, totalPrice, currency, delivery_fee, removeFromCart, updateQuantity } = useContext(ShopContext);

  return (
    <div className="font-outfit p-5">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold border-b pb-3 mb-5">
          YOUR <span className="font-black">CART</span>
        </h1>

        {/* Cart Items */}
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {cart.length > 0 ? (
              cart.map((item) => (
                <div key={item._id} className="flex items-center justify-between border p-5 mb-5">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image || "https://via.placeholder.com/100"} // Fallback if no image
                      alt={item.name}
                      className="w-24 h-24 object-cover"
                    />
                    <div>
                      <h2 className="font-se  mibold">{item.name}</h2>
                      <p className="text-gray-500">
                        {currency}
                        {item.price}
                      </p>
                      <p className="bg-gray-200 px-2 py-1 inline-block mt-1">{item.size || "N/A"}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) => updateQuantity(item._id, parseInt(e.target.value, 10))}
                      className="border p-2 w-16 focus:outline-none"
                    />
                    <button
                      className="text-red-600"
                      onClick={() => removeFromCart(item._id)}
                    >
                      🗑
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">Your cart is empty.</p>
            )}
          </div>

          {/* Cart Totals */}
          <div className="p-5 border">
            <h2 className="text-xl font-bold border-b pb-2 mb-5">
              CART <span className="font-black">TOTALS</span>
            </h2>
            <div className="flex justify-between mb-3">
              <p>Subtotal</p>
              <p>
                {currency}
                {totalPrice.toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between mb-3">
              <p>Shipping Fee</p>
              <p>
                {currency}
                {delivery_fee.toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <p>Total</p>
              <p>
                {currency}
                {(totalPrice + delivery_fee).toFixed(2)}
              </p>
            </div>
            {/* Proceed to Checkout */}
            <Link to="/checkout">
              <button className="w-full bg-black text-white py-2 mt-5 hover:bg-gray-800">
                PROCEED TO CHECKOUT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
