/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { RootState } from '../../../app/store';
import University from '../types/University';

export const selectUniversities = (state: RootState): University[] =>
	state.universitiesUk.universities;
export const selectFiltered = (state: RootState): University[] =>
	state.universitiesUk.filtered;
export const selectFavoriteUniversity = (state: RootState): University[] =>
	state.universitiesUk.favoriteUniversity;
export const selectFilter = (state: RootState) =>
	state.universitiesUk.currentPage;
