import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Shop from './Shop';
import Contact from './Contact';
import Cart from './Cart';
import Checkout from './Checkout';
import SideCart from './SideCart';
import './App.css';

function App() {
  const [showSideCart, setShowSideCart] = useState(false);

  const toggleSideCart = () => {
    setShowSideCart(prev => !prev);
  };

  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <Link to="/">Home</Link> |{' '}
          <Link to="/about">About</Link> |{' '}
          <Link to="/blog">Blog</Link> |{' '}
          <Link to="/shop">Shop</Link> |{' '}
          <Link to="/contact">Contact</Link> |{' '}
          <Link to="/cart">Cart</Link> |{' '}
          <Link to="/checkout">Checkout</Link>

          {/* 🛒 Toggle SideCart */}
          <button className="sidecart-toggle" onClick={toggleSideCart}>🛒</button>
        </nav>

        {/* ✅ SideCart appears conditionally */}
        {showSideCart && <SideCart onClose={toggleSideCart} />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
