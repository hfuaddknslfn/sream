// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDyqK7nWpkbdDuxmheKYjnsSTjj_PfdYAg",
  authDomain: "chatreact-aca32.firebaseapp.com",
  projectId: "chatreact-aca32",
  storageBucket: "chatreact-aca32.appspot.com",
  messagingSenderId: "458104934765",
  appId: "1:458104934765:web:871cc67ba1a6fe2396ca64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export { doc, deleteDoc, updateDoc };
export default app;
