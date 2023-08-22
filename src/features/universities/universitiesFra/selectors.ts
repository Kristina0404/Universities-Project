/* eslint-disable import/no-unresolved */
import { RootState } from '../../../app/store';
import University from '../types/University';

export const selectUniversities = (state: RootState): University[] =>
	state.universitiesFra.universities;
export const selectFiltered = (state: RootState): University[] =>
	state.universitiesFra.filtered;
