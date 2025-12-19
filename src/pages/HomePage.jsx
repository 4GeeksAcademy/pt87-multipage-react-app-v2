import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const HomePage = () => {
  const [store, _] = useGlobalReducer();

  return (
    <div className="container">
      <div className="row">
        <div className="col col-lg-8 offset-lg-2">
          <h1>Welcome To Book App</h1>
          <ul>
            {store.books?.map((book) => (
              <Link key={book.id} to={`/books/${book.id}`}>
                <ul>{book.title}</ul>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
