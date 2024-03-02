import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/storage";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCTg7rVv1XnHtOinW14-s0cmyynBM-i6Rw",
  authDomain: "disneyplus-clone-410fd.firebaseapp.com",
  projectId: "disneyplus-clone-410fd",
  storageBucket: "disneyplus-clone-410fd.appspot.com",
  messagingSenderId: "381791180514",
  appId: "1:381791180514:web:9b05e3c6a9f5ef0c8830bb",
  measurementId: "G-SHQQ0W01HB",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
var provider = new firebase.auth.GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
