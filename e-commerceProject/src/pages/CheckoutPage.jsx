import { useContext } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
const CheckoutPage = () => {
  const {totalPrice,currency,delivery_fee} = useContext(ShopContext)
  const handleCheckout = ()=>{
    toast.info("Coming soon",{autoClose:1200})
  }
    return (
      <div className="font-outfit p-5">
        <div className="container mx-auto flex lg:flex-row flex-col lg:gap-6">
          
          {/* Delivery Information */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold border-b pb-3 mb-5">
              DELIVERY <span className="font-black">INFORMATION</span>
            </h1>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
              <input
                type="text"
                placeholder="First name"
                className="border p-2 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last name"
                className="border p-2 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email address"
                className="border p-2 focus:outline-none md:col-span-2"
              />
              <input
                type="text"
                placeholder="Street"
                className="border p-2 focus:outline-none md:col-span-2"
              />
              <input
                type="text"
                placeholder="City"
                className="border p-2 focus:outline-none"
              />
              <input
                type="text"
                placeholder="State"
                className="border p-2 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Zip code"
                className="border p-2 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Country"
                className="border p-2 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Phone"
                className="border p-3 focus:outline-none md:col-span-2"
              />
            </form>
          </div>
  
          {/* Payment Method */}
          <div className="flex-1 px-5 mt-16 ">
            <h1 className="text-2xl text-gray-500 font-light mb-5 tracking-wide">
              CART <span className="text-black">TOTALS</span>
            </h1>
            <div className="flex justify-between w-full border-b text-gray-500 pb-3">
              <h1>Subtotal</h1>
              <p>
                {currency}
                {totalPrice.toFixed(2)}
              </p>
            </div>
            <div className="mt-5 flex justify-between w-full border-b text-gray-500 pb-3">
              <h1>Shipping Fee</h1>
              <p>
                {currency}
                {delivery_fee.toFixed(2)}
              </p>
            </div>
            <div className="mt-5 flex justify-between w-full border-b text-gray-500 pb-3">
              <h1>Total</h1>
              <p>
                {currency}
                {(totalPrice + delivery_fee).toFixed(2)}
              </p>
            </div>
            <button className="w-full bg-black text-white py-2 mt-5 hover:bg-gray-800" onClick={handleCheckout}>
              PLACE ORDER
            </button>
            <h1 className="mt-16 text-2xl text-gray-500 font-light tracking-wide mb-3">
              PAYMENT <span className="text-black">METHOD</span>
            </h1>
            
            <div className="flex gap-3 w-full">
  {/* Stripe Option */}
  <label className="flex items-center border gap-3 px-5 py-3 w-40 cursor-pointer">
    <input
      type="radio"
      name="option"
      className="hidden peer"
    />
    <div className="w-3 h-3 border border-gray-400 rounded-full peer-checked:bg-green-500"></div>
    <img className="w-12 h-5" src={assets.stripe_logo} alt="stripe" />
  </label>

  {/* Razorpay Option */}
  <label className="flex items-center border gap-3 px-5 py-3 w-40 cursor-pointer">
    <input
      type="radio"
      name="option"
      className="hidden peer"
    />
    <div className="w-3 h-3 border border-gray-400 rounded-full peer-checked:bg-green-500"></div>
    <img className="w-24 h-5" src={assets.razorpay_logo} alt="razorpay" />
  </label>

  {/* Cash on Delivery Option */}
  <label className="flex items-center border gap-3 px-2 py-3 w-40 cursor-pointer">
    <input
      type="radio"
      name="option"
      className="hidden peer"
    />
    <div className="w-3 h-3 border border-gray-400 rounded-full peer-checked:bg-green-500"></div>
    <p className="font-light text-xs text-gray-500 mt-1">CASH ON DELIVERY</p>
  </label>
</div>

    
    </div>
            </div>
          
          </div>
       
     
    );
  };
  
  export default CheckoutPage;
   