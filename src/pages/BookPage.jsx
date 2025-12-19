import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const BookPage = () => {
  const { id } = useParams();
  const [store, dispatch] = useGlobalReducer();
  const navigate = useNavigate();

  const getBook = () => {
    return store.books.find((book) => book.id == id);
  };

  const getData = async () => {
    if (!getBook()) {
      const resp = await fetch(`https://library.dotlag.space/library/${id}`);

      if (!resp.ok) {
        return navigate(-1);
      }

      const data = await resp.json();

      dispatch({
        type: "add_book",
        book: data,
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col col-lg-8 offset-lg-2">
          <h1>{getBook()?.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
