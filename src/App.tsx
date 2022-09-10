import React, { useEffect, FC } from "react";
import styles from "./App.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, login, logout } from "./features/userSlice";
import { auth } from "./firebase";

const App: FC = () => {
	// コンポーネントからReduxのstateを呼び出す
	const user = useSelector(selectUser);
	//loginとlogoutをdispachするためにuseDispachでdispachを作成
	// dispach（送り出す）
	const dispatch = useDispatch();

	//userに対して何らかの変化が起こった時に呼び出される(ex. login, logout, 変わった時など）
	//onAuthStateChangedの引数には、変更後のuser情報が入る引数名を設定
	useEffect(() => {
		const unSub = auth.onAuthStateChanged((authUser) => {
			//もしauthUser情報があれば...
			if (authUser) {
				dispatch(
					login({
						uid: authUser.uid,
						photoUrl: authUser.photoURL,
						displayName: authUser.displayName,
					})
				);
			} else {
				dispatch(logout());
			}
		});
		//cleanup関数
		return () => {
			unSub();
		};
	}, [dispatch]);
	return <div className="App"></div>;
};

export default App;
