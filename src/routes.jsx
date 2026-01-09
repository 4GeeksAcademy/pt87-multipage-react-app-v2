// Import necessary components and functions from react-router-dom.

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { HomePage } from "./pages/HomePage";
import SingleBookPage from "./pages/SingleBookPage";
import AuthorPage from "./pages/AuthorPage";
import SingleAuthorPage from "./pages/SingleAuthorPage";
import BookCreationPage from "./pages/BookCreationPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
      <Route path="/" element={<HomePage />} />
      {/* Book Pages */}
      <Route path="/books/:id" element={<SingleBookPage />} />
      <Route path="/books/new" element={<BookCreationPage />} />
      {/* Author Pages */}
      <Route path="/author" element={<AuthorPage />} />
      <Route path="/author/:name" element={<SingleAuthorPage />} />
    </Route>
  )
);
