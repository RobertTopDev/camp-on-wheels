import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

const initialState = {
  cars: {
    items: [],
    favorites: [],
    isLoading: false,
    error: null,
  },
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setBrandFilter(state, action) {
      state.filter.brand = action.payload;
    },
    setPriceFilter(state, action) {
      state.filter.price = action.payload;
    },
    setMileageRangeFilter(state, action) {
      state.filter.mileageRange = action.payload;
    },
    toggleFavorite(state, action) {
      state.cars.favorites = [...state.cars.favorites, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.cars.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.cars.isLoading = false;
        state.cars.error = null;
        const newItems = action.payload.map((item) => ({
          ...item,
          favorite: false,
        }));
        state.cars.items = [...state.cars.items, ...newItems];
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.cars.isLoading = false;
        state.cars.error = action.payload;
      });
  },
});

export const carsReducer = carsSlice.reducer;
export const {
  setBrandFilter,
  setPriceFilter,
  setMileageRangeFilter,
  toggleFavorite,
} = carsSlice.actions;
