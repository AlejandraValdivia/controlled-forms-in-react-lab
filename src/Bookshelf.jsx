import "./index.css";
import { useState } from "react";

const handleInputChange = (event) => {
  setNewBook({ ...newBook, [event.target.name]: event.target.value });
};

const handleSubmit = (event) => {
  event.preventDefault();
  setBooks([...books, newBook]);
  setNewBook({ title: "", author: "" });
};

const Bookshelf = () => {

const [books, setBooks] = useState([
  { title: "Fourth Wing", author: "Rebecca Yarros" },
  { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
]);

const [newBook, setNewBook] = useState({ title: "", author: "" });
// 5. Map through your books
// Within the BookShelf component, use the map function to iterate over the books array. This array contains the list of books added by the user.
// For each book in the array, create a “book card”. Use a <div> to wrap the display of each book’s title and author.
// Ensure each book card is distinct and clearly displays the title and author of the book.


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
          <div className="bookCard">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
