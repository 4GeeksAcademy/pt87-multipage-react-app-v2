export const initialStore = () => {
  return {
    books: []
  };
};

export default function storeReducer(store, action = {}) {
  if (action.type === "overwrite_books") {
    return {
      ...store,
      books: action.books
    }
  }

  if (action.type === "add_book") {
    return {
      ...store,
      books: [...store.books, action.book]
    }
  }

  return store;
}
