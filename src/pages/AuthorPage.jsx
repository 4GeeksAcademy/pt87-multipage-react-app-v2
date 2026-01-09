import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const AuthorPage = () => {
  const [store, dispatch] = useGlobalReducer();

  const getAllAuthors = () => {
    return [...new Set(store.books.map((book) => book.author))];
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col col-lg-8 offset-lg-2">
          <h1>Author Page</h1>
          <ul>
            {getAllAuthors().map((author) => (
              <li>
                <Link to={`/author/${author}`}>{author}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AuthorPage;
