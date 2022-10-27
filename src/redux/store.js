import { configureStore } from "@reduxjs/toolkit";
import propertyReducer from "./slice/propertyCartSlice";

const store = configureStore({
  reducer: {
    propertyReducer: propertyReducer,
  },
});

export default store;
