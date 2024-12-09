import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface AppState {
	isToggleMenu: boolean;
}

const initialState: AppState = {
	isToggleMenu: true,
};

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		toggleMenu: (state, action: PayloadAction<boolean>) => {
			state.isToggleMenu = action.payload;
		},
	},
});

export const { toggleMenu } = appSlice.actions;

export const appReducer = appSlice.reducer;
