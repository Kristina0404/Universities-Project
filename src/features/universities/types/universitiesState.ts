import University from './University';

export default interface UniversitiesState {
	universities: University[];
	filtered: University[];
	favoriteUniversity: University[];
	error?: string;
	currentPage: 1;
	itemsPerPages: 10;
}
