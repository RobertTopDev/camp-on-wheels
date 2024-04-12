import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { URL } from "../../services/apiService";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (page = 1, thunkAPI) => {
    try {
      const res = await axios.get(`${URL}?page=${page}&limit=12`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAllCars = createAsyncThunk(
  "cars/fetchAllCars",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`${URL}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
