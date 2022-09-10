import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

//firebaseのコンフィギュレーション
const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
	authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

//アプリをイニシャライズする
const firebaseApp = firebase.initializeApp(firebaseConfig);

//他のコンポーネントでも利用できるようにエクスポートする
export const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

//今回はgoogleの認証機能なので
export const provider = new firebase.auth.GoogleAuthProvider();
