import { createSlice } from "@reduxjs/toolkit";

const initialBook = {
  books: [
    {
      id: crypto.randomUUID(),
      title: "The History of Islam",
      author: "Akbar Shah Khan",
    },
    {
      id: crypto.randomUUID(),
      title: "The Clear Quran",
      author: "Dr. Mustafa Khattab",
    },
    {
      id: crypto.randomUUID(),
      title: "Great Women Of Islam",
      author: "Muhammad Ahmad Gadanfar"
    }
  ],
};

const bookReducer = createSlice({
  name: "books",
  initialState: initialBook,
  reducers: {
    bookList: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    editBook: (state, action) => {
      const { id, title, author } = action.payload;
      const eBook = state.books.find((b) => b.id === id);
      if (eBook) {
        ((eBook.id = id), (eBook.title = title), (eBook.author = author));
      }
    },
    deleteBook: (state, action) => {
      const delBook = action.payload;
      state.books = state.books.filter((book) => book.id !== delBook);
    },
  },
});

export const { bookList, addBook, editBook, deleteBook } = bookReducer.actions;
export default bookReducer.reducer;
