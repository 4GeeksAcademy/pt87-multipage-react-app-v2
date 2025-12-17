import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BookPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const navigate = useNavigate();
  
  useEffect(() => {
    const getData = async () => {
      const resp = await fetch(`https://library.dotlag.space/library/${id}`);

      if (!resp.ok) {
        return navigate(-1);
      }

      const data = await resp.json();
      setBook(data);
    }

    getData();
  }, []);
    
  return (
    <div className="container">
      <div className="row">
        <div className="col col-lg-8 offset-lg-2">
          <h1>{book.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
