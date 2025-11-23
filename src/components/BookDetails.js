import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { books } from "../data/books";

function BookDetails({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return (
      <section className="page">
        <h2>Book not found</h2>
        <button className="btn" onClick={() => navigate("/books")}>
          Back to Books
        </button>
      </section>
    );
  }

  return (
    <section className="page book-details">
      <div className="book-details-content">
        <img src={book.cover} alt={book.title} className="book-cover-large" />
        <div>
          <h2>{book.title}</h2>
          <p className="book-author">by {book.author}</p>
          <p className="book-category">Category: {book.category}</p>
          <p className="book-price">${book.price.toFixed(2)}</p>
          <p className="book-description">{book.description}</p>
          <button className="btn" onClick={() => addToCart(book)}>
            Add to Cart
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/books")}
            style={{ marginLeft: "0.5rem" }}
          >
            Back to Books
          </button>
        </div>
      </div>
    </section>
  );
}

export default BookDetails;
