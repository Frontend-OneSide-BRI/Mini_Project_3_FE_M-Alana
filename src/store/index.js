import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL, apiKey, imageURL } from "../utils/constants";
import axios from "axios";

const initialState = {
    movies: [],
    genresLoaded: false,
    genres: [],
};

export const getGenres = createAsyncThunk(
    "DeMovies/Genres",
    async () => {
        const {data} = await axios.get(`${baseURL}/genre/movie/list?api_key=${apiKey}&language=en-US`);
        console.log(data);
        // return data;
    };
);

const DeMoviesSlice = createSlice({
    name: "DeMovies",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getGenres.fulfilled, (state, action) => {
            state.genres = action.payload;
            state.genresLoaded = true;
        });
    },
});

export const store = configureStore({
    reducer: {
        DeMovies: DeMoviesSlice.reducer,
    }
})