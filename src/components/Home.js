import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import {image5 } from "../images";

function Home() {
  return (
    <section
      className="home-bg"
      style={{ backgroundImage: `url(${image5})` }}
    >
      <div className="hero">
        <h1>Welcome to OnlineBookstore</h1>
        <p>Browse, search, and order your favorite books in one place.</p>
        <Link to="/books" className="btn">
          Browse Books
        </Link>
      </div>
    </section>
  );
}

export default Home;
