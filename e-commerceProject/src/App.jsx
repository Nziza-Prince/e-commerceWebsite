
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer"
import SingleCollection from "./pages/SingleCollection";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import MyOrders from "./pages/MyOrders";


function App() {
  return (
    <Router>
      {/* The Navbar is wrapped inside the Router */}
      <Navbar />
      <Routes>
        {/* Define routes for each page */}
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collections />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collection/:id" element={<SingleCollection/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
         <Route path = "/checkout" element={<CheckoutPage/>}/>
        <Route path="/myorders" element={<MyOrders/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
