// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore } from ' firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBDg1TxDY7asCA1EuRnKqqEPWUKzKpWfOI",
  authDomain: "fir-doc-7436f.firebaseapp.com",
  projectId: "fir-doc-7436f",
  storageBucket: "fir-doc-7436f.appspot.com",
  messagingSenderId: "325841503197",
  appId: "1:325841503197:web:a7b7f508d8f156e3572c34",
  measurementId: "G-NTM39Y7L8N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app)
