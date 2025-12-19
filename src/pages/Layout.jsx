import { useEffect } from "react";

import { Outlet } from "react-router-dom/dist";
import ScrollToTop from "../components/ScrollToTop";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Layout = () => {
  const [_, dispatch] = useGlobalReducer();

  useEffect(() => {
    const getData = async () => {
      const resp = await fetch("https://library.dotlag.space/library");

      if (resp.ok) {
        const data = await resp.json();
        dispatch({
          type: "overwrite_books",
          books: data.books,
        })
      }
    }

    getData();
  }, []);

  return (
    <ScrollToTop>
      <Navbar />
      <Outlet />
      <Footer />
    </ScrollToTop>
  );
};
