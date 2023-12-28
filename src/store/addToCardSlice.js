import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardProducts: [],
  showCheckOut: false,
  showSearchResults: false,
  searchKey: "",
  filterData: "",
};

const addToCardSlice = createSlice({
  name: "addToCardSlice",
  initialState,
  reducers: {
    addToCard: (state, action) => {
      state.cardProducts = [...state.cardProducts, action.payload.data];
    },
    removeFromCard: (state, action) => {
      state.cardProducts = state.cardProducts.filter(
        (item) => item.id !== action.payload
      );
    },
    toggleCheckOut: (state, action) => {
      state.showCheckOut = action.payload;
    },
    toggleSearchResult: (state, action) => {
      state.showSearchResults = action.payload;
    },
    setSearchKey: (state, action) => {
      state.searchKey = action.payload;
    },
    filterByCategory: (state, action) => {
      state.filterData = action.payload;
    }
  },
});

export const { addToCard, removeFromCard, toggleCheckOut, toggleSearchResult, setSearchKey, filterByCategory } =
  addToCardSlice.actions;

export default addToCardSlice.reducer;
