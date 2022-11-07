import { configureStore } from "@reduxjs/toolkit";
import propertyReducer from "./slice/propertyCartSlice";
import popupReducer from "./slice/PopupSlice";

const store = configureStore({
  reducer: {
    propertyReducer: propertyReducer,
    popupReducer: popupReducer,
  },
});

export default store;
