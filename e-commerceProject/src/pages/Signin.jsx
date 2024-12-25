import { Link } from "react-router-dom";
import SubscribePortion from "../components/SubscribePortion";

const Signin = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-outfit">
      {/* Centering the form */}
      <div className="flex flex-col items-center p-10 text-center mb-32 w-full max-w-md">
        <h1 className="text-4xl font-semibold mb-10">Sign In</h1>
        {/* Input Fields */}
        <input
          className="mb-5 h-[43px] focus:outline-none w-[500px] p-2 border border-gray-900"
          type="email"
          placeholder="Email"
        />
        <input
          className="mb-5 h-[43px] focus:outline-none w-[500px] p-2 border border-gray-900"
          type="password"
          placeholder="Password"
        />
        {/* Links Section */}
        <div className="flex w-[500px] justify-between mb-5 text-sm">
          <Link to="#" className="text-gray-900 hover:underline">
            Forgot password?
          </Link>
          <Link to="/signup" className="text-gray-900 hover:underline">
            Create account
          </Link>
        </div>
        {/* Sign In Button */}
        <button className="bg-black text-white px-10 py-2 hover:bg-gray-900">
          Sign In
        </button>
      </div>
      {/* Subscription Section */}
      <SubscribePortion />
    </div>
  );
};

export default Signin;
