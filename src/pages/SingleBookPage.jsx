import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import useGlobalReducer from "../hooks/useGlobalReducer";

import BookDetails from "../components/BookDetails";

const SingleBookPage = () => {
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

  const updateAPIBook = async (key, value) => {
    let bookObj = {};
    bookObj[key] = value;

    const resp = await fetch(`https://library.dotlag.space/library/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookObj),
    });

    if (resp.ok) {
      const data = await resp.json();

      dispatch({
        type: "update_book",
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
          <h2>{getBook()?.author}</h2>
          <BookDetails book={getBook()} />
          <div>
            <span
              className={"btn btn-primary me-2"}
              onClick={() => updateAPIBook(
                "have_read", !getBook()?.have_read
              )}
            >
              I have {
                getBook()?.have_read ? "" : "not "
              } read this
            </span>
            <span
              className={"btn btn-secondary me-2"}
              onClick={() => updateAPIBook(
                "is_awesome", !getBook()?.is_awesome
              )}
            >
              This book is {
                getBook()?.is_awesome ? "" : "not "
              } awesome
            </span>
          </div>
          <img src={getBook()?.cover} style={{
            maxWidth: "100%"
          }} className="mt-3" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SingleBookPage;
