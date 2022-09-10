import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";

export const store = configureStore({
	reducer: {
		//features/userSliceで定義したものと同じ名前である必要がある
		user: userReducer,
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
