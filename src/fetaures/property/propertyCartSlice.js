const { createSlice } = require("@reduxjs/toolkit");

const initialProperty = {
  property: [
  ],
};

export const propertyCartSlice = createSlice({
  name: "property",
  initialState: initialProperty,
  reducers: {
    addCartProperty: (state, action) => {
      state.property.push(action.payload);
    },
    deleteCartProperty: (state, action) => {
      const image = action.payload;
      state.property = state.property.filter((propert) => propert.image !== image);
    },
  },
});

export const { addCartProperty, deleteCartProperty } =
  propertyCartSlice.actions;
export default propertyCartSlice.reducer;
