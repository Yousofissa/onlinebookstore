import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Books from "./components/Books";
import BookDetails from "./components/BookDetails";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import "./App.css";
import Auth from "./Auth";


function App() {
  // 🔐 AUTH CHECK
  const token = localStorage.getItem("token");

  // 🛒 CART STATE
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    setCartItems((prev) => [...prev, book]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const removeFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

if (!token) {
  return <Auth />;
}

  // ✅ LOGGED IN → SHOW FULL APP
  return (
    <Router>
      <div className="app">
        <Navbar cartCount={cartItems.length} />

        <div style={{ textAlign: "right", padding: "1rem" }}>
          <button
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            Logout
          </button>
        </div>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/books" element={<Books addToCart={addToCart} />} />
            <Route
              path="/books/:id"
              element={<BookDetails addToCart={addToCart} />}
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cartItems={cartItems}
                  removeFromCart={removeFromCart}
                  clearCart={clearCart}
                />
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="*"
              element={<h2 style={{ padding: "2rem" }}>Page not found</h2>}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
