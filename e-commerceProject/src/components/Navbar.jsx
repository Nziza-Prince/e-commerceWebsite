import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  // Add a scroll event listener to detect scrolling
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
  }, []);

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
        <div className="flex gap-5">
          <Link
            to="/"
            className={`relative group hover:cursor-pointer ${
              location.pathname === "/"
                ? "text-gray-800 font-semibold"
                : "text-gray-700"
            }`}
          >
            HOME
            <span
              className={`absolute left-1/2 bottom-0 h-0.5 bg-gray-800 transition-all duration-300 transform -translate-x-1/2 ${
                location.pathname === "/" ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </Link>
          <Link
            to="/collection"
            className={`relative group hover:cursor-pointer ${
              location.pathname.startsWith("collection")
                ? "text-gray-800 font-semibold"
                : "text-gray-700"
            }`}
          >
            COLLECTION
            <span
              className={`absolute left-1/2 bottom-0 h-0.5 bg-gray-800 transition-all duration-300 transform -translate-x-1/2 ${
                location.pathname.startsWith("/collection")
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }`}
            ></span>
          </Link>
          <Link
            to="/about"
            className={`relative group hover:cursor-pointer ${
              location.pathname === "/about"
                ? "text-gray-800 font-semibold"
                : "text-gray-700"
            }`}
          >
            ABOUT
            <span
              className={`absolute left-1/2 bottom-0 h-0.5 bg-gray-800 transition-all duration-300 transform -translate-x-1/2 ${
                location.pathname === "/about"
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }`}
            ></span>
          </Link>
          <Link
            to="/contact"
            className={`relative group hover:cursor-pointer ${
              location.pathname === "/contact"
                ? "text-gray-800 font-semibold"
                : "text-gray-700"
            }`}
          >
            CONTACT
            <span
              className={`absolute left-1/2 bottom-0 h-0.5 bg-gray-800 transition-all duration-300 transform -translate-x-1/2 ${
                location.pathname === "/contact"
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }`}
            ></span>
          </Link>
        </div>
        <div className="flex gap-5 text-xl">
          <CiSearch className="hover:cursor-pointer" />
          <FaUserAlt className="hover:cursor-pointer" />
          <FaShoppingCart
            onClick={() => navigate("/cart")}
            className="hover:cursor-pointer"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
