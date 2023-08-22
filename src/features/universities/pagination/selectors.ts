/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { RootState } from '../../../app/store';

export const selectCurrentPage = (state: RootState) =>
	state.pagination.currentPage;
