// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCnI0fBy7TaQQ7vDTBFsgBDRVvLAulfW2w",
    authDomain: "challenge-c43ae.firebaseapp.com",
    projectId: "challenge-c43ae",
    storageBucket: "challenge-c43ae.appspot.com",
    messagingSenderId: "327007192422",
    appId: "1:327007192422:web:8cd9fca73e4b40580cb4a7",
    measurementId: "G-5FPP2EKDND"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };