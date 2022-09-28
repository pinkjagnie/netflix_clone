import axios from "axios";
import {configureStore, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
// import { API_KEY, TMDB_BASE_URL } from "../utils/constans";

const initialState = {
  movies: [],
  genresLoaded: false,
  genres: []
};

export const getGenres = createAsyncThunk("netflix/genres", async() => {
  const {data: {genres}} = await axios.get(('https://api.themoviedb.org/3/genre/movie/list?api_key=7cbd10fe456150398827b57163ee308a'));
  // console.log(data);
  // console.log(API_KEY)
  return genres
});

const NetflixSlice = createSlice({
  name: "Netflix",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.genresLoaded = true;
    })
  }
});

export const store = configureStore({
  reducer: {
    netlix: NetflixSlice.reducer
  }
});