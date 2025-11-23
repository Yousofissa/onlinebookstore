import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 

function Navbar({ cartCount }) {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Link to="/">OnlineBookstore</Link>
      </div>
      <nav className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/books">Books</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Navbar;
