const BookDetails = ({ book = {} }) => {
  const bookLength = () => {
    const word_count = book.num_pages * 180;

    if (word_count <= 3000) {
      return "Short Story";
    } else if (word_count <= 15000) {
      return "Novelette";
    } else if (word_count <= 35000) {
      return "Novella";
    } else if (word_count <= 80000) {
      return "Novel";
    } else {
      return "Epic";
    }
  };

  return (
    <div className="book-details">
      <h3>
        <span className="badge text-bg-primary me-2">{bookLength()}</span>
        <span className="badge text-bg-secondary me-2">
          Published: {book.year_published}
        </span>
      </h3>
      {book.isbn10 ? (
        <h3>
          <span className="badge text-bg-info me-2">
            ISBN 10: {book.isbn10}
          </span>
        </h3>
      ) : (
        ""
      )}
      {book.isbn13 ? (
        <h3>
          <span className="badge text-bg-warning me-2">
            ISBN 13: {book.isbn13}
          </span>
        </h3>
      ) : (
        ""
      )}
    </div>
  );
};

export default BookDetails;
