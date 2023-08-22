/* eslint-disable @typescript-eslint/no-use-before-define */
import universitiesGerReducer from '../features/universities/universitiesGer/universitiesSliceGer';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import universitiesFraReducer from '../features/universities/universitiesFra/universitiesSliceFra';
import universitiesUkReducer from '../features/universities/universitiesUk/universitiesSliceUk';
import paginationReducer from '../features/universities/pagination/paginationSlice';

export const store = configureStore({
	reducer: {
		universitiesGer: universitiesGerReducer,
		universitiesFra: universitiesFraReducer,
		universitiesUk: universitiesUkReducer,
		pagination: paginationReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
