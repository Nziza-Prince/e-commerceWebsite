import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [visible, setVisible] = useState(false);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "COLLECTION", path: "/collection" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  // Handle scroll behavior independently
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  // Disable body scroll when sidebar is visible
  useEffect(() => {
visible ?  document.body.style.overflow = "hidden" :  document.body.style.overflow = "auto";
  },[])
  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/70 backdrop-blur-md shadow-md" : "bg-white"
      }`}
    >
      <nav className="flex justify-between lg:mx-40 pl-5 pt-6 pb-5 px-10 font-outfit font-medium text-sm border-b">
        <Link to="/" className="text-3xl">
          PRINCE
        </Link>

        {/* Links Container */}
        <div className="hidden sm:flex gap-5">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`relative group hover:cursor-pointer ${
                location.pathname === link.path
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

        {/* Icons and Menu */}
        <div className="flex gap-5 text-xl">
          <CiSearch className="hover:cursor-pointer" />
          <div className="group relative">
            <FaUserAlt className="hover:cursor-pointer" />
            <div className="group-hover:block hidden absolute dropdown-menu right-0 mt-1 pt-4">
              <div className="font-outfit flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500">
                <p className="hover:text-black cursor-pointer">My Profile</p>
                <p className="hover:text-black cursor-pointer">Orders</p>
                <p className="hover:text-black cursor-pointer">Logout</p>
              </div>
            </div>
          </div>

          <FaShoppingCart
            onClick={() => navigate("/cart")}
            className="hover:cursor-pointer"
          />

          {/* Menu Icon */}
          <img
            onClick={() => setVisible(!visible)} // Toggle sidebar visibility
            src={assets.menu_icon}
            className="w-5 h-4 cursor-pointer sm:hidden"
            alt="menu icon"
          />
        </div>

        {/* Slide-In Menu */}
        {/* <div
          className={`fixed top-0 right-0 h-full w-64 p-5 bg-white shadow-lg z-50 transition-transform transform ${
            visible ? "translate-x-0" : "translate-x-full"
          }`}
         
        >
          <div className="flex flex-col text-gray-600">
            <div
              onClick={() => setVisible(false)}
              className="flex cursor-pointer items-center gap-4 p-3"
            >
              <img src={assets.dropdown_icon} alt="" className="h-4 rotate-180" />
              <p>Back</p>
            </div>
          </div>
          <div className="flex flex-col gap-5 pl-4 py-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={`relative group hover:cursor-pointer hover:scale-110 transition-all ${
                  location.pathname === link.path
                    ? "text-gray-800"
                    : "text-gray-500"
                }`}
                onClick={() => setVisible(false)} // Close sidebar on link click
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div> */}
      </nav>
    </div>
  );
};

export default Navbar;
