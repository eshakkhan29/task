import { createSlice } from "@reduxjs/toolkit";

const initialPopup = {
  popup: [],
};

export const popupSlice = createSlice({
  name: "popup",
  initialState: initialPopup,
  reducers: {
    addPopupData: (state, action) => {
      state.popup = [];
      state.popup.push(action.payload);
    },
  },
});

export const { addPopupData } = popupSlice.actions;
export default popupSlice.reducer;
