import React from "react";
import { Link } from "react-router-dom";

function BookCard({ book, addToCart }) {
  return (
    <div className="book-card">
      <img src={book.cover} alt={book.title} className="book-cover" />
      <h3>{book.title}</h3>
      <p className="book-author">by {book.author}</p>
      <p className="book-price">${book.price.toFixed(2)}</p>
      <div className="book-card-actions">
        <Link to={`/books/${book.id}`} className="btn btn-secondary">
          Details
        </Link>
        <button className="btn" onClick={() => addToCart(book)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default BookCard;
