
import { Link } from "react-router-dom";

const CartPage = () => {
  return (
    <div className="font-outfit p-5">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold border-b pb-3 mb-5">
          YOUR <span className="font-black">CART</span>
        </h1>

        {/* Cart Items */}
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {[1, 2].map((item, index) => (
              <div key={index} className="flex items-center justify-between border p-5 mb-5">
                <div className="flex items-center gap-4">
                  <img
                    src="https://via.placeholder.com/100"
                    alt="Product"
                    className="w-24 h-24 object-cover"
                  />
                  <div>
                    <h2 className="font-semibold">Men Round Neck Pure Cotton T-shirt</h2>
                    <p className="text-gray-500">$149</p>
                    <p className="bg-gray-200 px-2 py-1 inline-block mt-1">L</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    defaultValue={1}
                    className="border p-2 w-16 focus:outline-none"
                  />
                  <button className="text-red-600">
                    🗑
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Totals */}
          <div className="p-5 border">
            <h2 className="text-xl font-bold border-b pb-2 mb-5">CART <span className="font-black">TOTALS</span></h2>
            <div className="flex justify-between mb-3">
              <p>Subtotal</p>
              <p>$60.00</p>
            </div>
            <div className="flex justify-between mb-3">
              <p>Shipping Fee</p>
              <p>$10</p>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <p>Total</p>
              <p>$70.00</p>
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
