import "./index.css";
import { useState } from "react";

const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ]);

  const [newBook, setNewBook] = useState({ title: "", author: "" });

  const handleInputChange = (event) => {
    setNewBook((prevBook) => ({
      ...prevBook,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks((prevBooks) => [...prevBooks, newBook]);
    setNewBook({ title: "", author: "" });
  };

  return (
    <div className="bookshelfDiv">
      <form onSubmit={handleSubmit} className="formDiv">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={newBook.title}
          onChange={handleInputChange}
        />
        <label htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          id="author"
          value={newBook.author}
          onChange={handleInputChange}
        />
        <button type="submit">Add Book</button>
      </form>
      <div className="bookCardsDiv">
        {books.map((book) => (
          <div className="bookCard" key={book.title}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;

