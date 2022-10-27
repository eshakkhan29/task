const { createSlice } = require("@reduxjs/toolkit");

const initialProperty = {
  books: [
  ],
};

export const booksSlice = createSlice({
  name: "books",
  initialState: initialProperty,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      const image = action.payload;
      state.books = state.books.filter((book) => book.image !== image);
    },
  },
});

export const { addBook, deleteBook } =
  booksSlice.actions;
export default booksSlice.reducer;
