import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './apiFra';
import UniversitiesState from '../types/universitiesState';
import University from '../types/University';

const initialState: UniversitiesState = {
	universities: [],
	filtered: [],
	favoriteUniversity: [],
	currentPage: 1,
	itemsPerPages: 10,
};
export const loadUniversitiesFra = createAsyncThunk(
	'universities/loadUniversitiesFra',
	() => api.getAll()
);
export const loadUniversityByWordFra = createAsyncThunk(
	'universities/loadUniversityByWordFra',
	(word: string) => api.getUniversityByWordFra(word)
);
export const universitiesSliceFra = createSlice({
	name: 'universities',
	initialState,
	reducers: {
		chooseFavoriteUniversity: (state, action: PayloadAction<University>) => {
			state.favoriteUniversity.push(action.payload);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loadUniversitiesFra.fulfilled, (state, action) => {
				state.universities = action.payload;
			})
			.addCase(loadUniversityByWordFra.fulfilled, (state, action) => {
				state.filtered = action.payload;
			});
	},
});

export default universitiesSliceFra.reducer;
