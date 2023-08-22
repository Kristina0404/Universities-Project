import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './apiGer';
import UniversitiesState from '../types/universitiesState';
import University from '../types/University';

const initialState: UniversitiesState = {
	universities: [],
	filtered: [],
	favoriteUniversity: [],
	currentPage: 1,
	itemsPerPages: 10,
};
export const loadUniversitiesGer = createAsyncThunk(
	'universities/loadUniversitiesGer',
	() => api.getAll()
);
export const loadUniversityByWordGer = createAsyncThunk(
	'universities/loadUniversityByWordGer',
	(word: string) => api.getUniversityByWordGer(word)
);

export const universitiesSliceGer = createSlice({
	name: 'universities',
	initialState,
	reducers: {
		chooseFavoriteUniversity: (state, action: PayloadAction<University>) => {
			state.favoriteUniversity.push(action.payload);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loadUniversitiesGer.fulfilled, (state, action) => {
				state.universities = action.payload;
			})
			.addCase(loadUniversityByWordGer.fulfilled, (state, action) => {
				state.filtered = action.payload;
			});
	},
});

export default universitiesSliceGer.reducer;
