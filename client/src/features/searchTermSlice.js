import { createSlice } from "@reduxjs/toolkit";

const searchTermSlice = createSlice({
  name: "searchTerm",
  initialState: "",
  reducers: {
    clearSearchTerm: (state) => "",
    addSearchTerm: (state, action) => action.payload,
  },
});

export const { addSearchTerm, clearSearchTerm } = searchTermSlice.actions;
export default searchTermSlice.reducer;
