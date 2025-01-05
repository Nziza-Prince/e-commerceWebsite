
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer"
import SingleCollection from "./pages/SingleCollection";
import Signup from "./pages/Auth/Signup";
import Signin from "./pages/Auth/Signin";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import MyOrders from "./pages/MyOrders";
import Notification from "./components/Notification";
import ProtectedRoute from './components/ProtectedRoute'


function App() {
  return (
    <Router>
      {/* The Navbar is wrapped inside the Router */}
      <Navbar />
      <Notification/>
      <Routes>
        {/* Define routes for each page */}
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<ProtectedRoute><Collections /></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
        <Route path="/collection/:id" element={<ProtectedRoute><SingleCollection/></ProtectedRoute>}/>
        <Route path="/cart" element={<ProtectedRoute><CartPage/></ProtectedRoute>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
         <Route path = "/checkout" element={<ProtectedRoute><CheckoutPage/></ProtectedRoute>}/>
        <Route path="/myorders" element={<ProtectedRoute><MyOrders/></ProtectedRoute>}/>
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
