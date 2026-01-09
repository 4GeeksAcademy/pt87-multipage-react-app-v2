import { Link } from "react-router-dom";

import useGlobalReducer from "../hooks/useGlobalReducer";
import ReadingListButton from "../components/ReadingListButton";

export const Navbar = () => {
  const [store] = useGlobalReducer();

  const getBook = (id) => {
    return store.books.find(item => item.id == id);
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          BookApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={`/author`} className="nav-link">
                Authors
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Reading List
              </Link>
              <ul class="dropdown-menu">
                {store.reading_list.map(item => <li>
                    <Link className="dropdown-item d-flex justify-content-between" to={`/books/${getBook(item.id).id}`}>
                      {getBook(item.id).title} <ReadingListButton id={item.id} />
                    </Link> 
                  </li>)}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
