import { configureStore } from "@reduxjs/toolkit";
import propertyReducer from "../fetaures/property/propertyCartSlice";

const store = configureStore({
  reducer: {
    propertyReducer: propertyReducer,
  },
});

export default store;
