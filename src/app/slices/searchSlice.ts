import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  searchTerm: string;
}

const initialState: State = {
  searchTerm: "",
};

const searchSlice = createSlice({
  name: "searchTerm",
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
