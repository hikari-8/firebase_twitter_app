import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		user: { uid: "", photoUrl: "", displayName: "" },
	},
	reducers: {
		//userのログイン情報をactionのpayloadに渡す
		// payload: "アクションの実行に必要な任意のデータ"
		login: (state, action) => {
			state.user = action.payload;
		},
		logout: (state) => {
			//ログアウトしたので、初期化しておく
			state.user = { uid: "", photoUrl: "", displayName: "" };
		},
	},
});

export const { login, logout } = userSlice.actions;

//reduxのstoreのstateをreactのコンポーネントから参照する時に、useSelectorを使い、
//その時に参照する関数を定義している（userのstateを返す）
//state."user"←は、store.tsのreducerの中身の名前と一致している必要がある
export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
