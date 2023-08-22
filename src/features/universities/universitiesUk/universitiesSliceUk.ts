/* eslint-disable @typescript-eslint/no-shadow */
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './apiUk';
import UniversitiesState from '../types/universitiesState';
import University from '../types/University';

const initialState: UniversitiesState = {
	universities: [],
	filtered: [],
	favoriteUniversity: [],
	currentPage: 1,
	itemsPerPages: 10,
};
export const loadUniversitiesUk = createAsyncThunk(
	'universities/loadUniversitiesUk',
	() => api.getAll()
);
export const loadUniversityByWordUk = createAsyncThunk(
	'universities/loadUniversityByWordUk',
	(word: string) => api.getUniversityByWordUk(word)
);

export const universitiesSliceUk = createSlice({
	name: 'universities',
	initialState,
	reducers: {
		chooseFavoriteUniversity: (state, action: PayloadAction<University>) => {
			state.favoriteUniversity.push(action.payload);
		},
		toggle: (state, actions: PayloadAction<University>) => {
			const university = state.favoriteUniversity.find(
				(university) => university.name === actions.payload.name
			);
			if (university) {
				university.isFavorite = !university.isFavorite;
			}
		},

		removeFavoriteUniversity: (state, actions: PayloadAction<University>) => {
			state.favoriteUniversity = state.favoriteUniversity.filter(
				(university) => university.name !== actions.payload.name
			);
		},
		setPage: (state, action) => {
			state.currentPage = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loadUniversitiesUk.fulfilled, (state, action) => {
				state.universities = action.payload;
			})
			.addCase(loadUniversityByWordUk.fulfilled, (state, action) => {
				state.filtered = action.payload;
			});
	},
});

export default universitiesSliceUk.reducer;
export const { chooseFavoriteUniversity, toggle, removeFavoriteUniversity } =
	universitiesSliceUk.actions;
