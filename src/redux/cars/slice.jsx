import { createSlice } from "@reduxjs/toolkit";
import { fetchCars, fetchAllCars } from "./operations";

const initialState = {
  cars: {
    items: [],
    favorites: [],
    isLoading: false,
    error: null,
  },
  filter: {
    location: "",
    equipment: "",
    type: "",
  },
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setLocation(state, action) {
      state.filter.location = action.payload;
    },
    setEquipment(state, action) {
      state.filter.equipment = action.payload;
    },
    setType(state, action) {
      state.filter.type = action.payload;
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
      })
      .addCase(fetchAllCars.pending, (state) => {
        state.cars.isLoading = true;
      })
      .addCase(fetchAllCars.fulfilled, (state, action) => {
        state.cars.isLoading = false;
        state.cars.error = null;
        state.cars.items = action.payload;
      })
      .addCase(fetchAllCars.rejected, (state, action) => {
        state.cars.isLoading = false;
        state.cars.error = action.payload;
      });
  },
});

export const carsReducer = carsSlice.reducer;
export const { setLocation, setEquipment, setType } = carsSlice.actions;
