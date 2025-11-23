import React, { useState } from "react";
import { books } from "../data/books";
import BookCard from "./BookCard";
import SearchBar from "./SearchBar";

function Books({ addToCart }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = books.filter((book) => {
    const term = searchTerm.toLowerCase();
    return (
      book.title.toLowerCase().includes(term) ||
      book.author.toLowerCase().includes(term)
    );
  });

  return (
    <section className="page">
      <h2>Books</h2>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="books-grid">
        {filteredBooks.length === 0 ? (
          <p>No books found.</p>
        ) : (
          filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} addToCart={addToCart} />
          ))
        )}
      </div>
    </section>
  );
}

export default Books;
