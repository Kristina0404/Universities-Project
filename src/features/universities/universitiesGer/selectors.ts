import { RootState } from '../../../app/store';
import University from '../types/University';

export const selectUniversities = (state: RootState): University[] =>
	state.universitiesGer.universities;
export const selectFiltered = (state: RootState): University[] =>
	state.universitiesGer.filtered;
export const selectError = (state: RootState): string | undefined =>
	state.universitiesGer.error;
