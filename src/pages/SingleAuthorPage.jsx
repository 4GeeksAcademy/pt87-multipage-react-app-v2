import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const SingleAuthorPage = () => {
  const { name } = useParams();
  const [store, dispatch] = useGlobalReducer();

  const getBooks = () => {
    return store.books.filter(
      (book) => book.author.toLocaleLowerCase() === name.toLocaleLowerCase()
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col col-lg-8 offset-lg-2">
          <h1>{name}</h1>
          <ul>
            {getBooks().map((book) => (
              <li key={book.id}>
                <Link to={`/books/${book.id}`}>{book.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleAuthorPage;
