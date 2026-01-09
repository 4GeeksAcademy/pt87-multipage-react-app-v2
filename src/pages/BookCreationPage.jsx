import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useGlobalReducer from "../hooks/useGlobalReducer";

import FloatingInput from "../components/FloatingInput";

const BookCreationPage = () => {
  // State to hold the book
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [cover, setCover] = useState();
  const [isbn10, setIsbn10] = useState();
  const [isbn13, setIsbn13] = useState();

  const [store, dispatch] = useGlobalReducer();

  const nav = useNavigate();

  // This function runs to submit the book to the API.
  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const resp = await fetch(
      "https://library.dotlag.space/library/add",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title, author, cover,
          isbn10: isbn10 ? isbn10 : null,
          isbn13: isbn13 ? isbn13 : null,
        })
      }
    )

    if (resp.ok) {
      const data = await resp.json();

      dispatch({
        type: "add_book",
        book: data,
      })

      nav(`/books/${data.id}`);
    }
  }

  // Global store access

  return (
    <div className="container">
      <h1>Create A Book:</h1>
      <div className="row">
        <div className="col">
          <form onSubmit={handleSubmit}>
            <FloatingInput
              label="Title"
              value={title}
              onChange={(ev) => setTitle(ev.target.value)}
            />
            <FloatingInput
              label="Author"
              value={author}
              onChange={(ev) => setAuthor(ev.target.value)}
            />
            <FloatingInput
              label="Cover URL"
              value={cover}
              onChange={(ev) => setCover(ev.target.value)}
            />
            <FloatingInput
              label="ISBN-10"
              value={isbn10}
              onChange={(ev) => setIsbn10(ev.target.value)}
            />
            <FloatingInput
              label="ISBN-13"
              value={isbn13}
              onChange={(ev) => setIsbn13(ev.target.value)}
            />
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookCreationPage;
