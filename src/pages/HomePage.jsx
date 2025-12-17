import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const resp = await fetch("https://library.dotlag.space/library");

      if (resp.ok) {
        const data = await resp.json();
        setBooks(data.books);
      }
    }

    getData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col col-lg-8 offset-lg-2">
          <h1>Welcome To Book App</h1>
          <ul>
            {books.map(book => <Link to={`/books/${book.id}`}><ul>{book.title}</ul></Link>)}
          </ul>
        </div>
      </div>
    </div>
  );
};
