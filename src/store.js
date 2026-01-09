export const initialStore = () => {
  return {
    books: [],
    reading_list: [],
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

  if (action.type === "reading_list") {
    const readingListIndex = store.reading_list.findIndex(item => [
      item.id === action.item.id,
      item.type === action.item.type,
    ].every(x => x));

    if (readingListIndex >= 0) {
      return {
        ...store,
        reading_list: store.reading_list.toSpliced(readingListIndex, 1)
      }
    }

    return {
      ...store,
      reading_list: [
        ...store.reading_list,
        action.item
      ]
    }
  }

  return store;
}
