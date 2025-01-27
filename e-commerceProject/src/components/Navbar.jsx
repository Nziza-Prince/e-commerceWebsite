import { useState, useEffect, useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);
  const { cart } = useContext(ShopContext);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "COLLECTION", path: "/collection" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  // Handle scroll behavior


  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin", { replace: true });
    window.location.reload(); // Clear any cached data
  };

  useEffect(() => {
    visible
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [visible]);

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 bg-white/70`}
    >
      <nav className="flex justify-between items-center lg:mx-40 pl-5 pt-6 pb-5 px-10 font-outfit font-medium text-sm border-b">
        <Link to="/" className="lg:text-3xl sm:text-xl md:text-2xl">
          PRICOM
        </Link>

        {/* Links Container */}
        <div className="hidden sm:flex gap-5">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`relative group ${
                location.pathname.startsWith(link.path)
                  ? "text-gray-800"
                  : "text-gray-700"
              }`}
            >
              {link.name}
              <span
                className={`absolute left-1/2 bottom-0 h-0.5 bg-gray-800 transition-all duration-300 transform -translate-x-1/2 ${
                  location.pathname === link.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}
        </div>

        {/* Icons and Mobile Menu Toggle */}
        <div className="flex gap-5 text-xl">
          <CiSearch className="hover:cursor-pointer" />
          <div className="group relative">
            <FaUserAlt className="hover:cursor-pointer sm:w-20 md:w-12" />
            <div className="group-hover:block hidden absolute dropdown-menu right-0 mt-1 pt-4">
              <div className="font-outfit flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500">
                <a className="hover:text-black cursor-pointer">My Profile</a>
                <a href="/myorders" className="hover:text-black cursor-pointer">
                  Orders
                </a>
                <p
                  onClick={handleLogout}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>

          <div className="relative inline-block">
            <FaShoppingCart
              onClick={() => navigate("/cart")}
              className="hover:cursor-pointer text-2xl"
            />
            <span className="absolute bottom-6 right-0 left-5 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
              {cartItemCount}
            </span>
          </div>

          <img
            onClick={() => setVisible(!visible)}
            src={assets.menu_icon}
            className="w-5 h-4 cursor-pointer sm:hidden"
            alt="menu icon"
          />
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transition-transform transform ${
            visible ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col p-5 text-gray-600">
            <div
              onClick={() => setVisible(false)}
              className="flex cursor-pointer items-center gap-4 p-3"
            >
              <img
                src={assets.dropdown_icon}
                alt="close menu"
                className="h-4 rotate-180"
              />
              <p>Close</p>
            </div>
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={`py-2 ${
                  location.pathname === link.path
                    ? "text-gray-800"
                    : "text-gray-500"
                }`}
                onClick={() => setVisible(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
