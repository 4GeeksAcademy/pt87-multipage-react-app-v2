export const initialStore = () => {
  return {
    books: [],
  };
};

export default function storeReducer(store, action = {}) {
  if (action.type === "overwrite_books") {
    return {
      ...store,
      books: action.books,
    };
  }

  if (action.type === "add_book") {
    return {
      ...store,
      books: [...store.books, action.book],
    };
  }

  if (action.type === "update_book") {
    const idx = store.books.findIndex(
      (storeBook) => storeBook.id === action.book.id
    );

    return {
      ...store,
      books: store.books.toSpliced(idx, 1, action.book),
    };
  }
  
  if (action.type === "delete_book") {
    const idx = store.books.findIndex(
      (storeBook) => storeBook.id === action.book.id
    );

    return {
      ...store,
      books: store.books.toSpliced(idx, 1),
    };
  }

  return store;
}
